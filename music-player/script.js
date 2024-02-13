let song = ["./song1.mp3","./song2.mp3","./song3.mp3"]

let len = song.length;

var audio = new Audio("./song1.mp3");
let count = 0;

document.addEventListener("DOMContentLoaded",()=>{
  let playPauseBtn = document.querySelector('.cir-box-mid');

  playPauseBtn.addEventListener('click',()=>{
    // console.log(audio.clientHeight());
    if(audio.paused){
      audio.play();
      playPauseBtn.innerHTML='<i class="ri-pause-circle-fill"></i>'
    }
    else{
      audio.pause();
      playPauseBtn.innerHTML='<i class="ri-play-fill"></i>';
    }
  })

  let next = document.querySelector('#next');
    next.addEventListener('click',()=>{
      count = (count+1)%len;
      audio.src = song[count]
      audio.load()
      audio.play()
    })

    let prev = document.querySelector('#prev');
    prev.addEventListener('click',()=>{
      if(count==0){
        count=len-1;
      }
      else{
        count = (count-1)%len;
      }
      audio.src = song[count]
      audio.load()
      audio.play()
    })

  audio.addEventListener("timeupdate", ()=>{
    let currentTime = formatTime(audio.currentTime);
    let duration = formatTime(audio.duration)
    console.log(audio.duration)
    document.querySelector('.left').innerHTML=currentTime;
    document.querySelector('.right').innerHTML = duration;

    document.querySelector('#musicRange').value=(audio.currentTime/audio.duration *100)
    if(currentTime= duration){
      count++;
    }
  });


  function formatTime(time){
    var min = Math.floor(time/60);
    var sec = Math.floor(time%60);
    return(
      (min<10?"0":"")+ min+":"+(sec<10?"0":"")+sec
    )

  }
})