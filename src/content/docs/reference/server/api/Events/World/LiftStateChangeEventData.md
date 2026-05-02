---
editUrl: false
next: false
prev: false
title: "LiftStateChangeEventData"
---

```ts
type LiftStateChangeEventData = Vector3Object & object;
```

Defined in: events.ts:103

Data for lift/elevator state changes.

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `currentFloor` | `number` | events.ts:107 |
| `hashObject` | [`GameHash`](/reference/server/api/hashes/gamehash/) | events.ts:104 |
| `maxFloor` | `number` | events.ts:108 |
| `playerID` | `number` | events.ts:105 |
| `targetFloor` | `number` | events.ts:106 |
