import React from 'react';
import './QuickMenuSection.css';

const quickItems = [
  { id: '1', title: '수치지도', imageUrl: '/national-geo-platform/assets/images/digital_map.svg', link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: '2', title: '항공사진', imageUrl: '/national-geo-platform/assets/images/aerial_photo_icon.png', link: 'https://map.ngii.go.kr/ms/map/Aerial.do' },
  { id: '3', title: '국가기준점', imageUrl: '/national-geo-platform/assets/images/national_standard_point_icon.png', link: 'https://map.ngii.go.kr/ms/map/Ncp.do' },
  { id: '4', title: '종이지도', imageUrl: '/national-geo-platform/assets/images/paper_map_icon.png', link: 'https://map.ngii.go.kr/ms/map/OldMap.do' },
  { id: '5', title: '국토위성영상', imageUrl: '/national-geo-platform/assets/images/national_satellite_imagery_icon.png', link: 'https://map.ngii.go.kr/ms/map/nlipCASImgMap.do' },
  { id: '6', title: '업무지원', imageUrl: '/national-geo-platform/assets/images/work_support_icon.png', link: 'https://map.ngii.go.kr/nw/common/main/mainPage.do' },
];

export default function QuickMenuSection() {
  return (
    <section className="quick-menu-section" aria-labelledby="quick-menu-title">
      <div className="quick-menu-header">
        <div className="quick-menu-inner">
          <h2 id="quick-menu-title" className="quick-menu-title">
            공간정보받기 및 업무지원
          </h2>
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
