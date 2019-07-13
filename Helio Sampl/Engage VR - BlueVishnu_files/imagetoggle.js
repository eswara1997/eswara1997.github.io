//Image Toggle for Audio Mute Button
function toggleAudio() {
			var img1 = document.getElementById("img2");
    		var img2 = document.getElementById("img1");
    		if(img1.style.visibility === "hidden") {
    			img1.style.visibility = "visible";
        		img2.style.visibility = "hidden";
      			checkAudioState();
    		} else {
    			img1.style.visibility = "hidden";
        		img2.style.visibility = "visible";
        		checkAudioState();
    		}
		}

function checkAudioState() {
			var audio = document.getElementById("main_audio");
			if(audio.muted) {
    			audio.muted = false;
    		} else {
    			audio.muted = true;
    		}
		}

