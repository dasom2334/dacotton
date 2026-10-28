---
reviewed_format: true
date: "2026-10-16"
date_evidence: "nyam commits 3fe3f66,31281bd"
permalink: /log/2026/10/28/nyam-first-product-list/
project: "nyam"
series_order: 9
title: "상품 목록을 집계보다 먼저 표시"
update_log: true
summary: "첫 상품 목록을 받은 뒤 전체 수와 종류별 개수를 따로 요청하도록 바꿨다."
---
첫 상품 목록을 받은 뒤 전체 수와 종류별 개수를 따로 요청하도록 바꿨다. 개수를 세는 응답이 늦거나 실패해도 이미 받은 목록은 유지하고, 집계만 다시 요청할 수 있다. 다음 상품을 이어 받을 때는 같은 조건의 집계를 다시 요청하지 않는다.
