import React from 'react';
import './HorizontalCard.css';

export default function HorizontalCard({ title, description, imageUrl, link = '#' }) {
  return (
    <article className="horizontal-card">
      <a href={link} className="h-card-link" aria-label={`${title} 상세 보기`}>
        {/* 좌측 썸네일 이미지 */}
        <div className="h-card-img-area">
          <img src={imageUrl} alt="" className="h-card-img" aria-hidden="true" />
        </div>
        
        {/* 우측 텍스트 및 버튼 영역 */}
        <div className="h-card-content">
          <div className="h-card-text">
            <h3 className="h-card-title">{title}</h3>
            <p className="h-card-desc">{description}</p>
          </div>
          
          <div className="h-card-btn-area">
            <span className="h-card-btn">더보기</span>
          </div>
        </div>
      </a>
    </article>
  );
}
