---
editUrl: false
next: false
prev: false
title: "WorldEvents"
---

Defined in: events.ts:368

Events related to the world.

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="doorstatechange"></a>

### doorStateChange()

```ts
doorStateChange(playerId, data): boolean | void;
```

Defined in: events.ts:372

Triggered when a any door's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`DoorStateChangeEventData`](/reference/server/api/events/world/doorstatechangeeventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="explosion"></a>

### explosion()

```ts
explosion(playerId, data): boolean | void;
```

Defined in: events.ts:390

Triggered when an explosion occurs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`ExplosionEventData`](/reference/server/api/events/world/explosioneventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="fire"></a>

### fire()

```ts
fire(playerId, data): boolean | void;
```

Defined in: events.ts:386

Triggered when a fire starts anywhere on map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`FireEventData`](/reference/server/api/events/world/fireeventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="liftstatechange"></a>

### liftStateChange()

```ts
liftStateChange(playerId, data): boolean | void;
```

Defined in: events.ts:379

Triggered when a any lift's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`LiftStateChangeEventData`](/reference/server/api/events/world/liftstatechangeeventdata/) |

#### Returns

`boolean` \| `void`
