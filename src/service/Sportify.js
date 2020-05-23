var accessToken = '';
const Sportify = {
  search: async function (TERM) {
    const url = 'https://api.spotify.com/v1/search?type=track&q=TERM';
    try {
      var response = await fetch(url, {
        method: 'GET',
        headers: {Authorization: `Bearer ${accessToken}`},
      });

      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse.map((track) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          };
        });
      }

      throw new Error(error, 'Request failed!');
    } catch (err) {
      console.log(err);
    }
  },
  getAccessToken: function () {
    if (accessToken) {
      return accessToken;
    } else {
      const my_client_id = 'ocularminds';
      var scopes = 'user-read-private user-read-email';
      const redirect_uri = 'http://localhost:3000/';
      window.location.href =
        'https://accounts.spotify.com/authorize' +
        '?response_type=code' +
        '&client_id=' +
        my_client_id +
        (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
        '&redirect_uri=' +
        encodeURIComponent(redirect_uri);
    }
  },
};

module.exports = Sportify;
