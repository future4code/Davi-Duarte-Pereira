import React, { Component } from "react";
import Tasks from "../../components/Tasks";
import { connect } from "react-redux";
import {requestTasks} from "../../actions/tasks";
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.table`
  border: 1px solid black;
  width: 70%;
`;

const HeaderCells = styled.th`
  border: 1px solid black;
`;

const StandardCells = styled.th`
  border: 1px solid black;
`;

class TasksTable extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const {fetchTasks} = this.props;
        fetchTasks();
    };

    render() {
        const {tasks} = this.props;

        return (
            <Wrapper>
                <Table>
                    <tr>
                        <HeaderCells>Sunday</HeaderCells>
                        <HeaderCells>Monday</HeaderCells>
                        <HeaderCells>Tuesday</HeaderCells>
                        <HeaderCells>Wednesday</HeaderCells>
                        <HeaderCells>Thursday</HeaderCells>
                        <HeaderCells>Friday</HeaderCells>
                        <HeaderCells>Saturday</HeaderCells>
                    </tr>
                    <tr>
                        <StandardCells><Tasks tasks={tasks} listOfSundayTasks/></StandardCells>
                        <StandardCells><Tasks tasks={tasks} listOfMondayTasks/></StandardCells>
                        <StandardCells><Tasks tasks={tasks} listOfTuesdayTasks/></StandardCells>
                        <StandardCells><Tasks tasks={tasks} listOfWednesdayTasks/></StandardCells>
                        <StandardCells><Tasks tasks={tasks} listOfThursdayTasks/></StandardCells>
                        <StandardCells><Tasks tasks={tasks} listOfFridayTasks/></StandardCells>
                        <StandardCells><Tasks tasks={tasks} listOfSaturdayTasks/></StandardCells>
                    </tr>
                </Table>
            </Wrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    tasks: state.tasks
});

function mapDispatchToProps (dispatch){
    return {
        fetchTasks: () => dispatch(requestTasks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksTable);