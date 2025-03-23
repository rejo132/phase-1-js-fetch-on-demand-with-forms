// src/index.js

const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('#searchByID');
      const id = input.value.trim();
  
      if (id) {
        fetch(`http://localhost:3000/movies/${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Movie not found');
            }
            return response.json();
          })
          .then(data => {
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');
            title.innerText = data.title;
            summary.innerText = data.summary;
          })
          .catch(error => {
            console.error('Error:', error);
            const title = document.querySelector('#movieDetails h4');
            const summary = document.querySelector('#movieDetails p');
            title.innerText = 'Error';
            summary.innerText = 'Movie not found or server error';
          });
      }
    });
  };
  
  document.addEventListener('DOMContentLoaded', init);