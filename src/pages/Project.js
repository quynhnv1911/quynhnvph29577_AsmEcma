import Header from "../components/header";

const ProjectPage = () => {
    return `
    ${Header()}
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
    `
}

export default ProjectPage;