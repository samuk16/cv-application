
import '../assets/styles/buttonStyle.css'


function Button({svg,handleClick,section}) {
    
    let sectionName = section;
    function handleOnClick() {
        handleClick(sectionName)
    }

    return(

        <button className='style-btn' onClick={handleOnClick}>
            <img src={svg}  alt="svg"/>
        </button>

    )

}


export {Button}