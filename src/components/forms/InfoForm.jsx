import { Input } from '../Input.jsx'
import '../../assets/styles/sections.css'
import { motion } from 'framer-motion'
import { setValueFormatted } from '../../utils'
function InfoForm({ value, setValue }) {
    return (

        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }} >

            <h2>Info</h2>

            <div className='containerName'>
                <Input
                    label={'First Name'}
                    placeholder={'Masashi'}
                    name={'firstName'}
                    value={value}
                    setValue={setValue}
                    formName={'info'}
                />
                <Input
                    label={'Last Name'}
                    placeholder={'Kishimoto'}
                    name={'lastName'}
                    value={value}
                    setValue={setValue}
                    formName={'info'}
                />
            </div>

            <Input
                label={'Professional Title'}
                placeholder={'Developer'}
                name={'professionalTitle'}
                value={value}
                setValue={setValue}
                formName={'info'}
            />
            <label className='containerTextArea'>
                Profile
                <motion.textarea
                    whileTap={{ scale: 0.9 }}
                    className='style-textArea'
                    name={'info'}
                    placeholder={'nashe'}
                    value={value.profile}
                    onChange={e => setValueFormatted(e, value, 'info', 'profile', setValue)}
                />

            </label>
        </motion.div>
    )
}

export { InfoForm }