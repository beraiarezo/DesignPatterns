// Interface segregation principle

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
