import React from 'react';
import { useRouter } from 'next/router';
import css from 'styled-jsx/css';
import Link from './Link';

interface MenuTabType {
  title: string;
  href: string;
}

const { className: menuClassName, styles } = css.resolve`
  .nav-item {
    display: block;
    padding: 8px;
  }
  .nav-item + .nav-item {
    margin-left: 5px;
  }
  .active {
    background: #777777;
  }
`;

function Gnb() {
  const router = useRouter();

  const TAB_MENU: MenuTabType[] = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Contact Us', href: '/contact' }
  ];

  const isActive = (tab: MenuTabType): boolean => {
    return router.pathname === tab.href;
  };

  return (
    <>
      <style jsx>
        {`
          .wrap {
            width: 1000px;
            margin: 0 auto;
          }
          .header-wrap {
            display: flex;
            padding-top: 20px;
          }
          .logo {
            display: block;
            width: 80px;
          }
          .title {
            margin: 15px 0px 15px 15px;
            font-weight: 700;
            font-size: 30px;
          }
          nav {
            display: flex;
            background-color: #1b1c1d;
            color: #ffffff;
          }
        `}
      </style>

      <header className="wrap">
        <div className="header-wrap">
          <img src="/images/logo.png" alt="logo" className="logo" />
          <div className="title">Header</div>
        </div>
        <nav>
          {styles}
          {TAB_MENU.map((tab, idx) => (
            <Link
              href={tab.href}
              className={`${menuClassName} nav-item ${
                isActive(tab) ? 'active' : ''
              }`}
              key={idx}
            >
              <div>{tab.title}</div>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}

export default Gnb;
