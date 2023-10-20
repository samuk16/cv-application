import {Input} from './inputs.jsx'
// import { Controls } from './controls.jsx'

import '../assets/styles/sections.css'

function Contact({value,set}) {
    

    return (

        <form>

            <h2>Contact</h2>

            <Input 
                    label={'Website'}
                    placeholder={'www.yuuji.com'}
                    name={'contact'}
                    value={value.contact.website}
                    handleSetText={set}
                    fieldName={'website'}
            />
            <Input 
                    label={'Email'}
                    placeholder={'yuuji@gmail.com'}
                    name={'contact'}
                    value={value.contact.email}
                    handleSetText={set}
                    fieldName={'email'}
            />

            <div className='locationAndPhone style-twoInputs'>
                <Input 
                    label={'Location'}
                    placeholder={'Los nashes 122'}
                    name={'contact'}
                    value={value.contact.location}
                    handleSetText={set}
                    fieldName={'location'}
                />
                <Input 
                    label={'Phone'}
                    placeholder={'555-555-555'}
                    name={'contact'}
                    value={value.contact.phone}
                    handleSetText={set}
                    fieldName={'phone'}
                    type='tel'
                />
            </div>   

            
        </form>

    )
}

export {Contact}