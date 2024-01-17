import ProjectCard from '../components/ProjectCard';
import Masonry from 'react-masonry-css';

const projects = [
    {
        title: "Monte Retires",
        time_range: "December 2023 - Present",
        link: "https://github.com/aidantlynch00/monte-retires",
        image_src: null,
        description: "A program for running a monte carlo simulation on the S&P 500. Different contribution and distribution strategies are used to customize the simulation based on the user's current investment situation."
    },
    {
        title: "Network Clipboard",
        time_range: "December 2023 - Present",
        link: null,
        image_src: null,
        description: "A set of executables and scripts that allow hosts to share copied text on the local network. Careful consideration was taken to ensure sensitive text like passwords are not exposed in plaintext. Currently, this is only scoped to hosts running Linux, but Windows and MacOS support will be added eventually."
    },
    {
        title: "Combine-imals",
        time_range: "November 2023 - Present",
        link: "https://github.com/aidantlynch00/combine-imals",
        image_src: process.env.PUBLIC_URL + "/resources/images/combine-imals.png",
        description: "A clone of the popular Nintendo Switch game, Suika game. It's still in progress, but combinable objects can be spawned into the container."
    },
    {
        title: "AutoPot",
        time_range: "June 2023 - Present",
        link: "https://github.com/aidantlynch00/autopot",
        image_src: null,
        description: "A distributed system for measuring plant vitals. It currently supports a variable amount of moisture and photovoltaic sensors. It saves this information in an SQLite database. Eventually, this information will be used to control a watering system and growlights."
    },
    {
        title: "Personal Website",
        time_range: "January 2024",
        link: "https://github.com/aidantlynch00/Personal-Website",
        image_src: null,
        description: "You're looking at it! This website is a place to aggregate links and show off my projects."
    },
    {
        title: "Compute Share",
        time_range: "December 2022 - June 2023",
        link: "https://github.com/aidantlynch00/compute-share",
        image_src: null,
        description: "System for requesting and performing distributed machine learning training."
    },
    {
        title: "Simplex",
        time_range: "October 2022",
        link: "https://github.com/aidantlynch00/simplex",
        image_src: null,
        description: "Command line tool for finding optimal mixed strategies for 2 player, zero-sum games by performing the simplex method."
    },
    {
        title: "Family Website",
        time_range: "May 2020 - Present",
        link: "https://github.com/aidantlynch00/Family-Website",
        image_src: null,
        description: "Work in progress site to store and showcase family content."
    },
    {
        title: "Amazon Price Tracker",
        time_range: "September 2019",
        link: "https://github.com/aidantlynch00/Amazon-Price-Tracker",
        image_src: process.env.PUBLIC_URL + "/resources/images/apt-pic.png",
        description: "Graphical application that graphs the prices of Amazon products over time. Data is pulled from Amazon product listings and stored in a MySQL database."
    },
    {
        title: "Drone",
        time_range: "August 2018 - May 2019",
        link: "https://github.com/aidantlynch00/drone-code",
        image_src: process.env.PUBLIC_URL + "/resources/images/drone-pic.jpg",
        description: "Built a drone and the firmware needed for flight."
    },
    {
        title: "Calendar",
        time_range: "February 2018 - April 2018",
        link: null,
        image_src: process.env.PUBLIC_URL + "/resources/images/calendar-pic.png",
        description: "Graphical application that allows users to input events and sort them by various categories."
    }
]

const Projects = () => {
    return (
        <div id="projects">
            <Masonry
                className="projects-masonry"
                columnClassName="projects-column"
                breakpointCols={3}
            >
                {projects.map(project => <ProjectCard {...project} />)}
            </Masonry>
        </div>
    );
}

export default Projects;