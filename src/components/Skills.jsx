import { useEffect, useState } from "react"
import Title from "./Title"
import SubTitle from "./SubTitle"
import { styled } from "styled-components";
import { useLanguage } from '../contexts/LanguageContext'


const SkillImage = styled.img`
  margin-bottom: .8rem;
  width: 35px;
  height: 35px;

  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const SkillName = styled.span`
  color: var(--gray-1);

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

const Skills = () => {

  const [rowOne, setRowOne] = useState([])
  const [rowTwo, setRowTwo] = useState([])
  const [rowThree, setRowThree] = useState([])
  const { language } = useLanguage()

  useEffect(() => {
    fetch('/data/skills.json')
      .then(response => response.json())
      .then(data => {

        // Distribute skills into rows
        setRowOne(data.slice(0, 6));
        setRowTwo(data.slice(6, 11));
        setRowThree(data.slice(11));
      });
  }, [])

  return (
    <section id="skills" className="my-5">
      <Title className='mx-auto d-block' link='#skills'>{language === 'en' ? <>My Skills</> : <>Mes Compétences</>}</Title>
      <SubTitle className='mx-auto fs-6 text-center'>
        {language === 'en' ?
          <>
            The programming languages, tools and technologies <br />
            That i&lsquo;m really good at
          </> :
          <>
            Les langages de programmation, outils et technologies <br />
            Que je maîtrise
          </>
        }
      </SubTitle>
      <div className="d-flex justify-content-center mt-4 mx-auto ps-3" style={{ maxWidth: '600px' }}>
        {rowOne.map(skill => (
          <div key={skill.id} style={{ width: 'calc(100%/6)', minWidth: 'fit-content' }} className="text-center me-3">
            <SkillImage src={skill.url} alt={skill.name} /><br />
            <SkillName>{skill.name}</SkillName>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center my-4 mx-auto" style={{ maxWidth: '600px' }}>
        {rowTwo.map(skill => (
          <div key={skill.id} className="text-center mx-3">
            <SkillImage src={skill.url} alt={skill.name} /><br />
            <SkillName>{skill.name}</SkillName>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mb-4 mx-auto" style={{ maxWidth: '600px' }}>
        {rowThree.map(skill => (
          <div key={skill.id} className="text-center mx-3">
            <SkillImage src={skill.url} alt={skill.name} /><br />
            <SkillName>{skill.name}</SkillName>
            {skill.id === 10 && <br />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills