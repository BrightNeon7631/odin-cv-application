import { FaTrash } from 'react-icons/fa';

export default function Education(props) {
    
    function handleChange(e) {
        const { value, name } = e.target;
        props.setEducationData((prevState) => {
            return prevState.map(obj => {
                return obj.id === props.data.id ? {...obj, [name]: value} : obj;
            })
        })
    }

    function handleDelete(id) {
        props.setEducationData((prevState) => {
            return prevState.filter((element) => element.id !== id);
        })
    }

    return (
        <div className='edit--education--element'>
            <div className='edit--inputs--top'>
                <input
                    type="text"
                    name="schoolName"
                    placeholder="School name"
                    onChange={handleChange}
                    value={props.data.schoolName}
                />
                <input
                    type="text"
                    name="title"
                    placeholder="Degree"
                    onChange={handleChange}
                    value={props.data.title}
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
            <button 
                className='edit--delete--button' 
                onClick={() => handleDelete(props.data.id)}
            >
                Delete <FaTrash />
            </button>
        </div>
    )
}