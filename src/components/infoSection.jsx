// import {Button} from './components/buttons.jsx'
import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import { useState } from 'react';
// import nextSvg from '../assets/images/next.svg'
// import previusSvg from '../assets/images/previus.svg'
// import trashSvg from '../assets/images/trash.svg'
// import addSvg from '../assets/images/add.svg'
import '../assets/styles/sections.css'
function Info({text,setText}) {
    return(

        <>

            <h2>Info</h2>

            <div className='containerName'>
                <Input 
                    label={'First Name'}
                    placeholder={'Masashi'}
                    value={text}
                    setText={setText}
                />
                <Input 
                    label={'Last Name'}
                    placeholder={'Kishimoto'}
                />
            </div>
            
            <Input 
                    label={'Professional Title'}
                    placeholder={'Developer'}
            />
            <label className='containerTextArea'>
                Profile
            <textarea
                
                className='style-textArea'
            />

            </label>          

            
        </>

    )

}

export {Info}