setInterval(function() {
    fetch(`https://itch.io/api/1/${atob(atob("UTJrMFVWVkxSMWN5ZGpWaVVtRlNXV3BqV2toRFNqQkJiVXR0U0dVNWFWQnNSRmRXTWpSV2FRPT0="))}/my-games`, {mode: "cors"})
    .then(response => response.json())
    .then(data => {
dataObject = data;
console.log(JSON.parse())
});
}, 1000)