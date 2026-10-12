# Park YoonJin Portfolio

데이터 분석과 AI 프로젝트를 중심으로 구성한 박윤진의 단일 페이지 포트폴리오입니다. 분석과 모델링에 그치지 않고 결과를 API, 웹, 모바일 서비스로 구현한 경험을 소개합니다.

프로젝트별 역할과 기술 스택뿐 아니라 실제 개발 과정의 문제, 원인, 해결 방법과 정량적 결과를 프로젝트 하단의 Troubleshooting 목록으로 정리했습니다.

## Live Site

- Portfolio: [https://gyun-jin.github.io](https://gyun-jin.github.io)
- GitHub: [https://github.com/gyun-jin](https://github.com/gyun-jin)

## Featured Projects

| Project | Description | Tech |
| --- | --- | --- |
| LG Aimers 9기 | 투구 제구 성공확률 예측, CatBoost·TabM 앙상블 및 확률 보정 | Python, CatBoost, TabM |
| DigiOcular | 사시·사위 판별 및 Vision Therapy 시스템 | Mediapipe, Flutter, Firebase |
| Spring AI Chat & Vision | 대화형 AI와 이미지 분석 웹 애플리케이션 | Java, Spring Boot, Spring AI |
| KBO Crawling | 경기·상대전적 크롤링과 REST API | Java, Selenium, JPA, MariaDB |

## Tech Stack

- Data & ML: Python, Pandas, Scikit-learn, CatBoost, TabM
- AI: Mediapipe, OpenCV, OpenAI API, Spring AI
- Backend: Java, Spring Boot, REST API, JPA, WebFlux
- App & Database: Flutter, Dart, Firebase, MySQL, MariaDB

## Structure

```text
index.html                   페이지 본문
assets/css/main.css          반응형 레이아웃과 스타일
assets/css/noscript.css      JavaScript 비활성화 시 대체 스타일
assets/js/main.js            스크롤 효과와 섹션 내비게이션
assets/images/profile.jpeg   프로필 이미지
assets/images/favicon.svg    사이트 아이콘
.nojekyll                    GitHub Pages의 Jekyll 처리 비활성화
```

## Local Preview

별도의 빌드 과정이 없는 정적 사이트입니다.

```bash
python3 -m http.server 8765
```

브라우저에서 `http://localhost:8765`로 접속합니다.

## Deployment

GitHub Pages가 `main` 브랜치의 루트 디렉터리를 배포합니다. 변경 사항을 커밋한 뒤 `main`에 push하면 사이트가 자동으로 다시 배포됩니다.

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Copyright

© 2026 Park YoonJin. All rights reserved.
