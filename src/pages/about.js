import Header from "../components/header"
import HomePage from "./Home"
import footer from "./footer"

const AboutPage = () => {
  return `
        ${Header()}
        </section>
        <section id="service">
        <div class="service  ">
          <div class="service_top ">
            <div class="service_top-title">
              <h1 class="our-service">our service</h1>
              <h3>Determine the service you need</h3>
            </div>
            <div class="service_top-row flex">
              <div class="service_col">
                <!--  -->
                <div class="services-item">
                  <div class="services-icon">
                    <img src="src/img/item1.png" alt="">
                  </div>
                  <div class="services-info">
                    <h3>Web Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <!--  -->
                <div class="services-item">
                  <div class="services-icon">
                    <img src="src/img/item2.png" alt="">
                  </div>
                  <div class="services-info">
                    <h3>UI/UX Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
  
                <div class="services-item">
                  <div class="services-icon">
                    <img src="src/img/item3.png" alt="">
                  </div>
                  <div class="services-info">
                    <h3>Graphics design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
  
                <div class="services-item">
                  <div class="services-icon">
                    <img src="src/img/item4.png" alt="">
                  </div>
                  <div class="services-info">
                    <h3>SEO Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
  
            </div>
          </div>
          <!-- <div class="service-bottom">
            <h2 class="ml-4 pt-4"> SERVICES</h2>
            <div class="service-row flex mt-5">
              <h3 class="ml-4">Where our services add value to</br> your product</h3>
              <p>Helping companies & individuals identify key solutions for their target</br> markets. We boost their
                ability to
                create products. Our business model saves</br> clients time and money. Don't reinvent the wheel.</p>
            </div>
          </div> -->
        </div>
      </section>
      <section id="portfolio">
        <div>
          <div class="portfolio-section">
            <h2 class="text-3xl pt-6 pb-4 ">Portfolio</h2>
            <div class="row items-center">
              <div><img class="img-fluid" src="src/img/project-1.jpg" width="800" height="500" /></a></div>
              <div class=" align-items-center">
                <div class="project_row">
                  <p class="project_title text-blue-500">Frontend / HTML / CSS / JavaScript</p>
                  <h3 class="project-alo">Photo Agency Website</h3>
                  <p class=" project-content">Built highly performant website front end for a Photography agency.
                    Delivered
                    codebase in HTML, CSS and modern JavaScript.</p>
                </div>
              </div>
            </div>
            <div class="row items-center portfolio-reverse">
              <div class=" align-items-center">
                <div class="project_row ">
                  <p class="project_title  text-blue-500">Graphic Design / Photoshop / Sketch</p>
                  <h3 class="project-alo">Restaurant Website Design</h3>
                  <p class=" project-content">Web design for popular resturant chain involving complex layouts
                    done in both
                    Photoshop and Sketch. Collaborated with back-end and front-end team for finished product.</p>
                </div>
              </div>
              <div><img class="img-fluid" src="src/img/project-2.jpg" width="800" height="500" /></a></div>
            </div>
            <div class="row items-center">
              <div><img class="img-fluid" src="src/img/project-3.jpg" width="800" height="500" /></a></div>
              <div class=" align-items-center">
                <div class="project_row">
                  <p class="project_title  text-blue-500">Frontend / HTML / CSS / JavaScript</p>
                  <h3 class="project-alo">E-Commerce Website</h3>
                  <p class=" project-content ">Built highly performant website for an E-commerce Portal. Worked
                    with back-end team
                    to timely deliver codebase in HTML, CSS and modern JavaScript.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        ${footer()}
    `
}

export default AboutPage