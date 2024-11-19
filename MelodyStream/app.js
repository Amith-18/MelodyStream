

let progress    =   document.getElementById('progress');
let song    =   document.getElementById('song');
let ctrlIcon    =   document.getElementById('ctrlIcon');


song.onloadedmetadata   =   function(){
    progress.max    =   song.duration;
    progress.value    =   song.currentTime;
}


function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');

    }
    else{
        song.play();
        ctrlIcon.classList.remove('fa-play');
        ctrlIcon.classList.add('fa-pause');

    }
}

// if(song.play()){
//     setInterval(()=>{
//         progress.value  =   song.currentTime;
//     },500);
// }

song.ontimeupdate = function() {
    progress.value = song.currentTime;
};


// progress.onchange   =   function(){
//     song.currentTime    =   progress.value;
//     song.play();
//     ctrlIcon.classList.remove('fa-play');
//     ctrlIcon.classList.add('fa-pause');
    
// };



progress.oninput = function() {
    song.currentTime = progress.value; // Set the song's current time to the progress value
    song.play();                        // Play the song
    ctrlIcon.classList.remove('fa-play');
    ctrlIcon.classList.add('fa-pause');
};
