import React from 'react';
import './LabelListCard.css';

export default function LabelListCard({ label, description, link = '#' }) {
  return (
    <article className="label-list-card">
      <a href={link} className="l-card-link" aria-label={`자료실 ${label} 상세 보기`}>
        {/* 좌측 라벨 뱃지 */}
        <div className="l-card-badge-area">
          <span className="l-card-badge">{label}</span>
        </div>
        
        {/* 중앙 설명 텍스트 */}
        <div className="l-card-desc-area">
          <p className="l-card-desc">{description}</p>
        </div>
        
        {/* 우측 화살표 아이콘 */}
        <div className="l-card-icon-area" aria-hidden="true">
          <img src="/national-geo-platform/assets/images/archive-arrow.png" alt="" className="l-card-arrow-icon" />
        </div>
      </a>
    </article>
  );
}
