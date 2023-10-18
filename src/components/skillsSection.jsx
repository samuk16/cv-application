import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import addSvg from '../assets/images/add.svg'
import saveSvg from '../assets/images/download.svg'
import deleteSvg from '../assets/images/trash.svg'
import { Button } from './buttons.jsx'
import '../assets/styles/sections.css'

function Skill() {
    

    return (

        <>

            <div className='titleAndBtn'>
                <h2>Education</h2>
                <Button svg={addSvg}/>
            </div>

            <div className='style-skill'>
            <Input value={'Java'}/>
            <Button 
                svg={deleteSvg}
            />
            </div>
            <div className='style-skill'>
            <Input value={'Javascript'}/>
            <Button 
                svg={deleteSvg}
            />
            </div>
            <div className='style-skill'>
            <Input value={'Figma'}/>
            <Button 
                svg={deleteSvg}
            />
            </div>
            <div className='style-skill'>
            <Input value={'C++'}/>
            <Button 
                svg={deleteSvg}
            />
            </div>
            <div className='style-skill'>
            <Input value={'Python'}/>
            <Button 
                svg={deleteSvg}
            />
            </div>
            <div className='style-skill'>
            <Input value={'React'}/>
            <Button 
                svg={deleteSvg}
            />
            </div>          

            
        </>

    )
}

export {Skill}
