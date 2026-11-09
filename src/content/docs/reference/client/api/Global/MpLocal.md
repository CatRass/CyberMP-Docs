---
editUrl: false
next: false
prev: false
title: "MpLocal"
---

Defined in: local.d.ts:4

Manages local player lifecycle operations and the creation of client-side entities.

## Methods

<a id="despawnobject"></a>

### despawnObject()

> **despawnObject**(`hash`): `void`

Defined in: local.d.ts:105

Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local object.

#### Parameters

##### hash

`number`

Unique local game engine entity instance handle to clear.

#### Returns

`void`

***

<a id="despawnped"></a>

### despawnPed()

> **despawnPed**(`hash`): `void`

Defined in: local.d.ts:93

Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local pedestrian.

#### Parameters

##### hash

`number`

Unique local game engine entity instance handle to clear.

#### Returns

`void`

***

<a id="despawnvehicle"></a>

### despawnVehicle()

> **despawnVehicle**(`hash`): `void`

Defined in: local.d.ts:99

Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local vehicle.

#### Parameters

##### hash

`number`

Unique local game engine entity instance handle to clear.

#### Returns

`void`

***

<a id="spawnobject"></a>

### spawnObject()

> **spawnObject**(`skinHash`, `appHash`, `x`, `y`, `z`, `roll`, `pitch`, `yaw`, `streaming`): `number`

Defined in: local.d.ts:77

Instantiates a localized world object or dynamic prop entity inside the engine environment.
This entity remains completely un-synchronized and invisible to other remote clients.

#### Parameters

##### skinHash

`number` \| `bigint`

Asset model signature key hash.

##### appHash

`number` \| `bigint`

Visual appearance setup key components variation hash.

##### x

`number`

Horizontal coordinate space.

##### y

`number`

Vertical coordinate space.

##### z

`number`

Elevation height space coordinate.

##### roll

`number`

Longitudinal rotation axis orientation angle.

##### pitch

`number`

Lateral rotation axis orientation angle.

##### yaw

`number`

Directional heading alignment angle.

##### streaming

`boolean`

Controls if engine virtualization automatically handles streaming boundaries tracking.

#### Returns

`number`

The resulting unique local game entity handle ID.

***

<a id="spawnped"></a>

### spawnPed()

> **spawnPed**(`skinHash`, `appHash`, `x`, `y`, `z`, `yaw`, `streaming`): `number`

Defined in: local.d.ts:27

Instantiates a localized ped entity.
This entity remains completely un-synchronized and invisible to other remote clients.

#### Parameters

##### skinHash

`number` \| `bigint`

Asset model signature key hash.

##### appHash

`number` \| `bigint`

Visual appearance setup key components variation hash.

##### x

`number`

Horizontal coordinate space.

##### y

`number`

Vertical coordinate space.

##### z

`number`

Elevation height space coordinate.

##### yaw

`number`

Rotational alignment facing angle.

##### streaming

`boolean`

Controls if engine virtualization automatically handles streaming boundaries tracking.

#### Returns

`number`

The resulting unique local game entity handle ID.

***

<a id="spawnplayer"></a>

### spawnPlayer()

> **spawnPlayer**(`x`, `y`, `z`, `yaw`): `boolean`

Defined in: local.d.ts:13

Spawns local player

#### Parameters

##### x

`number`

Horizontal grid position coordinate value.

##### y

`number`

Vertical grid position coordinate value.

##### z

`number`

Height grid elevation coordinate value.

##### yaw

`number`

The horizontal rotation layout angle in degrees.

#### Returns

`boolean`

`true` if the spawn lifecycle sequence initiated successfully, otherwise `false`.

***

<a id="spawnvehicle"></a>

### spawnVehicle()

> **spawnVehicle**(`skinHash`, `appHash`, `x`, `y`, `z`, `roll`, `pitch`, `yaw`, `streaming`): `number`

Defined in: local.d.ts:51

Instantiates a localized vehicle entity inside the engine environment.
This entity remains completely un-synchronized and invisible to other remote clients.

#### Parameters

##### skinHash

`number` \| `bigint`

Asset model signature key hash.

##### appHash

`number` \| `bigint`

Visual appearance setup key components variation hash.

##### x

`number`

Horizontal coordinate space.

##### y

`number`

Vertical coordinate space.

##### z

`number`

Elevation height space coordinate.

##### roll

`number`

Longitudinal rotation axis orientation angle.

##### pitch

`number`

Lateral rotation axis orientation angle.

##### yaw

`number`

Directional heading alignment angle.

##### streaming

`boolean`

Controls if engine virtualization automatically handles streaming boundaries tracking.

#### Returns

`number`

The resulting unique local game entity handle ID.
