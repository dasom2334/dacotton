# dacotton.dev

프로젝트 모음 리스트용도 겸 개인 페이지

## 구조

- 홈 `index.html` — 궤도 메뉴(홈·프로젝트·로그·오답노트), 별자리 프로젝트, HUD 팝업, 최근 로그·오답노트
- 프로젝트 `_data/projects.yml` — 이름·상태·한 줄·링크·별자리 좌표(x, y %)·화면 목록(shots). 순서가 곧 메뉴 순서
- 프로젝트 설명 `_projects/{id}.md` — front matter `slug`, 선택으로 `spec`(제원 표), `points`(▶ 불릿). 본문은 마크다운(무엇인가·어디까지 왔나)
- 항해 일지 `projects/{id}/log.html` — 그 프로젝트의 결정 글 목록
- 결정 글 `_posts/YYYY-MM-DD-slug.md` — front matter `project: {id}`, 선택으로 `no`(번호), `summary`(한 줄). 본문 마지막 결정 문단은 `>` 인용으로
- 로그 전체 `/log/` — 모든 결정 글을 월별로, 프로젝트 필터
- 오답노트 `_mistakes/YYYY-MM-DD-slug.md` — front matter `date`, `project`, `level`(ERR·WARN·FIXED), `lost`, `tags`, `symptom`, `cause`, `fix`, `lesson`(각각 마크다운 문자열). 본문은 덧붙임
- 소개 `about/index.html`

## 로컬

```bash
bundle install --path vendor/bundle && bundle exec jekyll serve
```

폰트 Galmuri11 (OFL, `assets/fonts/OFL.txt`). 스프라이트는 전부 CSS box-shadow 픽셀이라 이미지는 프로젝트 화면뿐.

연재 원고는 `series_order` 숫자로 프로젝트 안의 읽는 순서를 지정한다. `no`는 편 번호 표시다. 돌마고치 검수 원고의 date는 기록에서 확인한 사건 날짜다. 여러 날에 걸친 사건은 본문에 기간을 표시하고 마무리 날짜를 사용한다. 날짜가 확인되지 않은 후속 결과는 당시 사건과 구분한다. 다른 프로젝트 원고의 날짜 검수는 별도다.

## 글 작성·공개 절차

프로젝트별 전체 문서를 대조한 연표·글감 검토본 → 사용자 검수 → 로그·오답노트 집필 → 로컬 원고 검수 → 사용자 요청 후 커밋·공개 반영 순서로 진행한다. 미검수 프로젝트 초안을 다른 프로젝트 배포에 포함하지 않는다. 원고에는 한 문장 `tldr`와 문단별 소제목을 둔다.
