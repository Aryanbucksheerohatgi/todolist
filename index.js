let todo = (JSON.parse(localStorage.getItem("tododata"))) || [];

const init = () => {
    document.getElementById("listbox").innerHTML = "";
    for(let i of todo){
        let tempitem = document.createElement("button");
        let tempattr = document.createAttribute("onclick");
        tempattr.value = "remover(this.id)";
        let btnid = document.createAttribute("id");
        btnid.value = `${i}btn`;
        tempitem.setAttributeNode(tempattr);
        tempitem.setAttributeNode(btnid);
        tempitem.innerText = i;
        document.getElementById("listbox").appendChild(tempitem);
    }
    localStorage.setItem("tododata",JSON.stringify(todo));
}
init();


const damn = () => {
    todo.push(document.getElementById("rat").value)
    init();
}


const remover = (temp) => {
    todo.splice(todo.indexOf(document.getElementById(temp).innerText),1);
    document.getElementById(temp).remove();
    init();
}