---
editUrl: false
next: false
prev: false
title: "MpPickups"
---

Defined in: pickups.ts:37

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpPickup`](/reference/server/api/entities/pickups/mppickup/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpPickup;
```

Defined in: entities.ts:110

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpPickup`](/reference/server/api/entities/pickups/mppickup/) | Entity instance or ID |

#### Returns

[`MpPickup`](/reference/server/api/entities/pickups/mppickup/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="create"></a>

### create()

```ts
create(options): MpPickup;
```

Defined in: pickups.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreatePickupOptions`](/reference/server/api/entities/pickups/createpickupoptions/) |

#### Returns

[`MpPickup`](/reference/server/api/entities/pickups/mppickup/)

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
| `entity` | `number` \| [`MpPickup`](/reference/server/api/entities/pickups/mppickup/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)
