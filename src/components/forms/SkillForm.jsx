import { Input } from '../Input.jsx'
import { Button } from '../Button.jsx'
import '../../assets/styles/sections.css'
import { AnimatePresence, motion } from 'framer-motion'
import { deleteItem } from '../../utils/deleteItem.js'
import { addNewForm } from '../../utils'
import { IconTrash, IconPlus } from '@tabler/icons-react'
// import {  domAnimation } from 'framer-motion'
function SkillForm({ value, setValue, setIndex }) {

    return (

        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}>
            <div className='titleAndBtn'>
                <h2>Skills</h2>
                <Button children={<IconPlus size={24} color='#A0A0A0' />} onClick={() => addNewForm(value, setValue, 'skill')} />
            </div>
            <div className='containerSkills'>
                <AnimatePresence mode='popLayout'>
                    {
                        value.map((skillValue, idx) => {
                            return (
                                <motion.div
                                    key={skillValue.id}
                                    layout
                                    className='style-skill'
                                    initial={{ opacity: 0, scale: 0.3 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ type: 'spring', duration: 0.3 }}
                                >
                                    <Input
                                        value={value}
                                        setValue={setValue}
                                        placeholder={'Skill'}
                                        name={`skillName${idx}`}
                                        formName={'skill'}
                                        arrayValue={skillValue}
                                        index={idx}
                                    />
                                    <Button children={<IconTrash size={24} color='#A0A0A0' />} onClick={() => deleteItem(value, setValue, idx, setIndex)} />

                                </motion.div>
                            )
                        })
                    }
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export { SkillForm }
