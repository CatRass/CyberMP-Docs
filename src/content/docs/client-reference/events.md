---
editUrl: false
next: false
prev: false
title: "events"
---

## Interfaces

### MpEvents

Defined in: client-types/out/precomputed/events.d.ts:1

Main MP events interface.

#### Methods

##### addCommand()

###### Call Signature

> **addCommand**(`commandName`, `callback`): `void`

Defined in: client-types/out/precomputed/events.d.ts:61

Register a command in the client scope.

###### Parameters

###### commandName

`string`

Command name without "/".

###### callback

(`id`, `args`) => `void`

Callback with id and args.

###### Returns

`void`

###### Call Signature

> **addCommand**(`commandName`, `callback`): `void`

Defined in: server-types/events.d.ts:142

Register a command in the server scope.

###### Parameters

###### commandName

`string`

Command name without "/".

###### callback

(`id`, `args`) => `void`

Callback with id and args.

###### Returns

`void`

###### Call Signature

> **addCommand**(`commandName`, `callback`): `void`

Defined in: server-types/index.d.ts:94

Register a command in the server scope.

###### Parameters

###### commandName

`string`

Command name without "/".

###### callback

(`id`, `args`) => `void`

Callback with id and args.

###### Returns

`void`

##### emit()

###### Call Signature

> **emit**(`eventName`, ...`args`): `void`

Defined in: client-types/out/precomputed/events.d.ts:32

Emit a previously registered custom event.

###### Parameters

###### eventName

`string`

Name of the event.

###### args

...`any`[]

Arguments to pass.

###### Returns

`void`

###### Call Signature

> **emit**(`eventName`, ...`args`): `void`

Defined in: server-types/events.d.ts:127

Emit a shared custom event.

###### Parameters

###### eventName

`string`

The event name to emit.

###### args

...`any`[]

Arguments to pass to the handler.

###### Returns

`void`

###### Call Signature

> **emit**(`eventName`, ...`args`): `void`

Defined in: server-types/index.d.ts:87

Emit a shared custom event.

###### Parameters

###### eventName

`string`

The event name to emit.

###### args

...`any`[]

Arguments to pass to the handler.

###### Returns

`void`

##### emitCef()

> **emitCef**(`eventName`, ...`args`): `void`

Defined in: client-types/out/precomputed/events.d.ts:47

Emit an event to the cef.

###### Parameters

###### eventName

`string`

###### args

...`any`[]

###### Returns

`void`

##### emitClient()

###### Call Signature

> **emitClient**(`eventName`, `playerId`, ...`args`): `void`

Defined in: server-types/events.d.ts:135

Emit a client-side event from the server.

###### Parameters

###### eventName

`string`

Resource name to emit from.

###### playerId

`number`

Target player entity/network ID.

###### args

...`any`[]

Arguments to send with the event.

###### Returns

`void`

###### Call Signature

> **emitClient**(`eventName`, `playerId`, ...`args`): `void`

Defined in: server-types/index.d.ts:66

Emit a client-side event from the server.

###### Parameters

###### eventName

`string`

Resource name to emit from.

###### playerId

`number`

Target player entity/network ID.

###### args

...`any`[]

Arguments to send with the event.

###### Returns

`void`

##### emitServer()

> **emitServer**(`eventName`, ...`args`): `void`

Defined in: client-types/out/precomputed/events.d.ts:42

Emit an event to the server.

###### Parameters

###### eventName

`string`

###### args

...`any`[]

###### Returns

`void`

##### off()

###### Call Signature

> **off**(`eventName`, `callback`): `void`

Defined in: client-types/out/precomputed/events.d.ts:24

UnRegister a custom event listener.

###### Parameters

###### eventName

`string`

Name of the event.

###### callback

(...`args`) => `void`

Callback function.

###### Returns

`void`

###### Call Signature

> **off**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:120

Unregister a custom event listener.

###### Parameters

###### eventName

`string`

Name of the event.

###### callback

(...`args`) => `void`

Callback function.

###### Returns

`void`

###### Call Signature

> **off**(`eventName`, `func`): `void`

Defined in: server-types/index.d.ts:80

Unregister a custom event listener.

###### Parameters

###### eventName

`string`

Name of the event.

###### func

(...`args`) => `void`

Callback function.

###### Returns

`void`

##### on()

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: client-types/out/precomputed/events.d.ts:2

###### Parameters

###### eventName

`"onResourceStarted"`

###### callback

(`resourceName`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: client-types/out/precomputed/events.d.ts:7

###### Parameters

###### eventName

`"onResourceStopped"`

###### callback

(`resourceName`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: client-types/out/precomputed/events.d.ts:17

Register a custom event listener.

###### Parameters

###### eventName

`string`

Name of the event.

###### callback

(...`args`) => `void`

Callback function.

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:54

Listen for a shared (server or client) custom event.

###### Parameters

###### eventName

`string`

The name of the custom event.

###### callback

(...`args`) => `void`

The callback to run when triggered.

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:56

###### Parameters

###### eventName

`"onResourceStarted"`

###### callback

(`resourceName`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:61

###### Parameters

###### eventName

`"onResourcesRefreshed"`

###### callback

() => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:63

###### Parameters

###### eventName

`"onResourceStopped"`

###### callback

(`resourceName`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:68

###### Parameters

###### eventName

`"onServerResourceStarted"`

###### callback

(`resourceName`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:73

###### Parameters

###### eventName

`"onServerResourceStopped"`

###### callback

(`resourceName`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:78

###### Parameters

###### eventName

`"onPlayerConnecting"`

###### callback

(`networkId`, `name`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:83

###### Parameters

###### eventName

`"onPlayerConnected"`

###### callback

(`playerId`, `networkId`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:88

###### Parameters

###### eventName

`"onPlayerDisconnected"`

###### callback

(`playerId`, `reason`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:93

###### Parameters

###### eventName

`"onDamageEvent"`

###### callback

(`playerId`, `data`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:98

###### Parameters

###### eventName

`"onDoorChangeStateEvent"`

###### callback

(`playerId`, `data`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:103

###### Parameters

###### eventName

`"onLiftChangeStateEvent"`

###### callback

(`playerId`, `data`) => `void`

###### Returns

`void`

###### Call Signature

> **on**(`eventName`, `callback`): `void`

Defined in: server-types/index.d.ts:73

Listen for a shared (server or client) custom event.

###### Parameters

###### eventName

`string`

The name of the custom event.

###### callback

(...`args`) => `void`

The callback to run when triggered.

###### Returns

`void`

##### onCef()

> **onCef**(`eventName`, `callback`): `void`

Defined in: client-types/out/precomputed/events.d.ts:54

Register a custom cef event listener.

###### Parameters

###### eventName

`string`

Name of the event.

###### callback

(...`args`) => `void`

Callback function.

###### Returns

`void`

##### onClient()

###### Call Signature

> **onClient**(`eventName`, `callback`): `void`

Defined in: server-types/events.d.ts:113

Listen for a client-side event on the server.

###### Parameters

###### eventName

`string`

The name of the event.

###### callback

(...`args`) => `void`

Function triggered when the event is received.

###### Returns

`void`

###### Call Signature

> **onClient**(`eventName`, `callback`): `void`

Defined in: server-types/index.d.ts:58

Listen for a client-side event on the server.

###### Parameters

###### eventName

`string`

The name of the event.

###### callback

(...`args`) => `void`

Function triggered when the event is received.

###### Returns

`void`

##### onServer()

> **onServer**(`eventName`, `callback`): `void`

Defined in: client-types/out/precomputed/events.d.ts:37

Register a listener for server event on client.

###### Parameters

###### eventName

`string`

###### callback

(...`args`) => `void`

###### Returns

`void`
