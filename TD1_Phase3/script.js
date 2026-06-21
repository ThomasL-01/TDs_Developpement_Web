let id = 1;

function ajouterLigne(){

    let port = document.getElementById("port");
    let ip = document.getElementById("ip");
    let type = document.getElementById("type");
    let severite = document.getElementById("severite");
    id +=1;
    let text_id;
    if (id < 10) {
        text_id = "00"+id;
    }
    else if (id < 100) {
        text_id = "0"+id;
    }
    else {
        text_id = id;
    }
    let array = [text_id, new Date()];

    if (port.value == ""){
        alert("Il faut renseigner le numéro de port");
        id -=1;
    }
    else if (ip.value === ""){
        alert("Il faut renseigner l'ip source");
        id -=1;
    }
    else {
        let tableau = document.getElementById("tableau");
        array.push(ip.value);
        array.push(type.value);
        array.push(severite.value);
        let newRow = tableau.insertRow(1);
        for (let i = 0; i < 5; i++){
            let newCell = newRow.insertCell(i)
            let newText = document.createTextNode(array[i]);
            newCell.appendChild(newText);
        }
        alert("Ligne ajoutée avec succès");
    }
}
