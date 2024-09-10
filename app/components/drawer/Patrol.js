import { useSelector } from "react-redux"

function Patrol() {
    const account =useSelector(state=>state.account.account)

  return (
   <div className="flex items-center gap-x-3">
    <svg className="w-5 h-5 fill-gray-500" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M96,24a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,24Zm152,88a8,8,0,0,1-8,8h-8v80a16,16,0,0,1-16,16H192a16,16,0,0,1-16-16v-8H80v8a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V120H16a8,8,0,0,1,0-16H27.36L54.75,56.06A16,16,0,0,1,68.64,48H187.36a16,16,0,0,1,13.89,8.06L228.64,104H240A8,8,0,0,1,248,112ZM88,144a8,8,0,0,0-8-8H56a8,8,0,0,0,0,16H80A8,8,0,0,0,88,144Zm120,0a8,8,0,0,0-8-8H176a8,8,0,0,0,0,16h24A8,8,0,0,0,208,144Zm2.21-40L187.36,64H68.64L45.79,104Z"></path></svg>
     <div className="flex items-center gap-x-4">
        <div>الدورية
          :
          {' '}
          {account.nida}</div>
        
        <div>وقت استلام الدورية
          :
          {' '}
            {new Date(account.date).toLocaleTimeString()}
        </div>
        
    </div>
   </div>
  )
}

export default Patrol