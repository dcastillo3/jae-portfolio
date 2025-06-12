import React from 'react';

function TeamMemberBlock({photo, name, role}) {
    // Set background image to photo
    const style = {
        backgroundImage: `url('${photo}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div style={style} className="team-member-block">
        </div>
    );
};

export default TeamMemberBlock;