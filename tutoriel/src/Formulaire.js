const title = "bonjour les gens"
const style = {color : 'blue', backgroundColor: 'yellow'}
const par = true
const todos = [
    'darryl',
    'fred',
    'faumen'
]


function Form (){

    const handleClick = () =>{
        alert("vous avez cliquez")
    }

    return <>
    {par ? <h1 onClick={handleClick} id="title" className="title" style={style}>{title}</h1> : <h3>fred</h3>}
    <p>Lorem Ipsum est une personne passionnée, toujours curieuse et avide de nouvelles expériences. Avec un esprit créatif et une approche analytique, Lorem excelle à résoudre des défis complexes tout en trouvant des moyens innovants de progresser. Enthousiaste par nature, elle/il se consacre à cultiver ses compétences dans divers domaines, allant de la technologie à l'art, en passant par le développement personnel.

        En dehors de ses projets professionnels, Lorem adore explorer de nouvelles cultures, partager des moments enrichissants avec les autres et se lancer dans des aventures qui sortent de l’ordinaire. Elle/Il croit fermement que chaque jour est une opportunité d'apprendre et de grandir.</p>
        <ul>
            {todos.map(todo => (<li key={todo}>{todo}</li>))}
        </ul>
        <Fri/>
    </>
}

function Fri (){
    return <h1>Moi</h1>
}
export default Form;