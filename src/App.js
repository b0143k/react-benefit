
import './App.css';
import UserCard from './UserCard/UserCard';
import { Users } from './UserCard/User';

function App() {
    return (
        <div className="App">
            {
                Users.map((user, index) => {
                    return (
                        <UserCard user={user} key={index} />
                    );
                })
            }
        </div>
    );
}

export default App;
