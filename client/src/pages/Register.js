import { useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      history.push("/login");
    }
  }

  return (
    <div className="container" style={{ textAlign: "center", width: "30%"}}>
      <div className="hedder">
        <h4 className="m-4">Sign Up</h4>
      </div>
      <form onSubmit={registerUser}>
		<label>Name: </label><br/>
        <input
          className="form-control m-2"
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <br />
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
        />
        <br />
        <input className="btn btn-primary m-3" type="submit" value="Register" />
      </form>
      <a href="/login" style={{ textDecoration: "none" }}>
        Sign in
      </a>
    </div>
  );
}

export default App;
