// Play sound and add playing class when key is pressed
window.addEventListener('keydown',function(e){
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    if(!audio) return; // Stop the function from running if key pressed is not within scope of assigned audio keys
    audio.currentTime = 0;  // Rewind to the start 0f the audio clip. Set time position to 0 seconds
    audio.play();
    key.classList.add('playing');  // add .playing class from css stylesheet so that effects occur when key is pressed
});

// Remove playing class when key is released
window.addEventListener('keyup', function(e){
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    if (!key) return;  // Stop the function from running if key pressed is not within scope of assigned audio keys
    key.classList.remove('playing');
});
