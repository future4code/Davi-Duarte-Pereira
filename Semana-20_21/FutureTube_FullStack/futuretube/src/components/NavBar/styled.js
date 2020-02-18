import styled from 'styled-components'
import { Toolbar, IconButton } from '@material-ui/core'

export const StyledToolbar = styled(Toolbar)`
  /* display: flex; */
`

export const StyledEndIconButton = styled(IconButton)`

`

export const RightSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
`

export const StyledAvatarImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 30px;
`