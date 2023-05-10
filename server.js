import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

// Da die Variable __dirname nicht unter ESM existiert, müssen wir sie selbst erzeugen.
// Sie gibt uns den absoluten Pfad zum aktuellen Projektverzeichnis an.
// Das brauchen wir weiter unten zum Ausliefern von Dateien.
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors());

const API_KEY = process.env.API_KEY;

app.post('/completions', async (req, res) => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message}],
            max_tokens: 200,
        })
    }
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        res.send(data)
    } catch (error) {
        console.error(error)
    }
})

// Um das Frontend über das Backend auszuliefern, benötigen wir nur die folgenden zwei Zeilen.
// Die erste Zeile stellt mit express.static alle(!) Dateien in einem Verzeichnis zur Verfügung (ähnlich res.sendFile).
// Beispiel: GET /static/js/main.abcd1234.js liefert die Datei ./files/frontend/static/js/main.abcd1234.js zurück.
// Wird eine Seite (siehe React Router) im Frontend angefragt, sorgt die zweite Zeile dafür, dass die Anfrage immer auf index.html landet.
// -------------------------
app.use("/", express.static("./dist"));
app.get("/*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
// -------------------------


app.listen(PORT, () => console.log("Your server is running on PORT " + PORT))

