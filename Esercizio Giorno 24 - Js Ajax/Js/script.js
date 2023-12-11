document.addEventListener('DOMContentLoaded', () => {
    function caricaImmagini() {
        let button = document.querySelector('.btn-primary');
        button.addEventListener('click', function(e) {
            fetch('https://api.pexels.com/v1/search?query=dog', {
                method: 'GET',
                headers: {
                    Authorization: 'tbnOUaEklrUid5km1kGERw8OxWWKtwRyAcmA2GL3An75xF8puMAFmOJa'
                }
            })
            .then(response => response.json())
            .then(json => {
                let imgs = document.querySelectorAll('.card img');
                imgs.forEach((img, index) => {
                    img.src = json.photos[index].src.medium;
                });
            })
            .catch(error => console.log(error));
        });
    }
    caricaImmagini();
});