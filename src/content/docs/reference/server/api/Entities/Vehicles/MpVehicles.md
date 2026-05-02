---
editUrl: false
next: false
prev: false
title: "MpVehicles"
---

Defined in: vehicles.ts:60

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpVehicle;
```

Defined in: entities.ts:110

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | \| `number` \| [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/) | Entity instance or ID |

#### Returns

[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="create"></a>

### create()

```ts
create(options): MpVehicle;
```

Defined in: vehicles.ts:61

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `CreateVehicleOptions` |

#### Returns

[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)

***

<a id="destroy"></a>

### destroy()

```ts
destroy(vehicle): void;
```

Defined in: vehicles.ts:62

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | \| `number` \| [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/) |

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
| `entity` | \| `number` \| [`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

```ts
toArray(): MpVehicle[];
```

Defined in: vehicles.ts:63

#### Returns

[`MpVehicle`](/reference/server/api/entities/vehicles/mpvehicle/)[]
