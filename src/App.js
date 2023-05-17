import React, { useState } from "react";


function App(){
    const [users, setusers] = useState([]);
    const [newuser,setNewUser] = useState('');


    function handleDeleteUser(index){
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setusers(updatedUsers);
};

function handleAddUser(){
    if (newuser.trim() !== ''){
        setusers([...users, newuser]);
        setNewUser('');
    }
};

return (
    <div className="App">
        <h2>Add User'S</h2>
        <ul>
            {users.map((user,index) => (
                <li key={index}>
                    {user}{''}
                    <button className="Delete-btn" onClick={()=> handleDeleteUser(index)}>Delete</button>
                </li>
            ))} 
        </ul>
        <input type="text" value={newuser} onChange={(event)=>setNewUser(event.target.value)} placeholder="Add new user" />
        <button className="Add-btn" onClick={handleAddUser}>Add</button>
    </div>
    );
            }

            export default App;
