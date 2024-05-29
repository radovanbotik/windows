export async function getToken() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa("16a2eb345df443d4b2134abdd392b837:4b5b1ac86ade458e923f22d4b880e1de")}`,
    },
    body: "grant_type=client_credentials",
  };
  const response = await fetch("https://accounts.spotify.com/api/token", options);
  const token = await response.json();
  return token;
}

export async function getPlaylist(id: string) {
  const token = await getToken();
  const options = {
    method: "GET",
    headers: {
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  };
  const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, options);
  const data = await response.json();
  return data;
}

export async function getAllPlaylists() {
  const user = "11161628746";
  const token = await getToken();
  const options = {
    method: "GET",
    headers: {
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  };
  const response = await fetch(`https://api.spotify.com/v1/users/${user}/playlists`, options);
  const data = await response.json();
  // return data;
  return data.items.filter((playlist: { owner: { id: string } }) => playlist.owner.id === user);
}
