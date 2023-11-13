import { Input } from '../Input.jsx'
import '../../assets/styles/sections.css'
import { motion } from 'framer-motion'
function ContactForm({ value, setValue }) {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}>
            <h2>Contact</h2>

            <Input
                label={'Website'}
                placeholder={'www.yuuji.com'}
                name={'website'}
                value={value}
                setValue={setValue}
                formName={'contact'}
            />
            <Input
                label={'Email'}
                placeholder={'yuuji@gmail.com'}
                name={'email'}
                value={value}
                setValue={setValue}
                formName={'contact'}
            />

            <div className='locationAndPhone style-twoInputs'>
                <Input
                    label={'Location'}
                    placeholder={'Los nashes 122'}
                    name={'location'}
                    value={value}
                    setValue={setValue}
                    formName={'contact'}
                />
                <Input
                    label={'Phone'}
                    placeholder={'555-555-555'}
                    name={'phone'}
                    value={value}
                    setValue={setValue}
                    type='tel'
                    formName={'contact'}
                />
            </div>
        </motion.div>
    )
}

export { ContactForm }