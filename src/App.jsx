
function App() {

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
        <h1>MarcelGPT</h1>
        <ul className="feed">
          
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input></input>
            <div id="submit">➢</div>
            <p className="info">
            We`ve trained a model called ChatGPT which interacts in a conversational way.
            The dialogue format makes it possible for ChatGPT to answer follow-up questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.
            </p>
          </div>
        </div>
      </section>
     
    </div>
   
  )
}

export default App
