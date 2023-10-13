import React from 'react';
import { useVideos } from '../hooks';
import { VideoContext } from './';

function AppContext({children}) {
    const videos = useVideos();
    
    return (
        <VideoContext.Provider value={videos}>
            {children}
        </VideoContext.Provider>
    );
};

export default AppContext;