"use client";
import { useEffect, useState } from "react";
import AudioPlayer from "../UI/AudioPlayer";
import { getPlaylist } from "../lib/spotify";
import Image from "next/image";
import play from "../../public/icons/player/play50.png";
import clsx from "clsx";
import Modal from "../UI/Modal";

type SpotifyPlaylist = {
  id: string;
  preview_url: string;
  name: string;
  artists: { name: string }[];
  album: { images: { url: string; height: number; width: number }[] };
};

export default function Page() {
  const [tracks, setTracks] = useState<{ track: SpotifyPlaylist }[] | null>(null);
  const [currentTrack, setCurrentTrack] = useState<{ name: string; src: string } | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="flex flex-wrap justify-between w-full h-full">
      <ul className="flex flex-col  h-full">
        {tracks.map((item, i: number) => (
          <li
            key={item.track.id}
            className={clsx(`flex flex-wrap group cursor-pointer`, !item.track.preview_url && "cursor-not-allowed")}
            onClick={() => {
              if (item.track.preview_url) {
                setCurrentTrack({ name: item.track.name, src: item.track.preview_url });
                setIsOpen(true);
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
                className={clsx(
                  !item.track.preview_url && "hidden cursor-not-allowed",
                  `absolute inset-0 opacity-0 group-hover:opacity-80`
                )}
              />
            </div>
            <div>
              <h4 className="text-sm font-bold">{item.track.name}</h4>
              <p className="mt-1 text-xs">{item.track.artists.map(artist => artist.name).join(",")}</p>
            </div>
          </li>
        ))}
      </ul>
      {currentTrack && (
        <Modal
          body={<AudioPlayer src={currentTrack.src} />}
          description={`Playing ${currentTrack.name}`}
          title="Media Player v1.0"
          open={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}
