function Register() {
  return (
    <form className="form-card">
      <p className="eyebrow">Account</p>
      <h2>Create account</h2>
      <label>
        Name
        <input type="text" placeholder="Your name" />
      </label>
      <label>
        Email
        <input type="email" placeholder="you@example.com" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Choose a password" />
      </label>
      <button type="button">Register</button>
    </form>
  );
}

export default Register;
