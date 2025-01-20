const tracks = [
    { title: "Lily", artist: "Alan Walker", image: "recording-2570056_640.jpg", duration: "03:16", containerColor: "#4CAF50" }, // 밝은 녹색
    { title: "On My Way", artist: "Alan Walker", image: "astronomy-3101270_640.jpg", duration: "03:27", containerColor: "#9C27B0" }, // 연한 보라색
    { title: "Faded", artist: "Alan Walker", image: "freddie-mercury-71848_640.jpg", duration: "03:32", containerColor: "#FF5722" }, // 밝은 빨간색
  ];
  
  let currentTrackIndex = 0;
  let isPlaying = false;
  let currentTime = 0;
  let interval;
  
  const titleElement = document.getElementById("track-title");
  const artistElement = document.getElementById("track-artist");
  const progressElement = document.getElementById("progress");
  const currentTimeElement = document.getElementById("current-time");
  const totalTimeElement = document.getElementById("total-time");
  const playButton = document.getElementById("play");
  const musicPlayer = document.querySelector(".music-player");
  
  function updateTrack() {
    const track = tracks[currentTrackIndex];
    titleElement.textContent = track.title;
    artistElement.textContent = track.artist;
    document.querySelector(".album-art img").src = track.image;
    totalTimeElement.textContent = track.duration;
    currentTime = 0;
    progressElement.style.width = "0%";
    currentTimeElement.textContent = "00:00";
    musicPlayer.style.backgroundColor = track.containerColor; // 배경 색상 변경
  }
  
  // 진행 바 업데이트 함수
  function updateProgress() {
    const totalDuration = getDurationInSeconds(tracks[currentTrackIndex].duration);
    const progressPercent = (currentTime / totalDuration) * 100;
    progressElement.style.width = `${progressPercent}%`;
    currentTimeElement.textContent = formatTime(currentTime);
  }
  
  // 시간을 초로 변환하는 함수
  function getDurationInSeconds(duration) {
    const [minutes, seconds] = duration.split(":").map(Number);
    return minutes * 60 + seconds;
  }
  
  // 시간을 00:00 형식으로 변환하는 함수
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  }
  
  // 재생/정지 버튼 클릭 시
  playButton.addEventListener("click", () => {
    isPlaying = !isPlaying;
    playButton.innerHTML = isPlaying ? "&#10073;&#10073;" : "&#9654;"; // Change button text
    if (isPlaying) {
      playMusic();
    } else {
      stopMusic();
    }
  });
  
  // 음악 재생 함수
  function playMusic() {
    const totalDuration = getDurationInSeconds(tracks[currentTrackIndex].duration);
    interval = setInterval(() => {
      if (currentTime < totalDuration) {
        currentTime++;
        updateProgress();
      } else {
        clearInterval(interval); // Stop the interval when the track ends
        isPlaying = false;
        playButton.innerHTML = "&#9654;"; // Change back to play icon
      }
    }, 1000);
  }
  
  // 음악 정지 함수
  function stopMusic() {
    clearInterval(interval); // Stop the interval and prevent progress from continuing
    isPlaying = false;
    playButton.innerHTML = "&#9654;"; // Change to play icon
    progressElement.style.width = `${(currentTime / getDurationInSeconds(tracks[currentTrackIndex].duration)) * 100}%`;
    currentTimeElement.textContent = formatTime(currentTime); // Update the current time display
  }
  
  // 이전 트랙 버튼 클릭 시
  document.getElementById("prev").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updateTrack();
  });
  
  // 다음 트랙 버튼 클릭 시
  document.getElementById("next").addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrack();
  });
  
  // 좋아요 버튼 클릭 시
  const likeButton = document.getElementById("like");
  likeButton.addEventListener("click", () => {
    if (likeButton.textContent === "♡") {
      likeButton.textContent = "♥";
      likeButton.style.color = "red";
    } else {
      likeButton.textContent = "♡";
      likeButton.style.color = "#666";
    }
  });
  
  updateTrack();