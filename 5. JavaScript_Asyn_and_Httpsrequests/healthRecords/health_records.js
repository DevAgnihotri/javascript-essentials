var xhr = new XMLHttpRequest();

var url = "./health_records.json";

xhr.open("GET", url, true);

xhr.responseType = "json";

xhr.onload = function () {
    var records = xhr.response.records;
    var recordsDiv = document.getElementById("records");
    console.log(records);

    records.forEach(function(record) {
        var recordDiv = document.createElement("div");
        recordDiv.classList.add("record");

        var id = document.createElement("h2");
        id.textContent = "Patient " + record.id;

        var name = document.createElement("p");
        name.innerHTML = "<b> Name: </b> " + record.name;

        var age = document.createElement("p");
        age.textContent = "Age: " + record.age;

        var condition = document.createElement("p");
        condition.textContent = "Condition: " + record.condition;

        var lastCheckup = document.createElement("p");
        lastCheckup.textContent = "Last Checkup Date: " + record.lastCheckup;

        recordDiv.appendChild(id);
        recordDiv.appendChild(name);
        recordDiv.appendChild(age);
        recordDiv.appendChild(condition);
        recordDiv.appendChild(lastCheckup);

        recordsDiv.appendChild(recordDiv);
    }        
    );

}
xhr.send();