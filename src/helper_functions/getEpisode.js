const getEpisode = (cache, char) => {
    let url = char.episode[0];
    return cache.then(cache => cache[url])
}

export {getEpisode}