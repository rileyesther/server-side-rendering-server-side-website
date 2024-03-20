document.addEventListener('DOMContentLoaded', function() {
    const citySearch = document.getElementById('city-search');
    const searchButton = document.querySelector('.search-button');
    const housesContainer = document.getElementById('houses-container');

    searchButton.addEventListener('click', function() {
        searchHouses();
    });

    function searchHouses() {
        const searchTerm = citySearch.value.trim().toLowerCase();

        // Fetch houses data based on the city search term
        fetch(`/houses?city=${searchTerm}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch houses data');
                }
                return response.json();
            })
            .then(data => {
                // Clear previous house listings
                housesContainer.innerHTML = '';

                // Render filtered houses
                data.forEach(house => {
                    const houseElement = createHouseElement(house);
                    housesContainer.appendChild(houseElement);
                });
            })
            .catch(error => {
                console.error('Error fetching houses data:', error);
            });
    }

    function createHouseElement(house) {
        const article = document.createElement('article');
        article.classList.add('house');

        const img = document.createElement('img');
        img.classList.add('house-image');
        img.src = `https://fdnd-agency.directus.app/assets/${house.poster_image}`;
        img.alt = house.street;

        const houseInfo = document.createElement('div');
        houseInfo.classList.add('house-info');

        const street = document.createElement('h2');
        street.textContent = house.street;

        const city = document.createElement('p');
        city.classList.add('house-city');
        city.textContent = house.city;

        const price = document.createElement('p');
        price.textContent = `€${house.price}`;

        houseInfo.appendChild(street);
        houseInfo.appendChild(city);
        houseInfo.appendChild(price);

        article.appendChild(img);
        article.appendChild(houseInfo);

        return article;
    }
});
