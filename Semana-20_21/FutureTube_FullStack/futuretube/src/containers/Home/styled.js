import styled from 'styled-components'

export const VideosWrapper = styled.div`
  display: grid;
  background: #E1E2E1;
  align-items: center;
  justify-items: center;
  @media (min-width: 300px) {
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }
`