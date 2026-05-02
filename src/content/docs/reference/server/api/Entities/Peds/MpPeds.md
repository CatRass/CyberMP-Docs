---
editUrl: false
next: false
prev: false
title: "MpPeds"
---

Defined in: peds.ts:30

## Extends

- [`MpEntities`](/reference/server/api/entities/mpentities/)\<[`MpPed`](/reference/server/api/entities/peds/mpped/)\>

## Methods

<a id="at"></a>

### at()

```ts
at(entity): MpPed;
```

Defined in: entities.ts:110

Retrieves an entity by instance or ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` \| [`MpPed`](/reference/server/api/entities/peds/mpped/) | Entity instance or ID |

#### Returns

[`MpPed`](/reference/server/api/entities/peds/mpped/)

Entity instance

#### Throws

If entity does not exist

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`at`](/reference/server/api/entities/mpentities/#at)

***

<a id="create"></a>

### create()

```ts
create(options): MpPed;
```

Defined in: peds.ts:31

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`CreatePedOptions`](/reference/server/api/entities/peds/createpedoptions/) |

#### Returns

[`MpPed`](/reference/server/api/entities/peds/mpped/)

***

<a id="destroy"></a>

### destroy()

```ts
destroy(ped): void;
```

Defined in: peds.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ped` | `number` \| [`MpPed`](/reference/server/api/entities/peds/mpped/) |

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
| `entity` | `number` \| [`MpPed`](/reference/server/api/entities/peds/mpped/) | Entity instance or ID |

#### Returns

`boolean`

True if entity exists

#### Inherited from

[`MpEntities`](/reference/server/api/entities/mpentities/).[`exists`](/reference/server/api/entities/mpentities/#exists)

***

<a id="toarray"></a>

### toArray()

```ts
toArray(): MpPed[];
```

Defined in: peds.ts:33

#### Returns

[`MpPed`](/reference/server/api/entities/peds/mpped/)[]
