---
reviewed_format: true
date: "2026-09-13"
date_evidence: "nyam commits 07ac95c,a17c804,4fa30ba"
permalink: /log/2026/10/28/nyam-beta-operations/
project: "nyam"
series_order: 12
title: "앱 배포와 데이터 복구 분리"
update_log: true
summary: "앱은 Cloud Run에, 데이터는 Neon에 두는 베타 구성을 선택했다."
---
앱은 Cloud Run에, 데이터는 Neon에 두는 베타 구성을 선택했다. 배포 절차에서는 서버 시작과 데이터베이스 변경을 나누고, 앱의 이전 버전 재배포와 데이터 백업 복원도 별도 경로로 다룬다. 서버가 응답하는지와 로그인·조회·저장이 되는지는 따로 확인할 항목이다.
