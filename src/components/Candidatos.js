import { useVotesContext } from "../store/Context"

const Candidatos = ({name}) => {
  const {votes, setVotes} = useVotesContext();
  
  const handleVote = (e) => {
    setVotes({
      ...votes,
      [e.target.value] : votes[e.target.value] += 1,
      totalVotes: votes.totalVotes += 1,
    })
  }
  return (
    <>
      <h1>Vota por {name}</h1>
      <button value={name} onClick={handleVote}>Vota aquí!</button>
    </>
  )
  
}
export default Candidatos;