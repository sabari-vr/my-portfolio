import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
  type formdata = {
    from_name: string;
    reply_to: string;
    message: string;
  };

  const form = useRef<HTMLFormElement>(null!);
  const [done, setDone] = useState<boolean>(false);
  const [notDone, setNotDone] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<formdata>({
    from_name: "",
    reply_to: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setDone(false);
    setNotDone(false);
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.from_name || !formData.reply_to || !formData.message) {
      setNotDone(true);
    } else {
      setLoading(true);
      emailjs
        .sendForm(
          "service_lnv3ufk",
          "template_uklmn7d",
          form.current,
          "NLe-7QoNxEdFVpv-x"
        )
        .then(
          (result: any) => {
            console.log(result.text);
            setLoading(false);
            setDone(true);
          },
          (error: any) => {
            setLoading(false);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <Container style={{ paddingTop: "50px" }}>
      <Row>
        <Col md={6} className="c-left">
          <h1>Get in Touch</h1>
          <h1 className="yellow">Contact me</h1>
        </Col>
        <Col md={6} className="c-right">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              className="user"
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              type="email"
              name="reply_to"
              className="user"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              name="message"
              className="user"
              placeholder="Message"
              onChange={handleChange}
            />
            <span className="not-done">
              {notDone && "Please, fill all the input field"}
            </span>
            <Button type="submit" className="button" disabled={done}>
              {loading ? (
                <Spinner
                  animation="border"
                  role="status"
                  size="sm"
                  variant="light"
                />
              ) : (
                "Send"
              )}
            </Button>
            <span className="done">
              {done &&
                "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}
            </span>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
