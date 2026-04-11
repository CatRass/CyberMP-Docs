---
editUrl: false
next: false
prev: false
title: "MpPickups"
---

Defined in: pickups.d.ts:28

Collection wrapper for managing multiple entities.

## Extends

- [`MpEntities`](/reference/server/api/entities/pools/mpentities/)\<[`MpPickup`](/reference/server/api/entities/mppickup/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpPickup;
```

Defined in: entities.d.ts:95

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpPickup`](/reference/server/api/entities/mppickup/) | Entity instance or ID |

#### Returns

[`MpPickup`](/reference/server/api/entities/mppickup/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`at`](/reference/server/api/entities/pools/mpentities/#at)

***

<a id="create"></a>

### create()

```ts
create(options): MpPickup;
```

Defined in: pickups.d.ts:29

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreatePickupOptions`](/reference/server/api/other/createpickupoptions/) |

#### Returns

[`MpPickup`](/reference/server/api/entities/mppickup/)

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
| `entity` | `number` \| [`MpPickup`](/reference/server/api/entities/mppickup/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`exists`](/reference/server/api/entities/pools/mpentities/#exists)
