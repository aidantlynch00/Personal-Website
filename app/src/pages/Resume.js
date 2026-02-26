const Resume = () => {
    const resume = process.env.PUBLIC_URL + "resources/files/Aidan_Lynch_Resume.pdf";

    return (
        <div id='resume'>
            <iframe src={resume} />
        </div>
    );
}

export default Resume;
