import React from 'react';

import Header from '../partials/home/Header';
import Hero from '../partials/home/Hero';
import Inspiration from '../partials/home/Inspiration';
import Carousel from '../partials/home/Carousel';
import Creatives from '../partials/home/Creatives';
import Pricing from '../partials/home/Pricing';
import Testimonials from '../partials/home/Testimonials';
import Faqs from '../partials/home/Faqs';
import Blog from '../partials/home/Blog';
import Cta from '../partials/home/Cta';
import Footer from '../partials/home/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <Hero />
        <Inspiration />
        <Carousel />
        <Creatives />
        <Pricing />
        <Testimonials />
        <Faqs />
        <Blog />
        <Cta />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;
