# dacotton.dev

8비트 우주 컨셉의 개인 사이트. Jekyll.

## 구조

- 홈 `index.html` — 궤도 메뉴(홈·프로젝트·로그·오답노트), 별자리 프로젝트, HUD 팝업, 최근 로그·오답노트
- 프로젝트 `_data/projects.yml` — 이름·상태·한 줄·링크·별자리 좌표(x, y %)·화면 목록(shots). 순서가 곧 메뉴 순서
- 프로젝트 설명 `_projects/{id}.md` — front matter `slug`, 선택으로 `spec`(제원 표), `points`(▶ 불릿). 본문은 마크다운(무엇인가·어디까지 왔나)
- 항해 일지 `projects/{id}/log.html` — 그 프로젝트의 결정 글 목록
- 결정 글 `_posts/YYYY-MM-DD-slug.md` — front matter `project: {id}`, 선택으로 `no`(번호), `summary`(한 줄). 본문 마지막 결정 문단은 `>` 인용으로
- 로그 전체 `/log/` — 모든 결정 글을 월별로, 프로젝트 필터
- 오답노트 `_mistakes/YYYY-MM-DD-slug.md` — front matter `date`, `project`, `level`(ERR·WARN·FIXED), `lost`, `tags`, `symptom`, `cause`, `fix`, `next`(각각 마크다운 문자열). 본문은 덧붙임
- 이력 `resume/index.html`

## 로컬

```bash
bundle install --path vendor/bundle && bundle exec jekyll serve
```

폰트 Galmuri11 (OFL, `assets/fonts/OFL.txt`). 스프라이트는 전부 CSS box-shadow 픽셀이라 이미지는 프로젝트 화면뿐.
