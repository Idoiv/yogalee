import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FloatingSidebar.css';

const sidebarNavItems = [
  { display: 'Home', to: '/', icon: 'fas fa-home' }, // Home icon
  { display: 'Sign Up', to: '/signup', icon: 'fas fa-user-plus' }, // Sign Up icon
  { display: 'FAQ', to: '/faq', icon: 'fas fa-question-circle' }, // FAQ icon
];

const FloatingSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const activeItem = sidebarNavItems.findIndex(item => item.to === location.pathname);
    setActiveIndex(location.pathname.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className='floating-sidebar'>
      <div className="logo">
        {/* Your logo here */}
      </div>
      <div className="sidebar-menu">
        {
          sidebarNavItems.map((item, index) => (
            <Link to={item.to} key={index} className="no-underline">
              <div className={`sidebar-menu-item ${activeIndex === index ? 'active' : ''}`}>
                <i className={item.icon}></i> {/* Icon is now based on item.icon */}
                {item.display}
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default FloatingSidebar;
