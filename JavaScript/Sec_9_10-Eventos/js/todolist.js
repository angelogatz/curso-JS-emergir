;(function(){
    "use strict"

    //armazenar o dom em variaveis

    const itemImput = document.getElementById("item-input")
    const toAddForm = document.getElementById("todo-add")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")

    let arrTasks = getSavedData()

    function getSavedData(){
        let tasksData = localStorage.getItem("tasks")
        tasksData = JSON.parse(tasksData)

        return tasksData.length ? tasksData : [
            {
                name: "task 1",
                createAt: Date.now(),
                completed: false,
            },
            {
                name: "task 2",
                createAt: Date.now(),
                completed: false,
            },
        ]
        
    }

    function setNewData(){
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
        
    }

    setNewData()

    //function addEventLi(li){
    //    li.addEventListener("click", function() {
    //         console.log(this)
    //    })
    //}

    function generateLiTask(obj){
        const p = document.createElement("p")
        const li = document.createElement("li")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"

        checkButton.classList.add("button-check")
        checkButton.innerHTML = ("<i class='fas fa-check displayNone' data-action='checkButton'></i>")
        checkButton.setAttribute("data-action", "checkButton")

        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)


        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)



        const containerEdit = document.createElement("div")
        const inputEdit = document.createElement("input")
        const cancelButton = document.createElement("button")
        const containerEditButton = document.createElement("button")
        containerEdit.className = "editContainer"
        inputEdit.setAttribute("type", "text")
        inputEdit.className = "editinput"
        inputEdit.value = obj.name


        containerEdit.appendChild(inputEdit)
        cancelButton.className = "cancelButton"
        cancelButton.textContent = "cancel"
        cancelButton.setAttribute("data-action", "cancelButton")
        containerEdit.appendChild(cancelButton)
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)

        li.appendChild(containerEdit)


        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "deleteButton")
        li.appendChild(deleteButton)

        //addEventLi(li)
        return li
    }

    function renderTasks(){
        ul.innerHTML = ""
        arrTasks.forEach(task => {
            ul.appendChild(generateLiTask(taskObj))
        });
    }

    function addTask(task){
        arrTasks.push({
            name: task,
            createAt: Date.now(),
            completed: false
        })
       setNewData()
        
    }


    function clickedUl(e){
       const dataAction = e.target.getAttribute("data-action")
       if(!dataAction) return

       let currentLi = e.target
       while(currentLi.nodeName !== "LI"){
           currentLi = currentLi.parentElement
        }
       const currentLiIndex = [...lis].indexOf(currentLi)
       const lastI = currentLi.lastElementChild

       const actions = {
            editButton: function(){
                lastI.previousElementSibling.style.display = "flex"
            },
            deleteButton: function(){
                arrTasks.splice(currentLiIndex, 1)
                //renderTasks()
                currentLi.remove()
                setNewData()
            },
            cancelButton: function(){
                lastI.previousElementSibling.style.display = "none"
                itemImput.focus()
            },
            containerEditButton: function(){
                const inputE = currentLi.querySelector(".editinput").value
                const fElement = currentLi.firstElementChild
                fElement.nextElementSibling.textContent = inputE
                lastI.previousElementSibling.style.display = "none"
                itemImput.focus()
                setNewData()
            },
            checkButton: function(){
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed
                if(arrTasks[currentLiIndex].completed){
                    currentLi.querySelector(".fa-check").classList.remove("displayNone")
                } else {
                    currentLi.querySelector(".fa-check").classList.add("displayNone")
                }
                setNewData()


            }
        }

       if(actions[dataAction]) {
        actions[dataAction]()
       }
    }

        


    toAddForm.addEventListener("submit", function(e){
        e.preventDefault()
       
        addTask(itemImput.value)
        renderTasks()

        itemImput.value = ""
        itemImput.focus()
    });

    ul.addEventListener("click", clickedUl)

    renderTasks()
    
})()