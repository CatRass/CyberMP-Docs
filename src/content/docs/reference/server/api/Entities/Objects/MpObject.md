---
editUrl: false
next: false
prev: false
title: "MpObject"
---

Defined in: objects.ts:7

## Extends

- [`MpEntity`](/reference/server/api/entities/mpentity/)\<[`GameObject`](/reference/server/api/entities/entitytype/#gameobject)\>

## Properties

<a id="dimension"></a>

### dimension

```ts
dimension: number;
```

Defined in: entities.ts:60

Virtual world dimension this entity belongs to

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`dimension`](/reference/server/api/entities/mpentity/#dimension)

***

<a id="exist"></a>

### exist

```ts
readonly exist: boolean;
```

Defined in: entities.ts:57

Whether the entity still exists in the world

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`exist`](/reference/server/api/entities/mpentity/#exist)

***

<a id="firstowner"></a>

### firstOwner

```ts
readonly firstOwner: MpPlayer;
```

Defined in: entities.ts:44

First player who synced this entity

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`firstOwner`](/reference/server/api/entities/mpentity/#firstowner)

***

<a id="id"></a>

### id

```ts
readonly id: number;
```

Defined in: entities.ts:38

Unique entity identifier

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`id`](/reference/server/api/entities/mpentity/#id)

***

<a id="model"></a>

### model

```ts
readonly model: GameHash;
```

Defined in: objects.ts:8

***

<a id="owner"></a>

### owner

```ts
readonly owner: MpPlayer;
```

Defined in: entities.ts:41

Current owner of the entity sync

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`owner`](/reference/server/api/entities/mpentity/#owner)

***

<a id="position"></a>

### position

```ts
readonly position: Vector3;
```

Defined in: entities.ts:45

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`position`](/reference/server/api/entities/mpentity/#position)

***

<a id="rotation"></a>

### rotation

```ts
readonly rotation: Rotation;
```

Defined in: entities.ts:46

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`rotation`](/reference/server/api/entities/mpentity/#rotation)

***

<a id="streamingradius"></a>

### streamingRadius

```ts
streamingRadius: number;
```

Defined in: entities.ts:63

Distance at which this entity streams in/out

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`streamingRadius`](/reference/server/api/entities/mpentity/#streamingradius)

***

<a id="type"></a>

### type

```ts
readonly type: GameObject;
```

Defined in: entities.ts:54

Type of entity (see [EntityType](/reference/server/api/entities/entitytype/)).

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`type`](/reference/server/api/entities/mpentity/#type)

***

<a id="yaw"></a>

### yaw

```ts
readonly yaw: number;
```

Defined in: entities.ts:49

Yaw angle in degrees

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`yaw`](/reference/server/api/entities/mpentity/#yaw)

## Methods

<a id="destroy"></a>

### destroy()

```ts
destroy(): void;
```

Defined in: objects.ts:10

#### Returns

`void`

***

<a id="getmeta"></a>

### getMeta()

```ts
getMeta<T>(key): T;
```

Defined in: entities.ts:75

Retrieves metadata stored on this entity.

#### Type Parameters

| Type Parameter | Default type | Description |
| ------ | ------ | ------ |
| `T` | `any` | Expected return type |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Metadata key |

#### Returns

`T`

Stored value or undefined if not set

#### Example

```ts
const health = entity.getMeta<number>("health");
```

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`getMeta`](/reference/server/api/entities/mpentity/#getmeta)

***

<a id="setmeta"></a>

### setMeta()

```ts
setMeta(
   key, 
   value, 
   sync?): void;
```

Defined in: entities.ts:84

Sets metadata on this entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Metadata key |
| `value` | `any` | Value to store |
| `sync?` | `boolean` | Whether to synchronize with clients immediately |

#### Returns

`void`

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`setMeta`](/reference/server/api/entities/mpentity/#setmeta)
