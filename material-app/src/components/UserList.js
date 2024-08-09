import React from "react";
import UserCard from './UserCard';

const UserList = () =>{
    const users=[
        {id:1,name:'Juan Perez',email:'jperez@gmail.com',avatar:'https://via.placeholder.com/140'},
        {id:20,name:'Alberto Juarez',email:'betojuarez@gmail.com',avatar:'https://via.placeholder.com/140'},
        {id:14,name:'Amelia Quezada',email:'amequez@gmail.com',avatar:'https://via.placeholder.com/140'},
        {id:5,name:'Luz Uribe',email:'luciur@gmail.com',avatar:'https://via.placeholder.com/140'}
    ];

    return (
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {users.map(user=>(
                <UserCard key={user.id} user={user}/>
            ))}
        </div>
    );
};

export default UserList;