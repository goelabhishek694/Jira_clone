let filterColor=document.querySelectorAll(".colour");
let main_container=document.querySelector(".main_container");
let addTask=document.querySelector(".fa-plus");
let body=document.body;


for(let i=0;i<filterColor.length;i++){
    console.log("inside for");
    filterColor[i].addEventListener("click",function(){
        let style=getComputedStyle(filterColor[i]);
        let color=style.backgroundColor;
        main_container.style.backgroundColor=color;
    });
}

// for(let i=0;i<filterColor.length;i++){
//     console.log("inside for");
//     filterColor[i].addEventListener("click",changeColor(filterColor[i]));
// }

// function changeColor(selectedColor){
//     let style=getComputedStyle(selectedColor);
//     let color=style.backgroundColor;
//     main_container.style.backgroundColor=color;
// }

addTask.addEventListener("click",createModal);
function createModal(){
    let closeModal=document.querySelector(".modal_container");
    if(closeModal!=null){
        // console.log("modal is present");
        // console.log(closeModal);
        closeModal.remove();
    }
    else{
        let modal_container=document.createElement("div");
        modal_container.setAttribute("class","modal_container");
        modal_container.innerHTML=
        `<div class="input_container">
        <textarea class="modal_input" placeholder="Enter your task"></textarea>
        </div>
        <div class="modal_filter_container">
            <div class="filter">
                <div class="colour blue"></div>
            </div>
            <div class="filter">
                <div class="colour pink"></div>
            </div>
            <div class="filter">
                <div class="colour yellow"></div>
            </div>
            <div class="filter">
                <div class="colour red border"></div>
            </div>
        </div>`
        body.appendChild(modal_container);
        let taskColor=document.querySelectorAll(".modal_filter_container>.filter>.colour");
        selectPriority(taskColor);
    }
};

function selectPriority(taskColor){
    let color;
    for(let i=0;i<taskColor.length;i++){
        taskColor[i].addEventListener("click",function(){
            let ele=document.querySelector(".border");
            ele.classList.remove("border");
            taskColor[i].classList.add("border");
            let style=getComputedStyle(taskColor[i]);
            color=style.backgroundColor;
        });
    }

    let textArea=document.querySelector(".modal_input");
    
    
    textArea.addEventListener("keydown",function(e){
        let task=textArea.value;
        if(e.key=="Enter" && task!=""){
            console.log("inside if");
            console.log(task);
            let modal_container=document.querySelector(".modal_container");
            modal_container.remove();
            createTask(task,color);
        }
    });  
}


function createTask(task,color){
    let div=document.createElement("div");
    div.setAttribute("class","task_container");
    div.innerHTML=
    `<div class="task_color"></div>
    <div class="task_id">Element id</div>
    <div class="task" contentEditable="true" >${task}</div>
    `
    main_container.appendChild(div);
    let ele=document.querySelectorAll(".task_color");
    ele[ele.length-1].style.backgroundColor=color;

}
