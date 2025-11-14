/*global Ultraviolet*/
self.__uv$config = {
    prefix: '/classes/math/',
    bare: 'https://ubg1.vercel.app/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'https://ubg1.vercel.app/class/uv.handler.js',
    client: 'https://ubg1.vercel.app/class/uv.client.js',
    bundle: '/class/uv.bundle.js',
    config: '/class/uv.config.js',
    sw: '/class/uv.sw.js',
};
