import React from 'react'
import {Button} from 'react-bootstrap'
import style from './button.module.css'
import googleIcon from '../../assets/svg/google.svg'
export default function button({label,google,variant,onClick}) {
  return (
<>
<Button className={variant ? style.btnVariant : style.btn} onClick={onClick}>
  {
    google ?
    <img src={googleIcon} alt='google' className='me-2'></img>:""
  }
{label}
</Button>
</>  )
}
