import '../assets/styles/inputs.css'
import { motion } from 'framer-motion';
import { setValueFormatted } from '../utils';
function Input({ label, name, value, setValue, index, formName, arrayValue, ...props }) {
    function fillValue() {

        if (formName === 'skill') return arrayValue.skillName
        return value instanceof Array ? arrayValue[name] : value[name]
    }
    return (

        <label className="style-label">
            {label}
            <motion.input
                whileTap={{ scale: 0.9 }}
                {...props}
                value={fillValue()}
                name={name}
                onChange={(e) => setValueFormatted(e, value, formName, name, setValue, index, arrayValue)}
            />
        </label>
    )
}

export { Input }