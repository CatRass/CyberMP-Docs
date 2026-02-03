---
editUrl: false
next: false
prev: false
title: "MpGamePrecomputed"
---

Defined in: client-types/out/precomputed/game.d.ts:46

## Properties

<a id="cybermp"></a>

### CyberMP

```ts
CyberMP: CyberMP;
```

Defined in: client-types/out/precomputed/game.d.ts:47

***

<a id="observe"></a>

### observe

```ts
observe: ObserveFunction;
```

Defined in: client-types/out/precomputed/game.d.ts:130

Alias for [observeBefore](/reference/client/api/game/mpgameprecomputed/#observebefore).

#### Param

Class name

#### Param

Method name inside of class

#### Param

Callback of method function.

***

<a id="observeafter"></a>

### observeAfter

```ts
observeAfter: ObserveFunction;
```

Defined in: client-types/out/precomputed/game.d.ts:114

Observes method inside selected class.

#### Param

Class name

#### Param

Method name inside of class

#### Param

Callback of method function.

***

<a id="observeafterraw"></a>

### observeAfterRaw

```ts
observeAfterRaw: ObserveFunction;
```

Defined in: client-types/out/precomputed/game.d.ts:139

Observes method inside selected class. Can only call methods from MpGame.
Should be used when it's important for the function to execute quickly (as fast as V8 allows).

#### Param

Class name

#### Param

Method name inside of class

#### Param

Callback of method function.

***

<a id="observebefore"></a>

### observeBefore

```ts
observeBefore: ObserveFunction;
```

Defined in: client-types/out/precomputed/game.d.ts:122

Observes method inside selected class.

#### Param

Class name

#### Param

Method name inside of class

#### Param

Callback of method function.

***

<a id="observebeforeraw"></a>

### observeBeforeRaw

```ts
observeBeforeRaw: ObserveFunction;
```

Defined in: client-types/out/precomputed/game.d.ts:148

Observes method inside selected class. Can only call methods from MpGame.
Should be used when it's important for the function to execute quickly (as fast as V8 allows).

#### Param

Class name

#### Param

Method name inside of class

#### Param

Callback of method function.

***

<a id="observeraw"></a>

### observeRaw

```ts
observeRaw: ObserveFunction;
```

Defined in: client-types/out/precomputed/game.d.ts:156

Alias for [observeBeforeRaw](/reference/client/api/game/mpgameprecomputed/#observebeforeraw).

#### Param

Class name

#### Param

Method name inside of class

#### Param

Callback of method function.

***

<a id="override"></a>

### override

```ts
override: OverrideFunction;
```

Defined in: client-types/out/precomputed/game.d.ts:106

Overrides method function inside selected class.

#### Param

Class name

#### Param

Method name inside of class

#### Param

Function to override instead

***

<a id="tweakdb"></a>

### TweakDB

```ts
TweakDB: TweakDB;
```

Defined in: client-types/out/precomputed/game.d.ts:48

## Methods

<a id="addtoinventory"></a>

### AddToInventory()

```ts
AddToInventory(itemName, count): void;
```

Defined in: client-types/out/precomputed/game.d.ts:90

Add something to inventory.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `itemName` | `string` |
| `count` | `number` |

#### Returns

`void`

***

<a id="fromvariant"></a>

### fromVariant()

```ts
fromVariant<R>(obj): R;
```

Defined in: client-types/out/precomputed/game.d.ts:159

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `any` |

#### Returns

`R`

***

<a id="getdisplayresolution"></a>

### getDisplayResolution()

```ts
getDisplayResolution(): [number, number];
```

Defined in: client-types/out/precomputed/game.d.ts:60

#### Returns

\[`number`, `number`\]

***

<a id="gethashfromname"></a>

### getHashFromName()

```ts
getHashFromName(name, type): string;
```

Defined in: client-types/out/precomputed/game.d.ts:98

Returns model hash convertable to number.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Model name |
| `type` | `"cname"` \| `"tweakdbid"` | Model name type |

#### Returns

`string`

Model hash

***

<a id="getsingleton"></a>

### getSingleton()

```ts
getSingleton<T>(name): UnwrapMpClass<MpClasses[T]>;
```

Defined in: client-types/out/precomputed/game.d.ts:85

Get singleton.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* keyof `MpClasses` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `T` |

#### Returns

[`UnwrapMpClass`](/reference/client/api/primitives/unwrapmpclass/)\<`MpClasses`\[`T`\]\>

***

<a id="isblackscreenended"></a>

### isBlackScreenEnded()

```ts
isBlackScreenEnded(): boolean;
```

Defined in: client-types/out/precomputed/game.d.ts:163

#### Returns

`boolean`

***

<a id="isblackscreenstarted"></a>

### isBlackScreenStarted()

```ts
isBlackScreenStarted(): boolean;
```

Defined in: client-types/out/precomputed/game.d.ts:161

#### Returns

`boolean`

***

<a id="ongameloaded"></a>

### onGameLoaded()

```ts
onGameLoaded(callback): void;
```

Defined in: client-types/out/precomputed/game.d.ts:65

Event when the game is started.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`

***

<a id="oninit"></a>

### onInit()

```ts
onInit(callback): void;
```

Defined in: client-types/out/precomputed/game.d.ts:75

Event when tweaks is loaded.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`

***

<a id="oninputkeyevent"></a>

### onInputKeyEvent()

```ts
onInputKeyEvent(callback): void;
```

Defined in: client-types/out/precomputed/game.d.ts:53

Method to retrieve input events.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | (`action`, `key`) => `void` |

#### Returns

`void`

***

<a id="onlocalplayerspawned"></a>

### onLocalPlayerSpawned()

```ts
onLocalPlayerSpawned(callback): void;
```

Defined in: client-types/out/precomputed/game.d.ts:80

Event when local player has been spawned.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`

***

<a id="ontweak"></a>

### onTweak()

```ts
onTweak(callback): void;
```

Defined in: client-types/out/precomputed/game.d.ts:70

Event when tweaks is loaded.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | () => `void` |

#### Returns

`void`

***

<a id="tovariant"></a>

### toVariant()

```ts
toVariant<R>(obj, str): R;
```

Defined in: client-types/out/precomputed/game.d.ts:158

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `R` | `object` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `obj` | `any` |
| `str` | `string` |

#### Returns

`R`
