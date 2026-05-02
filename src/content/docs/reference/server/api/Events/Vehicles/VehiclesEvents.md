---
editUrl: false
next: false
prev: false
title: "VehiclesEvents"
---

Defined in: events.ts:397

Events related to Vehicles.

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="entervehicle"></a>

### enterVehicle()

```ts
enterVehicle(id, seat): void;
```

Defined in: events.ts:448

Triggered when a player enters a vehicle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |
| `seat` | [`VehicleSeat`](/reference/server/api/entities/vehicles/vehicleseat/) |

#### Returns

`void`

***

<a id="exitvehicle"></a>

### exitVehicle()

```ts
exitVehicle(id): void;
```

Defined in: events.ts:443

Triggered when a player exits a vehicle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

***

<a id="vehiclecustomizationchange"></a>

### vehicleCustomizationChange()

```ts
vehicleCustomizationChange(playerId, data): void;
```

Defined in: events.ts:401

Triggered when a vehicle's customization changes (usually CrystalCoat).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`VehicleCustomizationChangeEventData`](/reference/server/api/events/vehicles/vehiclecustomizationchangeeventdata/) |

#### Returns

`void`

***

<a id="vehicledespawn"></a>

### vehicleDespawn()

```ts
vehicleDespawn(id): void;
```

Defined in: events.ts:422

Triggered when a vehicle despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

***

<a id="vehicledestructionchange"></a>

### vehicleDestructionChange()

```ts
vehicleDestructionChange(playerId, data): void;
```

Defined in: events.ts:409

Triggered when a vehicle's destruction changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`VehicleDestructionChangeEventData`](/reference/server/api/events/vehicles/vehicledestructionchangeeventdata/) |

#### Returns

`void`

***

<a id="vehiclehittedbyplayer"></a>

### vehicleHittedByPlayer()

```ts
vehicleHittedByPlayer(id, data): boolean | void;
```

Defined in: events.ts:435

Triggered when a vehicle is hit by a player.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |
| `data` | `VehicleHittedByPlayerEventData` |

#### Returns

`boolean` \| `void`

***

<a id="vehiclespawn"></a>

### vehicleSpawn()

```ts
vehicleSpawn(id): void;
```

Defined in: events.ts:417

Triggered when a vehicle spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

***

<a id="vehicleweaponshoot"></a>

### vehicleWeaponShoot()

```ts
vehicleWeaponShoot(id, data): boolean | void;
```

Defined in: events.ts:427

Triggered when a vehicle's weapon shoots.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |
| `data` | [`VehicleWeaponShootEventData`](/reference/server/api/events/vehicles/vehicleweaponshooteventdata/) |

#### Returns

`boolean` \| `void`
