import React from 'react'
import { useState } from 'react'
import { Form} from 'react-bootstrap'
import ImageIcon from '../../assets/svg/person.svg'
import ProfileIcon from '../../assets/svg/profile.svg'
import style from './imageUpload.module.css'
export default function ImageUpload({label,profile}) {
let[image,setImage]=useState(null)

const handleFileChange = (event) => {
    setImage(event.target.files[0])
  }

  
  return (
<>

<Form.Group controlId="formFile" className={style.avatar}>
        <Form.Label>{label}</Form.Label>
        <label htmlFor="fileInput">
            {
                image ? 
<img
  src={URL.createObjectURL(image)}
  alt="Selected file preview"
  height={`${profile ? `35` : `100`}`}
  width={`${profile ? `35` : `100`}`}
 className={style.img}
  onMouseOver={(event) => event.target.style.height = event.target.style.width = profile ? `80px` :`150px`}
  onMouseOut={(event) => event.target.style.height = event.target.style.width = profile ? `60px` :`100px`}
/>:
          <img src={profile? ProfileIcon: ImageIcon}   height={`${profile ? `35` : `100`}`}  width={`${profile ? `35` : `100`}`}
          alt="profile" style={{cursor:'pointer'}} className='mb-2'/>
            }
        </label>
        <Form.Control type="file" id="fileInput" className={`d-none ${style.notShowChooseFile}`} onChange={handleFileChange}/>
      </Form.Group>
    
      
</>
    )
}
