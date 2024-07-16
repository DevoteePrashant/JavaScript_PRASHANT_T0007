
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
const addButton = document.querySelector('.add');
const audio = document.getElementById('myAudio');
const crateBtn = document.getElementById('crate-btn');
const playlistContainer = document.getElementById('playlist-container');
const playlist = document.getElementById('playlist');

let c = [
  {
    title: 'Song 1',
    image: './soces/download.jpeg',
    src: "./soces/YouTube Music_ Open the world of music. It's all here..mp4",
    src2: "./soces/YouTube Music_ Open the world of music. It's all here..ogg"
  },
  {
    title: 'Song 2',
    image: './soces/download (1).jpeg',
    src: './soces/Some College - National Sweetheart.mp4',
    src2: './soces/Some College - National Sweetheart.ogg'
  },
  {
    title: 'Song 3',
    image: './soces/download (2).jpeg',
    src: './soces/Y2meta.app-Selena Gomez - Love On (Official Music Video)-(144p).mp4',
    src2: './soces/Y2meta.app-Selena Gomez - Love On (Official Music Video)-(144p).ogg'
  },
  {
    title: 'Song 4',
    image: './soces/download (3).jpeg',
    src: './soces/A Truly Dazzling Dream - National Sweetheart.mp4',
    src2: './soces/A Truly Dazzling Dream - National Sweetheart.ogg'
  },
  {
    title: 'Song 5',
    image: './soces/download (4).jpeg',
    src: './soces/Alesso Katy Perry - When Im Gone (Official Music Video) [TubeRipper.com].mp4',
    src2: './soces/Alesso Katy Perry - When Im Gone (Official Music Video) [TubeRipper.com].ogg'
  },
  {
    title: 'Song 6',
    image: './soces/images.jpeg',
    src: './soces/Noah Kahan - Stick Season (Official Music Video) (320).mp4',
    src2: './soces/Noah Kahan - Stick Season (Official Music Video) (320).ogg'
  },
  {
    title: 'Song 7',
    image: './soces/images.png',
    src: './soces/Smoke - Lish Grooves (1).mp4',
    src2: './soces/Smoke - Lish Grooves (1).ogg'
  },
  {
    title: 'Song 7',
    image: './soces/images (1).png',
    src: './soces/Smoke - Lish Grooves (10).mp4',
    src2: './soces/Smoke - Lish Grooves (10).ogg'
  },
  {
    title: 'Song 8',
    image: './soces/images (2).png',
    src: './soces/Smoke - Lish Grooves (2).mp4',
    src2: './soces/Smoke - Lish Grooves (2).ogg'
  },
  {
    title: 'Song 9',
    image: './soces/images (1).jpeg',
    src: './soces/Smoke - Lish Grooves (3).mp4',
    src2: './soces/Smoke - Lish Grooves (3).ogg'
  },
  {
    title: 'Song 10',
    image: './soces/images (2).jpeg',
    src: './soces/Smoke - Lish Grooves (4).mp4',
    src2: './soces/Smoke - Lish Grooves (4).ogg'
  },
  {
    title: 'Song 11',
    image: './soces/images (3).jpeg',
    src: './soces/Smoke - Lish Grooves (5).mp4',
    src2: './soces/Smoke - Lish Grooves (5).ogg'
  },
  {
    title: 'Song 12',
    image: './soces/images (4).jpeg',
    src: './soces/Smoke - Lish Grooves (6).mp4',
    src2: './soces/Smoke - Lish Grooves (6).ogg'
  },
  {
    title: 'Song 13',
    image: './soces/images (5).jpeg',
    src: './soces/Smoke - Lish Grooves (7).mp4',
    src2: './soces/Smoke - Lish Grooves (7).ogg'
  },
  {
    title: 'Song 14',
    image: './soces/images (6).jpeg',
    src: './soces/Smoke - Lish Grooves (8).mp4',
    src2: './soces/Smoke - Lish Grooves (8).ogg'
  },
  {
    title: 'Song 15',
    image: './soces/images (7).jpeg',
    src: './soces/Smoke - Lish Grooves (9).mp4',
    src2: './soces/Smoke - Lish Grooves (9).ogg'
  },

];
crateBtn.addEventListener('click', () => {
  // generate playlist items
  playlistArray.forEach((song, index) => {
    const playlistItem = document.createElement('li');
    playlistItem.className = 'playlistItem';
    playlistItem.innerHTML = `
      <img src="${song.image}" alt="${song.title}">
      <span>${song.title}</span>
      <audio id="myAudio-${index}">
        <source src="${song.src}" type="audio/mp4">
        <source src="${song.src2}" type="audio/ogg">
        Your browser does not support the audio element.
      </audio>
    `;
    playlistItem.addEventListener('click', () => {
      const audio = document.getElementById(`myAudio-${index}`);
      if (audio.paused) {
        audio.play();
        document.getElementById('btn1').style.display = 'none';
        document.getElementById('btn2').style.display = 'block';
      } else {
        audio.pause();
        document.getElementById('btn1').style.display = 'block';
        document.getElementById('btn2').style.display = 'none';
      }
    });
    playlist.appendChild(playlistItem);
  });
});


let isPlaying = false;




function playAudio() {
    audio.play();
    isPlaying = true;
    btn1.style.display = "none";
    btn2.style.display = "block";
}

function pauseAudio() {
    audio.pause();
    isPlaying = false;
    btn1.style.display = "block";
    btn2.style.display = "none";
}

btn1.addEventListener("click", function() {
    playAudio();
});

btn2.addEventListener("click", function() {
    pauseAudio();
});


const urlInput = document.querySelector('#url');
const titleInput = document.querySelector('#title');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
  const url = urlInput.value;
  const title = titleInput.value || url.split('/').pop().split('.')[0];
  const image = './soces/download (3).jpeg';
  const src = url;
  const src2 = url;

  if (urlInput.value.trim() === "" && titleInput.value.trim() === "") {
    alert("Please enter values for URL and title");
  } else {
  const newSong = {
    title,
    image,
    src,
    src2
  };

  c.push(newSong);

  urlInput.value = '';
  titleInput.value = '';

  playlist.innerHTML = '';
  let removeBtn;
  c.forEach((song, index) => {
    const playlistItem = document.createElement('li');
    playlistItem.className = 'playlistItem';
    playlistItem.innerHTML = `
      <img src="${song.image}" alt="${song.title}">
      <span>${song.title}</span>
      <audio id="myAudio-${index}">
        <source src="${song.src}" type="audio/mp4">
        <source src="${song.src2}" type="audio/ogg">
        Your browser does not support the audio element.
      </audio>
        <button class="remove-btn" data-index="${index}">Remove</button>
    `;
    playlistItem.addEventListener('click', () => {
      const audio = document.getElementById(`myAudio-${index}`);
      if (audio.paused) {
        audio.play();
        document.getElementById('btn1').style.display = 'none';
        document.getElementById('btn2').style.display = 'block';
      } else {
        audio.pause();
        document.getElementById('btn1').style.display = 'block';
        document.getElementById('btn2').style.display = 'none';
      }
    });
    playlist.appendChild(playlistItem);
    removeBtn = playlistItem.querySelector('.remove-btn');
    removeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const audio = document.getElementById(`myAudio-${index}`);
      if (!audio.paused) {
        audio.pause();
        document.getElementById('btn1').style.display = 'block';
        document.getElementById('btn2').style.display = 'none';
      }
      playlistItem.remove();
      c.splice(index, 1);
    });
  });
}
});

