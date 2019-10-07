import React from 'react';
import styled from 'styled-components';
import { ToDoList } from './components/ToDoList'
import { DoneList } from './components/DoneList'

const MainAppContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`
const TasksContainer = styled.div`
  width: 25%;
`

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    };
  }

  render(){

    return(
      <MainAppContainer>
        <TasksContainer>
          <ToDoList/>
          <DoneList />
        </TasksContainer>
      </MainAppContainer>
    );
  }
}

export default App;
