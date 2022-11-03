import React from 'react';

function ProjectCard() {

  return (
    <div className="rounded-lg shadow-lg bg-white dark:bg-midnight max-w-sm">
      <a href="#!">
        <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""/>
      </a>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">Villa Gaudelet</h5>
        <p classname="text-gray-700 text-base mb-4">
          Some quick example text to build on the card title and make up the bulk of the card's
          content.
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
