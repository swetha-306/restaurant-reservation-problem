const form = document.getElementById('reservationForm');
const reservationList = document.getElementById('reservationList');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const time = document.getElementById('time').value;

    
    const listItem = document.createElement('li');
    listItem.textContent = ${name} - ${guests} guests at ${time};

    
    reservationList.appendChild(listItem);

    form.reset();
});