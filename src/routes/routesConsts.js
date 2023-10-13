import { Portfolio } from '../components/main/portfolio';
import { PitchDeck } from '../components/main/pitchDeck';
import { Donate } from '../components/main/donate';
import { Biography } from '../components/main/biography';
import { NotFound } from '../components/main/notFound';

//Maintain ID's
const menuRoutes = [
    {
        id: 1,
        name: 'Portfolio',
        path: '/',
        Element: Portfolio
    },
    {
        id: 2,
        name: 'PitchDeck',
        path: '/pitch-deck',
        Element: PitchDeck
    },
    {
        id: 3,
        name: 'Donate',
        path: '/donate',
        Element: Donate
    },
    {
        id: 4,
        name: 'Biography',
        path: '/biography',
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