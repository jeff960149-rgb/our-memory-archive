"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${Math.floor(seconds % 60).toString().padStart(2, "0")}`;
}

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const syncTime = () => setCurrentTime(audio.currentTime);
    const syncDuration = () => setDuration(audio.duration || 0);
    const stop = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", syncTime);
    audio.addEventListener("loadedmetadata", syncDuration);
    audio.addEventListener("durationchange", syncDuration);
    audio.addEventListener("ended", stop);

    return () => {
      audio.removeEventListener("timeupdate", syncTime);
      audio.removeEventListener("loadedmetadata", syncDuration);
      audio.removeEventListener("durationchange", syncDuration);
      audio.removeEventListener("ended", stop);
    };
  }, []);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }

  function seek(value: number) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = value;
    setCurrentTime(value);
  }

  function skip(seconds: number) {
    seek(Math.max(0, Math.min(duration || 0, currentTime + seconds)));
  }

  function toggleLoop() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = !isLooping;
    setIsLooping(!isLooping);
  }

  return (
    <section className="hero" id="top">
      <div className="player-intro">
        <p className="intro-opening">Oh, you&apos;re here!! Let me show you around their memories.</p>
        <p>
          The girl with the gorgeous smile is Karin, and the boy who&apos;s obsessed with her is
          Marco.
        </p>
        <p>
          They fell in love in the U.S., but Marco isn&apos;t from here, so he had to go back to
          his country...
        </p>
        <p>
          But Marco promised Karin that he would come back one day just to hug her again.
          Let&apos;s see if he&apos;s a liar!!!
        </p>
      </div>
      <div className="music-player">
        <figure className="player-polaroid">
          <img src="/memories/hero-player-photo.png" alt="Us cuddling together on the grass" />
          <figcaption>I love my Cutiepie&lt;3</figcaption>
        </figure>

        <audio ref={audioRef} preload="metadata" src="/hey-there-delilah.mp3" />

        <div className="player-timeline">
          <span>{formatTime(currentTime)}</span>
          <input
            className="player-range"
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={Math.min(currentTime, duration || 0)}
            onChange={(event) => seek(Number(event.target.value))}
            aria-label="Song progress"
            style={{ "--progress": `${duration ? (currentTime / duration) * 100 : 0}%` } as CSSProperties}
          />
          <span>{formatTime(duration)}</span>
        </div>

        <div className="player-controls">
          <button type="button" aria-label="Restart song" onClick={() => seek(0)}>↶</button>
          <button type="button" aria-label="Go back 10 seconds" onClick={() => skip(-10)}>◀</button>
          <button className="player-play" type="button" onClick={togglePlayback} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? "Ⅱ" : "▶"}
          </button>
          <button type="button" aria-label="Go forward 10 seconds" onClick={() => skip(10)}>▶</button>
          <button className={isLooping ? "is-active" : ""} type="button" aria-label="Repeat song" onClick={toggleLoop}>↻</button>
        </div>
        <p className="player-song">Hey There Delilah · Plain White T&apos;s</p>
      </div>
    </section>
  );
}
