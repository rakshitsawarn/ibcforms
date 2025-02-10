document.addEventListener('DOMContentLoaded', () => {
    const filter = document.getElementById('filter');
    const searchBar = document.getElementById('searchBar');
    const searchButton = document.getElementById('searchButton');
    const buyerList = document.getElementById('buyerList');

    // Load buyers from localStorage
    const buyers = JSON.parse(localStorage.getItem('buyers')) || [];

    // Populate category filter dropdown
    const categories = [...new Set(buyers.map(buyer => buyer.category))];
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filter.appendChild(option);
    });

    // Function to display buyers
    const displayBuyers = (filteredBuyers) => {
        buyerList.innerHTML = ''; // Clear previous list
        filteredBuyers.forEach(buyer => {
            const div = document.createElement('div');
            div.className = 'buyer-item';
            div.innerHTML = `
                <h3>${buyer.name}</h3>
                <p>Place: ${buyer.place}</p>
                <p>Contact: ${buyer.contact}</p>
                <p>Category: ${buyer.category}</p>
                <p>Price: $${buyer.price}</p>
            `;
            buyerList.appendChild(div);
        });
    };

    // Display all buyers initially
    displayBuyers(buyers);

    // Filter buyers by category
    filter.addEventListener('change', () => {
        const category = filter.value;
        const filteredBuyers = category
            ? buyers.filter(buyer => buyer.category === category)
            : buyers;
        displayBuyers(filteredBuyers);
    });

    // Search buyers by name
    searchButton.addEventListener('click', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const filteredBuyers = buyers.filter(buyer =>
            buyer.name.toLowerCase().includes(searchTerm)
        );
        displayBuyers(filteredBuyers);
    });
});
