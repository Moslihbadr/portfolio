import { styled } from "styled-components"

const SubTitle = ({ children, className }) => {

  const StyledSubTitle = styled.h6`
    max-width: 400px;
    color: var(--main-green);
    font-size: 2rem;
  `

  return (
    <>
      <StyledSubTitle className={className}>{children}</StyledSubTitle>
    </>
  )
}

export default SubTitle