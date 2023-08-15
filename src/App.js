import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function Dynamic_para(){
  let div = document.getElementById("container");
  let imgProfile = document.createElement("img");
  imgProfile.src = "../pictures/profilePic.png";
  div.appendChild(imgProfile);
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Dynamically adding a paragraph to HTML";
  div.appendChild(paragraph);
}

export default App;
