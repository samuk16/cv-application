import '../assets/styles/previewCv.css'
// import { Website, Email, Location, Phone } from '../assets/images'
import { IconWorldWww, IconAt, IconMap, IconPhone } from '@tabler/icons-react'
import { motion } from 'framer-motion'
function Preview({ value }) {
    return (

        <motion.div className='cvPreview' initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}>
            <header>
                <h1>{`${value.info.firstName} ${value.info.lastName}`}</h1>
                <h3 className='subTitle'>{value.info.professionalTitle}</h3>
            </header>

            <div className='mainSection'>

                <div className='containerSides'>

                    <div className='sideLeft'>

                        <section className='contact'>
                            <h3>Contact</h3>
                            <div className='items'>

                                <div className='itemContact'>
                                    <IconWorldWww size={16} className='iconPreview' /> <p>{value.contact.website}</p>
                                </div>
                                <div className='itemContact'>
                                    <IconAt size={16} className='iconPreview' /> <p>{value.contact.email}</p>
                                </div>
                                <div className='itemContact'>
                                    <IconMap size={16} className='iconPreview' /> <p>{value.contact.location}</p>
                                </div>
                                <div className='itemContact'>
                                    <IconPhone size={16} className='iconPreview' /> <p>{value.contact.phone}</p>
                                </div>

                            </div>

                        </section>


                        <div className='education'>

                            <h3>Education</h3>

                            {
                                value.education.map((item, idx) => (
                                    <div className='itemEdu' key={`${idx}-education`}>
                                        <h5>{item.degree}</h5>
                                        <p>{item.university}</p>
                                        <p>{item.from} - {item.to}</p>
                                    </div>
                                ))

                            }

                        </div>

                        <div className='skill'>
                            <h3>Skills</h3>
                            <div className='items'>

                                <ul>
                                    {
                                        value.skill.map((item) => (
                                            <li key={item.id}>{item.skillName}</li>
                                        ))
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>

                    <div className='sideRight'>

                        <div className='profile'>
                            <h3>Profile</h3>

                            <p>{value.info.profile}</p>
                        </div>

                        <div className='experience'>
                            <h3>Experience</h3>

                            {
                                value.work.map((item, idx) => (
                                    <div className='itemExp' key={`${idx}-experience`}>
                                        <h5>{item.title} | {item.from} - {item.to}</h5>
                                        <h5>{item.company}</h5>
                                        <p>{item.description}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

        </motion.div>

    )
}

export { Preview }