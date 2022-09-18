import React, { useEffect, useState } from "react";

function CounterState(){

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Houveram: ${count} cliques`;
    })

    return (
        <React.Fragment>
            <h2>Componente Funcional</h2>
            <p>Houveram {count}</p>
            <button onClick={() => setCount(count + 1)}> Aumentar cliques </button>
        </React.Fragment>
    )

} 

export default CounterState