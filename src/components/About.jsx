import { styled } from "styled-components"
import SubTitle from "./SubTitle"
import Title from "./Title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { useLanguage } from "../contexts/LanguageContext"
import about from '../../assets/about.jpg'

const About = () => {

  const { language } = useLanguage()

  const StyledAbout = styled.section`
    display: flex;
    width: 100%;
    gap: 2rem;

    .image-container {
      min-width: 200px;
      height: 300px;
      background-image: url(${about});
      background-position: center;
      background-size: cover;
      border-radius: var(--radius);
    }

    @media screen and (max-width: 570px) {
      flex-direction: column;
      .image-container {
        height: 360px;
        background-position: 0px 0px;
      }
    }
  `
  const StyledLink = styled.span`
    width: 32px;
    height: 31px;
    padding: 4px 16px;
    color: var(--main-dark-1);
    background-color: var(--gray-2);
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    margin: 0 3px;
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      background-color: var(--main-light-1);
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  `

  return (
    <StyledAbout className="ps-2 py-5" id="about">
      <div className="image-container"></div>
      <div>
        <Title className='mb-3' link={'#about'}>{ language === 'en' ? <>About me</> : <>À propos de moi</>}</Title>
        <SubTitle className='mb-3'>{ language === 'en' ? <>Who&lsquo;s this guy ?</> : <>Qui est ce gars ?</> } 🤔</SubTitle>
        <p className="mb-4" style={{ color: 'var(--gray-3)', maxWidth: '800px', lineHeight: '2rem' }}>
          { language === 'en' ?
            <>
              Hi, I&lsquo;m Badr Moslih, a 22-year-old junior full-stack developer from Casablanca, Morocco.
              Recently graduated in digital development, specializing in full-stack web development.
              My passion for programming drives my dedication to creating innovative and user-friendly solutions.         
            </> : 
            <>
              Salut, je suis Badr Moslih, un développeur full-stack junior de 22 ans basé à Casablanca, Maroc
              Diplômé récemment en développement digital, spécialisé en développement web full-stack.
              Ma passion pour la programmation guide mon engagement à créer des solutions innovantes et conviviales.
            </>
          }
        </p>
        <div className="links">
          <StyledLink><a href="https://web.facebook.com/Moslihbadr01" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faFacebookF} /></a></StyledLink>
          <StyledLink><a href="https://twitter.com/BadrMoslih1" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faTwitter} /></a></StyledLink>
          <StyledLink><a href="https://www.instagram.com/moslihbadr01/" target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faInstagram} /></a></StyledLink>
          <StyledLink><a href="https://github.com/Moslihbadr" target="_blank" rel="noreferrer" > <FontAwesomeIcon icon={faGithub} /></a></StyledLink>
          <StyledLink><a href="https://www.linkedin.com/in/moslihbadr/" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a></StyledLink>
        </div>
      </div>
    </StyledAbout>
  )
}

export default About