import {Input} from './inputs.jsx'
// import { Controls } from './controls.jsx'

import '../assets/styles/sections.css'

function Contact() {
    

    return (

        <>

            <h2>Contact</h2>

            <Input 
                    label={'Website'}
                    placeholder={'www.yuuji.com'}
            />
            <Input 
                    label={'Email'}
                    placeholder={'yuuji@gmail.com'}
            />

            <div className='locationAndPhone style-twoInputs'>
                <Input 
                    label={'Location'}
                    placeholder={'Los nashes 122'}
                />
                <Input 
                    label={'Phone'}
                    placeholder={'555-555-555'}
                />
            </div>   

            
        </>

    )
}

export {Contact}