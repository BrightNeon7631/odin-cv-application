import defaultAvatar from '../assets/images/defaultAvatar.jpg';
import { FaPrint } from 'react-icons/fa';
import { TbPointFilled } from 'react-icons/tb';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { 
  HiMail, 
  HiPhone 
} from 'react-icons/hi';

export default function Resume(props) {

    const educationElements = props.education.map((element) => {
        return (
          <div key={element.id} className='cv--right--education--element'>
            <div className='cv--right--education--element--date'>
              {element.dateFrom} - {element.dateTo}
            </div>
            <div className='cv--right--education--element--info'>
              {element.title.length !== 0 ? <div>{element.title}</div> : null}
              <div>{element.schoolName}</div>
            </div>
          </div>
        );
    });

    const experienceElements = props.experience.map((element) => {
        return (
          <div key={element.id} className='cv--right--experience--element'>
            <div className='cv--right--experience--element--date'>
              {element.dateFrom} - {element.dateTo}
            </div>
            <div className='cv--right--experience--element--info'>
              <div>{element.companyName}</div>
              <div>{element.positionTitle}</div>
              <div>{element.mainTasks}</div>
            </div>
          </div>
        );
    });

    const skillsSplit = props.skills.split(',').map((element, index) => {
        return (
          <div key={index} className="cv--left--skills">
            <div className="skill">
              <TbPointFilled /> {element}
            </div>
          </div>
        );
    });

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      documentTitle: 'cv'
    });

    return (
      <>
        <div className="round--button" onClick={handlePrint}>
          <FaPrint />
        </div>
        <div ref={componentRef} className="cv--container">
          <div className="cv--left">
            <div className="cv--left--photo">
              <img
                src={props.general.photo ? props.general.photo : defaultAvatar}
              />
            </div>
            <div className="cv--left--aboutme">
              <div className="cv--left--title">About Me</div>
              <div>{props.aboutMe}</div>
            </div>
            <div className="cv--left--contact">
              <div className="cv--left--title">Contact</div>
              <div className="cv--left--contact--element">
                <div className="cv--left--contact--icon">
                  <HiMail className="cv--icon" />
                </div>
                <div>{props.general.email}</div>
              </div>
              <div className="cv--left--contact--element">
                <div className="cv--left--contact--icon">
                  <HiPhone className="cv--icon" />
                </div>
                <div>{props.general.phone}</div>
              </div>
            </div>
            <div className="cv--left--aboutme">
              <div className="cv--left--title">Skills</div>
              {skillsSplit}
            </div>
          </div>
          <div className="cv--right">
            <div className="cv--right--name">
              {props.general.firstName.toUpperCase()}{' '}
              {props.general.lastName.toUpperCase()}
            </div>
            <div className="cv--right--education">
              <div className="cv--right--title">Education</div>
              {educationElements}
            </div>
            <div className="cv--right--experience">
              <div className="cv--right--title">Experience</div>
              {experienceElements}
            </div>
          </div>
        </div>
      </>
    );
}