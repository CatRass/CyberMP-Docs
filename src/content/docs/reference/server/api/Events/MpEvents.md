---
editUrl: false
next: false
prev: false
title: "MpEvents"
---

Defined in: events.ts:555

Event system for subscribing, emitting, and handling multiplayer events.

Provides both strongly typed and generic event APIs.

## Methods

<a id="emit"></a>

### emit()

```ts
emit(eventName, ...args): void;
```

Defined in: events.ts:601

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

Defined in: events.ts:608

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

Defined in: events.ts:586

Unregister an event listener.

Works for both standard and [MpEvents.onClient](/reference/server/api/events/mpevents/#onclient) events.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `E` *extends* keyof [`MpEventsMap`](/reference/server/api/events/mpeventsmap/) | Event key from MpEventsMap |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `E` |
| `callback` | [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)\[`E`\] |

##### Returns

`void`

#### Call Signature

```ts
off(eventName, callback): void;
```

Defined in: events.ts:596

Unregister an event listener.

Works for both standard and [MpEvents.onClient](/reference/server/api/events/mpevents/#onclient) events.

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

Defined in: events.ts:561

Listen for a platform or custom event.

##### Type Parameters

| Type Parameter | Description |
| ------ | ------ |
| `E` *extends* keyof [`MpEventsMap`](/reference/server/api/events/mpeventsmap/) | Event key from MpEventsMap |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `E` |
| `callback` | [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)\[`E`\] |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: events.ts:566

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

Defined in: events.ts:574

Listen for a client-side event on the server.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Event name |
| `callback` | (`player`, ...`args`) => `void` | Function triggered with player context |

#### Returns

`void`
