const APIUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const ImgPath = 'https://image.tmdb.org/t/p/w1280';

const searchAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='; 

const main = document.querySelector('main');
const form = document.querySelector('form');
const search = document.querySelector('search');

getMovieName();

async function getMovieName() {

    main.innerHTML = '';

    movies.results.forEach(movie =>{

        const {poster_path, title, vote_average} = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `<img src="${ImgPath + poster_path}" alt="${title}"> <div class="movieInfo"> <h3>${title}</h3> <span>${getClassByRate(vote_average)}</span> </div>`;

        main.appendChild(movieEl);
    });

    return responseData;
}



getClassByRate = (vote)=>{
    if(vote>=8)return "green";
    else if(vote>=5) return "orange";
    else {return "red";}
}


form.addEventListener('submit',(e)=>{
    e.preventDefault(); // we don't want to submit the form so we prevent it.

    const searchTerm = search.value;
})
