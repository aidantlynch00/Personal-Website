import pageList from '../pages';
import { NavLink } from 'react-router-dom';

const externalLinks = [
    {
        title: 'Github',
        link: 'https://www.github.com/aidantlynch00',
        icon: null
    },
    {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/aidan-lynch-935317194/',
        icon: null
    }
];

const staticResources = [
    {
        title: 'Résumé',
        path: process.env.PUBLIC_URL + '/resources/files/Aidan_Lynch_Resume.pdf',
        icon: null
    }
];

const Nav = () => (
    <div id='nav'>
        {pageList.filter(page => page.routable).map(page => (
            <NavLink 
                end={true}
                to={page.index ? '/' : page.path}
                className={({ isActive, isPending }) => isActive ? 'nav-link active' : 'nav-link'}
            >
                {page.title}
            </NavLink>
        ))}

        {externalLinks.map(external => (
            <a className='nav-link' href={external.link} target='_blank'>{external.title}</a>
        ))}

        {staticResources.map(resource => (
            <a className='nav-link' href={resource.path} target='_blank'>{resource.title}</a>
        ))}
    </div>
)

export default Nav;