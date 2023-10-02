import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = e => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setLoading(true);
    //template_sewbm59 service_5q3u1sg iNnttWueHmchg52KH
    emailjs
      .send(
        "service_5q3u1sg",
        "template_sewbm59",
        {
          from_name: form.name,
          to_name: "Mohammad Monish",
          from_email: form.email,
          to_email: "mdmonishalig17@gmail.com",
          message: form.message,
        },
        "iNnttWueHmchg52KH"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        error => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return (
    <>
      {" "}
      <div
        className="px-10 sm:py-16 sm:px-16 py-10 bg-pattern font-mono"
        id="contact"
      >
        <h1 className="text-[24px] sm:text-[48px] font-bold">
          Contact Me Here
        </h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-2 sm:mt-6 flex flex-col gap-4 font-mono"
        >
          <label className="flex flex-col">
            <span className="text-white font-mono font-medium mb-1 sm:mb-2">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-[#F2F2F2] py-1 sm:py-3 px-6 placeholder:text-secondary rounded-md sm:rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1 sm:mb-2">
              Your email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-[#F2F2F2] py-1 sm:py-3 px-6 placeholder:text-secondary rounded-md sm:rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-1 sm:mb-2">
              Your Message
            </span>
            <textarea
              rows={4}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-[#F2F2F2] py-1 sm:py-3 px-6 placeholder:text-secondary rounded-md sm:rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary text-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl outline-none w-fit text-bacl font-bold font-mono shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
      <div className="bg-black text-white py-8">
        <div className="text-center mb-6 bg-black">
          <p className="font-bold font-mono">mdmonishalig17@gmail.com</p>
          <div className="font-semi-bold font-mono">
            <WhatsAppIcon />
            <span className="underline">+917906401163</span>
          </div>
        </div>
        <div className="flex justify-center gap-x-2">
          <a
            href="https://www.linkedin.com/in/mohammad-monish/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/mdmonish?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
