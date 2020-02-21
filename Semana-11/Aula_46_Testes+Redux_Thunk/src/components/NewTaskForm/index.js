import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
`;

const NewTaskForm = (props) => {
    return(
        <Wrapper>
            <input onChange={props.onChangeTaskValue} value={props.taskValue} placeholder={"Describe your task here"} />
            <select onChange={props.onChangeDaySelected} value={props.dayOfTheWeekValue}>
                <option value={"Sunday"}>Sunday</option>
                <option value={"Monday"}>Monday</option>
                <option value={"Tuesday"}>Tuesday</option>
                <option value={"Wednesday"}>Wednesday</option>
                <option value={"Thursday"}>Thursday</option>
                <option value={"Friday"}>Friday</option>
                <option value={"Saturday"}>Saturday</option>
            </select>
            <button onClick={props.onClickCreateNewTask}>Create new task</button>
        </Wrapper>
    )
};

export default  NewTaskForm