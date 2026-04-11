---
editUrl: false
next: false
prev: false
title: "WorldEvents"
---

Defined in: events.d.ts:266

Events related to the world.

## Methods

<a id="doorstatechange"></a>

### doorStateChange()

```ts
doorStateChange(playerId, data): void;
```

Defined in: events.d.ts:270

Triggered when a any door's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`DoorStateChangeEventData`](/reference/server/api/events/world/doorstatechangeeventdata/) |

#### Returns

`void`

***

<a id="explosion"></a>

### explosion()

```ts
explosion(playerId, data): void;
```

Defined in: events.d.ts:282

Triggered when an explosion occurs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`ExplosionEventData`](/reference/server/api/events/world/explosioneventdata/) |

#### Returns

`void`

***

<a id="fire"></a>

### fire()

```ts
fire(playerId, data): void;
```

Defined in: events.d.ts:278

Triggered when a fire starts anywhere on map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`FireEventData`](/reference/server/api/events/world/fireeventdata/) |

#### Returns

`void`

***

<a id="liftstatechange"></a>

### liftStateChange()

```ts
liftStateChange(playerId, data): void;
```

Defined in: events.d.ts:274

Triggered when a any lift's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`LiftStateChangeEventData`](/reference/server/api/events/world/liftstatechangeeventdata/) |

#### Returns

`void`
