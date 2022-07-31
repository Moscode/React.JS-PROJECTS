import './App.css';
const logo = require('./logo192.png');

function Header(){
  return(
      <header>
        <img src={logo} alt="" width="40px"/>
        <h1>ReactFacts</h1>
        <nav>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
  )
}
function Main(){
  return(
    <div>
      <h2> Fun facts about React </h2>
      <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on GitHub</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function Footer(){
  return(
    <small>@copyright Moscode</small>
  )
}
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
