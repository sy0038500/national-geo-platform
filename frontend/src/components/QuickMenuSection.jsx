import React from 'react';
import './QuickMenuSection.css';

const quickItems = [
  { id: '1', title: '수치지도', imageUrl: '/national-geo-platform/assets/images/수치지도.svg' },
  { id: '2', title: '항공사진', imageUrl: '/national-geo-platform/assets/images/항공사진 아이콘.png' },
  { id: '3', title: '국가기준점', imageUrl: '/national-geo-platform/assets/images/국가기준점 아이콘.png' },
  { id: '4', title: '종이지도', imageUrl: '/national-geo-platform/assets/images/종이지도 아이콘.png' },
  { id: '5', title: '국토위성영상', imageUrl: '/national-geo-platform/assets/images/국토위성영상_아이콘.png' },
  { id: '6', title: '업무지원', imageUrl: '/national-geo-platform/assets/images/업무지원 아이콘.png' },
];

export default function QuickMenuSection() {
  return (
    <section className="quick-menu-section" aria-labelledby="quick-menu-title">
      <div className="quick-menu-header">
        <div className="quick-menu-inner">
          <h2 id="quick-menu-title" className="quick-menu-title">
            공간정보받기 및 업무지원
          </h2>
          <img 
          src="/national-geo-platform/assets/images/hero.png" 
          alt="국토정보플랫폼 성곽길 전경" 
          className="hero-main-img" 
        />
        </div>
      </div>
      
      <div className="quick-menu-body">
        <div className="quick-menu-inner">
          <ul className="quick-grid">
            {quickItems.map((item) => (
              <li key={item.id} className="quick-item">
                <a href="#" className="quick-link" aria-label={`${item.title} 바로가기`}>
                  <div className="quick-icon-wrapper">
                    <img src={item.imageUrl} alt="" className="quick-icon-img" aria-hidden="true" />
                  </div>
                  <span className="quick-item-title">{item.title}</span>
                  <span className="quick-badge">바로가기</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
