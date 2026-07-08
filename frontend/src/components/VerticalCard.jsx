import React from 'react';
import './VerticalCard.css';

export default function VerticalCard({ title, description, imageUrl, link = '#' }) {
  return (
    <article className="vertical-card">
      <a 
        href={link} 
        className="v-card-link" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label={`${title} 서비스로 이동 (새창 열림)`}
      >
        {/* 상단 아이콘 */}
        <div className="v-card-icon-wrapper">
          <img src={imageUrl}
          alt=""
          className={`v-card-icon ${title === '업무지원' ? 'is-work-support' : ''}`}
          aria-hidden="true" />
        </div>
        
        {/* 중앙 타이틀 및 하단 설명 */}
        <h3 className="v-card-title">{title}</h3>
        <p className="v-card-desc">{description}</p>
      </a>
    </article>
  );
}
