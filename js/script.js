let dataObject;

setInterval(function() {
    fetch(`https://api.lanyard.rest/v1/users/570693486500773888`)
        .then(response => response.json())
        .then(data => {
            dataObject = data;
            const activity = dataObject.data.activities[0];

            if (!activity) {
                document.getElementById('musicname').innerHTML = `Not active right now.`;
                document.getElementById('musicimage').setAttribute('src',
                    "assets/potato.gif"
                );
            } else {
                if (activity.name === "Spotify") {
                    document.getElementById('musicname').innerHTML = `${activity.name} - ${activity.details}<br>${dataObject.data.spotify.album} - ${activity.state || activity.details}`;
                    const img = dataObject.data.spotify.album_art_url;
                    document.getElementById('musicimage').setAttribute('src', img);
                } else {
                    const raw = activity.assets?.large_image || '';
                    document.getElementById('musicname').innerHTML = `${activity.name}<br>${activity.state || ''}`;

                    if (raw.startsWith("mp:external/")) {
                        const img = "https://" + raw.split("/https/")[1];
                        document.getElementById('musicimage').setAttribute('src', img);
                    } else {
                        document.getElementById('musicimage').setAttribute('src',
                            "assets/potato.gif"
                        );
                    }
                }
            }
        });
}, 5000);

