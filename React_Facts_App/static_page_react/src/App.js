import './App.css';

const logo = require('./logo192.png');
function reactGists(){
  return(
      <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
  )
}
function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="" width="40px"/>
        <h1>ReactFacts</h1>
        <nav>React Course - Project 1</nav>
      </header>
      <main>
        <h2>
          Fun facts about React
        </h2>
        {reactGists()}
      </main>
    </div>
  );
}

export default App;
