---
editUrl: false
next: false
prev: false
title: "extended_worldWeatherScriptInterface"
---

Defined in: precomputed/game.d.ts:76

## Extends

- `IScriptable`

## Methods

<a id="getclassname"></a>

### GetClassName()

```ts
GetClassName(): string;
```

Defined in: game.d.ts:82192

#### Returns

`string`

#### Inherited from

```ts
IScriptable.GetClassName
```

***

<a id="getenvironmentdefinition"></a>

### GetEnvironmentDefinition()

```ts
GetEnvironmentDefinition(): worldEnvironmentDefinition;
```

Defined in: precomputed/game.d.ts:84

#### Returns

`worldEnvironmentDefinition`

***

<a id="getweatherstate"></a>

### GetWeatherState()

```ts
GetWeatherState(): worldWeatherState;
```

Defined in: precomputed/game.d.ts:83

#### Returns

`worldWeatherState`

***

<a id="isa"></a>

### IsA()

```ts
IsA(className): boolean;
```

Defined in: game.d.ts:82193

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | `string` |

#### Returns

`boolean`

#### Inherited from

```ts
IScriptable.IsA
```

***

<a id="isexactlya"></a>

### IsExactlyA()

```ts
IsExactlyA(className): boolean;
```

Defined in: game.d.ts:82194

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `className` | `string` |

#### Returns

`boolean`

#### Inherited from

```ts
IScriptable.IsExactlyA
```

***

<a id="resetweather"></a>

### ResetWeather()

```ts
ResetWeather(forceRestore?, blendTime?): void;
```

Defined in: precomputed/game.d.ts:82

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `forceRestore?` | `boolean` |
| `blendTime?` | `number` |

#### Returns

`void`

***

<a id="setweather"></a>

### SetWeather()

```ts
SetWeather(
   weather, 
   blendTime?, 
   priority?): void;
```

Defined in: precomputed/game.d.ts:77

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weather` | `EWeatherState` |
| `blendTime?` | `number` |
| `priority?` | `number` |

#### Returns

`void`

***

<a id="tostring"></a>

### ToString()

```ts
ToString(): string;
```

Defined in: game.d.ts:82195

#### Returns

`string`

#### Inherited from

```ts
IScriptable.ToString
```
