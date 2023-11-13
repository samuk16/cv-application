import { Input, Button, Carrousel } from '../'
import '../../assets/styles/sections.css'
import { motion } from 'framer-motion'
import { deleteItem } from '../../utils/deleteItem.js'
import { IconTrash } from '@tabler/icons-react'

function EducationForm({ value, setValue, index, setIndex, length }) {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}>
            <Carrousel classVariant='carrouselForm' index={index} setIndex={setIndex} length={length} value={value} setValue={setValue} addLimit={1} variant={'education'}>
                {
                    value.map((edValue, idx) => (
                        idx === index &&
                        <motion.div key={`${idx}-education`} initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}>

                            <div className='titleAndBtn'>
                                <h2>Education</h2>
                                {length > 1 &&
                                    <Button
                                        children={<IconTrash size={24} color='#A0A0A0' />}
                                        onClick={() => deleteItem(value, setValue, index, setIndex)}
                                    />

                                }

                            </div>

                            <div className='style-twoInputs'>
                                <Input
                                    label={'Degree'}
                                    placeholder={'Bachelor of Science'}
                                    name={'degree'}
                                    value={value}
                                    setValue={setValue}
                                    index={idx}
                                    formName={'education'}
                                    arrayValue={edValue}


                                />
                                <Input
                                    label={'University'}
                                    placeholder={'Stanford University'}
                                    name={'university'}
                                    value={value}
                                    setValue={setValue}
                                    index={idx}
                                    formName={'education'}
                                    arrayValue={edValue}
                                />
                            </div>

                            <div className='style-twoInputs'>
                                <Input
                                    label={'From'}
                                    placeholder={'2019'}
                                    name={'from'}
                                    value={value}
                                    setValue={setValue}
                                    type='number'
                                    index={idx}
                                    formName={'education'}
                                    arrayValue={edValue}

                                />
                                <Input
                                    label={'To'}
                                    placeholder={'2023'}
                                    name={'to'}
                                    value={value}
                                    setValue={setValue}
                                    type='number'
                                    index={idx}
                                    formName={'education'}
                                    arrayValue={edValue}

                                />
                            </div>
                        </motion.div>
                    ))
                }

            </Carrousel>
        </motion.div>
    )
}

export { EducationForm }
