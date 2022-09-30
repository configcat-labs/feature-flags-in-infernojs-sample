import { Component } from "inferno";

export class Hero extends Component {
  render() {
    return (
      // Hero
      <section class="hero flex">
      <div class="hero-left">
        <h1>Blog Posts</h1>
        <h2>UX Rocket Science.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          provident vero deserunt, iusto numquam enim error veniam! Numquam
          obcaecati soluta quo asperiores quas aut dignissimos possimus atque.
          Commodi, at similique?
        </p>
        <div class="social-button-group flex">
          <button class="twitter-button flex">
            <i class="fa-brands fa-twitter"></i>
            <span class="button-text"> Twitter </span>
          </button>
          <button class="linkedin-button flex">
            <i class="fa-brands fa-linkedin-in"></i>
            <span class="button-text"> LinkedIn </span>
          </button>
          <button class="medium-button flex">
            <i class="fa-brands fa-medium"></i>
            <span class="button-text"> Medium </span>
          </button>
        </div>
      </div>
      <div class="hero-right">
        <img src="/images/hero-illustration.svg" alt="" />
      </div>
    </section>
    )
  }
}