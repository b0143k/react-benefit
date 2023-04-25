import './UserCard.css'

function UserCard(props) {
    console.log(props);
    const { user } = props;
    return (
        <div className='user-card'>
            <img src={user.imageSrc} alt="logo" />
            <h3>{user.designation}</h3>
            <h1>{user.name}</h1>
            <p>{user.description}</p>
            <button>
                See More
            </button>
        </div>

    );
}

export default UserCard;
