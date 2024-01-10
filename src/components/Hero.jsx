import { styled } from "styled-components"
import { useLanguage } from "../contexts/LanguageContext";
import Button from "./Button";

const Hero = () => {

  const { language } = useLanguage()

  const StyledHero = styled.section`
    height: 100vh;
    width: 100%;
    display: grid;
    align-items: center;
    color: var(--main-light-2);
  `
  const StyledAboutMe = styled.p`
    font-size: 1.1rem;
    color: var(--gray-1);
  `;

  return (
    <StyledHero>
      <div className="d-flex justify-content-between align-items-center ps-2" >
        <div>
          {language === "en" ? <h1>Hi, I&lsquo;m <br />Badr Moslih 👋</h1> : <h1>Salut, je suis<br /> Badr Moslih 👋</h1>}
          <StyledAboutMe>
            {language === "en" ?
              <p className="mt-3 mb-4"><span style={{ color: "var(--main-green)" }}>&lt;Full-stack web developer/&gt;</span> passionate about programming.</p>
              : <p className="mt-3 mb-4"> <span style={{ color: "var(--main-green)" }}>&lt;Développeur web full-stack/&gt;</span> passionné par la programmation.</p>
            }
          </StyledAboutMe>
          <a href="mailto:moslihbadr2@gmail.com"><Button>{language === 'en' ? 'Get in touch' : 'Contactez-moi'}</Button></a>
        </div>
        <div className="d-none d-lg-block">
          <img src="../../assets/hero.png" style={{transform: 'translateX(25px)'}} width={450} height={450} />
        </div>
      </div>
    </StyledHero>
  )
}

export default Hero