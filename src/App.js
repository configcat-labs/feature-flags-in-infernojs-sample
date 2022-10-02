import { Component } from 'inferno';
import { NavigationBar } from './components/NavigationBar';
import { Hero } from './components/Hero';
import { NewsletterCTA } from './components/NewsletterCTA';
import { FilterTabs } from './components/FilterTabs';
import { BlogPostsThumbnails } from './components/BlogPostsThumbnails';
import { Footer } from './components/Footer';
import './App.css';

import * as configcat from "configcat-js";

class App extends Component {

  constructor() {
    super()
    this.state = {
      canShowNewsletterSignup: false
    }
  }

  componentDidMount() {
    let configCatClient = configcat.createClient("5KPaCArgqUuGpQRk3EeGQg/2-QHVN3TkkWAXpQ2Br0bzQ");
    configCatClient.getValueAsync("canshownewslettersignup", false)
    .then( value => {
      this.setState({canShowNewsletterSignup: value});
    })
  }

  render() {
    return (
      <div className="App page-container">
        <NavigationBar />
        <Hero />
        { this.state.canShowNewsletterSignup && 
          <NewsletterCTA />
        }
        <FilterTabs />
        <BlogPostsThumbnails />
        <Footer />
      </div>
    );
  }
}

export default App;
