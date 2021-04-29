<h1 align="center">Welcome to learning-react 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: Libre" src="https://img.shields.io/badge/License-Libre-yellow.svg" />
  </a>
</p>

> Aprendiendo conceptos basicos de react.
  - Como instalar React
  - Componentes en react
  - Ciclo de vida de los componentes en react
  - Listas y Keys

## Como instalar React

```sh
  npx create-react-app my-app
  cd my-app
  npm start
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
## Ciclo de vida de los componentes en react

  * Website Doc: https://es.reactjs.org/docs/state-and-lifecycle.html
  ```javascript
    import { Component, useState, useEffect } from "react";

  //#################################################
  //          METODOS DE CICLO DE VIDA CON CLASES
  //#################################################
  class App2 extends Component {
      constructor(props) {
          super(props)
          console.log("Constructor")
          this.state = {
              name: "Duvan",
          };
      }

      componentDidMount() {
          //cuando se quiera ejecutar algo al montar un elemento.
          // para funciones --> useEffect(() => {}, [])
          console.log("did mount")
      }

      componentDidUpdate() {
          //solo se ejecuta cuando actualizamos el componente
          // para funciones --> useEffect(() => {})
          console.log("did update")
      }

      shouldComponentUpdate() {
          //permite si un componente se actualiza, o no se actualiza
          //true --> permite actualizarce
          //false --> no permite actualizar
          return true;
      }

      componentWillUnmount() {
          //se ejecuta cuando desmontamos un componente
          // para funciones --> useEffect(() => { return () => { /* */}})
      }

      getSnapshotBeforeUpdate(prevProps, prevState) {
          //trae el estado anterior del componente
          console.log(prevProps, prevState)
      }

      render() {
          return (
              <div>
                  <input value={this.state.name} onChange={({ target: { value } }) => this.setState({ name: value })} />
              </div>
          );
      }

  }


  //#################################################
  //          METODOS DE CICLO DE VIDA CON FUNCION
  //#################################################

  export const App2_funcional = () => {
      const [name, setName] = useState("");

      /** componentDidMount */
      useEffect(() => {
          console.log(10)
      }, [])

      /**componentDidUpdate */
      useEffect(() => {
          console.log(11)
      })

      /** componentDidMount */
      useEffect(() => {
          console.log("name cambio")
      }, [name])

      return (
          <div>
              <input value={name} onChange={({ target: { value } }) => setName(value)} />
          </div>
      );


  }

  export default App2_funcional;
  ```


## Listas y Keys

  * Website Doc: https://es.reactjs.org/docs/lists-and-keys.html
  ```javascript
    import { CuseState } from "react";

    const jsonData = [
        {
            key: "1",
            name: "Juan",
        }, {
            key: "2",
            name: "Duvan",
        }, {
            key: "3",
            name: "Jose",
        }, {
            key: "4",
            name: "cristancho",
        },
    ]

    const App3 = () => {
        return (
            <div>
                {jsonData.map((value, index) => (
                    <div key={value.key}>
                        <p>
                            {value.name}
                        </p>
                    </div>
                ))}
            </div>
        );
    }

    export default App3;
  ```

## Author

👤 **Duvan Botello**

* Website: https://www.duvanbotello.co/
* Github: [@duvanbotello](https://github.com/duvanbotello)
* LinkedIn: [@https:\/\/www.linkedin.com\/in\/duvan-botello-ba402819b\/](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/duvan-botello-ba402819b\/)
