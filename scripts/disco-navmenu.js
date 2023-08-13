function changeActive(id){
    var element = document.getElementById("all");
    element.className = "";
    element = document.getElementById("single");
    element.className = "";
    element = document.getElementById("album");
    element.className = "";
    element = document.getElementById("other");
    element.className = "";
    element = document.getElementById(id);
    element.className = "active";
    updateList();
}
function updateList(){
    var element = document.getElementsByClassName("active");
    var id = "disco-container-"+element[0].id;
    element = document.getElementById("disco-container-all");
    element.style.display = 'none';
    element = document.getElementById("disco-container-single");
    element.style.display = 'none';
    element = document.getElementById("disco-container-album");
    element.style.display = 'none';
    element = document.getElementById("disco-container-other");
    element.style.display = 'none';
    var container = document.getElementById(id);
    container.style.display = 'block';
    
}