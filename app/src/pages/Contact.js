import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Message } from "semantic-ui-react";

const nameRegex = /^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Contact = () => {
    const navigate = useNavigate();

    const [submitted, setSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const nameError = useMemo(() => {
        if (name === "") return "Name cannot be empty.";
        else if (!nameRegex.test(name)) return "Must be in the format 'First Last'.";
        else return null;
    }, [name]);

    const emailError = useMemo(() => {
        if (email === "") return "Email cannot be empty.";
        else if (!emailRegex.test(email)) return "Not a valid email.";
        else return null;
    }, [email]);

    const subjectError = useMemo(() => {
        if (subject === "") return "Subject cannot be empty.";
        return null;
    }, [subject]);

    const bodyError = useMemo(() => {
        if (body === "") return "Body cannot be empty.";
        return null;
    }, [body]);

    const [errorMessageList, setErrorMessageList] = useState([nameError, emailError, subjectError, bodyError]);

    const isError = () => !errorMessageList.every(message => message === null);
    const sendEmail = async () => {
        // only update message list on submit attempt
        setErrorMessageList([nameError, emailError, subjectError, bodyError]);

        // no issues
        if (!isError()) {
            let data = new FormData();
            data.append("name", name);
            data.append("email", email);
            data.append("subject", subject);
            data.append("body", body);

            let xhr = new XMLHttpRequest();
            const redirect = () => {
                if (this.readyState === 4 || (this.DONE && this.status === 200)) {
                    navigate("/acknowledgement");
                }
            }
            xhr.onreadystatechange = redirect.bind(xhr);
            xhr.onerror = () => alert("Something went wrong...");

            xhr.open("POST", process.env.PUBLIC_URL + "/resources/scripts/sender.php", true);
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(data);
        }

        setSubmitted(true);
    }

    let error = submitted && isError();
    let errorMessage = error ? (
        <Message error>
            <Message.Header>Invalid Email!</Message.Header>
            <Message.List>
                {errorMessageList.filter(message => message != null).map(message => (
                    <Message.Item>{message}</Message.Item>
                ))}
            </Message.List>
        </Message>
    ) : null;

    return (
        <div id="contact">
            Work In Progress!
        </div>
    );

    return (
        <div id="contact">
            <Form id="contact-form" error={error}>
                {errorMessage}
                <Form.Input id="contact-name" label="Name">
                    <Input
                        placeholder="First Last"
                        error={submitted && nameError != null}
                        onChange={(_, data) => setName(data.value ?? "")}
                    />
                </Form.Input>
                <Form.Input id="contact-email">
                    <Input
                        label="Email"
                        placeholder="user@example.com"
                        error={submitted && emailError != null}
                        onChange={(_, data) => setEmail(data.value ?? "")}
                    />
                </Form.Input>
                <Form.Input id="contact-subject" label="Subject">
                    <Input
                        placeholder="Subject"
                        error={submitted && subjectError != null}
                        onChange={(_, data) => setSubject(data.value ?? "")}
                    />
                </Form.Input>
                <Form.TextArea
                    id="contact-body"
                    placeholder="Email body..."
                    error={submitted && bodyError != null}
                    onChange={(_, data) => setBody(data.value ?? "")}
                />
                <Form.Button onClick={sendEmail}>
                    Send
                </Form.Button>
            </Form>
        </div>
    );
}

export default Contact;