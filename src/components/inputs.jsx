import '../assets/styles/inputs.css'
import { useState } from 'react';
function Input({label,placeholder,name,value, handleSetText,fieldName}) {
    
    // const [text,setText] = useState('') ;
    // const [text,setText] = useState('') ;
    // let oldValue = text;
    // console.log(oldValue);
    // function handleSetText(e) {
    //     setText(e.target.value)
        
    // }
    // let currentValue = value ? value : text;
    console.log(value);

    // function test(e) {
    //     handleSetText(e.target.value)
    // }
    return(

        <label className="style-label">
            {label}
            
            <input 
                value={value}
                type="text"
                name={name} 
                placeholder={placeholder}
                onChange={e => handleSetText(name,fieldName,e.target.value)}
            />


        </label>


    )

}

export {Input}