import React, { useState } from 'react'
import { Row,Col, Container } from 'react-bootstrap'
import style from './sideBar.module.css'
import SideBarData from './sideBarData.js'
export default function SideBar() {
const [hover,setHover]=useState(false)
  console.log(SideBarData.map((i)=>(
    i.title,
    i.icon
   ) )
    
    );

  return (
<div className={style.mainDiv}>

<Row className={`flex-column text-center py-3 ${style.sidebar}`}>
{SideBarData.map((i)=>(
  <Col xs="12" className={`py-3  ${style.sideBarContent}`} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
{
  hover?
 <> {i.iconHover}</>:
<>   {i.icon}</> 
}
    {i.title}
</Col>

))}
</Row> 
</div>


)
}
