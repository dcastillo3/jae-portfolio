import React, { useEffect, useRef } from 'react';
import Vimeo from '@vimeo/player';
import { useMediaQuery } from '../../hooks';

function VimeoPlayer({ videoId }) {
    const playerRef = useRef(null);
    const playerId = `vimeo-player-${videoId}`;
    const { isMobile } = useMediaQuery();
    const vimeoPlayerWidth = isMobile ? 200 : 640;

    useEffect(() => {
        if(videoId) {
            const options = {
                id: videoId,
                width: vimeoPlayerWidth
            };
    
            playerRef.current = new Vimeo(playerId, options);
        };
    }, [videoId]);

    return <div className="vimeo-player-container" id={playerId}></div>;
}

export default VimeoPlayer;