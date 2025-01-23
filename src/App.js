import logo from './logo.svg';
import './App.css';

function App() {
  // Access the environment variable
  const message = process.env.REACT_APP_BACKEND_URL;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit 111 <code>src/App.js</code> and save to reload.
        </p>
        <p>{message}</p> {/* Display the environment variable */}
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

export default App;
