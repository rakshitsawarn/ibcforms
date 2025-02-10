document.getElementById('buyerForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Capture form data
    const buyerData = {
        name: document.getElementById('name').value,
        place: document.getElementById('place').value,
        contact: document.getElementById('contact').value,
        category: document.getElementById('category').value,
        price: document.getElementById('price').value,
    };

    // Store data in localStorage (or send to backend via API)
    let buyers = JSON.parse(localStorage.getItem('buyers')) || [];
    buyers.push(buyerData);
    localStorage.setItem('buyers', JSON.stringify(buyers));

    alert('Buyer registered successfully!');
    event.target.reset(); // Clear form fields
});
