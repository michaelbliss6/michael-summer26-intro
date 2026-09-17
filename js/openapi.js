let currentArtwork = null;

document.getElementById("get-art").addEventListener("click", function(){
    fetch(`https://api.artic.edu/api/v1/artworks/search?q=cats&fields=id,title,artist_display,image_id`)
        .then(response => response.json())
        .then(data => {
            const results = data.data;
            const withImages = results.filter(r => r.image_id);
            const randomPick = withImages[Math.floor(Math.random() * withImages.length)];
            
            currentArtwork = randomPick;
            
            document.getElementById("title").innerHTML = randomPick.title;
            document.getElementById("artist-display").innerHTML = randomPick.artist_display;
            
            const imageUrl = `https://www.artic.edu/iiif/2/${randomPick.image_id}/full/843,/0/default.jpg`;
            document.getElementById("placeholder").src = imageUrl;

            document.getElementById("medium-display").innerHTML = "(Click the button below to show the art medium)";

            console.log(randomPick);
                })
        .catch(error => {
            console.error("Failed to fetch artwork:", error);
            document.getElementById("title").innerHTML = "Something went wrong loading the artwork.";
        });
})

document.getElementById("get-medium").addEventListener("click", function(){
    if (!currentArtwork) {
        document.getElementById("medium-display").innerHTML = "Load an artwork first!";
        return;
    }

    fetch(`https://api.artic.edu/api/v1/artworks/${currentArtwork.id}?fields=medium_display`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("medium-display").innerHTML = data.data.medium_display;
        })
        .catch(error => {
            console.error("Failed to fetch medium:", error);
            document.getElementById("medium-display").innerHTML = "Something went wrong loading the medium.";
        });
});