// Interface segregation principle, we should have small interfaces instead of one big monolithic interfaces so class should not have methods which are not necessary

interface AudioPlayer {
  playAudio(): void;
  recordAudio(): void;
}

class Audio implements AudioPlayer {
  playAudio() {}
  recordAudio() {}
}

interface VideoPlayer {
  playVideo(): void;
  recordVideo(): void;
}

class Video implements VideoPlayer {
  playVideo() {}
  recordVideo() {}
}
