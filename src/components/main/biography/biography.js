import React from 'react';
import jaeProfile from '../../../assets/images/profile.jpg';

function Biography() {
    return (
        <div className="biography">
            <div className="biography-photo-container">
                <img className="biography-photo" src={jaeProfile} alt="Jae Malabunga" />
            </div>

            <h2 className="biography-title">Artistic Statement</h2>

            <p>Jae Malabunga is an emerging filmmaker whose work centers on authentic human connection, layered character development, and the intersection of ideology, spirituality, and contemporary social issues. Drawing from personal experiences, cross-cultural dialogue, and transformative learning beyond his own traditions, Jae has developed a deep passion for writing and visual storytelling.</p>

            <p>Born into a devout Filipino family and later immigrating to the United States, Jae’s creative journey has been shaped by an ongoing dialogue with identity, faith, and belonging. Through a process of deconstruction and spiritual reflection, he has come to embrace filmmaking as both a personal and universal form of exploration and healing.</p>

            <p>Jae began studying cinematography at the New York Film Academy in 2010, gaining hands-on experience on numerous film sets and developing a strong foundation in industry practices. His commitment to understanding broader global perspectives led him to earn a scholarship from the Wonmo Foundation, where he studied International Relations in South Korea for one year. Motivated by a desire to contribute meaningfully to global issues, Jae also served as an active duty member of the U.S. Army during the ongoing Syrian civil conflict.</p>

            <p>Following his service, Jae returned to NYFA to complete a Bachelor of Fine Arts in Directing. His life experiences—marked by cultural transition, spiritual searching, and service—have deeply influenced his cinematic voice. Stylistically, he draws inspiration from filmmakers such as Park Chan-wook, Martin Scorsese, Hayao Miyazaki, and Jean-Pierre Jeunet, balancing visual imagination with emotional depth.</p>

            <p>Through his films, Jae seeks to illuminate hope in the face of despair, encourage introspection, and create stories that resonate across borders and identities.</p>

        </div>
    );
};

export default Biography;