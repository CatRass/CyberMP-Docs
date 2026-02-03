---
editUrl: false
next: false
prev: false
title: "gameScriptableSystemsContainer"
---

Defined in: client-types/out/precomputed/classes.d.ts:60

## Extends

- `gameIScriptableSystemsContainer`

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Map` | [`OnlyExtendingScriptableSystem`](/reference/client/api/classes/onlyextendingscriptablesystem/)\<`MpClasses`\> |

## Constructors

<a id="constructor"></a>

### Constructor

```ts
new gameScriptableSystemsContainer<Map>(): gameScriptableSystemsContainer<Map>;
```

#### Returns

`gameScriptableSystemsContainer`\<`Map`\>

## Methods

<a id="get"></a>

### Get()

```ts
Get<N>(systemName): UnwrapMpClass<Map[N]>;
```

Defined in: client-types/out/precomputed/classes.d.ts:63

#### Type Parameters

| Type Parameter |
| ------ |
| `N` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `systemName` | `N` |

#### Returns

[`UnwrapMpClass`](/reference/client/api/primitives/unwrapmpclass/)\<`Map`\[`N`\]\>

***

<a id="getclassname"></a>

### GetClassName()

```ts
GetClassName(): string;
```

Defined in: client-types/out/classes.d.ts:81898

#### Returns

`string`

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

***

<a id="queuerequest"></a>

### QueueRequest()

```ts
QueueRequest(request): void;
```

Defined in: client-types/out/classes.d.ts:61498

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `request` | `gameScriptableSystemRequest` |

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

***

<a id="detectscriptablecycles"></a>

### DetectScriptableCycles()

```ts
static DetectScriptableCycles(): void;
```

Defined in: client-types/out/classes.d.ts:81897

#### Returns

`void`
