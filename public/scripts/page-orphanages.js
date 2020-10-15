const map = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();


// Video 1h24
// ajuda mapa:
// https://github.com/guilhermecapitao/nlw3-discovery-happy/tree/9b50eab9aba16fa79e781a03bb6ffea0428be758
// https://github.com/devgabrieldejesus/happy