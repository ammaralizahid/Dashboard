import React from 'react'
import { InputGroup ,Form} from 'react-bootstrap'
import style from '../Search/search.module.css'
import SearchIcon from '../../assets/svg/search.svg'
export default function input({placeholder}) {
  return (
<>

<InputGroup className={style.inputGroup}>
    <img src={SearchIcon} alt='search' height='20'  className={style.searchIcon}></img>
        <Form.Control className={`${style.input}`}
          placeholder={placeholder}
        />
      </InputGroup>
</>
    )
}
