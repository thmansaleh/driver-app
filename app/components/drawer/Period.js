import { useSelector } from "react-redux"

function Period() {
    const account =useSelector(state=>state.account.account)

  return (
     <div>الفترة:{account.period}</div>
   
  )
}

export default Period