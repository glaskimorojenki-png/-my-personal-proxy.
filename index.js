const USER_ID = 'ef721831-2856-42bb-aa10-983647163809';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === '/') {
      return new Response(JSON.stringify({
        message: "Your custom proxy is alive!",
        protocol: "VLESS",
        uuid: USER_ID
      }), { status: 200, headers: { "content-type": "application/json" } });
    }

    return fetch(request);
  }
};
