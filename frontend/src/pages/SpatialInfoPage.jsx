import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import './SpatialInfoPage.css';

const spatialDetailData = [
  {
    title: '지도정보',
    items: ['대한민국 및 세계지도', '고지도', '정밀도로지도', '국립공원등산로']
  },
  {
    title: '국가기준점',
    items: ['국가기준점 정의', '위성기준점 현황', '위성기준점 서비스', 'GNSS 데이터 통합센터']
  },
  {
    title: '국가수직기준연계',
    items: ['수직 기준', '국가수직기준연계', '수직기준변환', '좌표변환']
  },
  {
    title: '독도공간정보',
    items: ['개요', '독도지리지', '독도측량', '독도지형도', '독도항공영상', '세계지도 속의 독도', '독도현황', '독도지명', '독도 사진자료', '동해·독도 표기 안내']
  },
  {
    title: '극지공간정보',
    items: ['개요', '극지현황맵', '측량 및 지도 제작', '지도 다운로드', '주요 설비 및 연구성과']
  },
  {
    title: '국토변화정보',
    items: ['국토변화정보 소개', '국토변화정보 맵']
  },
  {
    title: '바로e맵',
    items: ['바로e맵', '바로e맵 신청서 작성', '소축척지도 내려받기', '점자지도 내려받기']
  },
  {
    title: '국가관심지점정보',
    items: ['POI 소개', 'POI 내려받기']
  },
  {
    title: '역사지도정보',
    items: ['상세 페이지 이동'],
    isExternal: true
  },
  {
    title: '국토위성정보',
    items: ['국토위성영상 소개', '국토위성 궤도정보', '국토위성영상 받기']
  },
  {
    title: '건물높이공간정보',
    items: ['외부 사이트 이동'],
    isExternal: true
  }
];

export default function SpatialInfoPage() {
  const navigate = useNavigate();

  return (
    <div className="spatial-info-page">
      <Header />
      
      {/* 상단 배너 영역 (피그마 618:932 반영) */}
      <section className="spatial-banner">
        <div className="banner-content">
          <h1 className="banner-title">공간정보</h1>
          <p className="banner-desc">
            지도, 위성기준점, 국가수직기준연계 등 전문적인 공간정보를 제공합니다.
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠 영역 */}
      <main className="spatial-main">
        <div className="spatial-container">
          <div className="spatial-grid">
            {spatialDetailData.map((section, idx) => (
              <div key={idx} className="spatial-card">
                <div className="card-header">
                  <h2 className="card-title">{section.title}</h2>
                  {section.isExternal && <span className="external-tag">외부연결</span>}
                </div>
                <ul className="card-item-list">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="card-item">
                      <a href="#" className="card-item-link">
                        {item}
                        <span className="item-arrow"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="spatial-footer">
        <button className="back-to-home" onClick={() => navigate('/')}>홈으로 돌아가기</button>
        <p className="footer-copyright" style={{ marginTop: '24px', fontSize: '13px', color: '#666', opacity: '0.8' }}>
          © 2026 국토지리정보원. 이 사이트는 교육 및 포트폴리오 목적으로 제작된 학습용 사이트입니다.
        </p>
      </footer>
    </div>
  );
}
