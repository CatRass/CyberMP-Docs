---
editUrl: false
next: false
prev: false
title: "MpEvents"
---

Defined in: client-types/out/precomputed/events.d.ts:1

Main MP events interface.

## Methods

<a id="addcommand"></a>

### addCommand()

#### Call Signature

```ts
addCommand(commandName, callback): void;
```

Defined in: client-types/out/precomputed/events.d.ts:61

Register a command in the client scope.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | Command name without "/". |
| `callback` | (`id`, `args`) => `void` | Callback with id and args. |

##### Returns

`void`

#### Call Signature

```ts
addCommand(commandName, callback): void;
```

Defined in: server-types/events.d.ts:142

Register a command in the server scope.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | Command name without "/". |
| `callback` | (`id`, `args`) => `void` | Callback with id and args. |

##### Returns

`void`

#### Call Signature

```ts
addCommand(commandName, callback): void;
```

Defined in: server-types/index.d.ts:94

Register a command in the server scope.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | Command name without "/". |
| `callback` | (`id`, `args`) => `void` | Callback with id and args. |

##### Returns

`void`

***

<a id="emit"></a>

### emit()

#### Call Signature

```ts
emit(eventName, ...args): void;
```

Defined in: client-types/out/precomputed/events.d.ts:32

Emit a previously registered custom event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event. |
| ...`args` | `any`[] | Arguments to pass. |

##### Returns

`void`

#### Call Signature

```ts
emit(eventName, ...args): void;
```

Defined in: server-types/events.d.ts:127

Emit a shared custom event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The event name to emit. |
| ...`args` | `any`[] | Arguments to pass to the handler. |

##### Returns

`void`

#### Call Signature

```ts
emit(eventName, ...args): void;
```

Defined in: server-types/index.d.ts:87

Emit a shared custom event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The event name to emit. |
| ...`args` | `any`[] | Arguments to pass to the handler. |

##### Returns

`void`

***

<a id="emitcef"></a>

### emitCef()

```ts
emitCef(eventName, ...args): void;
```

Defined in: client-types/out/precomputed/events.d.ts:47

Emit an event to the cef.

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

#### Call Signature

```ts
emitClient(
   eventName, 
   playerId, ...
   args): void;
```

Defined in: server-types/events.d.ts:135

Emit a client-side event from the server.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Resource name to emit from. |
| `playerId` | `number` | Target player entity/network ID. |
| ...`args` | `any`[] | Arguments to send with the event. |

##### Returns

`void`

#### Call Signature

```ts
emitClient(
   eventName, 
   playerId, ...
   args): void;
```

Defined in: server-types/index.d.ts:66

Emit a client-side event from the server.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Resource name to emit from. |
| `playerId` | `number` | Target player entity/network ID. |
| ...`args` | `any`[] | Arguments to send with the event. |

##### Returns

`void`

***

<a id="emitserver"></a>

### emitServer()

```ts
emitServer(eventName, ...args): void;
```

Defined in: client-types/out/precomputed/events.d.ts:42

Emit an event to the server.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

***

<a id="off"></a>

### off()

#### Call Signature

```ts
off(eventName, callback): void;
```

Defined in: client-types/out/precomputed/events.d.ts:24

UnRegister a custom event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event. |
| `callback` | (...`args`) => `void` | Callback function. |

##### Returns

`void`

#### Call Signature

```ts
off(eventName, callback): void;
```

Defined in: server-types/events.d.ts:120

Unregister a custom event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event. |
| `callback` | (...`args`) => `void` | Callback function. |

##### Returns

`void`

#### Call Signature

```ts
off(eventName, func): void;
```

Defined in: server-types/index.d.ts:80

Unregister a custom event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event. |
| `func` | (...`args`) => `void` | Callback function. |

##### Returns

`void`

***

<a id="on"></a>

### on()

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: client-types/out/precomputed/events.d.ts:2

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onResourceStarted"` |
| `callback` | (`resourceName`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: client-types/out/precomputed/events.d.ts:7

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onResourceStopped"` |
| `callback` | (`resourceName`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: client-types/out/precomputed/events.d.ts:17

Register a custom event listener.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event. |
| `callback` | (...`args`) => `void` | Callback function. |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:54

Listen for a shared (server or client) custom event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the custom event. |
| `callback` | (...`args`) => `void` | The callback to run when triggered. |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:56

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onResourceStarted"` |
| `callback` | (`resourceName`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:61

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onResourcesRefreshed"` |
| `callback` | () => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:63

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onResourceStopped"` |
| `callback` | (`resourceName`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:68

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onServerResourceStarted"` |
| `callback` | (`resourceName`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:73

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onServerResourceStopped"` |
| `callback` | (`resourceName`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:78

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onPlayerConnecting"` |
| `callback` | (`networkId`, `name`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:83

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onPlayerConnected"` |
| `callback` | (`playerId`, `networkId`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:88

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onPlayerDisconnected"` |
| `callback` | (`playerId`, `reason`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:93

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onDamageEvent"` |
| `callback` | (`playerId`, `data`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:98

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onDoorChangeStateEvent"` |
| `callback` | (`playerId`, `data`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/events.d.ts:103

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `"onLiftChangeStateEvent"` |
| `callback` | (`playerId`, `data`) => `void` |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: server-types/index.d.ts:73

Listen for a shared (server or client) custom event.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the custom event. |
| `callback` | (...`args`) => `void` | The callback to run when triggered. |

##### Returns

`void`

***

<a id="oncef"></a>

### onCef()

```ts
onCef(eventName, callback): void;
```

Defined in: client-types/out/precomputed/events.d.ts:54

Register a custom cef event listener.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | Name of the event. |
| `callback` | (...`args`) => `void` | Callback function. |

#### Returns

`void`

***

<a id="onclient"></a>

### onClient()

#### Call Signature

```ts
onClient(eventName, callback): void;
```

Defined in: server-types/events.d.ts:113

Listen for a client-side event on the server.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (...`args`) => `void` | Function triggered when the event is received. |

##### Returns

`void`

#### Call Signature

```ts
onClient(eventName, callback): void;
```

Defined in: server-types/index.d.ts:58

Listen for a client-side event on the server.

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `eventName` | `string` | The name of the event. |
| `callback` | (...`args`) => `void` | Function triggered when the event is received. |

##### Returns

`void`

***

<a id="onserver"></a>

### onServer()

```ts
onServer(eventName, callback): void;
```

Defined in: client-types/out/precomputed/events.d.ts:37

Register a listener for server event on client.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (...`args`) => `void` |

#### Returns

`void`
