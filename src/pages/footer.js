import Header from "../components/header";
import HomePage from "./Home";

const footer = () => {
    return `
    <section id="footer ">
    <div class="contact">
      <h3 class="footer_title">
        Contact Me
      </h3>
      <div class="contact-row">
        <div class="contact-col">
          <h3>Message Me</h3>
          <div class="info">
            <input class="name" type="text" placeholder="Name">
            <input class="email" type="email" placeholder="Email">
            <input class="sub" type="text" placeholder="Subject">
            <input class="message" type="text" placeholder="Message">
          </div>
          <div class="send">
            <a href="" class=" banner-btn bg-blue-700  text-white ">Send Message</a>
          </div>
        </div>
        <div class="contact-col">
          <h3>Get in touch</h3>
          <p class="contact-col-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum
            corporis fuga
            corrupti.
            Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
          <div class="footer_bottom">
            <div class="footer_bottom-1 flex ">
              <i class="fa-solid fa-user "></i>
              <p class="ml-2">Nguyễn Văn Quỳnh</p>
            </div>
            <div class="footer_bottom-1 flex  ">
              <i class="fa-solid fa-map-location-dot"></i>
              <p class="ml-2">Hà Nội </p>
            </div>
            <div class="footer_bottom-1 flex  ">
              <i class="fa-solid fa-at"></i>
              <p class="ml-2">Quynhph29577@fpt.edu.vn</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    `
}

export default footer;