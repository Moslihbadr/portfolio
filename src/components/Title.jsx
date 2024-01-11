import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Title = ({ children, link, className }) => {
  const StyledTitle = styled.h4`
    position: relative;
    display: inline-block;
    width: fit-content;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    color: var(--main-light-3);
    background-color: var(--main-dark-4);
    border-radius: var(--radius);
    transition: var(--transition);

    &:hover {
      background-color: var(--main-dark-3);
    }

    & > .link-icon {
      position: absolute;
      font-size: 1.5rem;
      top: 50%;
      right: -3rem;
      transform: translateY(-50%);
      opacity: 0;
      transition: var(--transition);
    }

    &:hover > .link-icon {
      opacity: 1;
    }
  `;

  return (
    <>
      <StyledTitle className={className}>
        {children}
        <a href={link} className="link-icon text-reset"><FontAwesomeIcon icon={faLink} /></a>
      </StyledTitle>
    </>
  );
};

export default Title;
