---
editUrl: false
next: false
prev: false
title: "VehiclesEvents"
---

Defined in: events.d.ts:289

Events related to Vehicles.

## Methods

<a id="vehiclecustomizationchange"></a>

### vehicleCustomizationChange()

```ts
vehicleCustomizationChange(playerId, data): void;
```

Defined in: events.d.ts:293

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

Defined in: events.d.ts:314

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

Defined in: events.d.ts:301

Triggered when a vehicle's destruction changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`VehicleDestructionChangeEventData`](/reference/server/api/events/vehicles/vehicledestructionchangeeventdata/) |

#### Returns

`void`

***

<a id="vehiclespawn"></a>

### vehicleSpawn()

```ts
vehicleSpawn(id): void;
```

Defined in: events.d.ts:309

Triggered when a vehicle spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`
