---
editUrl: false
next: false
prev: false
title: "OnlyExtendingScriptableSystem"
---

```ts
type OnlyExtendingScriptableSystem<T> = { [K in keyof T as T[K] extends typeof gameScriptableSystem ? K : never]: T[K] };
```

Defined in: precomputed/game.d.ts:104

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
