self.__uv$config = {
    prefix: '/classes/math/',   // must exactly match the path in the URL
    bare: 'https://ubg1.vercel.app/bare/',  // backend server
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    bundle: '/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/sw.js',               // must match filename in root
};
