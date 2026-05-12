import React from 'react';
import './HeroCarousel.css';

export default function HeroCarousel() {
  return (
    <section className="hero-carousel" aria-label="메인 배너 영역">
      <div className="hero-image-wrapper">
        <img 
          src="assets/images/hero.png" 
          alt="국토정보플랫폼 성곽길 전경" 
          className="hero-main-img" 
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <p className="hero-subtitle">대한민국 국토정보의 중심</p>
        <h1 className="hero-title">국토정보플랫폼</h1>
        
        <div className="hero-search-bar">
          <input type="text" placeholder="검색어를 입력하세요" aria-label="통합 검색" />
          <button type="button" className="search-btn">
            <span className="sr-only">검색</span>
          </button>
        </div>
      </div>
      
      <div className="carousel-indicators" aria-hidden="true">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
}
