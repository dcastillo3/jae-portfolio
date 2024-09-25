import { Projects } from '../components/main/projects';
import { Events } from '../components/main/events';
import { Donate } from '../components/main/donate';
import { Biography } from '../components/main/biography';
import { NotFound } from '../components/main/notFound';

//Maintain ID's
const menuRoutes = [
    {
        id: 1,
        name: 'Projects',
        path: '/',
        icon: 'slideshow',
        Element: Projects
    },
    {
        id: 2,
        name: 'Events',
        path: '/events',
        icon: 'queue_play_next',
        Element: Events
    },
    {
        id: 3,
        name: 'Donate',
        path: '/donate',
        icon: 'assist_walker',
        Element: Donate
    },
    {
        id: 4,
        name: 'About',
        path: '/biography',
        icon: 'person',
        Element: Biography
    },
];

const generalRoutes = [
    {
        id: 5,
        name: 'Not Found',
        path: '*',
        Element: NotFound
    }
];

const protectedRoutes = [
];

const initialDocumentTitle = `Jae's Portfolio`;

export {
    menuRoutes,
    generalRoutes,
    protectedRoutes,
    initialDocumentTitle
};