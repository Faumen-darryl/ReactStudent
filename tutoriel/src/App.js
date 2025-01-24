const title = "bonjour tout"
const showtitle = false
const todos= [
  'darryl',
  'faumen',
  'savent'
]

function App() {

  
  return  <><Pes color="blue">ma femme</Pes><div>
    {showtitle ? <h1 style={{ color: 'red', backgroundColor: 'blue' }}>{title}</h1> : <p>darryl</p>}

    <p>
      Lorem Ipsum est une personne passionnée, toujours curieuse et avide de nouvelles expériences. Avec un esprit créatif et une approche analytique, Lorem excelle à résoudre des défis complexes tout en trouvant des moyens innovants de progresser.
      Enthousiaste par nature, elle/il se consacre à cultiver ses compétences dans divers domaines, allant de la technologie à l'art, en passant par le développement personnel.

      En dehors de ses projets professionnels, Lorem adore explorer de nouvelles cultures, partager des moments enrichissants avec les autres et se lancer dans des aventures qui sortent de l’ordinaire. Elle/Il croit fermement que chaque jour est une opportunité d'apprendre et de grandir.
    </p>
    <ol>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ol>
  </div></>
      
}

function Pes ({color, top}){
  return <h1 style={{color: color}}>bonsoir les gars{top}</h1>
}

export default App;
