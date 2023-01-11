import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Acknowledgement from './Acknowledgement';

const pageList = [
    {
        routable: true,
        index: true,
        title: 'About',
        element: <Home />
    },
    {
        routable: true,
        path: 'projects',
        title: 'Projects',
        element: <Projects />
    },
    {
        routable: true,
        path: 'contact',
        title: 'Contact',
        element: <Contact />
    },
    {
        routable: false,
        path: 'acknowledgement',
        title: 'Acknowledgement',
        element: <Acknowledgement />
    }
];

export default pageList;