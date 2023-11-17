
import '../assets/styles/buttonStyle.css'
import { motion } from 'framer-motion'


function Button({ classN, ...props }) {

    return <motion.button
        className={`style-btn ${classN}`}
        {...props}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}

    />
}


export { Button }