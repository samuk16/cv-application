import { Input, Button, Carrousel } from '../'
import { motion } from 'framer-motion'
import '../../assets/styles/sections.css'
import { deleteItem } from '../../utils/deleteItem.js'
import { IconTrash } from '@tabler/icons-react'
import { setValueFormatted } from '../../utils'


function WorkForm({ value, setValue, index, setIndex, length }) {

    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}>
            <Carrousel classVariant='carrouselForm' index={index} setIndex={setIndex} length={length} value={value} setValue={setValue} addLimit={1} variant={'work'}>
                {
                    value.map((workValue, idx) => (

                        idx === index &&

                        <motion.div key={`${idx}-work`} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}>
                            <div className='titleAndBtn'>
                                <h2>Work</h2>
                                {length > 1 &&
                                    <Button
                                        children={<IconTrash size={24} color='#A0A0A0' />}
                                        onClick={() => deleteItem(value, setValue, index, setIndex)}
                                    />
                                }
                            </div>

                            <div className='style-twoInputs'>
                                <Input
                                    label={'Title'}
                                    placeholder={'Web Developer'}
                                    name={'title'}
                                    value={value}
                                    setValue={setValue}
                                    index={index}
                                    formName={'work'}
                                    arrayValue={workValue}
                                />
                                <Input
                                    label={'Company'}
                                    placeholder={'Amazon'}
                                    name={'company'}
                                    value={value}
                                    setValue={setValue}
                                    index={index}
                                    formName={'work'}
                                    arrayValue={workValue}
                                />
                            </div>

                            <div className='style-twoInputs'>
                                <Input
                                    label={'From'}
                                    placeholder={'2015'}
                                    name={'from'}
                                    value={value}
                                    setValue={setValue}
                                    type='number'
                                    index={index}
                                    formName={'work'}
                                    arrayValue={workValue}

                                />
                                <Input
                                    label={'To'}
                                    placeholder={'2020'}
                                    name={'to'}
                                    value={value}
                                    setValue={setValue}
                                    type='number'
                                    index={index}
                                    formName={'work'}
                                    arrayValue={workValue}

                                />
                            </div>

                            <label className='containerTextArea'>
                                Description
                                <motion.textarea
                                    whileTap={{ scale: 0.9 }}
                                    className='style-textArea'
                                    name={'work'}
                                    placeholder={'Web developer responsible for enhancing Amazons online user experience through front-end and back-end development. Collaborated on innovative projects to improve website.'}
                                    value={value[index].description}
                                    onChange={e => setValueFormatted(e, value, 'work', 'description', setValue, index)}

                                />

                            </label>
                        </motion.div>
                    ))
                }

            </Carrousel>
        </motion.div>

    )
}

export { WorkForm }