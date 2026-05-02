---
editUrl: false
next: false
prev: false
title: "OverrideFunction"
---

```ts
type OverrideFunction = <C, I, M>(className, methodName, callback) => void;
```

Defined in: game.d.ts:11

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
| `callback` | (`self`, ...`args`) => `ReturnType`\<`I`\[`M`\]\> |

## Returns

`void`
