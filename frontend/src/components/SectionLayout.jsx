import React from 'react';
import './SectionLayout.css';

export default function SectionLayout({ title, subtitle, bgImageUrl, children }) {
  return (
    <section className="section-layout" aria-label={title}>
      {/* 타이틀 배너 영역 (이미지 포함) */}
      <div className="section-header">
        <div className="section-header-bg" aria-hidden="true">
          <img src={bgImageUrl} alt="" className="section-header-img" />
          <div className="section-header-overlay"></div>
        </div>
        
        <div className="section-header-content">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      </div>
      
      {/* 콘텐츠 영역 (카드 리스트 등) */}
      <div className="section-body">
        <div className="section-body-inner">
          {children}
        </div>
      </div>
    </section>
  );
}
