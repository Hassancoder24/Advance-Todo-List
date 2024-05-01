#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
console.log(chalk.yellow.bold.italic("\n \t My Todo-List Application\n"));
//function add to new task to the list
let main = async () => {
    while (condition) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Please select your option",
                choices: ["Add Task", "View Todo-List", "Delete Task", "Update Task", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "Exit") {
            condition = false;
        }
    }
};
//Function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task"
        }
    ]);
    todos.push(newTask.task);
    console.log(chalk.bgBlue.bold.italic("\n \t Your task added successfully.\n", todos));
};
//Function to view to do list tasks
let viewTask = async () => {
    console.log("\n Your Todo-List: \n");
    todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
};
//Function to delete task from the list
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter your task number to delete"
        }
    ]);
    let deletedtask = todos.splice(taskIndex.index - 1, 1);
    console.log(chalk.bgBlue.bold.italic("\n \t Your task deleted successfully.\n", todos));
};
//Function to update task from the list
let updateTask = async () => {
    await viewTask();
    let update_Task = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter your task number to update"
        },
        {
            name: "new_task",
            type: "input",
            message: "Please Enter your updated task"
        }
    ]);
    todos[update_Task.index = 1] = update_Task.new_task;
    console.log(chalk.bgBlue.bold.italic("\n \t Your task updated successfully.\n", todos));
};
main();
