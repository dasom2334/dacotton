---
title: 앱은 Cloud Run, DB는 Neon
project: nyam
---

배포 전에 인프라 선택이 세 번 흔들렸다. Render + Neon, Koyeb, 그리고 GCE e2-micro 안에 PostgreSQL을 같이 두는 안까지 갔고 마지막 것은 파이프라인까지 만들어 검증했다. 그 사이 기준이 "가장 싸게"에서 "DB 데이터가 날아가지 않고, 장애 때 손 쓸 수 있게"로 옮겨갔다.

그래서 앱은 Cloud Run, DB는 Neon으로 간다. Cloud Run은 요청이 없으면 0으로 내려가고, Neon은 관리형이라 백업과 복구를 내가 하지 않는다. VM 안 PostgreSQL이 가장 쌌지만 그 돈만큼 백업을 내가 떠안는 구조였다.
