import Education from './Education';
import { SiAddthis } from 'react-icons/si';
import { v4 as uuidv4 } from 'uuid';

export default function EducationContainer(props) {

    function handleClick() {
        props.setEducationData((prevState) => {
            return [
                ...prevState,
                {
                    id: uuidv4(),
                    schoolName: '',
                    title: '',
                    dateFrom: '',
                    dateTo: ''
                }
            ]
        })
    }

    const educationCards = props.educationData.map((educationObj) => {
        return (
            <Education 
                key={educationObj.id}
                data={educationObj}
                setEducationData={props.setEducationData}
            />
        )
    })

    return (
        <div className='edit--education--container'>
            <div className='edit--title'>Education</div>
            <SiAddthis className='edit--icon--add' onClick={handleClick} />
            {educationCards}
        </div>
    )
}