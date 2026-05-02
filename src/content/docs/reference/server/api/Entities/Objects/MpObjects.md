---
editUrl: false
next: false
prev: false
title: "MpObjects"
---

Defined in: objects.ts:27

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpObject`](/reference/server/api/entities/objects/mpobject/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpObject;
```

Defined in: entities.ts:110

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpObject`](/reference/server/api/entities/objects/mpobject/) | Entity instance or ID |

#### Returns

[`MpObject`](/reference/server/api/entities/objects/mpobject/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="create"></a>

### create()

```ts
create(options): MpObject;
```

Defined in: objects.ts:28

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateObjectOptions`](/reference/server/api/entities/objects/createobjectoptions/) |

#### Returns

[`MpObject`](/reference/server/api/entities/objects/mpobject/)

***

<a id="destroy"></a>

### destroy()

```ts
destroy(entity): void;
```

Defined in: objects.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `entity` | `number` \| [`MpObject`](/reference/server/api/entities/objects/mpobject/) |

#### Returns

`void`

***

<a id="exists"></a>

### exists()

```ts
exists(entity): boolean;
```

Defined in: entities.ts:100

Checks if an entity exists.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpObject`](/reference/server/api/entities/objects/mpobject/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

```ts
toArray(): MpObject[];
```

Defined in: objects.ts:30

#### Returns

[`MpObject`](/reference/server/api/entities/objects/mpobject/)[]
