import { useSelector } from 'react-redux'

function Drivers() {
    const account =useSelector(state=>state.account.account)

  return (
  <div className=' flex items-center gap-x-3'>
    <svg className='w-5 h-5 fill-gray-500' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="200px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
      <div className=''>
        <div>
            
            
          السائق
          :
          {' '}
          {account.mainDriverName}
        </div>
       {account? <div>
            المرافق
            :
            {' '}
            {account.extraDriverName}
        </div>:null}
    </div>
  </div>
  )
}

export default Drivers