import Header from "../../components/Header";

import HeaderImage from "../../images/header_bg_2.jpg";

import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam
        id distinctio praesentium doloribus rerum odio accusantium adipisci
        molestias numquam. Nemo deleniti cum recusandae doloribus reiciendis
        iste error, suscipit aspernatur.
      </Header>

      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:allakhverdievrovshann@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              {" "}
              <MdEmail />{" "}
            </a>
            <a href="https://www.facebook.com/ehtiyyat.hisseleri.10?locale=en_GB" target="_blank" rel="noreferrer noopener">
              {" "}
              <BsMessenger />{" "}
            </a>
            <a href="https://api.whatsapp.com/send?phone=994554233353" target="_blank" rel="noreferrer noopener">
              {" "}
              <IoLogoWhatsapp />{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
