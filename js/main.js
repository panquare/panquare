$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        responsive : {
                 0 : {
                     items: 2,
                     margin: 32,
                     loop: true,
                     dots: false,
                    //  stagePadding: 90,
                },  
                601 : {
                    items: 3,
                    dots: false,
                    margin: 32,
                    loop: true,
            },
                1001 : {
                items: 3,
                margin: 48,
                dots: false,
                loop: true,    
            },
        },
    });
  });

  const videoBtn =  document.querySelector('#video-btn');
  const videoPicture = document.querySelector('.video___picture');
  const videoWrapper = document.querySelector('.video');
  const video = document.querySelector('#video-file');

  videoWrapper.addEventListener('click', function () {  
        if (video.paused) {
            videoPicture.classList.add('none');
            videoWrapper.classList.remove('video-overlay');
            videoBtn.classList.add('none');
            video.play()
        } else {
            video.pause();
            videoWrapper.classList.add('video-overlay');
            videoBtn.classList.remove('none');
        }
  });