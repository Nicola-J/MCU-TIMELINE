function openMovie(moviePage) {
    window.location.href = moviePage;
}

window.onload = function () {
    const numberOfStars = 200; // Adjust the number of stars
    const body = document.querySelector('body');

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        body.appendChild(star);
    }
};

function toggleMovies() {
    const movieContainer = document.querySelector('.movie-container');
    const arrowButton = document.querySelector('.toggle-arrow');
    if (movieContainer.style.maxHeight) {
        movieContainer.style.maxHeight = null;
        arrowButton.innerHTML = '&#x2193; Show More Movies';

    } else {
        movieContainer.style.maxHeight = movieContainer.scrollHeight + "px";
        arrowButton.innerHTML = "&#x2191; Show Fewer Movies";
    }
}

