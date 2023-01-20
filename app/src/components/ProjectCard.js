const ProjectCard = (props) => {
    let image_element = props.image_src? <img src={props.image_src} alt="" /> : null;
    let card_content = (
        <>
            {image_element}
            <div className="project-card-text">
                <h3>{props.title}</h3>
                <h5>{props.time_range}</h5>
                <hr />
                <p>{props.description}</p>
            </div>
        </>
    );

    return props.link ? (
        <div className="project-card">
            <a className="project-card-link" href={props.link} target="_blank" rel="noreferrer">
                {card_content}
            </a>
        </div>
    ) : (
        <div className="project-card">
            {card_content}
        </div>
    );
}

export default ProjectCard;