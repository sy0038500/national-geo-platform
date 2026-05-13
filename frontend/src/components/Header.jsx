import React, { useEffect, useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const desktopMenus = [
  {
    id: 'sitemap',
    label: '사이트맵',
    icon: '/national-geo-platform/assets/images/sitemap-icon.png',
    link: 'https://map.ngii.go.kr/mn/siteMap.do',
  },
  {
    id: 'guide',
    label: '이용안내',
    icon: '/national-geo-platform/assets/images/guide-icon.png',
    link: 'https://map.ngii.go.kr/mi/oprGuide/portalIntro.do',
  },
  {
    id: 'login',
    label: '로그인',
    icon: '/national-geo-platform/assets/images/login-icon.png',
  },
  {
    id: 'join',
    label: '회원가입',
    icon: '/national-geo-platform/assets/images/join-icon.png',
  },
];

export default function Header() {
  const navigate = useNavigate();
  const [modalType, setModalType] = useState(null);

  const closeModal = () => {
    setModalType(null);
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const getModalMessage = () => {
    if (modalType === 'login') {
      return '로그인 기능은 현재 준비 중입니다.';
    }

    if (modalType === 'join') {
      return '회원가입 기능은 현재 준비 중입니다.';
    }

    return '';
  };

  return (
    <>
      <header className="app-header" role="banner">
        <div className="header-inner">
          {/* 로고 영역 */}
          <a
            href="/national-geo-platform/"
            className="logo-area"
            aria-label="국토지리정보원 국토정보플랫폼 홈으로 이동"
          >
            <div className="logo-symbol" aria-hidden="true">
              <img
                src="/national-geo-platform/assets/images/logo-icon.png"
                alt="로고아이콘"
              />
            </div>
            <div className="logo-titles">
              <span className="logo-sub">국토지리정보원</span>
              <strong className="logo-main">국토정보플랫폼</strong>
            </div>
          </a>

          {/* 데스크탑 메뉴 (768px 이상에서 노출) */}
          <nav className="desktop-nav" aria-label="데스크탑 주요 메뉴">
            <ul className="desktop-menu-list">
              {desktopMenus.map((menu) => (
                <li key={menu.id} className="desktop-menu-item">
                  {menu.id === 'login' || menu.id === 'join' ? (
                    <button
                      type="button"
                      className="desktop-menu-link desktop-menu-button"
                      onClick={() => setModalType(menu.id)}
                      aria-label={`${menu.label} 안내창 열기`}
                    >
                      <img
                        src={menu.icon}
                        alt=""
                        className="desktop-menu-icon"
                        aria-hidden="true"
                      />
                      <span className="desktop-menu-label">{menu.label}</span>
                    </button>
                  ) : (
                    <a
                      href={menu.link}
                      className="desktop-menu-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${menu.label} 새 창으로 열기`}
                    >
                      <img
                        src={menu.icon}
                        alt=""
                        className="desktop-menu-icon"
                        aria-hidden="true"
                      />
                      <span className="desktop-menu-label">{menu.label}</span>
                    </a>
                  )}
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

      {modalType && (
        <div
          className="login-modal-overlay"
          role="presentation"
          onClick={closeModal}
        >
          <div
            className="login-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="login-modal-close"
              aria-label="닫기"
              onClick={closeModal}
            >
              ×
            </button>

            <h2 id="login-modal-title" className="login-modal-title">
              {modalType === 'login' ? '로그인' : '회원가입'}
            </h2>

            <p className="login-modal-message">{getModalMessage()}</p>
          </div>
        </div>
      )}
    </>
  );
}