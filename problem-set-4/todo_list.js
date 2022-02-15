//Part 2: Adding To-Do items
function addTask (description, dueTime){
    var timestamp = dueTime;
    var taskString = description;
    //create li
    var node = document.createElement("li");
    node.appendChild(document.createTextNode(taskString));

    //create button
    var button = document.createElement("button");
    button.setAttribute("class","btn btn-sm btn-outline-danger done");
    button.setAttribute("type","button");
    button.innerHTML = "Done";
    //Part6: Removing "done" tasks
    button.addEventListener("click", (e) => {
        node.remove();
    });

    if(timestamp){ // with dueTime
        var date = new Date(timestamp); // convert to date
        var span = document.createElement("span");
        span.setAttribute("class","due");
        span.innerHTML = date;
        node.appendChild(span);
    }
    node.appendChild(button);
    document.getElementById("task_list").appendChild(node);
}

addTask("Hold interview", 1645203775000); // Friday, February 18, 2022 12:02:55 PM GMT-05:00
addTask("Wash dishes");
addTask("Finish SI579 problem set", 1645043455000) // Wednesday, February 16, 2022 3:30:55 PM GMT-05:00

//Part 3: Making the "Add Task" button work
const inputDescription = document.getElementById("task_description_input");
const inputDate = document.getElementById("duedate_input");
const inputTime = document.getElementById("duetime_input");
const addTaskButt = document.getElementById("add_task");

    //convert date & time to timestamp 
function dateAndTimeToTimestamp(dateInputElement, timeInputElement) {
    const dueDate = dateInputElement.valueAsNumber; // Returns the timestamp at midnight for the given date
    const dueTime = timeInputElement.valueAsNumber; // Returns the number of milliseconds from midnight to the time

    if(dueDate && dueTime) { // The user specified both a due date & due time
        //Add the timezone offset to account for the fact that timestamps are specified by UTC
        const timezoneOffset =  (new Date()).getTimezoneOffset() * 60 * 1000;
        return dueDate + dueTime + timezoneOffset;
    } else {
        // if the user did not specify both a due date and due time, return false
        return false;
    }
}

function clearInput() {
    inputDescription.value = "";
    inputDate.value = "";
    inputTime.value = ""
}

addTaskButt.addEventListener("click", (e) => {
    addTask(inputDescription.value, dateAndTimeToTimestamp(inputDate, inputTime));    
    //Part 5: Clearing the input elements after adding a new todo
    clearInput();
});

//Part4: Adding a Keyboard Shortcut
const submitEnter = document.getElementById("task_description_input");
submitEnter.addEventListener("keydown", (e) => {
    if (e.isComposing || e.keyCode === 13) { //key code for Enter is 13
        addTask(inputDescription.value, dateAndTimeToTimestamp(inputDate, inputTime));
        //Part 5: Clearing the input elements after adding a new todo
        clearInput();
    }
});

