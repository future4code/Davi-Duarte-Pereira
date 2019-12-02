const fs = require('fs')
const filename = process.argv[2];
const task = String(process.argv[3]);

try {
    const taskList = fs.readFileSync(filename).toString().split(",");

    taskList.push(task);

    fs.writeFileSync(filename, taskList);

    console.log("Task created successfully!");


} catch(err) {
    console.log(err);
}