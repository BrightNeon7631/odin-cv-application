import { FaUserCircle } from 'react-icons/fa';

export default function GeneralInfo(props) {
      
    function handleChange(e) {
        const { name, value } = e.target;
        props.setGeneralData((prevState) => {
          return {
            ...prevState,
            [name]: value
          }
        })
      }

      function handlePhotoChange(e) {
        props.setGeneralData((prevState) => {
          return {
            ...prevState,
            photo: URL.createObjectURL(e.target.files[0])
          }
        })
      }

      return (
        <div className='edit--general--info'>
            <div className='edit--title'>General info</div>
            <div className='edit--inputs--top'>
                <input
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    onChange={handleChange}
                    value={props.generalData.firstName}
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={props.generalData.lastName}
                />
            </div>
            <div className='edit--inputs--bottom'>
                <input
                    type="number"
                    name="phone"
                    placeholder="Phone number"
                    onChange={handleChange}
                    value={props.generalData.phone}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={props.generalData.email}
                />
            </div>
            <label className="input-button">
              {props.generalData.photo ? 'Change photo' : 'Select photo'} <FaUserCircle />
              <input
                onChange={handlePhotoChange}
                type="file"
                name="image"
                accept="image/x-png,image/gif,image/jpeg"
              />
          </label>
        </div>
    )
}