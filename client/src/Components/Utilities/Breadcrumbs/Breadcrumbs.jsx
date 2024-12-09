import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  
  // Split the pathname into individual parts
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb flex space-x-2">
        {/* Always render the "Home" link */}
        <li className="breadcrumb-item">
          <Link to="/" className="text-blue-600">Home</Link>
          {pathnames.length > 0 && <span className="mx-2">/</span>}
        </li>

        {/* Render the rest of the path */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="breadcrumb-item">
              {isLast ? (
                <span className="text-gray-500">{value}</span>
              ) : (
                <Link to={to} className="text-blue-600">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
              {!isLast && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
