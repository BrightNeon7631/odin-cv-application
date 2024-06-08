export default function Skills(props) {
    
    function handleChange(e) {
        props.setSkillsData(e.target.value)
    }

    return (
        <div className='edit--aboutme edit--skills'>
            <div className="edit--title">Skills</div>
            <textarea
                name="skills"
                placeholder="Skills (comma seperated)..."
                onChange={handleChange}
                value={props.skillsData}
            />
        </div>
    )
}