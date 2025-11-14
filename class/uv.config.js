self.__uv$config = {
    prefix: '/classes/math/',   // must exactly match the path in the URL
    bare: 'https://ubg1.vercel.app/bare/',  // backend server
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    bundle: '/class/uv.bundle.js',
    config: '/class/uv.config.js',
    sw: 'https://ubg1.vercel.app/sw.js',               // must match filename in root
};
