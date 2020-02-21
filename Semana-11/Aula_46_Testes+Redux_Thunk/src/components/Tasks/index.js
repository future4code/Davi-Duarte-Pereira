import React from "react";
import styled from 'styled-components';

const ListItem = styled.p`
  list-style: none;
  text-align: center;
  //border: 1px solid black;
`;

const UnorderedList = styled.div`
  //border: 1px solid black;
`;

const Tasks = (props) => {
    const {
        tasks,
        listOfSundayTasks,
        listOfMondayTasks,
        listOfTuesdayTasks,
        listOfWednesdayTasks,
        listOfThursdayTasks,
        listOfFridayTasks,
        listOfSaturdayTasks,
    } = props;

    const sundayTasks = tasks.filter(task => task.day === "Sunday");
    const mondayTasks = tasks.filter(task => task.day === "Monday");
    const tuesdayTasks = tasks.filter(task => task.day === "Tuesday");
    const wednesdayTasks = tasks.filter(task => task.day === "Wednesday");
    const thursdayTasks = tasks.filter(task => task.day === "Thursday");
    const fridayTasks = tasks.filter(task => task.day === "Friday");
    const saturdayTasks = tasks.filter(task => task.day === "Saturday");

    const sundayTasksList = listOfSundayTasks ?
        sundayTasks.map((task) => { return <ListItem>{task.text}</ListItem>})
        : null;
    const mondayTasksList = listOfMondayTasks ?
        mondayTasks.map((task) => { return <ListItem>{task.text}</ListItem>})
        : null;
    const tuesdayTasksList = listOfTuesdayTasks ?
        tuesdayTasks.map((task) => { return <ListItem>{task.text}</ListItem>})
        : null;
    const wednesdayTasksList = listOfWednesdayTasks ?
        wednesdayTasks.map((task) => { return <ListItem>{task.text}</ListItem>})
        : null;
    const thursdayTasksList = listOfThursdayTasks ?
        thursdayTasks.map((task) => { return <ListItem>{task.text}</ListItem>})
        : null;
    const fridayTasksList = listOfFridayTasks ?
        fridayTasks.map((task) => { return <ListItem>{task.text}</ListItem>})
        : null;
    const saturdayTasksList = listOfSaturdayTasks ?
        saturdayTasks.map((task) => { return <ListItem>{task.text}</ListItem>})
        : null;

    return(
        <UnorderedList>
            {sundayTasksList}
            {mondayTasksList}
            {tuesdayTasksList}
            {wednesdayTasksList}
            {thursdayTasksList}
            {fridayTasksList}
            {saturdayTasksList}
        </UnorderedList>
    )
};

export default Tasks