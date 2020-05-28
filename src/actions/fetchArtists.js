

export function fetchArtists() {
    fetch(`http://localhost:3000/api/v1/artists`)
    .then(res => res.json())
    .then(data => console.log(data))


}
