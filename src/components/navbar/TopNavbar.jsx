import styled from "styled-components";
import Logo from "../Logo";
import { useLanguage } from "../../contexts/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import cv from '../../../assets/Badr_Moslih.pdf'

const StyledNav = styled.nav`
  background: transparent;
  width: 95vw;
  max-width: 1320px;
  margin-top: 1rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  left: 50%;
  padding: .2rem 1rem;
  z-index: 9999;
  transform: translateX(-50%);
  border: .09rem solid var(--main-dark-4);
  border-radius: var(--radius);
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--gray-1);
  font-size: .8rem;
  cursor: pointer;
  
  &:hover,
  &:focus {
    color: var(--gray-1);
  }

`;
const DropdownMenu = styled.div`
  background-color: var(--glass);
  border-color: var(--gray-1);
  min-width: max-content;
  transform: translate(20px, 25px)!important;

  .dropdown-item {
    color: var(--gray-1);
    border: none;
    padding: .5rem 1rem;
    font-size: .8rem;

    &:hover {
      background-color: var(--main-dark-3);
      color: var(--main-light-1);
    }
  }

  .dropdown-item:hover {
    background-color: var(--main-dark-3);
    color: var(--main-light-1);
  }
`;

const TopNavbar = () => {
  const { language, changeLanguage } = useLanguage();

  const handleLanguageChange = (selectedLanguage) => {
    changeLanguage(selectedLanguage);
  };

  return (
    <StyledNav>
      <Logo color={'var(--main-light-2)'} />
      <div>
        <div className="dropdown d-flex align-items-baseline" style={{ fontSize: '.8rem' }}>
          <span style={{ color: '#AEAEAE' }}>{language.toUpperCase()}</span>
          <DropdownButton
            className="btn"
            type="button"
            id="language-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </DropdownButton>
          <DropdownMenu className="dropdown-menu" aria-labelledby="language-dropdown">
            <button
              className="dropdown-item"
              onClick={() => handleLanguageChange("en")}
            >
              EN
            </button>
            <button
              className="dropdown-item"
              onClick={() => handleLanguageChange("fr")}
            >
              FR
            </button>
          </DropdownMenu>
          <a href={cv} target="_blank" download={true} rel="noopener noreferrer" >
            <Button className='ms-4'>
              {language === 'en' ? 'Download CV' : 'Télécharger CV'}
            </Button>
          </a>
        </div>
      </div>
    </StyledNav>
  );
};

export default TopNavbar;
