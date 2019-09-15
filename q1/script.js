function carregarDocumentoXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            montarTabela(this);
        }
    };
    xhttp.open("GET", "nutrition.xml", true);
    xhttp.send();
}

function montarTabela(xml) {
    var xmlDoc = xml.responseXML;

    var tbody = "<tr><th>Nome</th><th>Calorias</th><th>Carboidratos</th><th>Proteínas</th></tr>";

    var foods = xmlDoc.getElementsByTagName("food");
    
    for(i = 0; i < foods.length; i++) {
        tbody += "<tr>" + 
        "<td>" + foods[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</td>" +
        "<td>" + foods[i].getElementsByTagName("kcal")[0].childNodes[0].nodeValue + "</td>" +
        "<td>" + foods[i].getElementsByTagName("carboidratos")[0].childNodes[0].nodeValue + "</td>" +
        "<td>" + foods[i].getElementsByTagName("proteinas")[0].childNodes[0].nodeValue + "</td>" +
        "</tr>";
    }
    document.getElementById("table").innerHTML = tbody;
}