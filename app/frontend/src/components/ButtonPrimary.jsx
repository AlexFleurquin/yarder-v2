import React from 'react';
import { Link } from 'react-router-dom';

function ButtonPrimary(props) {

  return (
    <div>
      <Link className="btn text-white bg-orange-300 hover:bg-orange-200 w-full shadow-sm" to="/signup">
        {props.children}
      </Link>
    </div>
  );
}

export default ButtonPrimary;
