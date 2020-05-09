
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
                };

                $('.carousel.carousel-slider').carousel({
                    fullWidth: true
                  });    

 

// const elems = document.querySelectorAll(".carousel");
// M.Carousel.init(elems, {
//   indicators: false,
//   height: 530,
//   transition: 500,
//   interval: 6000,
//   fullWidth: true
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });