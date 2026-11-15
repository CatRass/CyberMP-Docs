---
editUrl: false
next: false
prev: false
title: "ObserveFunction"
---

> **ObserveFunction** = \<`C`, `I`, `M`\>(`className`, `methodName`, `callback`) => `void`

Defined in: game.d.ts:54

Defines a function signature used to observe (hook into) a method within a specified game class.
The callback receives the instance (`self`) and the arguments passed to the method.

## Type Parameters

<a id="__typec"></a>

### C

`C` *extends* keyof `MpClasses`

The class name key from `MpClasses`.

<a id="__typei"></a>

### I

`I` *extends* `UnwrapClass`\<`MpClasses`\[`C`\]\>

The resolved instance type of the class.

<a id="__typem"></a>

### M

`M` *extends* keyof `I`

The method names available on the class instance.

## Parameters

### className

`C`

### methodName

`M`

### callback

(`self`, ...`args`) => `void`

## Returns

`void`
