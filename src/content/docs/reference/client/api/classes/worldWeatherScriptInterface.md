---
editUrl: false
next: false
prev: false
title: "worldWeatherScriptInterface"
---

Defined in: client-types/out/precomputed/classes.d.ts:24

## Extends

- `IScriptable`

## Constructors

<a id="constructor"></a>

### Constructor

```ts
new worldWeatherScriptInterface(): worldWeatherScriptInterface;
```

#### Returns

`worldWeatherScriptInterface`

#### Inherited from

```ts
IScriptable.constructor
```

## Methods

<a id="getclassname"></a>

### GetClassName()

```ts
GetClassName(): string;
```

Defined in: client-types/out/classes.d.ts:81898

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

Defined in: client-types/out/precomputed/classes.d.ts:32

#### Returns

`worldEnvironmentDefinition`

***

<a id="getrainintensity"></a>

### GetRainIntensity()

```ts
GetRainIntensity(): number;
```

Defined in: client-types/out/classes.d.ts:141797

#### Returns

`number`

***

<a id="getrainintensitytype"></a>

### GetRainIntensityType()

```ts
GetRainIntensityType(): worldRainIntensity;
```

Defined in: client-types/out/classes.d.ts:141798

#### Returns

`worldRainIntensity`

***

<a id="getrainmoisture"></a>

### GetRainMoisture()

```ts
GetRainMoisture(): number;
```

Defined in: client-types/out/classes.d.ts:141799

#### Returns

`number`

***

<a id="getrainpuddles"></a>

### GetRainPuddles()

```ts
GetRainPuddles(): number;
```

Defined in: client-types/out/classes.d.ts:141800

#### Returns

`number`

***

<a id="getweatherstate"></a>

### GetWeatherState()

```ts
GetWeatherState(): worldWeatherState;
```

Defined in: client-types/out/precomputed/classes.d.ts:31

#### Returns

`worldWeatherState`

***

<a id="isa"></a>

### IsA()

```ts
IsA(className): boolean;
```

Defined in: client-types/out/classes.d.ts:81899

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

Defined in: client-types/out/classes.d.ts:81900

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

<a id="registerweatherlistener"></a>

### RegisterWeatherListener()

```ts
RegisterWeatherListener(callback): number;
```

Defined in: client-types/out/classes.d.ts:141801

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callback` | `worldWeatherScriptListener` |

#### Returns

`number`

***

<a id="resetweather"></a>

### ResetWeather()

```ts
ResetWeather(forceRestore?, blendTime?): void;
```

Defined in: client-types/out/precomputed/classes.d.ts:30

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

Defined in: client-types/out/precomputed/classes.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `weather` | `WeatherState` |
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

Defined in: client-types/out/classes.d.ts:81901

#### Returns

`string`

#### Inherited from

```ts
IScriptable.ToString
```

***

<a id="unregisterweatherlistener"></a>

### UnregisterWeatherListener()

```ts
UnregisterWeatherListener(callbackId): void;
```

Defined in: client-types/out/classes.d.ts:141802

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `callbackId` | `number` |

#### Returns

`void`

***

<a id="detectscriptablecycles"></a>

### DetectScriptableCycles()

```ts
static DetectScriptableCycles(): void;
```

Defined in: client-types/out/classes.d.ts:81897

#### Returns

`void`
