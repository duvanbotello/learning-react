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
