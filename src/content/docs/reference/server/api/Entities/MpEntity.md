---
editUrl: false
next: false
prev: false
title: "MpEntity"
---

Defined in: entities.d.ts:21

Base interface representing any in-game entity.

## Extended by

- [`MpObject`](/reference/server/api/entities/mpobject/)
- [`MpPed`](/reference/server/api/entities/mpped/)
- [`MpPickup`](/reference/server/api/entities/mppickup/)
- [`MpPlayer`](/reference/server/api/entities/mpplayer/)
- [`MpVehicle`](/reference/server/api/entities/mpvehicle/)

## Properties

<a id="dimension"></a>

### dimension

```ts
dimension: number;
```

Defined in: entities.d.ts:45

Virtual world dimension this entity belongs to

***

<a id="exist"></a>

### exist

```ts
readonly exist: boolean;
```

Defined in: entities.d.ts:42

Whether the entity still exists in the world

***

<a id="firstowner"></a>

### firstOwner

```ts
readonly firstOwner: MpPlayer;
```

Defined in: entities.d.ts:29

First player who synced this entity

***

<a id="id"></a>

### id

```ts
readonly id: number;
```

Defined in: entities.d.ts:23

Unique entity identifier

***

<a id="owner"></a>

### owner

```ts
readonly owner: MpPlayer;
```

Defined in: entities.d.ts:26

Current owner of the entity sync

***

<a id="position"></a>

### position

```ts
readonly position: Vector3;
```

Defined in: entities.d.ts:30

***

<a id="rotation"></a>

### rotation

```ts
readonly rotation: Rotation;
```

Defined in: entities.d.ts:31

***

<a id="streamingradius"></a>

### streamingRadius

```ts
streamingRadius: number;
```

Defined in: entities.d.ts:48

Distance at which this entity streams in/out

***

<a id="type"></a>

### type

```ts
readonly type: EntityType;
```

Defined in: entities.d.ts:39

Type of entity (see [EntityType](/reference/server/api/enums/entitytype/)).

***

<a id="yaw"></a>

### yaw

```ts
readonly yaw: number;
```

Defined in: entities.d.ts:34

Yaw angle in degrees

## Methods

<a id="getmeta"></a>

### getMeta()

```ts
getMeta<T>(key): T;
```

Defined in: entities.d.ts:60

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

Defined in: entities.d.ts:69

Sets metadata on this entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | Metadata key |
| `value` | `any` | Value to store |
| `sync?` | `boolean` | Whether to synchronize with clients immediately |

#### Returns

`void`
