function initMap(){
let options = {
    zoom:11,
    center:{lat:26.711890, lng:-80.052140}
}
let map = new google.maps.Map(document.getElementById('maps'), options);
let marker = new google.maps.Marker({
    position:{lat:26.711890, lng:-80.052140},
    map:map
});
        }