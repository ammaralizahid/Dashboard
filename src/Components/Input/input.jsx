import React from 'react'
import { InputGroup ,Form} from 'react-bootstrap'
import style from './input.module.css'
export default function input({label,placeholder,required, pattern}) {
  return (
<>

<Form.Label className={style.label}>{label}</Form.Label>
<InputGroup className={style.border}>
        <Form.Control className={style.input}
          placeholder={placeholder}
          required={required}
          pattern={pattern}
          isInvalid={!!pattern}
          isValid={!pattern}
        />
      </InputGroup>
      
</>
    )
}
