import React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import styled from 'styled-components'

const SelectWrapper = styled.div`
    width: 35%;
`
const StyledSelect = styled.select`
    width: 100%;
`

export const Planets = (props) => {
    return(
        <SelectWrapper>
            <StyledSelect name={props.name} onChange={props.onChange} value={props.value}>
                <option value="Mercury">Mercury</option>
                <option value="Venus">Venus</option>
                <option value="Mars">Mars</option>
                <option value="Jupiter">Jupiter</option>
                <option value="Saturn">Saturn</option>
                <option value="Uranus">Uranus</option>
                <option value="Neptune">Neptune</option>
                <option value="Pluto">Pluto</option>
            </StyledSelect>
        </SelectWrapper>
    )
}