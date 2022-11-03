import React from 'react';

function WelcomeBanner() {
  return (
    <div className="p-4 sm:p-6 mb-8">
      <h1 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">Bonjour Clara 👋🏼</h1>
      <p className="dark:text-slate-300">Voici les avancées de vos projets</p>
    </div>
  );
}

export default WelcomeBanner;
