---
editUrl: false
next: false
prev: false
title: "MpNetwork"
---

Defined in: network.d.ts:4

Provides networking and entity synchronization utilities

## Methods

<a id="getlocalplayerid"></a>

### getLocalPlayerId()

> **getLocalPlayerId**(): `number`

Defined in: network.d.ts:86

Gives access to local player network id without depending on local player's entity or anything to game

#### Returns

`number`

The synchronized network ID assigned to local player.

***

<a id="getobjectgameid"></a>

### getObjectGameId()

> **getObjectGameId**(`networkId`): `number`

Defined in: network.d.ts:59

Resolves a network sync ID into its corresponding local native game engine entity reference handle for a static object.

#### Parameters

##### networkId

`number`

The unique synchronization network ID assigned by the server host.

#### Returns

`number`

The corresponding local native game engine object handle ID.

***

<a id="getobjectid"></a>

### getObjectId()

> **getObjectId**(`gameId`): `number`

Defined in: network.d.ts:66

Translates a native object or entity prop handle into its global shared replication network sync ID.

#### Parameters

##### gameId

`number`

The local native game engine entity instance handle.

#### Returns

`number`

The synchronized network ID assigned to that object.

***

<a id="getpedgameid"></a>

### getPedGameId()

> **getPedGameId**(`networkId`): `number`

Defined in: network.d.ts:52

Resolves a network sync ID into its corresponding local native game engine entity reference handle for a pedestrian.

#### Parameters

##### networkId

`number`

The unique synchronization network ID assigned by the server host.

#### Returns

`number`

The corresponding local native game engine pedestrian handle ID.

***

<a id="getpedid"></a>

### getPedId()

> **getPedId**(`gameId`): `number`

Defined in: network.d.ts:45

Translates a native pedestrian/NPC handle into its global shared replication network sync ID.

#### Parameters

##### gameId

`number`

The local native game engine entity instance handle.

#### Returns

`number`

The synchronized network ID assigned to that pedestrian.

***

<a id="getplayergameid"></a>

### getPlayerGameId()

> **getPlayerGameId**(`networkId`): `number`

Defined in: network.d.ts:73

Resolves a network sync ID into its corresponding local native game engine entity reference handle for a player.

#### Parameters

##### networkId

`number`

The unique synchronization network ID assigned by the server host.

#### Returns

`number`

The corresponding local native game engine player handle ID.

***

<a id="getplayerid"></a>

### getPlayerId()

> **getPlayerId**(`gameId`): `number`

Defined in: network.d.ts:80

Translates a native player character entity handle into its global shared replication network sync ID.

#### Parameters

##### gameId

`number`

The local native game engine entity instance handle.

#### Returns

`number`

The synchronized network ID assigned to that player.

***

<a id="getserveraddress"></a>

### getServerAddress()

> **getServerAddress**(): `string`

Defined in: network.d.ts:9

Returns the endpoint address configuration tracking string of the current server session.

#### Returns

`string`

Endpoint routing connection destination details string (e.g., `"127.0.0.1:4430"`).

***

<a id="getstreamedplayers"></a>

### getStreamedPlayers()

> **getStreamedPlayers**(): `number`[]

Defined in: network.d.ts:24

Gets an array containing all active remote network players currently streaming inside the local user's zone.

#### Returns

`number`[]

An array of native game engine entity IDs.

***

<a id="getstreamedpool"></a>

### getStreamedPool()

> **getStreamedPool**(`objName`): `number`[]

Defined in: network.d.ts:16

Returns an array of game engine handling entities currently within the local player's streaming radius.

#### Parameters

##### objName

`"CVehicle"` \| `"CPed"` \| `"CPickup"` \| `"CObject"`

The engine pool target class filter type to look up.

#### Returns

`number`[]

An array containing the local runtime engine IDs matching the target pool.

***

<a id="getvehiclegameid"></a>

### getVehicleGameId()

> **getVehicleGameId**(`networkId`): `number`

Defined in: network.d.ts:31

Resolves a network sync ID into its corresponding local native game engine entity reference handle for a vehicle.

#### Parameters

##### networkId

`number`

The unique synchronization network ID assigned by the server host.

#### Returns

`number`

The corresponding local native game engine vehicle handle ID.

***

<a id="getvehicleid"></a>

### getVehicleId()

> **getVehicleId**(`gameId`): `number`

Defined in: network.d.ts:38

Translates a native vehicle game handle into its global shared replication network sync ID.

#### Parameters

##### gameId

`number`

The local native game engine entity instance handle.

#### Returns

`number`

The synchronized network ID assigned to that vehicle.
