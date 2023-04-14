let songIndex = 0;
let audioElement = new Audio(`song${0}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let scroll = document.getElementById('scroll');
let gif = document.getElementById('gif');
let mastersong=document.getElementById('mastersong');
let songlist = Array.from(document.getElementsByClassName('songlist'));
let songs = [
    { SongName: "O sajna- Akhil Sachdeva", filePath: "song0.mp3", CoverPath: "song.jpg" },
    { SongName: "Tere Naal- Akhil Sachdeva", filePath: "song1.mp3", CoverPath: "song1.jpg" },
    { SongName: "Kya Kiya hai Tune- Armaan Malik", filePath: "song2.mp3", CoverPath: "song2.jpg" },
    { SongName: "Mere Liye - Akhil Sachdeva", filePath: "song3.mp3", CoverPath: "song3.jpeg" },
    { SongName: "kahani sunno - kaifi khali", filePath: "song4.mp3", CoverPath: "song4.jpg" },
    { SongName: "Baarishein - Anuv Jain", filePath: "song5.mp3", CoverPath: "song5.jpg" },
    { SongName: "Yadoo se - Kalam Ink", filePath: "song6.mp3", CoverPath: "song6.jpg" },
    { SongName: "Sunno Chanda -Farhaan Saeed", filePath: "song7.mp3", CoverPath: "song7.jpg" },
    { SongName: "Ja-Tujhko - Deepak Rathore", filePath: "song8.mp3", CoverPath: "song8.jpg" },
    { SongName: "Mohabbat ka Qissa- Farhaan saeed", filePath: "song9.mp3", CoverPath: "song9.jpg" },
]
songlist.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].CoverPath;
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].SongName;

})
// play paused 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        Array.from(document.getElementsByClassName('songiteamplay')).forEach((element) => {
            if (`song${songIndex}` == element.id) {
                element.classList.remove('fa-play-circle');
                element.classList.add('fa-pause-circle');

            }
        })
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

        Array.from(document.getElementsByClassName('songiteamplay')).forEach((element) => {
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
        })
    }
})

// scroll 
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    scroll.value = progress;

})
// update scroll
scroll.addEventListener('change', () => {
    audioElement.currentTime = (scroll.value * audioElement.duration) / 100;

})

const makeallplay = () => {
    Array.from(document.getElementsByClassName('songiteamplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

const songitems = [...document.getElementsByClassName('songiteamplay')];
songitems.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeallplay();
        songIndex = songitems.indexOf(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song${songIndex}.mp3`;
        mastersong.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `song${songIndex}.mp3`;
    mastersong.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `song${songIndex}.mp3`;
    mastersong.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})



