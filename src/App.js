
import { useEffect, useState } from "react";

function BodyForm(props) {

  const handleEmailChange = (event) => {
    props.setEmail(event.target.value);
  }

  const handlePasswordChange = ({ target: { value } }) => {
    props.setPassword(value)
  }

  return (
    <div>
      <label>
        Correo
        <input type="email" value={props.email} onChange={handleEmailChange} />
      </label>
      <label>
        Contrasena
        <input type="password" value={props.password} onChange={handlePasswordChange} />
      </label>
    </div>
  );
}

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIslogged] = useState(false)

  const handleFormSubmit = (event) => {
    console.log(email + password)
    event.preventDefault();
  }

  const handleLoginClik = (event) => {
    setIslogged(true)
  }


  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>Iniciar Sesion</h2>
        <BodyForm email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
        <button onClick={handleLoginClik}>
          Enter
          </button>
        {isLogged ? <h2>Logeado exitosamente</h2> : undefined}
        {isLogged && <h2>Logeado exitosamente 2</h2> }
      </form>
    </div>
  );
}

export default App;
