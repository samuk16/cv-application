import {Button} from './buttons.jsx'
import previusSvg from '../assets/images/previus.svg'
import nextSvg from '../assets/images/next.svg'
import { dataComponents } from '../assets/data.js'
import '../assets/styles/controls.css'
import { useState } from 'react'

function Controls({svgRight = nextSvg,index,setIndex}) {
    
     

    function handleNextClick() {
        if (!(index >= dataComponents.length - 1)) {
            setIndex( index + 1)
        }
    }
    function handlePrevClick() {
        if (!index == 0) {
            setIndex( index - 1)
        }
    } 

    return(


        <div className='style-controls'>
            <Button 
                svg={previusSvg}
                handleClick={handlePrevClick}
            />
            <div className='containerCircles'>

                {
                    dataComponents.map((_,idx) => (

                        <div 
                            className={`style-circle  ${idx == index ? 'active' : ''}`}
                            key={idx}>
                        </div>
                    ))

                }
    
            </div>
            <Button 
                svg={svgRight}
                handleClick={handleNextClick}
            />
        </div>
    )

}

export {Controls}