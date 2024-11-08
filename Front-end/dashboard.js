document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
  
    // Check if the user is authenticated
    if (!token) {
      alert('You need to login first.');
      window.location.href = 'login.html';
      return;
    }
  
    // Fetch and display hangars and services
    fetchHangars();
    fetchServices();
  
    // Add new hangar
    document.getElementById('hangarForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const location = document.getElementById('location').value;
      const size = document.getElementById('size').value;
      const rentalRate = document.getElementById('rentalRate').value;
      const facilities = document.getElementById('facilities').value;
  
      const response = await fetch('http://localhost:5000/api/hangars', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ location, size, rentalRate, facilities })
      });
  
      if (response.ok) {
        alert('Hangar added successfully');
        fetchHangars(); // Refresh hangars list
      } else {
        alert('Error adding hangar');
      }
    });
  
    // Add new service
    document.getElementById('serviceForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('serviceTitle').value;
      const description = document.getElementById('serviceDescription').value;
      const price = document.getElementById('servicePrice').value;
  
      const response = await fetch('http://localhost:5000/api/services', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ title, description, price })
      });
  
      if (response.ok) {
        alert('Service added successfully');
        fetchServices(); // Refresh services list
      } else {
        alert('Error adding service');
      }
    });
  });
  
  // Fetch and display hangars
  async function fetchHangars() {
    const response = await fetch('http://localhost:5000/api/hangars', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const hangars = await response.json();
    const hangarsDiv = document.getElementById('hangars');
    hangarsDiv.innerHTML = '';
    hangars.forEach(hangar => {
      const hangarItem = document.createElement('div');
      hangarItem.classList.add('item');
      hangarItem.innerHTML = `
        <strong>Location:</strong> ${hangar.location} <br>
        <strong>Size:</strong> ${hangar.size} <br>
        <strong>Rental Rate:</strong> $${hangar.rentalRate} <br>
        <strong>Facilities:</strong> ${hangar.facilities}
      `;
      hangarsDiv.appendChild(hangarItem);
    });
  }
  
  // Fetch and display services
  async function fetchServices() {
    const response = await fetch('http://localhost:5000/api/services', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const services = await response.json();
    const servicesDiv = document.getElementById('services');
    servicesDiv.innerHTML = '';
    services.forEach(service => {
      const serviceItem = document.createElement('div');
      serviceItem.classList.add('item');
      serviceItem.innerHTML = `
        <strong>Title:</strong> ${service.title} <br>
        <strong>Description:</strong> ${service.description} <br>
        <strong>Price:</strong> $${service.price}
      `;
      servicesDiv.appendChild(serviceItem);
    });
  }
  