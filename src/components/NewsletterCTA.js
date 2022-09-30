import { Component } from "inferno";

export class NewsletterCTA extends Component {

  render() {
    return (
      // Newsletter Call to Action
      <section class="newsletter-cta flex">
      <div class="left-col"></div>
      <div class="right-col flex">
        <div>
          <h3>Straight from our desk, to your inbox.</h3>
          <p>Subscribe to our newsletter</p>
          <form action="#" class="flex">
            <input
              type="text"
              name="email-address"
              id="email-address"
              placeholder="E-mail"
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
    )
  }
}