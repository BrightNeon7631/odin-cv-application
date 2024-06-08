export default function AboutMe(props) {
    
    function handleChange(e) {
        props.setAboutMeData(e.target.value)
    }

    return (
        <div className='edit--aboutme'>
            <div className="edit--title">About me</div>
            <textarea
                name="aboutMe"
                placeholder="A few words about me..."
                onChange={handleChange}
                value={props.aboutMeData}
            />
        </div>
    )
}