let searchBtnEl = document.getElementById('searchButton');
let searchInput = document.getElementById('searchInput');
let resultContainerEl = document.getElementById('resultContainer');

var date = new Date().getTime();

// const superHeroApi = "6892054020806695";

let timestamp = "1691453170698";
const apikey = "20e00c1407fc4a0bb65638f058fde679";
const hashValue = "54b9b99a9e2badca952f126a7e14540e";

function marvelSearch() {
    searchInput.addEventListener('keypress', function (event) {

        if (event.key === 'Enter') {

            let requesturl = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apikey}&hash=${hashValue}&name=${searchInput.value}`;

            fetch(requesturl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (marvalData) {
                    console.log(marvalData)
                
                    const marvelCharName = marvalData.data.results[0].name;
                    const marvelCharDescipt = marvalData.data.results[0].description;
                    const marvelPic = marvalData.data.results[0].thumbnail.path + ".jpg"

                    console.log('mp',marvelPic);

                    let marvelPicture = document.createElement('img');
                    marvelPicture.src = marvelPic;
                    resultContainerEl.appendChild(marvelPicture);

                    let marvelName = document.createElement('p');
                    marvelName.textContent = marvelCharName;
                    resultContainerEl.appendChild(marvelName);

                    let marvelDesc = document.createElement('p');
                    marvelDesc.classList.add('desc')
                    marvelDesc.textContent = marvelCharDescipt;
                    resultContainerEl.appendChild(marvelDesc);

                    console.log(marvelCharName);
                    console.log(marvelCharDescipt);
                })
            event.preventDefault();
            document.getElementById(searchBtnEl);
        }
    })
}

marvelSearch();