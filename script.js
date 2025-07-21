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
                    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ozcmFidTZubmxqaGY2ZndtMjUxbDNzeThoNjdyaGMzbnV2b25icyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PGSHq2Bqn6g67cGpAR/giphy.gif"
                );
            } else {
                if (activity.name === "Spotify") {
                    document.getElementById('musicname').innerHTML = `${activity.name}<br>${dataObject.data.spotify.album} - ${activity.state || activity.details}`;
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
                            "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2ozcmFidTZubmxqaGY2ZndtMjUxbDNzeThoNjdyaGMzbnV2b25icyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/PGSHq2Bqn6g67cGpAR/giphy.gif"
                        );
                    }
                }
            }
        });
}, 5000);
