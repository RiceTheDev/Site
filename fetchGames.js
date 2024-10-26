let dataObject;

setInterval(function() {
    fetch(`https://api-itchio.onrender.com/games`, {mode: "no-cors"})
    .then(response => response)
    .then(data => {
        console.log(data)
    });
}, 1000)