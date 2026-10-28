---
reviewed_format: true
date: "2026-09-11"
date_evidence: "nyam commits 04e85eb,01384d7"
permalink: /log/2026/10/28/nyam-stored-observations/
project: "nyam"
series_order: 8
title: "원료 해석을 저장해 재사용"
update_log: true
summary: "요청마다 원료 표기를 다시 해석하던 처리를 제품 이력별 저장 결과를 읽는 방식으로 바꿨다."
---
요청마다 원료 표기를 다시 해석하던 처리를 제품 이력별 저장 결과를 읽는 방식으로 바꿨다. 제품에 대한 공통 해석은 재사용하고 사용자 조건은 조회할 때 대조한다. 반복 해석을 줄이는 대신, 원료 사전이나 자료가 바뀌면 저장된 해석도 갱신해야 한다.
