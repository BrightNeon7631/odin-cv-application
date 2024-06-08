/* eslint react/prop-types: 0 */
import { FaTrash } from 'react-icons/fa';

export default function Experience(props) {

    function handleChange(e) {
        const { value, name } = e.target;
        props.setExperienceData((prevState) => {
            return prevState.map(obj => {
                return obj.id === props.data.id ? {...obj, [name]: value} : obj;
            })
        })
    }

    function handleDelete(id) {
        props.setExperienceData((prevState) => {
            return prevState.filter((element) => element.id !== id);
        })
    }

    return (
        <div className='edit--experience--element'>
            <div className='edit--inputs--top'>
                <input
                    type="text"
                    name="companyName"
                    placeholder="Company name"
                    onChange={handleChange}
                    value={props.data.companyName}
                />
                <input
                    type="text"
                    name="positionTitle"
                    placeholder="Position title"
                    onChange={handleChange}
                    value={props.data.positionTitle}
                />
            </div>
            <div className='edit--inputs--bottom'>
                <input
                    type="text"
                    name="dateFrom"
                    placeholder="Date from"
                    onChange={handleChange}
                    value={props.data.dateFrom}
                />
                <input
                    type="text"
                    name="dateTo"
                    placeholder="Date to"
                    onChange={handleChange}
                    value={props.data.dateTo}
                />
            </div>
            <textarea 
                name="mainTasks"
                placeholder="Main tasks..."
                onChange={handleChange}
                value={props.data.mainTasks}
            />
            <button 
                className='edit--delete--button' 
                onClick={() => handleDelete(props.data.id)}
            >
                Delete <FaTrash />
            </button>
        </div>
    )
}