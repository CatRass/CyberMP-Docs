---
editUrl: false
next: false
prev: false
title: "ObserveFunction"
---

```ts
type ObserveFunction = <C, I, M>(className, methodName, callback) => void;
```

Defined in: precomputed/game.d.ts:32

## Type Parameters

| Type Parameter |
| ------ |
| `C` *extends* keyof `MpClasses` |
| `I` *extends* [`UnwrapClass`](/reference/client/api/other/unwrapclass/)\<`MpClasses`\[`C`\]\> |
| `M` *extends* keyof `I` *extends* `never` ? `string` : keyof `I` |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | `C` |
| `methodName` | `M` |
| `callback` | (`self`, ...`args`) => `void` |

## Returns

`void`
