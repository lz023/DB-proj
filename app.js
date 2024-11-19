// JavaScript Code

// Search Button Click Event
document.getElementById('searchButton').addEventListener('click', () => {
    const searchQuery = document.getElementById('flightSearch').value;
    if (searchQuery.trim() === "") {
        alert("Please enter a flight number, city, or airline.");
    } else {
        alert(`Searching for: ${searchQuery}`);
    }
});


const flights = [
    { flightNumber: 'AA101', status: 'On Time', departure: '2024-11-20T10:00', arrival: '2024-11-20T12:00' },
    { flightNumber: 'BB202', status: 'Delayed', departure: '2024-11-21T14:30', arrival: '2024-11-21T17:00' },
    { flightNumber: 'CC303', status: 'Cancelled', departure: '2024-11-22T08:00', arrival: '2024-11-22T10:30' }
];

// Function to display the flight status in the table
function displayFlightStatus(flights) {
    const statusTable = document.getElementById('statusTable');
    const statusResult = document.getElementById('statusResult');
    const noResults = document.getElementById('noResults');

    // Clear previous search results
    statusTable.innerHTML = '';
    noResults.classList.add('d-none');  // Hide no results message
    statusResult.classList.remove('d-none');  // Show the result section

    if (flights.length === 0) {
        noResults.classList.remove('d-none');  // Show no results message if no flights match
        statusResult.classList.add('d-none');
    } else {
        flights.forEach(flight => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${flight.flightNumber}</td>
                <td>${flight.status}</td>
                <td>${new Date(flight.departure).toLocaleString()}</td>
                <td>${new Date(flight.arrival).toLocaleString()}</td>
            `;
            statusTable.appendChild(row);
        });
    }
}

// Function to handle the search form submission
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const query = document.getElementById('searchQuery').value.toLowerCase();
    
    // Filter flights based on the search query (search by flight number, status, or city)
    const filteredFlights = flights.filter(flight => 
        flight.flightNumber.toLowerCase().includes(query) ||
        flight.status.toLowerCase().includes(query) ||
        flight.departure.toLowerCase().includes(query)
    );
    
    // Display the filtered flights
    displayFlightStatus(filteredFlights);
});
</script>

</body>
</html>
