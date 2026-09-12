# dacotton.dev

메인 페이지. Jekyll, GitHub Pages가 빌드한다.

- 프로젝트 목록: `_data/projects.yml` (순서가 곧 메뉴 순서)
- 프로젝트 로그 페이지: `_projects/{id}.md` (`slug: {id}` 만 있으면 된다)
- 결정 기록: `_posts/YYYY-MM-DD-slug.md`, front matter에 `project: {id}`
- 픽셀 폰트: Galmuri11 (OFL, `assets/fonts/OFL.txt`)

로컬 확인:

```bash
bundle install --path vendor/bundle && bundle exec jekyll serve
```
