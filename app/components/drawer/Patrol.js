import { useSelector } from "react-redux"

function Patrol() {
    const account =useSelector(state=>state.account.account)

  return (
    <div className="flex items-center gap-x-4">
        <div>الدورية:{account.nida}</div>
        
        <div>وقت استلام الدورية:  {new Date(account.date).toLocaleTimeString()}
        </div>
        
    </div>
  )
}

export default Patrol