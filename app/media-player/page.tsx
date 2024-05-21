"use client";
import { useEffect, useState } from "react";
import AudioPlayer from "../UI/AudioPlayer";
import { getPlaylist } from "../lib/spotify";
import Image from "next/image";
import play from "../../public/icons/player/play50.png";
import clsx from "clsx";

type SpotifyPlaylist = {
  id: string;
  preview_url: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string; height: number; width: number }[] };
};

export default function Page() {
  const [tracks, setTracks] = useState<{ track: SpotifyPlaylist }[] | null>(null);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  useEffect(() => {
    async function fetch() {
      const playlist = await getPlaylist();
      setTracks(playlist.tracks.items);
    }
    fetch();
  }, []);

  console.log(tracks);
  if (!tracks) return <p>loading...</p>;

  return (
    <div className="flex justify-between w-full h-full ">
      <ul>
        {tracks.map((item, i: number) => (
          <li
            key={item.track.id}
            className={clsx(`flex flex-wrap group cursor-pointer`, !item.track.preview_url && "cursor-not-allowed")}
            onClick={() => {
              if (item.track.preview_url) {
                setCurrentTrack(item.track.preview_url);
              }
              return;
            }}
          >
            <div className="mb-4 sm:mb-0 sm:mr-4 w-8 h-8 relative">
              <Image
                src={item.track.album.images[0].url}
                alt={item.track.id}
                width={item.track.album.images[0].width}
                height={item.track.album.images[0].height}
                className="border border-gray-300 bg-white text-gray-300"
              />
              <Image
                src={play}
                width={50}
                height={50}
                alt="play track"
                className={`absolute inset-0 opacity-0 group-hover:opacity-80`}
              />
            </div>
            <div>
              <h4 className="text-sm font-bold">{item.track.name}</h4>
              <p className="mt-1 text-xs">{item.track.artists.map(artist => artist.name).join(",")}</p>
            </div>
          </li>
        ))}
      </ul>
      <AudioPlayer src={currentTrack} />
    </div>
  );
}
