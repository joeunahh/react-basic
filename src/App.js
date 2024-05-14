import logo from './logo.svg';
import './App.css';

function App() { //함수로 시작 
  return ( //JSX 코딩 시작 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>HTML 태그를 자바스크립트에서 바로 사용한다.</h1>
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

export default App;
