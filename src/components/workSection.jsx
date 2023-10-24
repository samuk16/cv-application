import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import { Button } from './buttons.jsx'
import addSvg from '../assets/images/add.svg'
import '../assets/styles/sections.css'

function FormWork({value,set,index}) {
    return (

        <form>
                <h2>Work</h2>

                <div className='style-twoInputs'>
                    <Input 
                        label={'Title'}
                        placeholder={'Web Developer'}
                        name={'work'}
                        value={value.work[index].title}
                        handleSetText={set}
                        fieldName={'title'}
                        id={index}
                    />
                    <Input 
                        label={'Company'}
                        placeholder={'Amazon'}
                        name={'work'}
                        value={value.work[index].company}
                        handleSetText={set}
                        fieldName={'company'}
                        id={index}

                    />
                </div>

                <div className='style-twoInputs'>
                    <Input 
                        label={'From'}
                        placeholder={'2015'}
                        name={'work'}
                        value={value.work[index].from}
                        handleSetText={set}
                        fieldName={'from'}
                        type='number'
                        id={index}

                    />
                    <Input 
                        label={'To'}
                        placeholder={'2020'}
                        name={'work'}
                        value={value.work[index].to}
                        handleSetText={set}
                        fieldName={'to'}
                        type='number'
                        id={index}

                    />
                </div>

                <label className='containerTextArea'>
                    Description
                <textarea

                    className='style-textArea'
                    name={'work'} 
                    placeholder={'Web developer responsible for enhancing Amazons online user experience through front-end and back-end development. Collaborated on innovative projects to improve website.'}
                    value={value.work[index].description}
                    onChange={e => set('work','description',e.target.value,index)}

                />

                </label>
            </form>

    )
}

function Work({value,set,index,setIndex,data,onClick}) {
    

    return (

        <>

            <FormWork
                value={value}
                set={set}
                index={index}
                

            />

            {
                data.length > 1 ? <Controls svgRight={addSvg} index={index} setIndex={setIndex} data={data} /> : <Button svg={addSvg} handleClick={onClick} section={'work'}/>
            }
        
            
        </>

    )
}

export {Work}