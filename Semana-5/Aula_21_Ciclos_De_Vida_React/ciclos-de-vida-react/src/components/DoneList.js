import React from 'react';
import styled from 'styled-components';


const DoneListHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const DoneListSection = styled.div`

`

const DoneListTasks = styled.div`

`

export class DoneList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return (
            <DoneListSection>
                <DoneListHeader>
                    <p>COMPLETAS</p>
                    <p>Limpar</p>
                </DoneListHeader>
                <DoneListTasks>
                    <hr />
                </DoneListTasks>
            </DoneListSection>
        )
    }
}