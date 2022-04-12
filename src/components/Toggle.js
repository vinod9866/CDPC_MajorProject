import { useState } from 'react'
import './Toggle.css'

export const Toggle = (props)=>{


    const [checked,setChecked] = useState(false)

    return <div><input type="checkbox" id="switch" onChange={(e)=>props.onChange(e.target.checked)}/><label className='label' for="switch">Toggle</label></div>
}