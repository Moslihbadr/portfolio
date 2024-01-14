import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHome, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useLanguage } from "../../contexts/LanguageContext";

// styled components
const StyledNav = styled.nav`
  background: var(--glass);
  position: fixed;
  display: flex;
  left: 50%;
  bottom: 2rem;
  padding: .5rem 1.5rem;
  z-index: 9999;
  transform: translateX(-50%);
  column-gap: .8rem;
  border-radius: 2rem;
`;

const StyledLink = styled.a`
  background: transparent;
  padding: 1rem;
  border-radius: 50%;
  display: flex;
  color: #000;
  font-size: 1rem;
  transition: var(--transition);
  
  &:hover {
  background: var(--main-dark-4);
  color: var(--main-light-1);
  }
  
  ${(props) =>
    props.isActive &&
    `
    background: var(--main-dark-3);
    color: var(--main-light-1);
  `}
`;

const BottomNavbar = () => {
  const [activeTab, setActiveTab] = useState('#home');
  const { language } = useLanguage()

  const handleActive = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <StyledNav>
        <Tippy content={language === 'en' ? 'Home' : 'Accueil'}>
          <StyledLink
            href="#"
            onClick={() => handleActive('#home')}
            isActive={activeTab === '#home'}
          >
            <FontAwesomeIcon icon={faHome} />
          </StyledLink>
        </Tippy>
        <Tippy content={language === 'en' ? 'About' : 'À propos'}>
          <StyledLink
            href="#about"
            onClick={() => handleActive('#about')}
            isActive={activeTab === '#about'}
          >
            <FontAwesomeIcon icon={faUser} />
          </StyledLink>
        </Tippy>
        <Tippy content={language === 'en' ? 'Skills' : 'Compétences'}>
          <StyledLink
            href="#skills"
            onClick={() => handleActive('#skills')}
            isActive={activeTab === '#skills'}
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          </StyledLink>
        </Tippy>
        <Tippy content={language === 'en' ? 'Work' : 'Travail'}>
          <StyledLink
            href="#work"
            onClick={() => handleActive('#work')}
            isActive={activeTab === '#work'}
          >
            <FontAwesomeIcon icon={faCode} />
          </StyledLink>
        </Tippy>
        <Tippy content={language === 'en' ? 'Contact' : 'Contactez-moi'}>
          <StyledLink
            href="#contact"
            onClick={() => handleActive('#contact')}
            isActive={activeTab === '#contact'}
          >
            <FontAwesomeIcon icon={faMessage} />
          </StyledLink>
        </Tippy>
      </StyledNav>
    </>
  );
};

export default BottomNavbar;
