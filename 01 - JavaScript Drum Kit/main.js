
window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    

    if(!audio) return; // Stop the function from running if key pressed is not within scope of assigned audio keys
    audio.currentTime = 0;  // Rewind to the start 0f the audio clip. Set time position to 0 seconds
    audio.play();
})












