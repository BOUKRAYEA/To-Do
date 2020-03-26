document.getElementsByClassName("add")[0].addEventListener("click", addItems);
let tasks = document.getElementById("tasks") ;
function addItems(){
    if(tasks.value !== ""){
        
        let container = document.createElement('div');
        container.setAttribute('class', 'container');
        document.body.appendChild(container);

        let completebtn = document.createElement('button');
        completebtn.setAttribute("class", "completebtn");
        completebtn.setAttribute("style", "padding: 10px 30px; border-radius: 5px; background: #28a745; color: white; font-size: larger; margin-right: 10px;");
        completebtn.innerHTML = "Complete";
        document.body.appendChild(completebtn);
        
        let deletebtn = document.createElement('button');
        deletebtn.setAttribute("class", "deletebtn");
        deletebtn.setAttribute("style", "padding: 10px 30px; border-radius: 5px; background: #dc3545; color: white; font-size: larger; margin-right: 10px;");
        deletebtn.innerHTML = "Delete";
        document.body.appendChild(deletebtn);

        let taskcontent = document.createElement('label');
        taskcontent.setAttribute("class", "deletebtn");
        taskcontent.setAttribute("style", "color: #838383; font-size: 35px; margin-left: 20px;");
        taskcontent.innerHTML = tasks.value;
        document.body.appendChild(taskcontent);

        tasks.value = ""

        deletebtn.addEventListener("click", function(){
            completebtn.parentNode.removeChild(completebtn);
            deletebtn.parentNode.removeChild(deletebtn);
            taskcontent.parentNode.removeChild(taskcontent);
        })

        completebtn.addEventListener("click", function(){
            if(completebtn.innerHTML === "Complete"){
                completebtn.innerHTML = "Undo";
                taskcontent.setAttribute('style','text-decoration: line-through; color: #838383; font-size: 35px; margin-left: 20px;');
            } else{
                completebtn.innerHTML = "Complete";
                taskcontent.setAttribute('style', 'text-decoration: none; color: #838383; font-size: 35px; margin-left: 20px;');
            }
        })

    } else{
        alert("Tasks can't be blank!");
    }
}