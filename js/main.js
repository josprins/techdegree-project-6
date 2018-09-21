const video = document.querySelector('video');
const span = document.querySelectorAll('span');

video.addEventListener('timeupdate', function() {

    for (let i = 0; i < span.length; i += 1) {
        let dataStart = span[i].getAttribute('data-start');
        let dataEnd = span[i].getAttribute('data-end');
        let currentTime = video.currentTime;
        if (currentTime > dataStart && currentTime < dataEnd) {
            span[i].style.color = '#e6ac37';
        } else {
            span[i].style.color = '#4e4e4e';
        }
    }
    
});


