import './App.css';
const logo = require('./logo192.png');

function Header(){
  return(
      <header className="header">
        <img src={logo} alt="" className="img-logo"/>
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
    <div className="main">
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
    <small className="footer">@copyright Moscode</small>
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
