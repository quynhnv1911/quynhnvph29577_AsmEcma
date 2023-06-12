import { menuList } from '../dataFake.js'

const Header = () => {
  return `
    <header class="flex items-center justify-between py-16">


    <!-- logo -->

    <div class="logo"><img src="src/img/logo.png" alt="">
    </div>
    <div class="header_right flex">
      <nav>
        <ul class="link-nav ">
          <li class="ml-9"><a href="">Home</a></li>
          <li class="ml-9"><a href="/about">Service</a></li>
          <li class="ml-9"><a href="/project">Project</a></li>
        </ul>
      </nav>

    </div>
    <a href="/contact"><button class=" banner-nav bg-blue-700  text-white ">Contact</button></a>
  </header>
 

    `
}

export default Header;