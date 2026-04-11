---
editUrl: false
next: false
prev: false
title: "MpVehicles"
---

Defined in: vehicles.d.ts:37

Collection wrapper for managing multiple entities.

## Extends

- [`MpEntities`](/reference/server/api/entities/pools/mpentities/)\<[`MpVehicle`](/reference/server/api/entities/mpvehicle/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpVehicle;
```

Defined in: entities.d.ts:95

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpVehicle`](/reference/server/api/entities/mpvehicle/) | Entity instance or ID |

#### Returns

[`MpVehicle`](/reference/server/api/entities/mpvehicle/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`at`](/reference/server/api/entities/pools/mpentities/#at)

***

<a id="create"></a>

### create()

```ts
create(options): MpVehicle;
```

Defined in: vehicles.d.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreateVehicleOptions`](/reference/server/api/other/createvehicleoptions/) |

#### Returns

[`MpVehicle`](/reference/server/api/entities/mpvehicle/)

***

<a id="destroy"></a>

### destroy()

```ts
destroy(vehicle): void;
```

Defined in: vehicles.d.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `vehicle` | `number` \| [`MpVehicle`](/reference/server/api/entities/mpvehicle/) |

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
| `entity` | `number` \| [`MpVehicle`](/reference/server/api/entities/mpvehicle/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`exists`](/reference/server/api/entities/pools/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

```ts
toArray(): MpVehicle[];
```

Defined in: vehicles.d.ts:40

#### Returns

[`MpVehicle`](/reference/server/api/entities/mpvehicle/)[]
