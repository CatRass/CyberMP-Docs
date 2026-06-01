---
editUrl: false
next: false
prev: false
title: "OverrideFunction"
---

> **OverrideFunction** = \<`C`, `I`, `M`\>(`className`, `methodName`, `callback`) => `void`

Defined in: game.d.ts:34

Defines a function signature used to completely override a method within a specified game class.
The callback receives the instance (`self`), the original arguments, and the original method implementation as the final parameter.

## Type Parameters

### C

`C` *extends* keyof `MpClasses`

The class name key from `MpClasses`.

### I

`I` *extends* `UnwrapClass`\<`MpClasses`\[`C`\]\>

The resolved instance type of the class.

### M

`M` *extends* keyof `I`

The method names available on the class instance.

## Parameters

### className

`C`

### methodName

`M`

### callback

(`self`, ...`args`) => `ReturnType`\<`SafeMethod`\<`I`, `M`\>\>

## Returns

`void`
