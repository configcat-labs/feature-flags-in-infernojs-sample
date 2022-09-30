import { Component } from 'inferno';

export class NavigationBar extends Component {

  render() {
    function toggleMobileNav() {
      const element = document.getElementById('mobile-nav');
      element.classList.toggle('display-none');
    }

    return (
      // Navigation Bar
      <header class="flex">
  
        <a class="logo" href="/">ROCKET-BLOG</a>
  
        <nav class="flex desktop-nav">
          <a href="/">Portfolio</a>
          <a class="active" href="/">Blog</a>
          <a href="/">CV</a>
          <a href="/">Store</a>
          <a href="/">Freelance</a>
          <a href="/">About Me</a>
          <a href="/">Contact</a>
        </nav>
  
        <div id="mobile-nav" class="display-none">
          <div class="flex close-button-wrapper">
            <button onClick={toggleMobileNav} class="close-button">
              <span class="line-1"></span>
              <span class="line-2"></span>
            </button>
          </div>
          <nav>
            <a href="/">Portfolio</a>
            <a class="active" href="/">Blog</a>
            <a href="/">CV</a>
            <a href="/">Store</a>
            <a href="/">Freelance</a>
            <a href="/">About Me</a>
            <a href="/">Contact</a>
          </nav>
        </div>
  
        <button
          onClick={toggleMobileNav}
          class="mobile-nav-toggle display-none"
        >
          <span class="line-1"></span>
          <span class="line-2"></span>
          <span class="line-3"></span>
        </button>
      </header>
    )
  }
}