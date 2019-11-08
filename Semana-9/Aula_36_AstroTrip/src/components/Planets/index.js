import React from 'react'
import styled from 'styled-components'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'


const StyledFormControl = styled(FormControl)`
    width: 75%;
    height: 15%;
`
const StyledSelect = styled(Select)`
    width: 100%;
`

// MINHA IDEIA A PRIORI ERA EXPORTAR OS COMPONENTES POR AQUI, PORÉM, UM ERRO ESTRANHO OCORRIA QUANDO EU FAZIA ISSO.

// const StyledMercury = styled.img`
//     width: 15px;
//     height: 15px;
// `

// const StyledVenus = styled.img`
//     width: 27,50px;
//     height: 27,50px;
// `

// const StyledMars = styled.img`
//     width: 20px;
//     height: 20px;
// `

// const StyledJupiter = styled.img`
//     width: 140px;
//     height: 140px;
// `

// const StyledSaturn = styled.img`
//     width: 130px;
//     height: 130px;
// `

// const StyledUranus = styled.img`
//     width: 60px;
//     height: 60px;
// `

// const StyledNeptune = styled.img`
//     width: 55px;
//     height: 55px;
// `

// const StyledPluto = styled.img`
//     width: 10px;
//     height: 10px;
// `

// export const Mercury = <StyledMercury src={mercury} />

// export const Venus = <StyledVenus src={venus} />

// export const Mars = <StyledMars src={mars} />

// export const Jupiter = <StyledJupiter src={jupiter} />

// export const Saturn = <StyledSaturn src={saturn} />

// export const Uranus = <StyledUranus src={uranus} />

// export const Neptune = <StyledNeptune src={neptune} />

// export const Pluto = <StyledPluto src={pluto} />

export const Planets = (props) => {
    return(
        <StyledFormControl>
            <InputLabel htmlFor="planets">Select the planet of the trip.</InputLabel>
            <StyledSelect
             inputProps={{name: props.name, id: "planets"}} 
             onChange={props.onChange} 
             value={props.value}>
                <MenuItem value="Mercury">Mercury</MenuItem>
                <MenuItem value="Venus">Venus</MenuItem>
                <MenuItem value="Mars">Mars</MenuItem>
                <MenuItem value="Jupiter">Jupiter</MenuItem>
                <MenuItem value="Saturn">Saturn</MenuItem>
                <MenuItem value="Uranus">Uranus</MenuItem>
                <MenuItem value="Neptune">Neptune</MenuItem>
                <MenuItem value="Pluto">Pluto</MenuItem>
            </StyledSelect>
        </StyledFormControl>
    )
}