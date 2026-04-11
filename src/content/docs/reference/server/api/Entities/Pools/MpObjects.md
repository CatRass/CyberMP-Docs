---
editUrl: false
next: false
prev: false
title: "MpObjects"
---

Defined in: objects.d.ts:18

Collection wrapper for managing multiple entities.

## Extends

- [`MpEntities`](/reference/server/api/entities/pools/mpentities/)\<[`MpObject`](/reference/server/api/entities/mpobject/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpObject;
```

Defined in: entities.d.ts:95

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpObject`](/reference/server/api/entities/mpobject/) | Entity instance or ID |

#### Returns

[`MpObject`](/reference/server/api/entities/mpobject/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`at`](/reference/server/api/entities/pools/mpentities/#at)

***

<a id="create"></a>

### create()

```ts
create(options): MpObject;
```

Defined in: objects.d.ts:19

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateObjectOptions`](/reference/server/api/other/createobjectoptions/) |

#### Returns

[`MpObject`](/reference/server/api/entities/mpobject/)

***

<a id="destroy"></a>

### destroy()

```ts
destroy(entity): void;
```

Defined in: objects.d.ts:20

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `number` \| [`MpObject`](/reference/server/api/entities/mpobject/) |

#### Returns

`void`

***

<a id="exists"></a>

### exists()

```ts
exists(entity): boolean;
```

Defined in: entities.d.ts:85

Checks if an entity exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpObject`](/reference/server/api/entities/mpobject/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`exists`](/reference/server/api/entities/pools/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

```ts
toArray(): MpObject[];
```

Defined in: objects.d.ts:21

#### Returns

[`MpObject`](/reference/server/api/entities/mpobject/)[]
