import '../assets/styles/inputs.css'
import { useState } from 'react';
function Input({label,placeholder,value,text,setText}) {
    
    // const [text,setText] = useState(value ? value : '') ;
    // const [text,setText] = useState('') ;
    

    function handleSetText(e) {
        setText(e.target.value)
    }

    return(

        <label className="style-label">
            {label}
            
            <input 
                value={text}
                type="text" 
                placeholder={placeholder}
                onChange={handleSetText}
            />


        </label>


    )

}

export {Input}