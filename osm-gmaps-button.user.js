// ==UserScript==
// @name         OSM GMaps Button
// @namespace    https://github.com/marvk/osm-gmaps-button
// @version      1.0.0
// @description  Adds a GMaps button to OSM
// @author       marvk
// @match        https://www.openstreetmap.org/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openstreetmap.org
// @grant        none
// ==/UserScript==

function getFragment(key) {
    const matches = location.hash.match(new RegExp(key + '=([^&]*)'));
    return matches ? matches[1] : null;
}

function openGoogleMapsLink(lat, lon, zoom) {
    window.open(`https://www.google.com/maps/@${lat},${lon},${zoom}z`, '_blank').focus();
}

function findButtonGroup() {
    return document
        .getElementsByTagName('header')[0]
        .getElementsByClassName('primary')[0]
        .getElementsByClassName('btn-group')[0];
}

function createGoogleMapsButton() {
    const button = document.createElement('a');

    button.classList.add('btn-outline-primary');
    button.classList.add('btn');
    button.textContent = 'GMaps';
    button.onclick = () => {
        const split = getFragment('map').split('/');
        openGoogleMapsLink(split[1], split[2], split[0]);
    };

    return button;
}

findButtonGroup().appendChild(createGoogleMapsButton());
