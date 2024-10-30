import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Helper function to capitalize and format the breadcrumb name
  const formatName = (name) => {
    return name
      .split('-') // Split based on dashes
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join with spaces
  };

  return (
    <div className='landPostHead'>
      <nav>
        <ol className="breadcrumb">
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const formattedName = formatName(name); // Apply the format function

            return (
              <li 
                key={routeTo} 
                className={location.pathname === routeTo ? 'active' : ''}
              >
                <Link 
                  to={routeTo} 
                  className={location.pathname === routeTo ? 'active-link' : ''}
                >
                  {formattedName}
                </Link>
              </li>
            );
          })}
        </ol>
      </nav>
     
    </div>
  );
}
