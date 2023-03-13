
import { useVotesContext } from '../store/Context';
import './TypeVotes.css'

const TypeVotes = () => {
  const { votes } = useVotesContext();
  const entries = Object.entries(votes);
  console.log(entries);

  return(
    <div className="gap">
    {entries.map((entrie)=>{
        return <div className="individulaEntrie" key={entrie}>{entrie}</div>;
      })}
   </div>
  )
}

export default TypeVotes;