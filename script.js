let dataObject;

setInterval(function() {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Rice_Dev&api_key=${atob("NjdkNTM2MDM2NGJlNGEyNTE2YjBkYzdhNTRjNmRiMjM=")}&format=json`)
    .then(response => response.json())
    .then(data => {
dataObject = data;
if (dataObject["recenttracks"]["track"][0]["@attr"] == undefined){
        document.getElementById('musicname').innerHTML = `Not listening right now.`
        document.getElementById('simm').setAttribute('src', "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ozcmFidTZubmxqaGY2ZndtMjUxbDNzeThoNjdyaGMzbnV2b25icyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PGSHq2Bqn6g67cGpAR/giphy.gif")
} else {
document.getElementById('musicname').innerHTML = `${dataObject["recenttracks"]["track"][0]["name"]} <a href="${'https://open.spotify.com/search/' + dataObject["recenttracks"]["track"][0]["name"]}" id="iconms"><i style="color: white; padding-left: 3px;" class="fa-brands fa-spotify"></i></a><br>${dataObject["recenttracks"]["track"][0]["artist"]["#text"]}`
document.getElementById('simm').setAttribute('src', dataObject["recenttracks"]["track"][0]["image"][3]["#text"]);
}
});
}, 1000)