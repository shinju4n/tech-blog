export type LinkType = {
  url: string;
  text: string;
};

export type WorkListType = {
  featureTitle: string;
  featureDescription: string[];
  link: LinkType | null;
};

export type ProjectType = {
  projectTitle: string;
  projectPeriod: string;
  projectDescription: string[];
  projectLink: string | null;
  workList: WorkListType[];
  projectStack: string[];
};

export type CompanyType = {
  companyName: string;
  companyEnglishName: string;
  companyRole: string;
  period: string;
  projectPosition: string[];
  projects: ProjectType[];
};

const META_MONSTER_HOMEPAGE: ProjectType = {
  projectTitle: '메타몬스터 자사페이지',
  projectPeriod: '2024.12 ~ 2025.03 (프론트엔드 개발)',
  projectDescription: ['견적서 작성 및 문의를 위한 자사 웹페이지 개발', '자사 30%, 백오피스 100%'],
  projectLink: null,
  workList: [
    {
      featureTitle: '실시간 견적 알림 구현',
      featureDescription: [
        '견적서 작성 시 실시간으로 견적 알림을 받을 수 있도록 구현',
        '견적 알림을 받은 사용자는 견적서를 확인할 수 있도록 구현',
      ],
      link: null,
    },
    {
      featureTitle: '스팸 방지를 위한 검증 로직 구현',
      featureDescription: [
        'Google reCAPTCHA v3를 도입하여 자동화된 봇 트래픽을 효과적으로 차단하고 견적 폼의 신뢰성을 확보.',
        '위험 점수 기반의 검증 로직을 구현하여 스팸 요청 90% 감소 달성.',
      ],
      link: null,
    },
  ],
  projectStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
};

const SGIS: ProjectType = {
  projectTitle: 'SGIS KOREA 보험',
  projectPeriod: '2024.11 ~ 2024.12 (프론트엔드 개발)',
  projectDescription: ['보험 청구 웹앱 서비스'],
  projectLink: null,
  workList: [
    {
      featureTitle: '폼 관리 시스템 구축',
      featureDescription: [
        'Formik과 Yup을 활용하여 복잡한 보험 청구 폼의 상태 관리 및 유효성 검증 로직을 체계화하여 사용자 경험 개선',
      ],
      link: null,
    },
    {
      featureTitle: '폼 데이터 지속성 시스템 구축',
      featureDescription: [
        'useFormPersist 커스텀 훅을 개발하여 localStorage 기반의 폼 데이터 자동 저장 기능을 구현했으며, 이를 여러 보험 청구 폼에서 재사용하여 개발 생산성 향상 및 일관된 사용자 경험 제공',
      ],
      link: null,
    },
  ],
  projectStack: ['React', 'TypeScript', 'Tanstack Query v5', 'Formik', 'Yup'],
};

const KAS_RENTAL: ProjectType = {
  projectTitle: '한국 공항 렌탈 서비스 (KAS RENTAL)',
  projectPeriod: '2024.11 ~ 유지보수 진행중 (프론트엔드 개발)',
  projectDescription: ['지게차, 물류장비, 배터리, 안전 솔루션등 한국 공항에서 관리하는 렌탈을 위한 웹 서비스'],
  projectLink: null,
  workList: [
    {
      featureTitle: '레거시 코드 리팩토링',
      featureDescription: [
        '중복된 UI 로직을 공통 컴포넌트로 추출하고 디자인 시스템을 구축하여 개발 생산성 30% 향상. Input, Button, Modal 등 40개 이상의 공통 컴포넌트 라이브러리 구축 및 문서화',
      ],
      link: null,
    },
    {
      featureTitle: '토스페이먼츠 결제 시스템 구현',
      featureDescription: [
        '토스페이먼츠 SDK를 활용하여 카드 결제, 가상계좌 발급, 결제 취소 등 결제 프로세스 구현. 결제 상태 관리 및 에러 핸들링으로 안정적인 결제 시스템 구축',
      ],
      link: null,
    },
  ],
  projectStack: ['React', 'TypeScript', 'Tanstack Query v5', 'Formik', 'Yup'],
};

// INROES 프로젝트
const LINME: ProjectType = {
  projectTitle: '린미 Linme',
  projectPeriod: '2024.07 ~ 2024.09 (프론트엔드 2인 개발)',
  projectDescription: ['건강 기능 식품 이커머스 플랫폼'],
  projectLink: null,
  workList: [
    {
      featureTitle: '레거시 코드 리팩토링',
      featureDescription: ['기존 레거시 코드를 리팩토링하여 코드 가독성 향상 및 재사용성 향상'],
      link: null,
    },
    {
      featureTitle: '성능 최적화',
      featureDescription: ['TanStack Query를 도입하여 불필요한 API 호출을 50% 감소하고 컴포넌트 분리로 페이지 로딩 속도 개선'],
      link: null,
    },
    {
      featureTitle: '아키택처 개선',
      featureDescription: ['DDD 원칙을 적용한 폴더 구조 재설계로 개발 생산성 향상'],
      link: null,
    },
  ],
  projectStack: ['React', 'TanStack Query', 'SCSS/Sass'],
};

// MARKETIT 프로젝트들
const CADDY: ProjectType = {
  projectTitle: '캐디 Caddy',
  projectPeriod: '2023.11 ~ 2024.03 (프론트엔드 1인 개발)',
  projectDescription: ['실제 인물 이미지를 AI 인플루언서 이미지로 변환하는 B2B 서비스'],
  projectLink: null,
  workList: [
    {
      featureTitle: '초기 페이지 로딩 속도 개선',
      featureDescription: [
        '초기 화면에 고해상도 이미지로 인해 로드 시간이 느려지는 문제를 해결하기 위해, next/image 컴포넌트를 사용하여 AVIF와 WebP 형식으로 이미지를 최적화하고, lazy loading과 priority 속성을 적용하여 초기 페이지 로드 시간을 약 4초에서 0.97초로 개선하였습니다.'
      ],
      link: {
        url: 'https://www.notion.so/shinju4n/Portfolio-682dfc806a804f1f916de972143820bc?pvs=4#f381e7096147466ea417bba82c3e7f7a',
        text: '초기 페이지 로드 시간을 약 4초에서 0.97초로 개선'
      },
    },
    {
      featureTitle: '시간이 오래걸리는 AI 이미지 생성 시 사용자 경험 개선',
      featureDescription: [
        '로딩 화면이 오래 지속되는 문제로 인한 사용자 경험 저하를 해결하기 위해 API 호출 로직을 수정하여 실시간으로 이미지를 생성하고 사용자에게 지속적으로 업데이트를 제공함으로써 사용자 경험을 개선하였습니다.'
      ],
      link: {
        url: 'https://www.notion.so/shinju4n/Portfolio-1-fdf9319b388a4bc3ae8eecd774143d55?pvs=4#d7497077de754082a8d054eeeee9e83b',
        text: '사용자 경험을 개선'
      },
    },
    {
      featureTitle: '사용자를 위한 데이터 시각화 차트 개발',
      featureDescription: [
        '인플루언서의 팔로워 수 등락을 시각적으로 표현하기 위해 ApexCharts.js 라이브러리를 도입하여 데이터 시각화를 위한 차트를 개발하였습니다. 이를 통해 사용자들이 데이터를 더 쉽게 이해하고 분석할 수 있게 하였습니다.'
      ],
      link: {
        url: 'https://www.notion.so/shinju4n/Portfolio-1-fdf9319b388a4bc3ae8eecd774143d55?pvs=4#b05d64750fc24cea936a8a019d79aec9',
        text: '데이터 시각화를 위한 차트를 개발'
      },
    },
    {
      featureTitle: '링크 공유 시 필터링 조건 유지 기능 구현',
      featureDescription: [
        '기존 상태 관리 방식을 개선하여 쿼리 파라미터를 활용한 URL 필터링 기능을 구현하고, 재사용 가능한 useQueryParams 커스텀 훅을 개발하여 팀 간 협업과 코드 유지보수성을 향상시켰습니다.'
      ],
      link: {
        url: 'https://www.notion.so/shinju4n/Portfolio-1-fdf9319b388a4bc3ae8eecd774143d55?pvs=4#dda1bda3ac97421db6ef03c70b6dded3',
        text: '쿼리 파라미터를 활용한 URL 필터링 기능을 구현하고, 재사용 가능한 useQueryParams 커스텀 훅을 개발'
      },
    },
    {
      featureTitle: '크레딧 및 멤버십 결제 기능 구현',
      featureDescription: [
        '포트원 모듈을 사용하여 구매 정책을 위한 결제 기능 구현하였습니다. 이를 통해 안전하고 편리한 결제 시스템을 구축하였습니다.'
      ],
      link: {
        url: 'https://www.notion.so/shinju4n/Portfolio-1-fdf9319b388a4bc3ae8eecd774143d55?pvs=4#bb88225eb636453eaa5d948d7fbb58c7',
        text: '구매 정책을 위한 결제 기능 구현'
      },
    },
  ],
  projectStack: ['Next.js 13', 'TypeScript', 'Tailwind CSS', 'TanStack Query', 'Recoil'],
};

const WANT_MORE: ProjectType = {
  projectTitle: '원트모어 WantMore',
  projectPeriod: '2023.04 ~ 2024.05 (프론트엔드 기여도 20%)',
  projectDescription: ['포스팅 커머스 플랫폼'],
  projectLink: null,
  workList: [
    {
      featureTitle: '이미지 업로드 모듈 개선',
      featureDescription: [
        '이미지 업로드 모듈의 편의성을 개선하였습니다. 사용자가 여러 장의 이미지를 등록한 후 수정할 때, 순서를 원하는 대로 지정할 수 있도록 이미지에 인덱스 기능을 추가하고, 체크박스 선택 여부에 따라 순서를 자유롭게 조정할 수 있게 하여 사용자 경험 개선 하였습니다.'
      ],
      link: null,
    },
    {
      featureTitle: '인턴 멘토링 및 팀 협업 경험',
      featureDescription: [
        '멘토로서 인턴 두 명과 함께 프로젝트를 수행하며 효과적인 팀 협업을 경험했습니다. 모르는 부분에 대해 적극적으로 공유하고, 코드 리뷰를 통해 코드를 개선하고 향상시켰습니다.'
      ],
      link: null,
    },
  ],
  projectStack: ['Next.js 12', 'TypeScript', 'Tailwind CSS'],
};

const INFLCA: ProjectType = {
  projectTitle: '인플카 Inflca',
  projectPeriod: '2022.11 ~ 2023.11 (풀스택 개발)',
  projectDescription: ['포스팅 커머스 플랫폼'],
  projectLink: null,
  workList: [
    {
      featureTitle: '웹 퍼블리싱 및 페이지 구현',
      featureDescription: ['프로젝트 전반의 웹 퍼블리싱을 담당하여, 디자인 시안에 맞춰 모든 페이지를 구현하였습니다.'],
      link: null,
    },
    {
      featureTitle: '업무용 API 개발',
      featureDescription: ['회원 정보 수정, 이벤트 관리, 상품 등록 등을 위한 업무용 API를 개발하여 내부 운영 효율성을 높였습니다.'],
      link: null,
    },
    {
      featureTitle: '관리자 리스트 화면 개발 및 데이터 관리',
      featureDescription: [
        '회원 목록, 포스팅 검수, 이벤트 관리 등의 업무에 필요한 리스트 화면을 개발하여 관리자들이 쉽게 데이터를 관리하고 모니터링할 수 있도록 하였습니다.'
      ],
      link: null,
    },
    {
      featureTitle: '데이터 시각화 차트 도입을 통한 UI/UX 개선 및 데이터 분석 지원',
      featureDescription: [
        '일자별 매출, 회원 수 등락, 등급별 유저 현황 등을 기존 수치로만 보여주던 부분에서 시각화 차트 도입하여 한눈에 파악할 수 있도록 UI/UX 개선하였습니다. 이를 통해 관리자들이 데이터를 더 쉽게 이해하고, 빠르게 의사 결정을 할 수 있도록 지원하였습니다.'
      ],
      link: null,
    },
  ],
  projectStack: ['Spring Boot', 'Thymeleaf', 'jQuery', 'JPA', 'Mybatis', 'Bootstrap'],
};

// Other Experience 프로젝트들
const TECH_BLOG: ProjectType = {
  projectTitle: '개인 기술 블로그',
  projectPeriod: '2023.10 ~ 현재',
  projectDescription: [
    'ju4n-devlog.site 라는 개인 기술 블로그를 직접 개발하고 배포하여 운영하고 있습니다. 최신 기술 트렌드와 해결하고 싶은 기술적인 문제들에대해서 다루고 있으며, 새로운 기술을 공부하고 배운 내용을 체계적으로 정리하고 공유하고 있습니다.'
  ],
  projectLink: 'https://ju4n-devlog.site',
  workList: [
    {
      featureTitle: 'Next.js의 SSR을 활용한 SEO 향상',
      featureDescription: ['검색 엔진 최적화를 위해 Next.js의 서버 사이드 렌더링(SSR)을 활용하여 SEO 성능을 크게 향상시켰습니다.'],
      link: null,
    },
    {
      featureTitle: 'MarkDown 파일 파싱',
      featureDescription: [
        '포스팅을 MarkDown 파일로 작성할 수 있도록 하고, 시멘틱 태그로 변환하여 접근성과 검색 엔진 가독성을 개선하는 파싱 로직을 개발하였습니다.'
      ],
      link: null,
    },
    {
      featureTitle: '반응형 레이아웃 및 다크모드 구현',
      featureDescription: [
        '다양한 디바이스와 사용 환경에서 일관된 사용자 경험을 제공하기 위해 반응형 레이아웃과 다크모드를 구현하여 모바일 및 데스크탑 사용자 모두에게 최적의 인터페이스를 제공하였습니다.'
      ],
      link: null,
    },
    {
      featureTitle: '개발 생산성과 커스터마이징 용이성을 고려한 shadcn/ui 라이브러리 사용',
      featureDescription: [
        '기술 블로그 제작 시, 개발 생산성과 UI 일관성을 유지하고 반응형 디자인 및 커스터마이징 용이성을 높이기 위해 shadcn/ui 라이브러리를 선택하여 사용하였습니다.'
      ],
      link: null,
    },
  ],
  projectStack: ['Next.js 13', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
};

const SUWON_UNIV: ProjectType = {
  projectTitle: '수원대학교',
  projectPeriod: '2017.03 ~ 2023.02',
  projectDescription: ['컴퓨터학부 졸업'],
  projectLink: null,
  workList: [],
  projectStack: [],
};

// 회사 정의
export const META_MONSTER: CompanyType = {
  companyName: '메타몬스터',
  companyEnglishName: 'Meta Monster',
  companyRole: 'Frontend Engineer',
  period: '2024.09 - 재직중',
  projectPosition: ['개발팀 / 매니저', '프론트엔드 엔지니어'],
  projects: [META_MONSTER_HOMEPAGE, SGIS, KAS_RENTAL],
};

export const INROES: CompanyType = {
  companyName: '이노즈',
  companyEnglishName: 'Inroes',
  companyRole: 'Frontend Developer',
  period: '2024.07 ~ 2024.09',
  projectPosition: ['개발팀 / 매니저', '클라이언트 프론트엔드 엔지니어'],
  projects: [LINME],
};

export const MARKETIT: CompanyType = {
  companyName: '마켓잇',
  companyEnglishName: 'Marketit',
  companyRole: 'Frontend Developer',
  period: '2022.11 ~ 2024.03 (1년 5개월)',
  projectPosition: ['신사업실 개발팀 / 매니저', '프론트엔드 엔지니어'],
  projects: [CADDY, WANT_MORE, INFLCA],
};

// Other Experience (별도 타입으로 관리)
export const OTHER_EXPERIENCES = [TECH_BLOG, SUWON_UNIV];

// Skills 데이터
export const SKILLS = {
  frontend: [
    'Next.js 13(appDir)을 능숙하게 사용할 줄 압니다. 프로젝트의 처음부터 끝까지 개발하고 운영해 본 경험이 있습니다.',
    '공통으로 사용하는 코드를 Custom Hook으로 만들어 코드의 재사용성을 높입니다.',
    'React 생태계의 최신 기술에 관심이 많고, TanStack Query, SWR, Recoil을 활용할 줄 알고, 이를 능숙하게 다루기 위해 지속적으로 탐구하고 있습니다.',
    'TypeScript를 이용한 React 개발에 익숙합니다.',
    '웹 표준 성능에 큰 관심을 가지고 있으며, 최신 기술과 방법론을 통해 웹 페이지의 로딩 속도, 사용자 경험 및 성능을 최적화할 수 있습니다.',
    'Thymeleaf와 jQuery를 실무에서 사용해 본 경험이 있습니다.',
  ],
  backend: [
    'Spring Boot, JPA, QueryDSL을 사용하여 CRUD API를 개발한 경험이 있습니다.'
  ],
};
