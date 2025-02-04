import { useState } from "react";
const Profile = () => {
    const [user, setUser] = useState({
        name: '',
        age: '',
        email: '',
        password: '',
    });
    return (
        <div>
            <h2>Login Form</h2>
            <br />
            <form action="">
                <input type="text"
                    value={user.name}
                    placeholder="Your Name"
                    onChange={(e) => setUser({
                        ...user,
                        name: e.target.value,
                    })}
                />
                <h6>Name:{user.name}</h6>
                <input type="number"
                    value={user.age}
                    placeholder="Your Age"
                    onChange={(e) => setUser({
                        ...user,
                        age: e.target.value,
                    })}
                />
                <h6>Age:{user.age}</h6>
                <input type="text"
                    value={user.email}
                    placeholder="Email"
                    onChange={(e) => setUser({
                        ...user,
                        email: e.target.value,
                    })}
                />
                <h6>Email:{user.email}</h6>
                <input type="text"
                    value={user.password}
                    placeholder="Passwrord"
                    onChange={(e) => setUser({
                        ...user,
                        password: e.target.value,
                    })}
                />
            </form>

        </div>
    )
}
export default Profile;