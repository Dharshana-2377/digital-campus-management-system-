
function addStudent() {
    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("rollNumber").value.trim();
    let department = document.getElementById("department").value.trim();

    if (name === "" || roll === "" || department === "") {
        alert("Please fill all the fields");
        return;
    }

    let table = document.getElementById("studentList");

    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = roll;
    row.insertCell(2).innerText = department;

    document.getElementById("studentName").value = "";
    document.getElementById("rollNumber").value = "";
    document.getElementById("department").value = "";

    alert("Student added successfully!");
}
