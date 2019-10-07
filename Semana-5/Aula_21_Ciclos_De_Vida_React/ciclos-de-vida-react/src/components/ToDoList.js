import React from 'react';
import styled from 'styled-components';
import cancel from './cancel-button.svg'


const ToDoListHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const ToDoListSection = styled.div`

`

const ToDoListTasks = styled.div`

`

export class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskList: [],
            newTaskButton: false,
        };
    }

    showCommentSection = () => {
        const commentSectionOff = this.state.newTaskButton;

        const commentSectionOn = {
            newTaskButton: !commentSectionOff
        }

        this.setState(commentSectionOn);
    }



    teste = () => {
        console.log("deu certo!")
    }

    render(){
        let inputTask;

        if(this.state.newTaskButton){
            inputTask = (
                <ToDoListTasks>
                    <hr />
                    <input type="checkbox" onChange={this.teste}/>
                    <input type="text"/>
                    <img src={cancel} />
                </ToDoListTasks>
            )
        }


        return (
            <ToDoListSection>
                <ToDoListHeader>
                    <p>TAREFAS</p>
                    <p onClick={this.showCommentSection}>Criar nova</p>
                </ToDoListHeader>
                {inputTask}
            </ToDoListSection>
        )
    }
}