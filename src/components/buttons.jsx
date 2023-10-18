
import '../assets/styles/buttonStyle.css'


function Button({svg,handleClick}) {
    
    return(

        <button className='style-btn' onClick={handleClick}>
            <img src={svg}  alt="next svg"/>
        </button>

    )

}


export {Button}