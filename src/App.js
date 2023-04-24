import logo from './logo.svg';
import './App.css';
import UserCard from './UserCard/UserCard';

function App() {
    return (
        <div className="App">
            <header className="App-header">

                <UserCard />
                <UserCard />
                <UserCard />

            </header>
        </div>
    );
}

export default App;
