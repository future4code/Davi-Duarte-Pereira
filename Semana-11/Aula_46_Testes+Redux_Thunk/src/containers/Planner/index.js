import React from "react";
import { connect } from "react-redux";
import NewTaskForm from "../../components/NewTaskForm";
import TasksTable from "../TasksTable";
import {requestNewTask, requestTasks} from "../../actions/tasks";
import styled from 'styled-components';


const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

class Planner extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: '',
            dayOfTheWeek: ''
        }
    }

    handleTaskValue = (event) => {
        this.setState({task: event.target.value})
    };

    handleWeekValue = (event) => {
        this.setState({dayOfTheWeek: event.target.value})
    };

    createNewTask = () => {
        const {task, dayOfTheWeek} = this.state;
        const {createNewTask, fetchTasks} = this.props;

        createNewTask(task, dayOfTheWeek);
        fetchTasks();
    };

    render() {
        const {task, dayOfTheWeek} = this.state;

      return(
        <AppWrapper>
          <NewTaskForm
              onChangeTaskValue={this.handleTaskValue}
              taskValue={task}
              onChangeDaySelected={this.handleWeekValue}
              dayOfTheWeekValue={dayOfTheWeek}
              onClickCreateNewTask={this.createNewTask}
          />
          <TasksTable />
        </AppWrapper>
      );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createNewTask: (text, day) => dispatch(requestNewTask(text, day)),
        fetchTasks: () => dispatch(requestTasks())
    }
}

export default connect(null, mapDispatchToProps)(Planner);
