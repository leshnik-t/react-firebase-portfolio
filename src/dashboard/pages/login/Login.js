import './login.css';
import { useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);

            const userCredentials = await login(email, password);
            if (userCredentials === undefined) throw Error(error);

            setError(null);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message.slice(10));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login">
            <header>
                <h1>Login</h1>
            </header>
            <main>
                <form onSubmit={(e) => handleLogin(e)}>
                    {loading && <p className="alert alert-warning" role="alert">Trying to login with your credentials!</p>}
                    {error && <p className="alert alert-danger"  role="alert">{error}</p>}
                    <div className="description">
                        <p>Please enter your email and password</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address:</label>
                        <input
                            autoFocus 
                            type="email"
                            placeholder="Enter your email" 
                            className="form-control" 
                            id="email" 
                            aria-required="true"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password"
                            className="form-control" 
                            id="password" 
                            aria-required="true"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        disabled={loading} 
                        type="submit" 
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
                <div className="text-center">
                    <Link to="/">Go back to homepage</Link>
                </div>
            </main>
        </div>
    )
}

export default Login;