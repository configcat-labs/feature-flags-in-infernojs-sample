import { Component } from "inferno";

export class FilterTabs extends Component {
  render() {
    return (
      // Filter tabs
      <section class="filter-tabs">
        <ul class="flex">
          <a class="active" href="/">All</a>
          <a href="/">UI Design</a>
          <a href="/">UX Design</a>
          <a href="/">Product Design</a>
          <a href="/">Articles</a>
          <a href="/">Tutorials</a>
          <a href="/">News</a>
        </ul>
      </section>
    )
  }
}