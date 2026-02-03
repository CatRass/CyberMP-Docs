---
editUrl: false
next: false
prev: false
title: "OverrideFunction"
---

Defined in: client-types/out/precomputed/game.d.ts:7

```ts
OverrideFunction<C, I, M>(
   className, 
   methodName, 
   callback): void;
```

Defined in: client-types/out/precomputed/game.d.ts:8

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
| `callback` | (`self`, ...`args`) => `ReturnType`\<`I`\[`M`\]\> |

## Returns

`void`
