import { useState } from 'react';
import Header from './Components/Header';
import GeneralInfo from './Components/General';
import AboutMe from './Components/About';
import EducationContainer from './Components/EducationContainer';
import ExperienceContainer from './Components/ExperienceContainer';
import Skills from './Components/Skills';
import Resume from './Components/Resume';

function App() {

  const [generalData, setGeneralData] = useState(
    {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      photo: ''
    }
  )

  const [aboutMeData, setAboutMeData] = useState('');

  const [skillsData, setSkillsData] = useState('');

  const [educationData, setEducationData] = useState(
    [
      {
        id: 0,
        schoolName: '',
        title: '',
        dateFrom: '',
        dateTo: ''
      }
    ]
  );

  const [experienceData, setExperienceData] = useState(
    [
      {
        id: 0,
        companyName: '',
        positionTitle: '',
        mainTasks: '',
        dateFrom: '',
        dateTo: ''
      }
    ]
  );

  const [preview, setPreview] = useState(false);

  return (
    <div>
      <Header 
        preview={preview}
        setPreview={setPreview}
      />
      {!preview ? (
      <div className='forms--container'>
        <GeneralInfo 
          generalData={generalData}
          setGeneralData={setGeneralData}
        />
        <AboutMe 
          aboutMeData={aboutMeData}
          setAboutMeData={setAboutMeData}
        />
        <EducationContainer 
          educationData={educationData}
          setEducationData={setEducationData}
        />
        <ExperienceContainer 
          experienceData={experienceData}
          setExperienceData={setExperienceData}
        />
        <Skills
          skillsData={skillsData}
          setSkillsData={setSkillsData}
        />
      </div> ) : (
      <Resume
        general={generalData}
        aboutMe={aboutMeData}
        skills={skillsData}
        education={educationData}
        experience={experienceData}
      /> )
      }
    </div>
  )
}

export default App