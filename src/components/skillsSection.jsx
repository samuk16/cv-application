import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import addSvg from '../assets/images/add.svg'
import saveSvg from '../assets/images/download.svg'
import deleteSvg from '../assets/images/trash.svg'
import { Button } from './buttons.jsx'
import '../assets/styles/sections.css'

function Skill({data,onClick,set,index,setIndex}) {
    

    return (

        <>
            <div className='titleAndBtn'>
                <h2>Education</h2>
                <Button svg={addSvg} handleClick={onClick} section={'skill'} />
            </div>

            
            {
                data.map((skill,idx) => (
                    <div className='style-skill' key={idx}>
                        <Input 
                            value={skill.skillName} 
                            handleSetText={set}
                            placeholder={'Skill'}
                            name={'skill'}
                            fieldName={'skillName'}
                            id={idx}
                        
                        />
                        <Button svg={deleteSvg} />
                    </div>
                ))
            }

        
        </>
    )
}

export {Skill}
