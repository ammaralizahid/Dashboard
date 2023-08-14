import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import style from './sideBar.module.css';
import SideBarData from './sideBarData.js';
import { Link } from 'react-router-dom';

export default function SideBar() {
  const [hover, setHover] = useState({
    value: false,
    index: null
  });

  const [activeNav, setActiveNav] = useState({
    value: false,
    index: null
  });


  return (
    <>
    <div className={style.mainDiv}>
      <Row className={`flex-column text-center py-3 ${style.sidebar}`}>
        {SideBarData.map((i, index) => (
          <Col
            xs="12"
            key={index}
            className={`d-flex justify-content-center py-3 ${style.sideBarContent}`}
            onMouseOver={() => setHover({ value: true, index: index })}
            onMouseOut={() => setHover({ value: false, index: null })}
            onClick={() => setActiveNav({ value: !activeNav.value, index: index })}
          >
            <Link to={i.path} className={style.sideBarContent}>
            
            {hover.value && hover.index === index ? i.iconHover : i.icon}
            {i.title} 
            {/* {i.subNav?.length > 0 &&
              i.subNav.map((subNavItem, subIndex) => (
                <>{subNavItem.title}</>
              ))} */}
            {/* <div
              className={`${style.sideBarContent}`}
              onClick={() => setActiveNav({ value: !activeNav.value, index: index })}
            > */}
              {activeNav.value && activeNav.index === index ? (
                <>{i.subNavArrowDown}</>
              ) : (
                <>{i.subNavArrowUp}</>
              )}
            {/* </div> */}
            </Link>
          </Col>
        ))}
      </Row>
    </div>
    </>
  );
}
