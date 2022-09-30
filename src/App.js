import { Component } from 'inferno';
import { NavigationBar } from './components/NavigationBar';
import { Hero } from './components/Hero';
import { NewsletterCTA } from './components/NewsletterCTA';
import { FilterTabs } from './components/FilterTabs';
import { BlogPostsThumbnails } from './components/BlogPostsThumbnails';
import { Footer } from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App page-container">
        <NavigationBar />
        <Hero />
        <NewsletterCTA />
        <FilterTabs />
        <BlogPostsThumbnails />
        <Footer />
      </div>
    );
  }
}

export default App;
