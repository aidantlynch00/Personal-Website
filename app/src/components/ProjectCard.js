const ProjectCard = (props) => {
    let image_element = props.image_src? <img src={props.image_src} alt="" /> : null;
    let title_element = <h3>{props.title}</h3>;

    return (
        <div className="project-card">
            {image_element}
            {props.link ? (
                <a href={props.link} target="_blank" rel="noreferrer">
                    {title_element}
                </a>
            ) : title_element}
            <h5>{props.time_range}</h5>
            <hr />
            <p>{props.description}</p>
        </div>
    );
}

export default ProjectCard;