import React from 'react'
import Details from './details/Details'
import Info from './Info'
import Vehicles from './vehicles/Vehicles'
import Media from './media/Media'
import { useSelector } from 'react-redux'

function Content() {
    const tab=useSelector(state=>state.reports.tab)
    if(tab=='info') return <Info/>
 if(tab=='details') return <Details/>
 if(tab=='vehicles') return <Vehicles/>
 if(tab=='media') return <Media/>
}

export default Content