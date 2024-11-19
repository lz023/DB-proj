
// Handle Gate Assignment
document.getElementById("gateAssignmentForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const flightNumber = document.getElementById("flightNumber").value.trim();
    const gateNumber = document.getElementById("gateNumber").value.trim();
    const assignmentStatus = document.getElementById("assignmentStatus");

    if (flightNumber === "" || gateNumber === "") {
        assignmentStatus.textContent = "Please fill out all fields.";
        assignmentStatus.className = "alert alert-danger d-block";
        return;
    }

    // Simulate successful assignment
    assignmentStatus.textContent = `Gate ${gateNumber} successfully assigned to Flight ${flightNumber}.`;
    assignmentStatus.className = "alert alert-success d-block";
});
