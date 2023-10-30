import '../assets/styles/previewCv.css'
import website from '../assets/images/website.svg'
import email from '../assets/images/email.svg'
import location from '../assets/images/location.svg'
import phone from '../assets/images/phone.svg'

function Preview({value}) {
    
    return(

        <div className='cvPreview'>
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
                                    <img src={website} alt="" /> <p>{value.contact.website}</p>
                                </div>
                                <div className='itemContact'>
                                    <img src={email} alt="" /> <p>{value.contact.email}</p>
                                </div>
                                <div className='itemContact'>
                                    <img src={location} alt="" /> <p>{value.contact.location}</p>
                                </div>
                                <div className='itemContact'>
                                    <img src={phone} alt="" /> <p>{value.contact.phone}</p>
                                </div>

                            </div>                            

                        </section>


                        <div className='education'>

                            <h3>Education</h3>
                            
                            {
                                value.education.map((item) => (
                                    <div className='itemEdu' key={item.id}>
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
                                value.work.map((item) => (
                                    <div className='itemExp' key={item.id}>
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

        </div>

    )
}

export {Preview}