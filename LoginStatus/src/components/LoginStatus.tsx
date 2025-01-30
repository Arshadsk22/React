import './LoginStatus.css'
function LoginStatus() {
    const isLoggedIn = true;
    return (
        <div className="container">
            {
                isLoggedIn ? 'Welcome, User' : 'Please log in'
            }
        </div>
    );
}
export default LoginStatus;