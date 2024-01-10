import { styled } from "styled-components"

const Button = ({ children, onClick, className }) => {

  const StyledButton = styled.button`
    padding: .4rem .8rem;
    background-color: var(--main-green);
    color: var(--main-light-1);
    border: none;
    border-radius: .6rem;
    transition: var(--transition);

    &:hover {
      background-color: var(--main-green-dark-2);
    }
  `

  return (
    <>
      <StyledButton onClick={() => onClick && onClick()} className={className}>
        {children}
      </StyledButton>
    </>
  )
}

export default Button