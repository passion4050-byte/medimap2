# ⚡ 5분 안에 배포하기

## 1️⃣ GitHub 업로드 (2분)

```bash
# 1. Git 초기화
git init

# 2. 모든 파일 추가
git add .

# 3. 첫 커밋
git commit -m "Initial commit: MEDIMAP landing page"

# 4. GitHub repository 연결 (본인의 URL로 변경)
git remote add origin https://github.com/YOUR-USERNAME/251113-medimap.git

# 5. 푸시
git branch -M main
git push -u origin main
```

## 2️⃣ Vercel 배포 (3분)

1. **https://vercel.com** 접속
2. **GitHub로 로그인**
3. **"New Project"** 클릭
4. **Repository 선택**: `251113-medimap`
5. **Deploy 클릭** (설정 건드리지 않고 바로!)
6. ✅ 완료! URL 자동 생성됨

---

## 🎯 배포 URL

배포 완료 후 다음과 같은 URL이 자동 생성됩니다:
- `https://251113-medimap.vercel.app`
- 또는 `https://your-project-name.vercel.app`

---

## 🔄 업데이트 방법

```bash
# 코드 수정 후
git add .
git commit -m "업데이트 내용"
git push

# Vercel이 자동으로 배포!
```

---

## ❓ GitHub Repository 만드는 법

1. **https://github.com** 로그인
2. 우측 상단 **"+"** → **"New repository"**
3. Repository name: **251113-medimap**
4. **❌ "Initialize with README" 체크 해제**
5. **Create repository** 클릭
6. 위의 터미널 명령어 실행

끝!
