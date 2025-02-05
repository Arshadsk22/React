import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    username: string;
    email: string;
    name:{
        firstname:string;
        lastname:string;
    }
}

function UserList() {
    const [users, setUsers] = useState<User[]>([]);

    const fetchUsers = async () => {
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="container">
            <h2>User List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name.firstname}</td>
                            <td>{user.name.lastname}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;