import React from 'react'
import { Col, Row } from 'react-bootstrap'
import style from './navbar.module.css'
import Search from '../Search/search'
import BellIcon from '../../assets/svg/bell.svg'
import ImageUpload from '../ImageUpload/imageUpload'
export default function Navbar() {
  return (
<Row className={style.navbar}>
    <Col lg="3" xl="2" md="4" sm="3" xs="3" className='d-flex align-items-center'>
    <div className={style.loader}>
</div>
<span className='d-none d-md-block'>Ammar Ali</span>
    </Col>
    <Col lg="3" xl="3" md="4" sm="5" xs="5">
        <Search placeholder={'Search anything'}/>
    </Col>
    <Col className='d-flex justify-content-end gap-3 pe-sm-5 pe-xs-5'>
        <img src={BellIcon} alt='notifications' height='20' className='mt-4'></img>

        <ImageUpload profile/>
    </Col>
</Row>
    )
}
