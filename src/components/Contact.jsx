import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { send, sendHover } from "../assets";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { errorToast, successToast } from "../services/toast";
// import { successToast } from "../services/toastify.service";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      emailjs
        .send(
          import.meta.env.VITE_REACT_APP_SERVICE,
          import.meta.env.VITE_REACT_APP_TEMPLATE,

          {
            from_name: values.name,
            to_name: import.meta.env.VITE_REACT_APP_TO_NAME,

            from_email: values.email,
            to_email: import.meta.env.VITE_REACT_APP_TO_EMAIL,
            message: values.message,
          },
          import.meta.env.VITE_REACT_APP_PK
        )
        .then(
          () => {
            setLoading(false);
            successToast(
              "Thank you. I have received your message and will get back to you as soon as possible."
            );

            formik.resetForm();
          },
          (error) => {
            setLoading(false);
            console.log(error);
            errorToast("Something went wrong. Please try again.");
          }
        );
    },
  });

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins"
        >
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
            {formik.touched.name && formik.errors.name && (
              <span className="text-red-500">{formik.errors.name}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-red-500">{formik.errors.email}</span>
            )}
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
            {formik.touched.message && formik.errors.message && (
              <span className="text-red-500">{formik.errors.message}</span>
            )}
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector(".contact-btn")
                .setAttribute("src", sendHover);
            }}
            onMouseOut={() => {
              document.querySelector(".contact-btn").setAttribute("src", send);
            }}
          >
            {loading ? "Sending" : "Send"}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
      <div>
        <iframe
          width="380"
          height="316"
          id="gmap_canvas"
          style={{ marginTop: "70px" }}
          src="https://maps.google.com/maps?width=380&amp;height=316&amp;hl=en&amp;q=Jagannath%20Temple%20Mahankal,%20Golfutar%20Main%20Road,%20Hattigauda,%20Buddhanilkantha%20Kathmandu+(Me)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        <br></br>
        <h1 style={{ marginBottom: "5px" }}>
          <b>Socials</b>
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a
            href="https://www.linkedin.com/in/saurya-raj-pandey-77a1a9160/"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: "10px",
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
            title="LinkedIn"
            onMouseOver={(e) => {
              e.currentTarget.insertAdjacentHTML(
                "beforeend",
                `<span style="position: absolute; z-index: 1; background: black; color: white; padding: 4px 8px; border-radius: 20px; top: 100%; left: 50%; transform: translateX(-50%); white-space: nowrap;">${e.currentTarget.getAttribute(
                  "title"
                )}</span>`
              );
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector("span").remove();
            }}
          >
            <LinkedInIcon style={{ fontSize: "30" }} />
          </a>
          <a
            href="https://github.com/sauryarajpandey"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: "10px",
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
            title="Github"
            onMouseOver={(e) => {
              e.currentTarget.insertAdjacentHTML(
                "beforeend",
                `<span style="position: absolute; z-index: 1; background: black; color: white; padding: 4px 8px; border-radius: 20px; top: 100%; left: 50%; transform: translateX(-50%); white-space: nowrap;">${e.currentTarget.getAttribute(
                  "title"
                )}</span>`
              );
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector("span").remove();
            }}
          >
            <GitHubIcon style={{ fontSize: "30" }} />
          </a>
          <a
            href="https://join.skype.com/invite/u8gyUIgJnJgQ"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: "10px",
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
            title="Skype"
            onMouseOver={(e) => {
              e.currentTarget.insertAdjacentHTML(
                "beforeend",
                `<span style="position: absolute; z-index: 1; background: black; color: white; padding: 4px 8px; border-radius: 20px; top: 100%; left: 50%; transform: translateX(-50%); white-space: nowrap;">${e.currentTarget.getAttribute(
                  "title"
                )}</span>`
              );
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector("span").remove();
            }}
          >
            <svg
              width="30px"
              height="30px"
              viewBox="100 100 286 286"
              xmlns="http://www.w3.org/2000/svg"
              fill="#0000FF"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M361.997,260.412c1.007-6.357,1.534-12.864,1.534-19.506c0-69.032-55.962-124.993-124.997-124.993 c-6.627,0-13.149,0.546-19.502,1.534c-11.513-7.113-25.1-11.237-39.663-11.237c-41.713,0-75.535,33.807-75.535,75.527 c0,14.559,4.127,28.134,11.244,39.674c-0.984,6.368-1.527,12.853-1.527,19.498c0,69.032,55.962,124.975,124.979,124.975 c6.63,0,13.156-0.509,19.51-1.512c11.525,7.109,25.103,11.248,39.666,11.248c41.721,0,75.539-33.826,75.539-75.542 C373.244,285.515,369.121,271.936,361.997,260.412z M297.878,297.747c-5.287,7.615-13.051,13.564-23.206,17.841 c-10.17,4.284-22.189,6.417-36.067,6.417c-16.64,0-30.417-2.907-41.287-8.786c-7.708-4.209-13.972-9.86-18.795-16.902 c-4.827-7.049-7.274-13.949-7.274-20.677c0-3.97,1.512-7.424,4.46-10.234c2.978-2.833,6.814-4.258,11.338-4.258 c3.708,0,6.892,1.119,9.485,3.334c2.574,2.215,4.733,5.426,6.499,9.669c2.114,4.917,4.415,9.033,6.862,12.307 c2.428,3.24,5.848,5.946,10.282,8.063c4.385,2.122,10.211,3.184,17.511,3.184c9.987,0,18.058-2.155,24.235-6.425 c6.208-4.296,9.193-9.53,9.193-15.85c0-5.044-1.609-9.055-4.905-12.176c-3.326-3.158-7.622-5.571-12.958-7.252 c-5.351-1.695-12.539-3.499-21.545-5.392c-12.09-2.638-22.211-5.714-30.398-9.242c-8.202-3.54-14.735-8.382-19.573-14.496 c-4.849-6.174-7.27-13.848-7.27-22.944c0-8.67,2.552-16.426,7.667-23.169c5.111-6.761,12.505-11.94,22.144-15.551 c9.605-3.607,20.916-5.407,33.87-5.407c10.361,0,19.319,1.197,26.907,3.588c7.566,2.398,13.871,5.568,18.915,9.553 c5.014,3.966,8.696,8.157,11.031,12.55c2.331,4.412,3.51,8.711,3.51,12.909c0,3.906-1.512,7.446-4.46,10.556 c-2.949,3.106-6.72,4.692-11.128,4.677c-3.974,0-7.091-0.913-9.25-2.859c-2.107-1.871-4.314-4.861-6.705-9.025 c-3.023-5.815-6.642-10.335-10.851-13.575c-4.097-3.177-10.855-4.834-20.265-4.812c-8.703,0-15.67,1.777-20.928,5.253 c-5.287,3.536-7.82,7.637-7.831,12.445c0.011,3.012,0.872,5.545,2.616,7.719c1.77,2.193,4.228,4.09,7.394,5.691 c3.166,1.624,6.383,2.881,9.62,3.787c3.27,0.924,8.696,2.264,16.247,4.041c9.463,2.039,18.054,4.318,25.77,6.803 c7.701,2.499,14.267,5.508,19.7,9.1c5.474,3.573,9.751,8.135,12.801,13.642c3.072,5.515,4.602,12.251,4.602,20.183 C305.836,281.567,303.176,290.147,297.878,297.747z"
                    fill="#00AEF3"
                  ></path>
                </g>
              </g>
            </svg>
          </a>
          <a
            href="https://sauryapandey.medium.com/"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: "10px",
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
            title="Medium"
            onMouseOver={(e) => {
              e.currentTarget.insertAdjacentHTML(
                "beforeend",
                `<span style="position: absolute; z-index: 1; background: black; color: white; padding: 4px 8px; border-radius: 20px; top: 100%; left: 50%; transform: translateX(-50%); white-space: nowrap;">${e.currentTarget.getAttribute(
                  "title"
                )}</span>`
              );
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector("span").remove();
            }}
          >
            <svg
              fill="#fffff"
              width="35px"
              height="35px"
              viewBox="0 0 256 256"
              id="Flat"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#fffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M70,56C33.60742,56,4,88.29885,4,128s29.60742,72,66,72,66-32.29883,66-72S106.39258,56,70,56Zm0,120c-23.15918,0-42-21.5332-42-48S46.84082,80,70,80s42,21.5332,42,48S93.15918,176,70,176ZM182,60c-23.36035,0-34,35.249-34,68s10.63965,68,34,68,34-35.249,34-68S205.36035,60,182,60Zm0,111.26367c-3.65674-4.06347-10-18.89746-10-43.26367s6.34326-39.20019,10-43.26367c3.65674,4.06348,10,18.89746,10,43.26367S185.65674,167.20022,182,171.26369ZM252,72V184a12,12,0,0,1-24,0V72a12,12,0,1,1,24,0Z"
                  fill="#FFFFFF"
                ></path>{" "}
              </g>
            </svg>
          </a>
          <a
            href="https://instagram.com/saurya_pandey_?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: "10px",
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
            title="Instagram"
            onMouseOver={(e) => {
              e.currentTarget.insertAdjacentHTML(
                "beforeend",
                `<span style="position: absolute; z-index: 10; background: black; color: white; padding: 4px 8px; border-radius: 20px; top: 100%; left: 50%; transform: translateX(-80%); white-space: nowrap;">${e.currentTarget.getAttribute(
                  "title"
                )}</span>`
              );
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector("span").remove();
            }}
          >
            <InstagramIcon style={{ fontSize: "30" }} />
          </a>
          <a
            href="https://www.facebook.com/saurya.raj.pandey?mibextid=ZbWKwL"
            target="_blank"
            rel="noreferrer"
            style={{
              marginRight: "10px",
              position: "relative",
              display: "inline-block",
              textDecoration: "none",
            }}
            title="Facebook"
            onMouseOver={(e) => {
              e.currentTarget.insertAdjacentHTML(
                "beforeend",
                `<span style="position: absolute; z-index: 1; background: black; color: white; padding: 4px 8px; border-radius: 20px; top: 100%; left: 50%; transform: translateX(-50%); white-space: nowrap;">${e.currentTarget.getAttribute(
                  "title"
                )}</span>`
              );
            }}
            onMouseOut={(e) => {
              e.currentTarget.querySelector("span").remove();
            }}
          >
            <FacebookIcon style={{ fontSize: "30" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
