---
editUrl: false
next: false
prev: false
title: "MpMeta"
---

Defined in: client-types/out/precomputed/meta.d.ts:1

## Methods

<a id="getentitymeta"></a>

### getEntityMeta()

#### Call Signature

```ts
getEntityMeta<T>(netId, key): T;
```

Defined in: client-types/out/precomputed/meta.d.ts:12

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |
| `key` | `string` |

##### Returns

`T`

#### Call Signature

```ts
getEntityMeta<T>(netId, key): T;
```

Defined in: server-types/index.d.ts:111

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |
| `key` | `string` |

##### Returns

`T`

***

<a id="getglobalmeta"></a>

### getGlobalMeta()

#### Call Signature

```ts
getGlobalMeta<T>(key): T;
```

Defined in: client-types/out/precomputed/meta.d.ts:3

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`T`

#### Call Signature

```ts
getGlobalMeta<T>(key): T;
```

Defined in: server-types/index.d.ts:102

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

##### Returns

`T`

***

<a id="getlocalplayermeta"></a>

### getLocalPlayerMeta()

```ts
getLocalPlayerMeta<T>(key): T;
```

Defined in: client-types/out/precomputed/meta.d.ts:14

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |

#### Returns

`T`

***

<a id="getplayermeta"></a>

### getPlayerMeta()

#### Call Signature

```ts
getPlayerMeta<T>(playerId, key): T;
```

Defined in: client-types/out/precomputed/meta.d.ts:10

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `key` | `string` |

##### Returns

`T`

#### Call Signature

```ts
getPlayerMeta<T>(playerId, key): T;
```

Defined in: server-types/index.d.ts:109

##### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `key` | `string` |

##### Returns

`T`

***

<a id="setentitymeta"></a>

### setEntityMeta()

#### Call Signature

```ts
setEntityMeta(
   netId, 
   key, 
   value, 
   sync?): void;
```

Defined in: client-types/out/precomputed/meta.d.ts:11

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

##### Returns

`void`

#### Call Signature

```ts
setEntityMeta(
   netId, 
   key, 
   value, 
   sync?): void;
```

Defined in: server-types/index.d.ts:110

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `netId` | `number` |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

##### Returns

`void`

***

<a id="setglobalmeta"></a>

### setGlobalMeta()

#### Call Signature

```ts
setGlobalMeta(
   key, 
   value, 
   sync?): void;
```

Defined in: client-types/out/precomputed/meta.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

##### Returns

`void`

#### Call Signature

```ts
setGlobalMeta(
   key, 
   value, 
   sync?): void;
```

Defined in: server-types/index.d.ts:101

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

##### Returns

`void`

***

<a id="setlocalplayermeta"></a>

### setLocalPlayerMeta()

```ts
setLocalPlayerMeta(key, value): void;
```

Defined in: client-types/out/precomputed/meta.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

***

<a id="setplayermeta"></a>

### setPlayerMeta()

#### Call Signature

```ts
setPlayerMeta(
   playerId, 
   key, 
   value, 
   sync?): void;
```

Defined in: client-types/out/precomputed/meta.d.ts:4

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

##### Returns

`void`

#### Call Signature

```ts
setPlayerMeta(
   playerId, 
   key, 
   value, 
   sync?): void;
```

Defined in: server-types/index.d.ts:103

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `key` | `string` |
| `value` | `any` |
| `sync?` | `boolean` |

##### Returns

`void`
