"use client"
import { Provider } from "react-redux"
import store from "./store/store"
import Content from "./Content"

function ProviderPage({children}) {
  return <Provider store={store}>
    {/* <div className="flex">
      <Tabs/>
      <div className="flex-1 ">    {children}
      </div>
    </div> */}
<Content children={children}/>

</Provider>

}

export default ProviderPage