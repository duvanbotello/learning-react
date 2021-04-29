<h1 align="center">Welcome to learning-react 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: Libre" src="https://img.shields.io/badge/License-Libre-yellow.svg" />
  </a>
</p>

> Aprendiendo como funciona react. Ciclo de vida, estados, renderizado, componentes

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Componentes en react

  * Website Doc: https://es.reactjs.org/docs/components-and-props.html
  
```javascript
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

```

## Author

👤 **Duvan Botello**

* Website: https://www.duvanbotello.co/
* Github: [@duvanbotello](https://github.com/duvanbotello)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/duvan-botello-ba402819b\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/duvan-botello-ba402819b\/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_