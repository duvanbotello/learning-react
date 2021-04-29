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

