---
slug: dolmagochi
title: 돌마고치
nav: projects
featured:
  - "/log/2026/07/16/dolmagochi-usable-timer/"
  - "/log/2026/09/03/dolmagochi-render-cost/"
  - "/log/2026/08/09/dolmagochi-full-playthrough/"
stages:
  - key: "기"
    name: "시작"
    desc: "집중 타이머에 돌 키우기를 붙이고, 다 키운 뒤에도 관계가 이어지게 하기로 정했다."
  - key: "승"
    name: "규칙 쌓기"
    desc: "관계·밸런스·엔딩 뒤의 시간을 규칙으로 만들고, 시뮬레이션으로 속도를 맞췄다."
  - key: "전"
    name: "보이는 방과 친구들"
    desc: "규칙을 방 그림으로 옮기고 친구들에게 내놓자, 의도와 다른 반응과 배포 문제가 드러났다."
  - key: "결"
    name: "끝까지 걸어 보기"
    desc: "엔딩 뒤 장면을 화면에 잇고, 처음부터 끝까지 실제로 플레이해 확인했다."
---

## 공부한 시간이 돌과의 생활로 남는 타이머

Flowtime 타이머에서 출발해 집중한 시간이 돌의 성장과 관계, 방의 변화로 이어지는 게임을 만들었다. 엔딩마다 초기화하는 대신 함께 지낸 기억과 방문이 남는 방향을 택했다. 7월 22일 친구들에게 공개한 뒤 버그와 요구사항을 받으며 다듬었다.

## 긴 시간을 기다리지 않고도 확인해야 했다

브라우저를 닫았다 돌아온 기록을 지키는 [저장 복원·단일 활성 탭](/log/2026/07/16/dolmagochi-usable-timer/), 실제 UI로 진행하는 [페르소나별 완주](/log/2026/08/09/dolmagochi-full-playthrough/), 상태 조건상 [도달할 수 없던 분기](/mistakes/2026-08-09-dolmagochi-unreachable-branch/)가 대표적인 검증 사례다. 강제로 상태를 만드는 디버그 검사와 정상 플레이로 도달하는 검사를 나눴다.

장면이 늘어난 뒤에는 [그리기 비용과 화면 품질의 절충](/log/2026/09/03/dolmagochi-render-cost/)도 다뤘다. 로그는 시안에서 시작해 친구 공개, 장면 확장과 후속 검증으로 이어진다.
