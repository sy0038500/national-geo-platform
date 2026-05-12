import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const desktopMenus = [
  { id: 'sitemap', label: '사이트맵', icon: '/national-geo-platform/assets/images/sitemap-icon.png' },
  { id: 'guide', label: '이용안내', icon: '/national-geo-platform/assets/images/guide-icon.png' },
  { id: 'login', label: '로그인', icon: '/national-geo-platform/assets/images/login-icon.png' },
  { id: 'join', label: '회원가입', icon: '/national-geo-platform/assets/images/join-icon.png' },
];

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="app-header" role="banner">
      <div className="header-inner">
        {/* 로고 영역 */}
        <a href="/" className="logo-area" aria-label="국토지리정보원 국토정보플랫폼 홈으로 이동">
          <div className="logo-symbol" aria-hidden="true">
            <img src='/national-geo-platform/assets/images/logo-icon.png' alt='로고아이콘' />
          </div>
          <div className="logo-titles">
            <span className="logo-sub">국토지리정보원</span>
            <strong className="logo-main">국토정보플랫폼</strong>
          </div>
        </a>
        
        {/* 데스크탑 메뉴 (768px 이상에서 노출) */}
        <nav className="desktop-nav" aria-label="데스크탑 주요 메뉴">
          <ul className="desktop-menu-list">
            {desktopMenus.map(menu => (
              <li key={menu.id} className="desktop-menu-item">
                <a href={`/${menu.id}`} className="desktop-menu-link">
                  <img src={menu.icon} alt="" className="desktop-menu-icon" />
                  <span className="desktop-menu-label">{menu.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* 모바일 햄버거 버튼 (768px 미만에서 노출) */}
        <button 
          type="button" 
          className="all-menu-btn" 
          aria-label="전체메뉴 열기"
          onClick={() => navigate('/menu')}
        >
          <span className="hamburger-icon" aria-hidden="true">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </span>
          <span className="menu-label">전체메뉴</span>
        </button>
      </div>
    </header>
  );
}
