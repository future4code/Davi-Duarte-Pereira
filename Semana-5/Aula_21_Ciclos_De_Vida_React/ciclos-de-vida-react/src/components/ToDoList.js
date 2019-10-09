import React from 'react';
import styled from 'styled-components';
import cancel from './cancel-button.svg';

const ToDoListHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

const TaskSection = styled.div`

`

const ToDoListTasks = styled.div`

`

const DoneListHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

const DoneListTasks = styled.div`

`

export class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            taskList: [],
            newTaskButton: false,
            taskChecked: false,
        };
    }

    showCommentSection = () => {
        const commentSectionOff = this.state.newTaskButton;

        const commentSectionOn = {
            newTaskButton: !commentSectionOff
        }

        this.setState(commentSectionOn);
    }

    handlerCheckedTask = () => {
        const uncheckedTask = this.state.checkedTask;

        const checkedTask = {
            taskChecked: !uncheckedTask
        }

        this.setState(checkedTask);
    }

    render(){
        let inputTask;
        let checkedTask;

        if(this.state.newTaskButton){
            inputTask = (
                <ToDoListTasks>
                    <hr />
                    <input
                     type="checkbox" 
                     onChange={this.handlerCheckedTask}
                    />
                    <input
                     type="text"
                    />
                    <img src={cancel} />
                </ToDoListTasks>
            )
        }

        if(this.state.taskChecked){
            checkedTask = (
                <DoneListTasks>
                    <hr />
                    <input
                     type="checkbox" 
                     onChange={this.handlerCheckedTask}
                     checked
                    />
                    <input
                     type="text"
                    />
                    <img src={cancel} />
                </DoneListTasks>
            )
        }


        return (
            <TaskSection>
                <ToDoListHeader>
                    <p>TAREFAS</p>
                    <p onClick={this.showCommentSection}>Criar nova</p>
                </ToDoListHeader>
                {inputTask}
                <DoneListHeader>
                    <p>COMPLETAS</p>
                    <p>Limpar</p>
                </DoneListHeader>
                {checkedTask}
            </TaskSection>
        )
    }
}