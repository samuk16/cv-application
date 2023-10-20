import {Input} from './inputs.jsx'
import '../assets/styles/sections.css'


function Info({value,set}) {
    return(

        <form>

            <h2>Info</h2>

            <div className='containerName'>
                <Input 
                    label={'First Name'}
                    placeholder={'Masashi'}
                    name={'info'}
                    value={value.info.firstName}
                    handleSetText={set}
                    fieldName={'firstName'}
                />
                <Input 
                    label={'Last Name'}
                    placeholder={'Kishimoto'}
                    name={'info'}
                    value={value.info.lastName}
                    handleSetText={set}
                    fieldName={'lastName'}
                />
            </div>
            
            <Input 
                    label={'Professional Title'}
                    placeholder={'Developer'}
                    name={'info'}
                    value={value.info.professionalTitle}
                    handleSetText={set}
                    fieldName={'professionalTitle'}
            />
            <label className='containerTextArea'>
                Profile
            <textarea
                
                className='style-textArea'
                name={'info'} 
                placeholder={'nashe'}
                value={value.info.profile}
                onChange={e => set('info','profile',e.target.value)}
            />

            </label>          

            
        </form>

    )

}

export {Info}