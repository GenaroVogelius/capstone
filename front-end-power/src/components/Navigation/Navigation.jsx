
import {StyledNavigation} from "./StyledNavigation"


function Navigation() {
    

    return (
      <StyledNavigation>
        <div class="menu-btn">
          <span class="menu-btn__burguer"></span>
        </div>
        <nav class="nav">
          <ul class="menu-nav">
            <li class="menu-nav__item active">
              <a href="index.html" class="menu-nav__link">
                About Me
              </a>
            </li>
            <li class="menu-nav__item">
              <a href="my-projects.html" class="menu-nav__link">
                My Web Projects
              </a>
            </li>
          </ul>
        </nav>
      </StyledNavigation>
    );
}

export default Navigation