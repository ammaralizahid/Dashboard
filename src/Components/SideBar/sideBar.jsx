import React, { useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import style from './sideBar.module.css'
import SideBarData from './sideBarData.js'
export default function SideBar() {
const [hover,setHover]=useState({
  value:false,
  index:null
})
const [activeNav,setActiveNav]=useState({
  value:false,
  index:null
})
console.log(">>>>>>.",activeNav);
  return (
<div className={style.mainDiv}>

<Row className={`flex-column text-center py-3 ${style.sidebar}`}>
{SideBarData.map((i,index)=>(
  <Col xs="12" className={`d-flex justify-content-center gap-2 py-3  ${style.sideBarContent}`} onMouseOver={() => setHover({value:true,index})} onMouseOut={() => setHover(false)} onClick={()=>setActiveNav({value:true,index:index})}>
{
  hover.value && hover.index===index?
 <> {i.iconHover}</>:
<>   {i.icon}</> 
}
    {i.title}
    <div>
      {
        activeNav.value && hover.index===index?
        <>{i.subNav}</>:
        ""
      }
    </div>
</Col>

))}
</Row> 
</div>


)
}
