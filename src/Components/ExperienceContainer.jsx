/* eslint react/prop-types: 0 */
import Experience from './Experience';
import { SiAddthis } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

export default function ExperienceContainer(props) {

    function handleClick() {
        props.setExperienceData((prevState) => {
            return [
                ...prevState,
                {
                    id: uuidv4(),
                    companyName: '',
                    positionTitle: '',
                    mainTasks: '',
                    dateFrom: '',
                    dateTo: ''
                }
            ]
        })
    }

    const experienceCards = props.experienceData.map((exp) => {
        return (
            <Experience 
                key={exp.id}
                data={exp}
                setExperienceData={props.setExperienceData}
            />
        )
    })

    return (
        <div className='edit--experience--container'>
            <div className='edit--title'>Work Experience</div>
            <SiAddthis className='edit--icon--add' onClick={handleClick} />
            {experienceCards}
        </div>
    )
}