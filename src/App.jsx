
function App() {

  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: "hello how are you?"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json();
      console.log("data" + {data})
    } catch (error) {
      console.error(error)
    }
  }
  return (
    
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>BLUGH</li>
        </ul>
        <nav>Made by Marcel</nav>
      </section>
      <section className="main">
        <h1>LZ Search</h1>
        <ul className="feed">
          
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">
            We`ve trained a model called ChatGPT which interacts in a conversational way.
            The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
          </p>
        </div>
      </section>
     
    </div>
   
  )
}

export default App
