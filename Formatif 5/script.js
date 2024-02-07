const taskInput = document.getElementById ("taskInput") ;
const addTaskBtn = document.getElementById ("addTaskBtn");
const taskList = document.getElementById ("taskList")

addTaskBtn.addEventListener("click", addTask);
function addTask() {
    const taskText = taskInput.value.trim();
    // La fonction trim() en JavaScript est utilisée pour supprimer les espaces (espaces, tabulations et nouvelles lignes) au début et à la fin d'une chaîne.
    if (taskText !== ""){
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild( listItem);
        taskInput.value = "";
        // Ajoutez un bouton de suppression à chaque élément de liste
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Supprimer";

        // La méthode JavaScript appendChild() est utilisée pour insérer un nouveau nœud ou repositionner un nœud existant en tant que dernier enfant d'un nœud parent particulier.
        listItem.appendChild(deleteBtn);

        deleteBtn.addEventListener("click", () => {
        listItem.remove(addTaskBtn);
    });
} 
    else {
    alert("Veuillez entrer une tâche valide.");
    }

localStorage.setItem("tache", taskText)
}
