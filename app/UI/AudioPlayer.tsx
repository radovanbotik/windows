"use client";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef, useEffect, useState, useRef, FormEvent } from "react";
import play from "../../public/icons/player/play50.png";
import pause from "../../public/icons/player/pause50.png";
import stop from "../../public/icons/player/stop50.png";
import rewind from "../../public/icons/player/rewind50.png";
import prev from "../../public/icons/player/prev50.png";
import forward from "../../public/icons/player/forward50.png";
import next from "../../public/icons/player/next50.png";
import loudspeaker from "../../public/icons/loudspeaker32.png";
import loudspeakermuted from "../../public/icons/loudspeakermuted32.png";

function Divider() {
  return (
    <div
      className="mx-1 h-full w-[2px] bg-windows-gray-900 border border-b-[#FFFFFF] border-l-[#808080] border-t-[#808080] border-r-[#FFFFFF] "
      aria-hidden="true"
    ></div>
  );
}

function ButtonControl({ icon, className, ...props }: ComponentPropsWithoutRef<"button"> & { icon: StaticImageData }) {
  return (
    <button className={clsx("p-1", className)} {...props}>
      <div className="h-8 w-8 p-1">
        <Image src={icon} alt="control" width={50} height={50} />
      </div>
    </button>
  );
}

export default function AudioPlayer({ src, className }: { src: string | null; className?: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const progressBar = useRef<HTMLInputElement>(null);
  const requestAni = useRef<number | null>(null);

  const screen = useRef(null);

  function handlePlay() {
    if (audio.current) {
      console.log(src);
      audio.current.play();
      setIsPlaying(true);
      requestAni.current = requestAnimationFrame(updateTimeStamp);
    }
  }
  function handlePause() {
    if (audio.current && requestAni.current) {
      audio.current.pause();
      setIsPlaying(false);
      cancelAnimationFrame(requestAni.current);
    }
  }

  function handleStop() {
    if (audio.current) {
      audio.current.pause();
      audio.current.currentTime = 0;
      setIsPlaying(false);
    }
  }

  function toggleMute() {
    if (audio.current) {
      if (isMuted) {
        audio.current.muted = false;
        setIsMuted(false);
      } else {
        audio.current.muted = true;
        setIsMuted(true);
      }
    }
  }

  function handleVolumeChange(e: FormEvent<HTMLInputElement>) {
    if (audio.current) {
      audio.current.volume = Number(e.currentTarget.value);
    }
    setVolume(Number(e.currentTarget.value));
  }
  function handleTimeUpdate(e: FormEvent<HTMLInputElement>) {
    if (audio.current) {
      audio.current.currentTime = Math.floor(Number(e.currentTarget.value));
    }
    setCurrentTime(Math.floor(Number(e.currentTarget.value)));
  }

  function updateTimeStamp() {
    if (progressBar.current) {
      progressBar.current.value = String(audio.current?.currentTime);
      setCurrentTime(Math.floor(Number(progressBar.current.value)));
      requestAni.current = requestAnimationFrame(updateTimeStamp);
    }
  }

  useEffect(() => {
    if (audio.current) {
      setDuration(Math.floor(audio.current.duration));
      console.log(audio.current.src);
    }
  }, [audio.current]);

  if (!src) return null;
  return (
    <>
      <audio ref={audio} src={src} className="hidden"></audio>
      <div className={clsx(`p-1  flex flex-col gap-1 bg-windows-gray-300 `, className)}>
        <div className="h-96 border-2 bg-black border-[#808080]  ">
          {isPlaying && <div className="w-full h-full gradient-animation"></div>}
        </div>
        {/* <input
          type="range"
          className="w-full py-2"
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleTimeUpdate}
          ref={progressBar}
        /> */}
        <div className="flex flex-wrap gap-2 ">
          <div className="flex">
            <ButtonControl icon={play} onClick={handlePlay} />
            <ButtonControl icon={pause} onClick={handlePause} />
            <ButtonControl icon={stop} onClick={handleStop} />
            <Divider />
          </div>
          <div className="flex">
            <ButtonControl icon={prev} />
            <ButtonControl icon={rewind} />
            <ButtonControl icon={forward} />
            <ButtonControl icon={next} />
            <Divider />
          </div>
          <div className="flex">
            <ButtonControl icon={isMuted || volume === 0 ? loudspeakermuted : loudspeaker} onClick={toggleMute} />
            <input type="range" value={volume} min={0} max={1} step={0.1} onChange={handleVolumeChange} />
          </div>
        </div>
      </div>
    </>
  );
}
