import React, { useContext, useEffect } from 'react';
import { MainRoutes } from './routes';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { VideoContext } from './context';
import './theme/theme.css';

function App() {
    const { fetchVideos } = useContext(VideoContext);

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <div>
            <Header />
            <MainRoutes />
            <Footer />
        </div>
    );
};

export default App;