document.addEventListener('DOMContentLoaded', function () {
    const addEventBtn = document.getElementById('addEventBtn');
    const eventModal = document.getElementById('eventModal');
    const closeModal = document.querySelector('.close');
    const eventForm = document.getElementById('eventForm');
    const viewMode = document.getElementById('viewMode');
    
    // Open modal to add/edit event
    addEventBtn.addEventListener('click', function () {
        eventModal.style.display = 'block';
    });
    
    // Close modal
    closeModal.addEventListener('click', function () {
        eventModal.style.display = 'none';
    });
    
    // Handle form submission
    eventForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const eventTitle = document.getElementById('eventTitle').value;
        const eventDate = document.getElementById('eventDate').value;
        const eventTime = document.getElementById('eventTime').value;
        const eventReminder = document.getElementById('eventReminder').checked;

        alert(`Evento: ${eventTitle}\nFecha: ${eventDate} ${eventTime}\nRecordatorio: ${eventReminder ? 'Sí' : 'No'}`);
        eventModal.style.display = 'none';
    });
    
    // Change calendar view
    viewMode.addEventListener('change', function () {
        const mode = viewMode.value;
        alert(`Vista cambiada a: ${mode}`);
    });
});
