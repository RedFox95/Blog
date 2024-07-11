import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function register(e) {
        e.preventDefault();
        try {
            await fetch('http://localhost:4000/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (error) {
            console.error('Error registering:', error);
        }
    }

    return(
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input>
            <input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            <button>Register</button>
        </form>
    );
};