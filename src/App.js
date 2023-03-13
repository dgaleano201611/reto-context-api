import './App.css';
import { ContextProvider } from './store/Context';
import TotalVotes from './components/TotalVotes';
import Candidatos from './components/Candidatos';
import TypeVotes from './components/TypeVotes';



function App() {

  const candidatosArr = [
    "candidato1",
    "candidato2",
    "candidato3",
    "candidato4",

  ]
  return (
    <div className="App">
      <ContextProvider>
        <header className='App-header'>
          <TotalVotes />
          {candidatosArr.map((candidato) => {
            return (<Candidatos key={candidato}name={candidato} />)
          })}
          <TypeVotes />
        </header>
      </ContextProvider>
    </div>
  );
}

export default App;
