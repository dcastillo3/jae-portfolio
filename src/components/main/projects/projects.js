import React, { useContext, useState } from 'react';
import { VideoContext } from '../../../context';
import { VimeoPlayer } from '../../vimeoPlayer';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

function Projects() {
    const [modalOpen, setModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState(null);
    const { videos } = useContext(VideoContext);

    const updateActiveVideo = (videoId) => {
        setActiveVideo(videoId);

        toggleModal();
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const renderVideoPosters = videos.map(({name, videoPoster, videoId}, idx) => (
        <div className="video-poster-container" key={idx} onClick={() => updateActiveVideo(videoId)}>
            <img className="video-poster" src={videoPoster} alt={name} />
        </div>
    ));

    return (
        <div className="projects">
            <Modal
				open={modalOpen}
                onClose={toggleModal}
                center 
                classNames={{
                    overlay: 'video-modal-overlay',
                    modal: 'video-modal'
                }}
			>
                <VimeoPlayer videoId={activeVideo} />
            </Modal>

            <div className="videos-poster-container grid-container">
                {renderVideoPosters}
            </div>
        </div>
    );
};

export default Projects;