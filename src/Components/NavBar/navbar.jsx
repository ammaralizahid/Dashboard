import React from 'react'
import { Col, Row } from 'react-bootstrap'
import style from './navbar.module.css'
import Search from '../Search/search'
import BellIcon from '../../assets/svg/bell.svg'
import ImageUpload from '../ImageUpload/imageUpload'
export default function Navbar() {
  return (
<Row className={style.navbar}>
    <Col lg="2" xl="2" md="2" sm="2" xs="2" className='mt-3 d-flex'>
    <div className={style.loader}>
</div>
    </Col>
    <Col lg="3" xl="3" md="4" sm="4" xs="6">
        <Search placeholder={'Search anything'}/>
    </Col>
    <Col lg="5" xl="5" md="4" sm="4" xs="1">
    </Col>
    <Col lg="1" xl="1" md="1" sm="1" xs="1">
        <img src={BellIcon} alt='notifications' height='20' className='mt-4'></img>
    </Col>
    <Col lg="1" xl="1" md="1" sm="1" xs="1">

        <ImageUpload profile/>
    </Col>
</Row>
    )
}
