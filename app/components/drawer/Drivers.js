import { useSelector } from 'react-redux'

function Drivers() {
    const account =useSelector(state=>state.account.account)

  return (
    <div className='flex items-center gap-x-4'>
        <div>
            السائق:{account.name}
        </div>
        <div>
            المرافق:{account.name}
        </div>
    </div>
  )
}

export default Drivers