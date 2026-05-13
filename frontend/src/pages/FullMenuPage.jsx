import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FullMenuPage.css';

const menuData = [
  {
    title: '국토정보맵',
    items: ['통합지도검색', '국토통계지도', '북한지도', '역사지도', '정밀도로지도', '사용자참여지도']
  },
  {
    title: '공간정보',
    items: ['지도 정보', '국가기준점', '국가수직기준연계', '독도공간정보', '극지공간정보', '국토변화정보', '역사지도정보', '위성영상정보', '건물높이공간정보']
  },
  {
    title: '자료실',
    items: ['지도자료', '근대측량자료', '대한민국 국가지도집', '지리지 및 지명유래집', '국토 모니터링 보고서', '지명사전']
  },
  {
    title: '지원서비스',
    items: ['업무지원', '오픈 API', '민원서비스', '긴급 공간정보']
  }
];

export default function FullMenuPage() {
  const navigate = useNavigate();
  // 아코디언 상태 관리 (어떤 메뉴가 열려 있는지 저장)
  const [openIndex, setOpenIndex] = useState(0); // 기본적으로 첫 번째 메뉴 열림

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index); // 이미 열린 걸 누르면 닫고, 아니면 해당 인덱스 열기
  };

  return (
    <div className="full-menu-page">
      {/* 1. 로그인 안내 및 닫기 버튼 */}
      <header className="menu-top-bar">
        <div className="login-prompt">
          <div className="user-icon-bg">
             <img src="/national-geo-platform/assets/images/login-icon.png" alt="user" className="user-icon-img" />
          </div>
          <h1 className="login-text">로그인을 해주세요.</h1>
        </div>
        <button className="menu-close-x" onClick={() => navigate(-1)}>
          <span className="x-char">×</span>
        </button>
      </header>

      {/* 2. 유틸리티 버튼 영역 */}
      <div className="menu-quick-tabs">
        <button className="quick-tab-btn">로그인</button>
        <button className="quick-tab-btn">회원가입</button>
        <button className="quick-tab-btn">이용가이드</button>
      </div>

      {/* 3. 메인 메뉴 리스트 (아코디언 구조) */}
      <nav className="main-nav-container">
        {menuData.map((section, idx) => (
          <div key={idx} className={`nav-group ${openIndex === idx ? 'is-open' : ''}`}>
            <button className="nav-group-trigger" onClick={() => toggleAccordion(idx)}>
              <span className="group-title">{section.title}</span>
              <span className={`arrow-icon ${openIndex === idx ? 'up' : 'down'}`}></span>
            </button>
            <div className="nav-sub-wrapper">
              <ul className="nav-sub-list">
                {section.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="nav-sub-item">
                    <a href="#" className="nav-sub-link">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </nav>

      {/* 4. 푸터 로고 (아이콘 추가) */}
      <footer className="menu-page-footer">
        <div className="footer-logo-area">
          <img src="/national-geo-platform/assets/images/logo-icon.png" alt="logo" className="footer-mini-logo" />
          <div className="footer-logo-text">
            <span className="footer-logo-sub">국토지리정보원</span>
            <strong className="footer-logo-main">국토정보플랫폼</strong>
          </div>
        </div>
        <p className="footer-copyright" style={{ marginTop: '20px', fontSize: '12px', color: '#999', textAlign: 'center' }}>
          © 2026 국토지리정보원. 이 사이트는 교육 및 포트폴리오 목적으로 제작된 학습용 사이트입니다.
        </p>
      </footer>
    </div>
  );
}
