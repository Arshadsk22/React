import { useState } from "react";
const Profile = () => {
    const [user, setUser] = useState({ name: '', age: '' });
    return (
        <div>
            <h2>Login Form</h2>
            <br />
            <form action="">
                <input type="text"
                    value={user.name}
                    placeholder="Your Name"
                    onChange={(e) => setUser({ name: e.target.value, age: user.age })}
                />
                <h6>Name:{user.name}</h6>
                <input type="number"
                    value={user.age}
                    placeholder="Your Age"
                    onChange={(e) => setUser({ age: e.target.value, name: user.name })}
                />
                <h6>Age:{user.age}</h6>
            </form>

        </div>
    )
}
export default Profile;