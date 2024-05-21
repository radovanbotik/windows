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

export async function getPlaylist() {
  const token = await getToken();
  console.log(token);
  const options = {
    method: "GET",
    headers: {
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  };
  const response = await fetch("https://api.spotify.com/v1/playlists/0GwwznVymh8I8Rtvsl8bfQ", options);
  const data = await response.json();
  return data;
}
