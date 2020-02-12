import styled from 'styled-components'

export const StyledFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1.5fr 2fr 1.5fr;
  justify-items: center;
  align-items: center;
`

export const FutureLogo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  color: #a32330;
  font-family: 'Work Sans', sans-serif;
  font-size: 3rem;
  font-weight: 900;
`

export const TubeLogo = styled.span`
  color: #6F1C0E;
`