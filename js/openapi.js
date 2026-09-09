document.getElementById("get-art").addEventListener("click", function(){
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=cat&fields=title,artist_display`)
        .then(response => response.json())
        .then(data => {
            const results = data.data;
            const randomPick = results[Math.floor(Math.random() * results.length)];
            document.getElementById("title").innerHTML = randomPick.title;
            document.getElementById("artist-display").innerHTML = randomPick.artist_display;
        });
            
})
