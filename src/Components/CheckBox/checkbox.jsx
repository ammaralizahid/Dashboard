import React from 'react'
import { Form} from 'react-bootstrap'
import style from './checkbox.module.css'
export default function CheckBox({label}) {
  return (
<>

<Form className={style.validated}>
      <Form.Check className={style.txt+ ' ' + style.checkBox}
        type="checkbox"
        label={label}
      />
    </Form>

      
</>
    )
}
