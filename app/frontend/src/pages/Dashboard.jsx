import React, { useState } from 'react';

import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import Tabs from '../components/Tabs';
import ProjectCard from '../components/ProjectCard';

function Dashboard() {

  return (
    <div className="flex h-screen overflow-hidden dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />
            <Tabs />
            <ProjectCard />

          </div>
        </main>

      </div>

    </div>
  );
}

export default Dashboard;
