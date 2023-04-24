import logo from '../logo.svg';
import './UserCard.css'

function UserCard() {
    return (
        <div className='user-card'>
            <img src={logo} className="App-logo" alt="logo" />
            <h3>UI/UX Designer</h3>
            <h1>Aryan Shirani</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button>
                See More
            </button>
        </div>

    );
}

export default UserCard;
