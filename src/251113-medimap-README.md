# MEDIMAP - 제휴 파트너 프리미엄 메디컬 혜택

미용 및 의료 클리닉(안과, 피부과, 모발이식)을 위한 모던 랜딩 페이지입니다.
제휴 대학생과 제휴 기업의 임직원 및 가족들이 특별한 혜택을 이용할 수 있습니다.

## 🚀 빠른 시작

### 1. 저장소 클론
```bash
git clone [your-repository-url]
cd 251113-medimap
```

### 2. 의존성 설치
```bash
npm install
```

### 3. 로컬 개발 서버 실행
```bash
npm run dev
```

### 4. 빌드
```bash
npm run build
```

## 📦 Vercel 배포

### 방법 1: Vercel CLI
```bash
npm install -g vercel
vercel
```

### 방법 2: GitHub 연동
1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com) 접속
3. "New Project" 클릭
4. GitHub repository 선택
5. 자동 배포 완료

## 🏗️ 프로젝트 구조

```
251113-medimap/
├── App.tsx                 # 메인 앱 컴포넌트
├── components/             # React 컴포넌트
│   ├── Navigation.tsx      # 네비게이션
│   ├── HeroSection.tsx     # 히어로 섹션
│   ├── CategorySection.tsx # 카테고리 탭
│   ├── TreatmentCards.tsx  # 시술 카드
│   ├── BeforeAfterSlider.tsx # 전후 비교
│   ├── DoctorSection.tsx   # 의료진 소개
│   ├── TestimonialsSection.tsx # 고객 후기
│   ├── PartnerBenefitsSection.tsx # 제휴 혜택
│   ├── LeadForm.tsx        # 상담 신청 폼
│   ├── Footer.tsx          # 푸터
│   └── FloatingCTA.tsx     # 플로팅 버튼
├── styles/
│   └── globals.css         # 전역 스타일
├── public/
│   └── medimap-logo.png    # 로고
├── index.html              # HTML 진입점
├── package.json            # 의존성 관리
├── vite.config.ts          # Vite 설정
├── vercel.json             # Vercel 설정
└── tsconfig.json           # TypeScript 설정
```

## 🎨 주요 기능

- ✅ 반응형 디자인 (모바일/태블릿/데스크톱)
- ✅ 고정 네비게이션
- ✅ 3개 전문 분야 카테고리 탭 (안과/피부과/모발이식)
- ✅ 전후 비교 슬라이더
- ✅ 의료진 소개 섹션
- ✅ 고객 후기 캐러셀
- ✅ 카카오톡 연동 상담 신청 폼
- ✅ 플로팅 CTA 버튼
- ✅ 제휴 혜택 섹션

## 💡 브랜드 컬러

- Primary: Blue (#2563eb ~ #0284c7)
- Secondary: Sky (#0ea5e9)
- Accent: Indigo (#4f46e5)

## 📞 회사 정보

- **회사명**: 메디맵 주식회사
- **대표자**: 박성호
- **사업자등록번호**: 833-87-02831
- **주소**: 서울특별시 강남구 봉은사로 215(논현동) KTS빌딩 11층
- **고객 문의**: cs@medimap.team
- **제휴 문의**: sales@medimap.team

## 🛠️ 기술 스택

- React 18
- TypeScript
- Vite
- Tailwind CSS 4.0
- Lucide Icons
- React Slick (캐러셀)

## 📝 환경 변수

필요시 `.env` 파일 생성:
```
VITE_KAKAO_CHANNEL_URL=https://pf.kakao.com/_xnWQkG/chat
```

## 🔗 배포 URL

배포 후 Vercel이 자동으로 URL을 생성합니다:
- Production: `https://your-project.vercel.app`
- Preview: 각 PR마다 자동 생성

## 📄 라이선스

Copyright © 2024 메디맵 주식회사. All rights reserved.

## 🤝 문의

- 웹사이트: [배포 후 URL]
- 이메일: cs@medimap.team
- 카카오톡: [@medimap](https://pf.kakao.com/_xnWQkG/chat)
