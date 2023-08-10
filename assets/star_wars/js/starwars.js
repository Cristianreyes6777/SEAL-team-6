searchInputEl = document.getElementById('searchInput');
searchButtonEl = document.getElementById('searchButton');

function starWarsDisplay() {
    searchInputEl.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            pullStarWarsData();
            event.preventDefault();
        }
    });

    searchButtonEl.addEventListener('click', function (event) {
        pullStarWarsData();
        event.preventDefault();
    });

    function pullStarWarsData() {  
            let requesturl = `https://swapi.dev/api/people/`;

            fetch(requesturl)
            .then(function (response) { 
                return response.json();
             })
             .then(function (starData) {
                console.log(starData);
             })
    }
}

starWarsDisplay();