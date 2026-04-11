---
editUrl: false
next: false
prev: false
title: "PickupsEvents"
---

Defined in: events.d.ts:321

Events related to Pickups

## Methods

<a id="pickupchange"></a>

### pickupChange()

```ts
pickupChange(playerId, data): void;
```

Defined in: events.d.ts:325

Triggered when a pickup's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupChangeEventData`](/reference/server/api/events/pickups/pickupchangeeventdata/) |

#### Returns

`void`

***

<a id="pickupdespawn"></a>

### pickupDespawn()

```ts
pickupDespawn(id): void;
```

Defined in: events.d.ts:345

Triggered when a pickup despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

***

<a id="pickupdrop"></a>

### pickupDrop()

```ts
pickupDrop(playerId, data): void;
```

Defined in: events.d.ts:335

Triggered when a pickup is dropped.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupCreateEventData`](/reference/server/api/events/pickups/pickupcreateeventdata/) |

#### Returns

`void`

***

<a id="pickupraise"></a>

### pickupRaise()

```ts
pickupRaise(playerId, data): void;
```

Defined in: events.d.ts:330

Triggered when a pickup is raised.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupDespawnEventData`](/reference/server/api/events/pickups/pickupdespawneventdata/) |

#### Returns

`void`

***

<a id="pickupspawn"></a>

### pickupSpawn()

```ts
pickupSpawn(id): void;
```

Defined in: events.d.ts:340

Triggered when a pickup spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`
