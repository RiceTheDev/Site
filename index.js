let dataObject;

setInterval(function() {
    fetch(`https://api-itchio.onrender.com/games`)
    .then(response => response.json())
    .then(data => {
        for(obj in data){
            console.log(obj);
        }
    });
}, 1000)