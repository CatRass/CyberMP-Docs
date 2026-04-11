---
editUrl: false
next: false
prev: false
title: "MpPeds"
---

Defined in: peds.d.ts:21

Collection wrapper for managing multiple entities.

## Extends

- [`MpEntities`](/reference/server/api/entities/pools/mpentities/)\<[`MpPed`](/reference/server/api/entities/mpped/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpPed;
```

Defined in: entities.d.ts:95

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpPed`](/reference/server/api/entities/mpped/) | Entity instance or ID |

#### Returns

[`MpPed`](/reference/server/api/entities/mpped/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`at`](/reference/server/api/entities/pools/mpentities/#at)

***

<a id="create"></a>

### create()

```ts
create(options): MpPed;
```

Defined in: peds.d.ts:22

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreatePedOptions`](/reference/server/api/other/createpedoptions/) |

#### Returns

[`MpPed`](/reference/server/api/entities/mpped/)

***

<a id="destroy"></a>

### destroy()

```ts
destroy(ped): void;
```

Defined in: peds.d.ts:24

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `number` \| [`MpPed`](/reference/server/api/entities/mpped/) |

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
| `entity` | `number` \| [`MpPed`](/reference/server/api/entities/mpped/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/pools/mpentities/).[`exists`](/reference/server/api/entities/pools/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

```ts
toArray(): MpPed[];
```

Defined in: peds.d.ts:26

#### Returns

[`MpPed`](/reference/server/api/entities/mpped/)[]
