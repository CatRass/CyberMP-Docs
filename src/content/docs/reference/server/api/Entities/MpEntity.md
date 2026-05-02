---
editUrl: false
next: false
prev: false
title: "MpEntity"
---

Defined in: entities.ts:36

Base interface representing any in-game entity.

## Extended by

- [`MpObject`](/reference/server/api/entities/objects/mpobject/)
- [`MpPed`](/reference/server/api/entities/peds/mpped/)
- [`MpPickup`](/reference/server/api/entities/pickups/mppickup/)
- [`MpPlayer`](/reference/server/api/entities/mpplayer/)
- [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `TEntityType` *extends* [`EntityType`](/reference/server/api/entities/entitytype/) | [`EntityType`](/reference/server/api/entities/entitytype/) |

## Properties

<a id="dimension"></a>

### dimension

```ts
dimension: number;
```

Defined in: entities.ts:60

Virtual world dimension this entity belongs to

***

<a id="exist"></a>

### exist

```ts
readonly exist: boolean;
```

Defined in: entities.ts:57

Whether the entity still exists in the world

***

<a id="firstowner"></a>

### firstOwner

```ts
readonly firstOwner: MpPlayer;
```

Defined in: entities.ts:44

First player who synced this entity

***

<a id="id"></a>

### id

```ts
readonly id: number;
```

Defined in: entities.ts:38

Unique entity identifier

***

<a id="owner"></a>

### owner

```ts
readonly owner: MpPlayer;
```

Defined in: entities.ts:41

Current owner of the entity sync

***

<a id="position"></a>

### position

```ts
readonly position: Vector3;
```

Defined in: entities.ts:45

***

<a id="rotation"></a>

### rotation

```ts
readonly rotation: Rotation;
```

Defined in: entities.ts:46

***

<a id="streamingradius"></a>

### streamingRadius

```ts
streamingRadius: number;
```

Defined in: entities.ts:63

Distance at which this entity streams in/out

***

<a id="type"></a>

### type

```ts
readonly type: TEntityType;
```

Defined in: entities.ts:54

Type of entity (see [EntityType](/reference/server/api/entities/entitytype/)).

***

<a id="yaw"></a>

### yaw

```ts
readonly yaw: number;
```

Defined in: entities.ts:49

Yaw angle in degrees

## Methods

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
