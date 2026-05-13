import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import QuickMenuSection from '../components/QuickMenuSection';
import SectionLayout from '../components/SectionLayout';
import HorizontalCard from '../components/HorizontalCard';
import LabelListCard from '../components/LabelListCard';
import VerticalCard from '../components/VerticalCard';
import '../App.css';

// 섹션 배경 이미지 매핑
const bgInfoMap = "/national-geo-platform/assets/images/national_land_info_map_section.png";
const bgSpace = "/national-geo-platform/assets/images/spatial_info_section.png";
const bgArchive = "/national-geo-platform/assets/images/archive_section.png";
const bgSupport = "/national-geo-platform/assets/images/support_service_section.png";

// 국토정보맵 데이터
const mapData = [
  { id: 'm1', title: '통합지도검색', desc: '원하는 정보를 입력하여 지도 기반의 공간정보를 직접 확인하고 수치지도, 항공사진, 정사영상, 기준점 등을 다운로드', img: "assets/images/digital_map.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: 'm2', title: '국토통계지도', desc: '인구, 건물, 토지 등 200개의 국토지표를 조사 관리하고 정책자료로 활용할 수 있도록 격자 단위 통계 제공', img: "assets/images/national_land_statistical_map.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: 'm3', title: '북한지도', desc: '북한지역 주요지점에 대한 위치검색 및 시계열 영상정보 제공 서비스', img: "assets/images/north_korea_map.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: 'm4', title: '역사지도', desc: '역사적 정보의 가치 향상과 대국민 역사 콘텐츠 질적향상을 위한 지도 제공 서비스', img: "/national-geo-platform/assets/images/historical_map.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do?tabGb=daedong' },
  { id: 'm5', title: '정밀도로지도', desc: '도로 및 주변시설에 대한 3차원 고정밀 데이터 구축현황 및 다운로드 서비스', img: "/national-geo-platform/assets/images/precise_road_map.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: 'm6', title: '사용자참여지도', desc: '사용자가 활용목적에. 따라 다양한 공간정보를 융합하여 분석 및 지도 제작 지원', img: "/national-geo-platform/assets/images/national_land_info_map_section.png", link: 'https://map.ngii.go.kr/ms/map/userPrtMap.do' },
];

// 공간정보 데이터
const spaceData = [
  { id: 's1', title: '지도 정보', desc: '일반도, 정밀도로, 고지도 등을 지도로 제공받고 관련 자료를 다운로드', img: "/national-geo-platform/assets/images/digital_map.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: 's2', title: '국가기준점', desc: '통합기준점, 수준점, 삼각점, 절대중력점 등 국토지리정보원에서 설치·관리하는 국가기준점 정보 제공', img: "/national-geo-platform/assets/images/national_standard_point.png", link: 'https://map.ngii.go.kr/ms/map/Ncp.do' },
  { id: 's3', title: '국가수직기준연계', desc: '중력측량, 한국 지오이드모델, 육해상 높이 변환 모델 구축 등에 관련한 정보 제공', img: "/national-geo-platform/assets/images/national_standard_vertical_linkage.png", link: 'https://map.ngii.go.kr/ms/mes/mesList.do' },
  { id: 's4', title: '독도공간정보', desc: '독도에 대한 지리, 현황, 사진 등의 전문적인 정보 제공', img: "/national-geo-platform/assets/images/dokdo_spatial_info.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: 's5', title: '극지공간정보', desc: '극지에 대한 지리, 현황, 사진 등의 전문적인 정보 제공', img: "/national-geo-platform/assets/images/polar_spatial_info.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: 's6', title: '국토변화정보', desc: '국토의 변화정보를 신속 정확하게 수집하고 알려 효과적으로 관리하고 활용 가능하도록 하는 서비스', img: "/national-geo-platform/assets/images/spatial_info_section.png", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
  { id: 's7', title: '역사지도정보', desc: '대동여지도, 해동지도 등의 역사지도와 관련 자료에 대한 정보 및 다운로드 제공', img: "/national-geo-platform/assets/images/historical_map_info.png", link: 'https://map.ngii.go.kr/ms/map/OldMap.do' },
  { id: 's8', title: '위성영상정보', desc: '국토위성으로 촬영한 위성영상을 다운로드하고 다양한 위성정보를 제공', img: "/national-geo-platform/assets/images/national_satellite_imagery.png", link: 'https://map.ngii.go.kr/ms/map/nlipCASImgMap.do' },
  { id: 's9', title: '건물높이공간정보', desc: '건물높이 공간정보 데이터를 다운로드 하고 정보 제공', img: "/national-geo-platform/assets/images/항공사진.jpg", link: 'https://map.ngii.go.kr/ms/map/NlipMap.do' },
];

// 자료실 데이터
const archiveData = [
  { id: 'a1', label: '지도자료', desc: '수치지도, 정사영상, 온맵 등의 지도자료를 소개하고 다운로드 받을 수 있는 서비스', link:'https://map.ngii.go.kr/pd/ctlsSvc/ctlsSvc.do?redirectUrl=https%3A%2F%2Fmap.ngii.go.kr%2Fmn%2FmainPage.do' },
  { id: 'a2', label: '근대측량자료', desc: '종이형태로 보관한 근대측량자료를 디지털화하여 E-BOOK 형태로 제공',link:'https://map.ngii.go.kr/e-book/search/index.jsp' },
  { id: 'a3', label: '대한민국 국가지도집', desc: '영토와 국민의 경제, 사회, 문화 활동에 대한 공식적 기록물로 디지털 자료 제공',link:'https://map.ngii.go.kr/ms/pblictn/nationMapBook.do' },
  { id: 'a4', label: '지리지 및 지명유래집', desc: '연간 발간하는 한국지리지, 한국지명유래집의 디지털 자료 제공',link:'https://map.ngii.go.kr/ms/pblictn/koreaGrphBook.do' },
  { id: 'a5', label: '국토 모니터링 보고서', desc: '국토와 관련한 인구, 경제, 사회 등의 국토모니터링 보고서 및 국토조사연감 자료',link:'https://map.ngii.go.kr/ms/pblictn/nationalYearBook.do' },
  { id: 'a6', label: '지명사전', desc: '지명을 검색하거나 이에 대한 용어, 주소, 지명유래 등의 정보를 제공',link:'https://map.ngii.go.kr/ms/nmfpcInfo/nmfpcBeffat.do' },
];

// 지원서비스 데이터
const supportData = [
  { id: 'sp1', title: '업무지원', desc: '국토지리정보원에서 제공하는 서비스 지원', img: "/national-geo-platform/assets/images/work_support_icon.png", link: 'https://map.ngii.go.kr/nw/common/main/mainPage.do' },
  { id: 'sp2', title: '오픈 API', desc: '사용자가 직접 공간정보와 관련된 응용 서비스 개발', img: "/national-geo-platform/assets/images/open_api.png", link: 'https://map.ngii.go.kr/mi/openKey/openKeyInfo.do' },
  { id: 'sp3', title: '민원서비스', desc: '국민과 소통을 하기 위한 민원예약, 지도구입, FAQ 등을 제공', img: "/national-geo-platform/assets/images/civil_service.png", link: 'https://map.ngii.go.kr/mi/oprGuide/mapPurchsGuide.do' },
  { id: 'sp4', title: '긴급 공간정보', desc: '재해·재난 발생시 신속하게 활용할 수 있는 긴급 공간정보 서비스', img: "/national-geo-platform/assets/images/emergency_spatial_info.png", link: 'https://map.ngii.go.kr/ms/disaster/disasterList.do' },
];

function LandingPage() {
  return (
    <div className="app-container">
      <a href="#main-content" className="sr-only focus-skip">본문 바로가기</a>
      
      <Header />
      
      <main id="main-content" role="main">
        <HeroCarousel />
        
        <QuickMenuSection />
        
        <SectionLayout 
          title="국토정보맵" 
          subtitle="지도를 기반으로 수치지도, 항공사진, 정사영상, 국가기준점, 통계정보 등을 검색하거나 온라인 다운로드 서비스를 제공합니다."
          bgImageUrl={bgInfoMap}
        >
          {mapData.map(item => (
            <HorizontalCard key={item.id} title={item.title} description={item.desc} imageUrl={item.img} link={item.link} />
          ))}
        </SectionLayout>
        
        <SectionLayout 
          title="공간정보" 
          subtitle="지도, 위성기준점, 국가수직기준연계, 지역정보 등의 전문적인 공간정보를 제공하고 온라인 다운로드와 지도보기 서비스를 제공합니다."
          bgImageUrl={bgSpace}
        >
          {spaceData.map(item => (
            <Link key={item.id} to="/spatial-info" style={{ textDecoration: 'none' }}>
              <HorizontalCard title={item.title} description={item.desc} imageUrl={item.img} link={item.link} />
            </Link>
          ))}
        </SectionLayout>
        
        <SectionLayout 
          title="자료실" 
          subtitle="가치 있는 공간정보와 관련 간행물 등의 다양한 자료를 소개하고 다운로드 서비스를 제공합니다."
          bgImageUrl={bgArchive}
        >
          {archiveData.map(item => (
            <LabelListCard
            key={item.id}
            label={item.label}
            description={item.desc}
            link={item.link}
            />
          ))}
        </SectionLayout>
        
        <SectionLayout 
          title="지원서비스" 
          subtitle="국토지리정보원에서 제공하는 업무지원, 고객 서비스, 지도구입 등에 대해 이야기할 수 있는 공간입니다."
          bgImageUrl={bgSupport}
        >
          <div className="scroll-row">
            {supportData.map(item => (
              <VerticalCard key={item.id} title={item.title} description={item.desc} imageUrl={item.img} link={item.link} />
            ))}
          </div>
        </SectionLayout>
      </main>
      
      <footer className="app-footer" role="contentinfo">
        <div className="footer-inner">
          <p>© 2026 국토지리정보원. 이 사이트는 교육 및 포트폴리오 목적으로 제작된 학습용 사이트입니다.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
