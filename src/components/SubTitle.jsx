import { styled } from "styled-components"

const SubTitle = ({ children, className }) => {

  const StyledSubTitle = styled.h6`
    color: var(--main-green);
    font-size: 2rem;
    line-height: 2.5rem;
  `

  return (
    <>
      <StyledSubTitle className={className}>{children}</StyledSubTitle>
    </>
  )
}

export default SubTitle