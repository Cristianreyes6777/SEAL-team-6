searchInputEl = document.getElementById('searchInput');
resultContainerEl = document.getElementById('resultContainer');
selectTableEl = document.getElementById('selectTable');
optionsEl = document.getElementsByClassName('options')
nameBlockEl = document.getElementById('nameBlock');

let starWarsPicture = document.createElement('img');
resultContainerEl.appendChild(starWarsPicture);

document.getElementById('selectTable').addEventListener('change', function (event) {
    pullStarWarsData();
    event.preventDefault();
    let userChoose = selectTableEl.value;
    console.log('test', userChoose);
    if (userChoose != undefined) {
        console.log('userchoose', userChoose)
        starWarsPicture.src = './star_wars/images/' + userChoose + '.jpg'
    }
});

function pullStarWarsData() {
    let requesturl = `https://swapi.dev/api/people/?search=${selectTableEl.value}`;

    fetch(requesturl)
        .then(function (response) {
            return response.json();
        })
        .then(function (starData) {
            console.log('data', starData);

            const CharacterName = starData.results[0].name;
            console.log('name', CharacterName);
            const films = starData.results[0].films;
            console.log('films', films);

            let warsName = document.createElement('p');
            warsName.textContent = CharacterName;
            nameBlockEl.appendChild(warsName);
        })
    clearSearch()
}


function clearSearch() {
    nameBlockEl.textContent = '';
}  