import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import addSvg from '../assets/images/add.svg'
import '../assets/styles/sections.css'

function Work({value,set}) {
    

    return (

        <>
            <form>
                <h2>Work</h2>

                <div className='style-twoInputs'>
                    <Input 
                        label={'Title'}
                        placeholder={'Web Developer'}
                        name={'work'}
                        value={value.work.title}
                        handleSetText={set}
                        fieldName={'title'}

                    />
                    <Input 
                        label={'Company'}
                        placeholder={'Amazon'}
                        name={'work'}
                        value={value.work.company}
                        handleSetText={set}
                        fieldName={'company'}
                    />
                </div>

                <div className='style-twoInputs'>
                    <Input 
                        label={'From'}
                        placeholder={'2015'}
                        name={'work'}
                        value={value.work.from}
                        handleSetText={set}
                        fieldName={'from'}
                        type='number'
                    />
                    <Input 
                        label={'To'}
                        placeholder={'2020'}
                        name={'work'}
                        value={value.work.to}
                        handleSetText={set}
                        fieldName={'to'}
                        type='number'
                    />
                </div>

                <label className='containerTextArea'>
                    Description
                <textarea

                    className='style-textArea'
                    name={'work'} 
                    placeholder={'Web developer responsible for enhancing Amazons online user experience through front-end and back-end development. Collaborated on innovative projects to improve website.'}
                    value={value.work.description}
                    onChange={e => set('work','description',e.target.value)}
                />

                </label>
            </form>

            <Controls
                svgRight={addSvg}
            />                    
            
        </>

    )
}

export {Work}