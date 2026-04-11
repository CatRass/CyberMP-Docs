---
editUrl: false
next: false
prev: false
title: "MpEvents"
---

Defined in: events.d.ts:420

Event system for subscribing, emitting, and handling multiplayer events.

Provides both strongly typed and generic event APIs.

## Methods

<a id="emit"></a>

### emit()

```ts
emit(eventName, ...args): void;
```

Defined in: events.d.ts:464

Emit a shared custom event.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

***

<a id="emitclient"></a>

### emitClient()

```ts
emitClient(
   player, 
   eventName, ...
   args): void;
```

Defined in: events.d.ts:471

Emit a client-side event from the server.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `player` | `number` \| [`MpPlayer`](/reference/server/api/entities/mpplayer/) | Target player or player ID |
| `eventName` | `string` | - |
| ...`args` | `any`[] | - |

#### Returns

`void`

***

<a id="off"></a>

### off()

#### Call Signature

```ts
off<E>(eventName, callback): void;
```

Defined in: events.d.ts:451

Unregister an event listener.

Works for both standard and [MpEvents.onClient](/reference/server/api/events/mpevents/#onclient) events.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `E` *extends* keyof `MpEventsMap` | Event key from MpEventsMap |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `E` |
| `callback` | `MpEventsMap`\[`E`\] |

##### Returns

`void`

#### Call Signature

```ts
off(eventName, callback): void;
```

Defined in: events.d.ts:459

Unregister a generic event listener.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (...`args`) => `void` |

##### Returns

`void`

***

<a id="on"></a>

### on()

#### Call Signature

```ts
on<E>(eventName, callback): void;
```

Defined in: events.d.ts:426

Listen for a platform or custom event.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `E` *extends* keyof `MpEventsMap` | Event key from MpEventsMap |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `E` |
| `callback` | `MpEventsMap`\[`E`\] |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: events.d.ts:431

Listen for a generic event.

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (...`args`) => `void` |

##### Returns

`void`

***

<a id="onclient"></a>

### onClient()

```ts
onClient(eventName, callback): void;
```

Defined in: events.d.ts:439

Listen for a client-side event on the server.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Event name |
| `callback` | (`player`, ...`args`) => `void` | Function triggered with player context |

#### Returns

`void`
