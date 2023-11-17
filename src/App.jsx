import './assets/styles/App.css'
import { InfoForm, ContactForm, EducationForm, WorkForm, SkillForm } from './components/forms'
import { Carrousel, Button, Preview } from './components'
import { useState, useEffect, useRef } from 'react'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import generatePDF, { Resolution } from 'react-to-pdf'
import { IconZoomIn, IconZoomOut, IconFileInvoice, IconArrowBackUp } from '@tabler/icons-react'
function App() {
  const [index, setIndex] = useState(0);
  const [infoValue, setInfoValue] = useState({ firstName: '', lastName: '', professionalTitle: '', profile: '' });
  const [contactValue, setContactValue] = useState({ website: '', email: '', location: '', phone: '' });
  const [educationValue, setEducationValue] = useState([{ degree: '', university: '', from: '', to: '' }]);
  const [workValue, setWorkValue] = useState([{ title: '', company: '', from: '', to: '', description: '' }]);
  const [skillValue, setSkillValue] = useState([]);

  const [indexEducation, setIndexEducation] = useState(0);
  const [indexWork, setIndexWork] = useState(0);
  const [indexSkill, setIndexSkill] = useState(skillValue.length);

  const getTargetElement = () => document.querySelector('.containerCv');

  const options = {
    method: 'open',
    resolution: Resolution.HIGH,
    filename: 'cv.pdf',
    page: {
      format: 'A4',
      orientation: 'portrait',
    },
    canvas: {
      mimeType: 'image/jpeg',
      qualityRatio: 1
    },


  };

  const [seeBtnCv, setSeeBtnCv] = useState(false);
  const [test, setTest] = useState(true);


  const transformWrapperRef = useRef(null);
  const containerRef = useRef(null);


  useEffect(() => {

    // let prevWidth = transformWrapperRef.current.instance.wrapperComponent.clientWidth;
    let prevWidth = window.innerWidth;
    const handleResize = () => {

      const containerWidth = containerRef.current.clientWidth;
      const containerBtns = document.querySelector('.containerBtns');
      const editorCv = document.querySelector('.cvEditor');
      const displayEditor = window.getComputedStyle(editorCv).display;

      if (transformWrapperRef.current) {

        transformWrapperRef.current.centerView();

        if (window.innerWidth < prevWidth) {
          transformWrapperRef.current.zoomOut(0.1);

        } else if (window.innerWidth > prevWidth) {
          transformWrapperRef.current.zoomIn(0.1);
        }

        prevWidth = window.innerWidth

        if (containerWidth <= 689 && containerWidth > 557) {

          transformWrapperRef.current.zoomOut(0.1);
        } else {

          transformWrapperRef.current.resetTransform();
        }

        if (window.innerWidth <= 1013 && displayEditor === 'flex') {

          transformWrapperRef.current.setTransform(240, 400, 0, 200)

          setTimeout(() => {
            transformWrapperRef.current.instance.wrapperComponent.style.display = 'none';
            containerBtns.style.display = 'none';
          }, 400);

          setSeeBtnCv(true);

        } else {

          if (displayEditor === 'none') {
            setSeeBtnCv(true);

          } else {
            setSeeBtnCv(false);
          }

          transformWrapperRef.current.instance.wrapperComponent.style.display = 'block';
          containerBtns.style.display = 'flex';
          editorCv.style.transition = 'none';
        }
      }


    }
    function debounce(func, wait) {
      let timeout;

      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    // Uso
    window.addEventListener('resize', debounce(() => {
      handleResize();
    }, 100));

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [seeBtnCv])

  function seePreview() {

    const editorCv = document.querySelector('.cvEditor');
    const containerBtns = document.querySelector('.containerBtns');
    const btnSwitch = document.querySelector('.btnCv');
    let wrapperWidth = transformWrapperRef.current.instance.wrapperComponent.clientWidth;
    let wrapperHeight = transformWrapperRef.current.instance.wrapperComponent.clientHeight;
    const displayWrapper = window.getComputedStyle(transformWrapperRef.current.instance.wrapperComponent).display;

    if (test) {

      editorCv.style.transform = 'scale(0.5)';
      editorCv.style.display = 'none';
      btnSwitch.classList.add('switchBtn');

      transformWrapperRef.current.instance.wrapperComponent.style.display = 'block';
      containerBtns.style.display = 'flex';
      transformWrapperRef.current.resetTransform();

      setTest(false);

    } else {

      if (displayWrapper === 'block' && window.innerWidth >= 1013) {

        editorCv.style.display = 'flex';
        setSeeBtnCv(false)

      } else {

        transformWrapperRef.current.setTransform(wrapperWidth / 2, wrapperHeight / 2, 0, 150)

        setTimeout(() => {
          transformWrapperRef.current.instance.wrapperComponent.style.display = 'none';
          containerBtns.style.display = 'none';
          editorCv.style.display = 'flex';
        }, 200);
      }

      btnSwitch.classList.remove('switchBtn');
      setTest(true);

    }


  }


  return (
    <>
      <Carrousel classVariant='cvEditor' index={index} setIndex={setIndex} length={5} saveCvFn={() => generatePDF(getTargetElement, options)} transformWrapperRef={transformWrapperRef}>
        {index == 0 && <InfoForm key={'info'} value={infoValue} setValue={setInfoValue} />}
        {index == 1 && <ContactForm key={'contact'} value={contactValue} setValue={setContactValue} />}
        {index == 2 && <EducationForm key={'education'} value={educationValue} setValue={setEducationValue} index={indexEducation} setIndex={setIndexEducation} length={educationValue.length} />}
        {index == 3 && <WorkForm key={'work'} value={workValue} setValue={setWorkValue} index={indexWork} setIndex={setIndexWork} length={workValue.length} />}
        {index == 4 && <SkillForm key={'skill'} value={skillValue} setValue={setSkillValue} index={indexSkill} setIndex={setIndexSkill} />}
      </Carrousel>
      {
        seeBtnCv &&

        <Button
          children={test ? <IconFileInvoice size={24} color='#A0A0A0' /> : <IconArrowBackUp size={24} color='#A0A0A0' />}
          onClick={seePreview}
          classN={'btnCv'}
        />
      }
      <TransformWrapper ref={transformWrapperRef} initialScale={0.82} doubleClick={{ mode: 'reset' }} wheel={{ step: 1 }} minScale={0.3}>
        {({ zoomIn, zoomOut }) => (

          <div ref={containerRef} className='containerComponent'>
            <div className='containerBtns'>
              <Button children={<IconZoomIn size={24} color='#A0A0A0' className='zoomIn' />} onClick={() => zoomIn()} />
              <Button children={<IconZoomOut size={24} color='#A0A0A0' />} onClick={() => zoomOut()} />
            </div>

            <TransformComponent wrapperClass='previewCvContainer' contentClass='containerCv' >
              <Preview value={{ info: infoValue, contact: contactValue, education: educationValue, work: workValue, skill: skillValue }} />
            </TransformComponent>

          </div>
        )}

      </TransformWrapper>
    </>
  )
}

export default App
