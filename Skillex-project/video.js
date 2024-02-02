

const bxPause = document.querySelector('.bx-pause');
const bxPlay = document.querySelector('.bx-play');
const video = document.getElementById('video__skills');

bxPause.addEventListener('click', () => {
    video.pause();
    bxPause.classList.add('display-video')
    bxPlay.classList.remove('display-video')
})

bxPlay.addEventListener('click', () => {
    video.play();
    bxPause.classList.remove('display-video')
    bxPlay.classList.add('display-video')
})





