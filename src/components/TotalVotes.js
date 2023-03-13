import { useVotesContext } from "../store/Context";

const TotalVotes = () => {

  const { votes } = useVotesContext();
  return (
    <>
      Total Votes: {votes.TotalVotes}
    </>

  )
}
export default TotalVotes;