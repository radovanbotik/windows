"use client";
import { useEffect, useState } from "react";
import { getAllPlaylists, getPlaylist } from "../lib/spotify";
import Image from "next/image";

import loader from "../../public/gifs/loader.gif";
import Button from "../UI/Button";

type Playlist = {
  collaborative: boolean;
  description: string;
  href: string;
  id: string;
  images: { height: number; url: string; width: number }[];
  name: string;
  owner: {
    display_name: string;
    href: string;
    id: string;
    type: string;
  };
  tracks: { href: string; total: number };
};

export default function Page() {
  const [playlists, setPlaylists] = useState<Playlist[] | null>(null);

  useEffect(() => {
    async function fetch() {
      const all = await getAllPlaylists();
      if (all) {
        return setPlaylists(all);
      } else {
        throw new Error("failed to fetch");
      }
    }
    fetch();
  }, []);

  console.log(playlists);
  if (!playlists)
    return (
      <div className="grid place-content-center w-full h-full">
        <Image src={loader} alt="a" />
        <p className="text-center">LOADING</p>
      </div>
    );

  return (
    <div className="w-full h-full">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4">
        {playlists.map(playlist => (
          <li key={playlist.id} className="grid place-content-center">
            <Button href={`/media-player/playlist/${playlist.id}`} className="space-y-2">
              <Image
                src={playlist.images[1].url}
                alt={playlist.name}
                height={playlist.images[1].height}
                width={playlist.images[1].width}
              />
              <h4 className="font-bold text-xl text-center">
                {playlist.name} ({playlist.tracks.total})
              </h4>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
