export type CompanyType = {
  companyName: string;
  companyEnglishName: string;
  companyRole: string;
  period: string;
  projectPosition: string[];
  projects: ProjectType[];
};

export type ProjectType = {
  projectTitle: string;
  projectPeriod: string;
  projectDescription: string[];
  projectLink: string | null;
  workList: WorkListType[];
  projectStack: string[];
};

export type WorkListType = {
  featureTitle: string;
  featureDescription: string[];
  link: LinkType | null;
};

export type LinkType = {
  url: string;
  text: string;
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

export const META_MONSTER: CompanyType = {
  companyName: '메타몬스터',
  companyEnglishName: 'Meta Monster',
  companyRole: 'Frontend Engineer',
  period: '2024.09 - 재직중',
  projectPosition: ['개발팀 / 매니저', '프론트엔드 엔지니어'],
  projects: [META_MONSTER_HOMEPAGE, SGIS, KAS_RENTAL],
};
