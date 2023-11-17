import { Button } from './Button.jsx'
import { AnimatePresence, motion } from 'framer-motion'
import { addNewForm } from '../utils'
import { IconChevronLeft, IconChevronRight, IconDownload, IconPlus } from '@tabler/icons-react'
import '../assets/styles/carrousel.css'



function Carrousel({ index, setIndex, length, saveCvFn, children, addLimit, value, setValue, classVariant, variant }) {

    function handleNextClick() {
        if (!(index >= length - 1)) {
            setIndex(index + 1)
        }
    }

    function handlePrevClick() {
        if (!index == 0) {
            setIndex(index - 1)
        }
    }

    function saveCv() {
        const targeCv = document.querySelector('.containerCv');
        targeCv.style.transform = 'scale(1)';
        saveCvFn()
    }

    return (
        <motion.div
            className={classVariant}
            initial={{ opacity: 0, scale: 0.5, }}
            // animate={{ opacity: 1, scale: 1, maxWidth: index === 4 ? '233px' : '388px', }}
            animate={{ opacity: 1, scale: 1, width: index === 4 ? '233px' : '388px', }}
        >
            <AnimatePresence mode='wait'>
                {children}
            </AnimatePresence>
            <div className='style-controls'>
                {
                    length !== 1 &&
                    <Button
                        disabled={index == 0}
                        children={<IconChevronLeft size={24} color='#A0A0A0' />}
                        onClick={handlePrevClick}
                    />
                }



                {
                    length !== 1 &&

                    <div className='containerCircles'>
                        {
                            Array.from({ length: length }).map((_, idx) =>
                                <div
                                    className={`style-circle  ${idx == index ? 'active' : ''}`}
                                    key={`${idx}nashe`}
                                />
                            )
                        }
                    </div>
                }
                {
                    length !== 1 && (index == (length - 1) && !addLimit ?
                        <Button
                            children={<IconDownload size={24} color='#A0A0A0' />}
                            onClick={saveCv}
                        /> :
                        <Button
                            disabled={index == (length - 1)}
                            children={<IconChevronRight size={24} color='#A0A0A0' />}
                            onClick={handleNextClick}
                        />
                    )
                }



                {
                    addLimit && length - 1 < addLimit && <Button
                        classN={"addBtn"}
                        children={<IconPlus size={24} color='#A0A0A0' />}
                        onClick={() => addNewForm(value, setValue, variant)}
                    />
                }

            </div>
        </motion.div>


    )

}

export { Carrousel }