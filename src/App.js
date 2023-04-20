import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Benefits of using react ...</p>
                <ol>
                    <li>Component based architecture</li>
                    <li>Virtual Dom for efficent updates</li>
                    <li>Rich ecosystem and community</li>
                    <li>cross-platform development </li>
                    <li>Strong community support:</li>
                </ol>
                <button> Get started ...</button>
            </header>
        </div>
    );
}

export default App;
