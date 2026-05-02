---
editUrl: false
next: false
prev: false
title: "MpVehicle"
---

Defined in: vehicles.ts:18

## Extends

- [`MpEntity`](/reference/server/api/entities/mpentity/)\<[`Vehicle`](/reference/server/api/entities/entitytype/#vehicle)\>

## Properties

<a id="angularvelocity"></a>

### angularVelocity

```ts
readonly angularVelocity: Vector3;
```

Defined in: vehicles.ts:23

***

<a id="appearance"></a>

### appearance

```ts
readonly appearance: GameHash;
```

Defined in: vehicles.ts:20

***

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

<a id="health"></a>

### health

```ts
readonly health: number;
```

Defined in: vehicles.ts:21

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

<a id="lastseats"></a>

### lastSeats

```ts
lastSeats: object;
```

Defined in: vehicles.ts:32

#### driver

```ts
readonly driver: MpPlayer | null;
```

#### passenger

```ts
readonly passenger: MpPlayer | null;
```

#### rearLeft

```ts
readonly rearLeft: MpPlayer | null;
```

#### rearRight

```ts
readonly rearRight: MpPlayer | null;
```

***

<a id="model"></a>

### model

```ts
readonly model: GameHash;
```

Defined in: vehicles.ts:19

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

<a id="seats"></a>

### seats

```ts
seats: object;
```

Defined in: vehicles.ts:25

#### driver

```ts
readonly driver: MpPlayer | null;
```

#### passenger

```ts
readonly passenger: MpPlayer | null;
```

#### rearLeft

```ts
readonly rearLeft: MpPlayer | null;
```

#### rearRight

```ts
readonly rearRight: MpPlayer | null;
```

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
readonly type: Vehicle;
```

Defined in: entities.ts:54

Type of entity (see [EntityType](/reference/server/api/entities/entitytype/)).

#### Inherited from

[`MpEntity`](/reference/server/api/entities/mpentity/).[`type`](/reference/server/api/entities/mpentity/#type)

***

<a id="velocity"></a>

### velocity

```ts
readonly velocity: Vector3;
```

Defined in: vehicles.ts:22

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

Defined in: vehicles.ts:42

#### Returns

`void`

***

<a id="getlastplayerinseat"></a>

### getLastPlayerInSeat()

```ts
getLastPlayerInSeat(seat): MpPlayer | null;
```

Defined in: vehicles.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](/reference/server/api/entities/vehicles/vehicleseat/) |

#### Returns

[`MpPlayer`](/reference/server/api/entities/mpplayer/) \| `null`

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

<a id="getplayerinseat"></a>

### getPlayerInSeat()

```ts
getPlayerInSeat(seat): MpPlayer | null;
```

Defined in: vehicles.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `seat` | [`VehicleSeat`](/reference/server/api/entities/vehicles/vehicleseat/) |

#### Returns

[`MpPlayer`](/reference/server/api/entities/mpplayer/) \| `null`

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
