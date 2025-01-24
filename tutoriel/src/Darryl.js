import { useState } from "react";

{/* Utilisation des useState function Darryl(){
    const [count, setcount] =useState(0)

    const increment = () => {
        setcount(count + 1)

    }

    return <>
        <p>notre compteur : {count}</p>
        <button onClick={increment}>incrémenter</button>
    </>
}*/}
function Darryl(){
    const [person, setPerson] =useState ({
        firstName : 'faumen',
        lastName: 'savent',
        age : 19
    })

    const increment = () => {
        setPerson({...person, age: person.age + 1})

    }

    return <>
        <p>Age de {person.firstName} est  : {person.age}</p>
        <button onClick={increment}>incrémenter</button>
    </>
}
export default Darryl;