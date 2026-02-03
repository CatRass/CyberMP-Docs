---
editUrl: false
next: false
prev: false
title: "ObserveFunction"
---

Defined in: client-types/out/precomputed/game.d.ts:22

```ts
ObserveFunction<C, I, M>(
   className, 
   methodName, 
   callback): void;
```

Defined in: client-types/out/precomputed/game.d.ts:23

## Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `MpClasses` |
| `I` *extends* `any` |
| `M` *extends* `string` \| `number` \| `symbol` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | `C` |
| `methodName` | `M` |
| `callback` | (`self`, ...`args`) => `void` |

## Returns

`void`
