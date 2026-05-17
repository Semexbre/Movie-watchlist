function Login() {
  return (
    <form className="form-card">
      <p className="eyebrow">Account</p>
      <h2>Login</h2>
      <label>
        Email
        <input type="email" placeholder="you@example.com" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Your password" />
      </label>
      <button type="button">Login</button>
    </form>
  );
}

export default Login;
