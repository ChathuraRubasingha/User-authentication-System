import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      window.location.href = "/home";
    } else {
      alert("Please check your Email and password");
    }
  }

  return (
    <div className="container" style={{ textAlign: "center", width: "30%" }}>
      <div className="hedder">
        <h4 className="m-4">Sign In</h4>
      </div>
      <form onSubmit={loginUser}>
	  <label>Email: </label><br/>
        <input
          className="form-control m-2"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <br />
		<label>Password: </label><br/>
        <input
		className="form-control m-2"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input className="btn btn-primary m-3" type="submit" value="Login" />
      </form>
	  <a href="/register" style={{ textDecoration: "none" }}>
        Sign Up
      </a>
    </div>
  );
}

export default App;
