import ProjectCard from '../components/ProjectCard';
import Masonry from 'react-masonry-css';
import { useState, useEffect } from 'react';

const projects = [
    {
        title: "Automata",
        time_range: "January 2025",
        link: "https://github.com/aidantlynch00/automata",
        image_src: process.env.PUBLIC_URL + "/resources/images/automata.jpg",
        description: "A generic cellular automata engine. Currently supports Conway's Game of Life and a cyclic cellular automata."
    },
    {
        title: "Dev-Env",
        time_range: "September 2024 - Present",
        link: "https://github.com/aidantlynch00/dev-env",
        image_src: process.env.PUBLIC_URL + "/resources/images/dev-env.jpg",
        description: "A forever evolving set of configurations with an installation script that can be used to quickly spin up my custom developer environment on a new Linux machine."
    },
    {
        title: "AutoPot",
        time_range: "June 2023 - Present",
        link: "https://github.com/aidantlynch00/autopot",
        image_src: process.env.PUBLIC_URL + "/resources/images/autopot.jpg",
        description: "An embedded, distributed system that collects moisture and photovoltaic sensor data with the goal of automatically caring for plants. Architected to be a continuous monitoring device, not unlike a medical monitor."
    },
    {
        title: "Personal Website",
        time_range: "January 2024",
        link: "https://github.com/aidantlynch00/Personal-Website",
        image_src: null,
        description: "You're looking at it! This website is a place to aggregate links and show off my projects."
    },
    {
        title: "Monte Retires",
        time_range: "December 2023 - January 2024",
        link: "https://github.com/aidantlynch00/monte-retires",
        image_src: null,
        description: "A program for running a monte carlo simulation on the S&P 500. Different contribution and distribution strategies are used to customize the simulation based on the user's current investment situation."
    },
    {
        title: "Combine-imals",
        time_range: "November 2023",
        link: "https://github.com/aidantlynch00/combine-imals",
        image_src: process.env.PUBLIC_URL + "/resources/images/combine-imals.png",
        description: "A clone of the popular Nintendo Switch game, Suika game. It's still in progress, but combinable objects can be spawned into the container."
    },
    {
        title: "Simplex",
        time_range: "October 2022",
        link: "https://github.com/aidantlynch00/simplex",
        image_src: null,
        description: "Command line tool for finding optimal mixed strategies for 2 player, zero-sum games by performing the simplex method."
    },
    {
        title: "Amazon Price Tracker",
        time_range: "September 2019",
        link: "https://github.com/aidantlynch00/Amazon-Price-Tracker",
        image_src: process.env.PUBLIC_URL + "/resources/images/apt.png",
        description: "Graphical application that graphs the prices of Amazon products over time. Data is pulled from Amazon product listings and stored in a MySQL database."
    },
    {
        title: "Drone",
        time_range: "August 2018 - May 2019",
        link: "https://github.com/aidantlynch00/drone-code",
        image_src: process.env.PUBLIC_URL + "/resources/images/drone.jpg",
        description: "Built a drone and the firmware needed for flight."
    },
    {
        title: "Calendar",
        time_range: "February 2018 - April 2018",
        link: null,
        image_src: process.env.PUBLIC_URL + "/resources/images/calendar.png",
        description: "Graphical application that allows users to input events and sort them by various categories."
    }
]

const screenToColumns = {
    
}

const Projects = () => {
    // get the number of columns from CSS
    const [numColumns, setNumColumns] = useState(0);

    // create a handler for window resize events
    const handleResizeEvent = () => {
        const root = document.documentElement;
        const newNumColumns = getComputedStyle(root).getPropertyValue('--num-project-columns');
        

        if (newNumColumns != numColumns) {
            setNumColumns(newNumColumns);
        }
    };

    // register handler on component mount
    useEffect(() => {
        window.addEventListener('resize', handleResizeEvent);

        // run handler to initially set number of columns
        handleResizeEvent();

        // remove the handler on component unmount
        return () => window.removeEventListener('resize', handleResizeEvent);
    }, []);

    return (
        <div id="projects">
            <Masonry
                className="projects-masonry"
                columnClassName="projects-column"
                breakpointCols={numColumns}
            >
                {projects.map(project => <ProjectCard {...project} />)}
            </Masonry>
        </div>
    );
}

export default Projects;
