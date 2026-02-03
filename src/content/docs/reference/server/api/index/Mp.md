---
editUrl: false
next: false
prev: false
title: "Mp"
---

Defined in: server-types/index.d.ts:117

Main MP API interface.

## Extends

- `MpGlobalPrecomputed`

## Properties

<a id="events"></a>

### events

```ts
events: MpEvents;
```

Defined in: server-types/index.d.ts:118

***

<a id="game"></a>

### game

```ts
game: MpGame;
```

Defined in: client-types/out/index.d.ts:16141

***

<a id="meta"></a>

### meta

```ts
meta: MpMeta;
```

Defined in: server-types/index.d.ts:119

***

<a id="voicechat"></a>

### voiceChat

```ts
voiceChat: MpVoiceChat;
```

Defined in: server-types/index.d.ts:120

## Methods

<a id="addvar"></a>

### addVar()

```ts
addVar(varName, value): void;
```

Defined in: server-types/index.d.ts:141

Adds a server console variable.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `varName` | `string` | Variable name. |
| `value` | `any` | Variable value. |

#### Returns

`void`

***

<a id="addvarserver"></a>

### addVarServer()

```ts
addVarServer(varName, value): void;
```

Defined in: server-types/index.d.ts:148

Adds a server-only console variable.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `varName` | `string` | Variable name. |
| `value` | `any` | Variable value. |

#### Returns

`void`

***

<a id="addvarshared"></a>

### addVarShared()

```ts
addVarShared(varName, value): void;
```

Defined in: server-types/index.d.ts:155

Adds a shared (client+server) console variable.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `varName` | `string` | Variable name. |
| `value` | `any` | Variable value. |

#### Returns

`void`

***

<a id="changecefviewurl"></a>

### changeCefViewUrl()

```ts
changeCefViewUrl(newUrl): void;
```

Defined in: client-types/out/precomputed/global.d.ts:133

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `newUrl` | `string` |

#### Returns

`void`

***

<a id="cleartick"></a>

### clearTick()

```ts
clearTick(tickId): void;
```

Defined in: client-types/out/precomputed/global.d.ts:137

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tickId` | `number` |

#### Returns

`void`

***

<a id="createobject"></a>

### createObject()

```ts
createObject(
   modelHash, 
   x, 
   y, 
   z, 
   yaw, 
   dynamic): number;
```

Defined in: server-types/index.d.ts:467

Spawns an object in the game world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modelHash` | `number` | Object model hash. |
| `x` | `number` | X position. |
| `y` | `number` | Y position. |
| `z` | `number` | Z position. |
| `yaw` | `number` | Yaw rotation. |
| `dynamic` | `boolean` | Whether the object is dynamic. |

#### Returns

`number`

Entity ID of the object.

***

<a id="createped"></a>

### createPed()

```ts
createPed(
   hash, 
   x, 
   y, 
   z, 
   health, 
   yaw): number;
```

Defined in: server-types/index.d.ts:486

Spawns a ped in the game world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | `number` | Ped model hash. |
| `x` | `number` | X coordinate. |
| `y` | `number` | Y coordinate. |
| `z` | `number` | Z coordinate. |
| `health` | `number` | Ped health. |
| `yaw` | `number` | Orientation yaw. |

#### Returns

`number`

Entity ID of the ped.

***

<a id="createpickup"></a>

### createPickup()

```ts
createPickup(
   hash, 
   type, 
   x, 
   y, 
   z, 
   yaw): number;
```

Defined in: server-types/index.d.ts:427

Spawns a pickup item in the game world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `hash` | `number` | Pickup model hash. |
| `type` | [`PickupType`](/reference/server/api/index/pickuptype/) | Pickup type. |
| `x` | `number` | X position. |
| `y` | `number` | Y position. |
| `z` | `number` | Z position. |
| `yaw` | `number` | Yaw rotation. |

#### Returns

`number`

Entity ID of the pickup.

***

<a id="createvehicle"></a>

### createVehicle()

```ts
createVehicle(
   modelHash, 
   appearanceHash, 
   x, 
   y, 
   z, 
   health, 
   yaw): number;
```

Defined in: server-types/index.d.ts:447

Spawns a vehicle in the world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `modelHash` | `number` \| `bigint` | Vehicle model hash. |
| `appearanceHash` | `number` \| `bigint` | Vehicle tuning hash. |
| `x` | `number` | X position. |
| `y` | `number` | Y position. |
| `z` | `number` | Z position. |
| `health` | `number` | Vehicle health. |
| `yaw` | `number` | Yaw rotation. |

#### Returns

`number`

Entity ID of the created vehicle.

***

<a id="deleteentity"></a>

### deleteEntity()

```ts
deleteEntity(entity): void;
```

Defined in: server-types/index.d.ts:307

Deletes an entity from the world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity to delete. |

#### Returns

`void`

***

<a id="despawnlocalobject"></a>

### despawnLocalObject()

```ts
despawnLocalObject(hash): void;
```

Defined in: client-types/out/precomputed/global.d.ts:92

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`void`

***

<a id="despawnlocalped"></a>

### despawnLocalPed()

```ts
despawnLocalPed(hash): void;
```

Defined in: client-types/out/precomputed/global.d.ts:88

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`void`

***

<a id="despawnlocalvehicle"></a>

### despawnLocalVehicle()

```ts
despawnLocalVehicle(hash): void;
```

Defined in: client-types/out/precomputed/global.d.ts:90

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`void`

***

<a id="doesentityexist"></a>

### doesEntityExist()

```ts
doesEntityExist(entity): boolean;
```

Defined in: server-types/index.d.ts:162

Checks if an entity exists in the game world.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | Entity ID. |

#### Returns

`boolean`

True if entity exists, otherwise false.

***

<a id="executecommand"></a>

### ~~executeCommand()~~

```ts
executeCommand(commandName): void;
```

Defined in: server-types/index.d.ts:556

Executes a registered server command.

:::caution[Deprecated]
Use proper command APIs instead.
:::

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | Command string. |

#### Returns

`void`

***

<a id="generatebcrypthash"></a>

### generateBcryptHash()

```ts
generateBcryptHash(password): string;
```

Defined in: server-types/index.d.ts:508

Generates a bcrypt hash from a password.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `password` | `string` | Plain password string. |

#### Returns

`string`

Bcrypt hash.

***

<a id="getallobject"></a>

### getAllObject()

```ts
getAllObject(): number[];
```

Defined in: server-types/index.d.ts:265

Gets all server-side objects.

#### Returns

`number`[]

Array of object entity IDs.

***

<a id="getallpeds"></a>

### getAllPeds()

```ts
getAllPeds(): number[];
```

Defined in: server-types/index.d.ts:271

Gets all server-side peds.

#### Returns

`number`[]

Array of ped entity IDs.

***

<a id="getallvehicles"></a>

### getAllVehicles()

```ts
getAllVehicles(): number[];
```

Defined in: server-types/index.d.ts:259

Gets all vehicles created by the server.

#### Returns

`number`[]

Array of vehicle entity IDs.

***

<a id="getcurrentresourcename"></a>

### getCurrentResourceName()

```ts
getCurrentResourceName(): string;
```

Defined in: server-types/index.d.ts:543

Gets the current resource's name.

#### Returns

`string`

Resource name.

***

<a id="getcurrentserverendpoint"></a>

### getCurrentServerEndpoint()

```ts
getCurrentServerEndpoint(): string;
```

Defined in: client-types/out/precomputed/global.d.ts:107

Returns current server IP:PORT string.

#### Returns

`string`

***

<a id="getdiscordcodeauthorization"></a>

### getDiscordCodeAuthorization()

```ts
getDiscordCodeAuthorization(discordAppId, scopes): string;
```

Defined in: client-types/out/precomputed/global.d.ts:102

Get Discord auth code (preferred).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordAppId` | `string` |
| `scopes` | `string` |

#### Returns

`string`

***

<a id="getdiscordoauth2token"></a>

### getDiscordOAuth2Token()

```ts
getDiscordOAuth2Token(discordAppId): string;
```

Defined in: client-types/out/precomputed/global.d.ts:97

Get Discord token via game SDK (unstable).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `discordAppId` | `string` |

#### Returns

`string`

***

<a id="getentityangularvelocity"></a>

### getEntityAngularVelocity()

```ts
getEntityAngularVelocity(entity): Vector3;
```

Defined in: server-types/index.d.ts:211

Gets the angular velocity of a vehicle.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The vehicle entity. |

#### Returns

[`Vector3`](/reference/server/api/index/vector3/)

[X, Y, Z] angular velocity.

***

<a id="getentitydimension"></a>

### getEntityDimension()

```ts
getEntityDimension(entity): number;
```

Defined in: server-types/index.d.ts:342

Gets the dimension of an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | Entity ID. |

#### Returns

`number`

The dimension number.

***

<a id="getentityhealth"></a>

### getEntityHealth()

```ts
getEntityHealth(entity): number;
```

Defined in: server-types/index.d.ts:253

Gets an entity's health (player, ped, or object).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

`number`

Health as a number.

***

<a id="getentitymodel"></a>

### getEntityModel()

```ts
getEntityModel(entity): number;
```

Defined in: server-types/index.d.ts:232

Gets the model hash of an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

`number`

Model hash as number.

***

<a id="getentitypos"></a>

### getEntityPos()

```ts
getEntityPos(entity): Vector3;
```

Defined in: server-types/index.d.ts:197

Gets the position of an entity in 3D space.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

[`Vector3`](/reference/server/api/index/vector3/)

[X, Y, Z] coordinates.

***

<a id="getentityrotation"></a>

### getEntityRotation()

```ts
getEntityRotation(entity): Vector3;
```

Defined in: server-types/index.d.ts:218

Gets the rotation of an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

[`Vector3`](/reference/server/api/index/vector3/)

[Pitch, Roll, Yaw] rotation.

***

<a id="getentitytype"></a>

### getEntityType()

```ts
getEntityType(entity): EntityType;
```

Defined in: server-types/index.d.ts:239

Gets the type of an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

[`EntityType`](/reference/server/api/index/entitytype/)

The entity type (Player, Vehicle, or Object).

***

<a id="getentityvelocity"></a>

### getEntityVelocity()

```ts
getEntityVelocity(entity): Vector3;
```

Defined in: server-types/index.d.ts:204

Gets the linear velocity of an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

[`Vector3`](/reference/server/api/index/vector3/)

[X, Y, Z] velocity components.

***

<a id="getentityyaw"></a>

### getEntityYaw()

```ts
getEntityYaw(entity): number;
```

Defined in: server-types/index.d.ts:225

Gets the yaw angle of an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

`number`

Yaw in degrees.

***

<a id="getgametimer"></a>

### getGameTimer()

```ts
getGameTimer(): number;
```

Defined in: server-types/index.d.ts:583

Gets the current process uptime in milliseconds.

#### Returns

`number`

Uptime in milliseconds.

***

<a id="getlastpedinvehicleseat"></a>

### getLastPedInVehicleSeat()

```ts
getLastPedInVehicleSeat(vehicle, seatId): number;
```

Defined in: server-types/index.d.ts:301

Gets the last player that was in the given seat.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | Vehicle entity ID. |
| `seatId` | [`VehicleSeat`](/reference/server/api/index/vehicleseat/) | Seat index. |

#### Returns

`number`

Entity ID or 0 if none.

***

<a id="getlaunchersettings"></a>

### getLauncherSettings()

```ts
getLauncherSettings(): any;
```

Defined in: client-types/out/precomputed/global.d.ts:131

#### Returns

`any`

***

<a id="getlaunchersettingsjson"></a>

### getLauncherSettingsJSON()

```ts
getLauncherSettingsJSON(): string;
```

Defined in: client-types/out/precomputed/global.d.ts:129

#### Returns

`string`

***

<a id="getnumplayeridentifiers"></a>

### getNumPlayerIdentifiers()

```ts
getNumPlayerIdentifiers(netID): number;
```

Defined in: server-types/index.d.ts:363

Gets the number of identifiers available for a player.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |

#### Returns

`number`

Number of identifiers.

***

<a id="getnumresourcemetadata"></a>

### getNumResourceMetadata()

```ts
getNumResourceMetadata(resourceName, keyString): number;
```

Defined in: server-types/index.d.ts:537

Gets the number of metadata values for a key.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Resource name. |
| `keyString` | `string` | Metadata key name. |

#### Returns

`number`

Number of metadata entries.

***

<a id="getobjectgameidbynetworkid"></a>

### getObjectGameIdByNetworkId()

```ts
getObjectGameIdByNetworkId(id): number;
```

Defined in: client-types/out/precomputed/global.d.ts:32

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`number`

***

<a id="getobjectnetworkidbygameid"></a>

### getObjectNetworkIdByGameId()

```ts
getObjectNetworkIdByGameId(hash): number;
```

Defined in: client-types/out/precomputed/global.d.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`number`

***

<a id="getpedgameidbynetworkid"></a>

### getPedGameIdByNetworkId()

```ts
getPedGameIdByNetworkId(hash): number;
```

Defined in: client-types/out/precomputed/global.d.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`number`

***

<a id="getpedinvehicleseat"></a>

### getPedInVehicleSeat()

```ts
getPedInVehicleSeat(vehicle, seatId): number;
```

Defined in: server-types/index.d.ts:293

Gets the player in a specific vehicle seat.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `vehicle` | `number` | Vehicle entity ID. |
| `seatId` | [`VehicleSeat`](/reference/server/api/index/vehicleseat/) | Seat index. |

#### Returns

`number`

Entity ID or 0 if empty.

***

<a id="getpednetworkidbygameid"></a>

### getPedNetworkIdByGameId()

```ts
getPedNetworkIdByGameId(hash): number;
```

Defined in: client-types/out/precomputed/global.d.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`number`

***

<a id="getplayerdimension"></a>

### getPlayerDimension()

```ts
getPlayerDimension(netID): number;
```

Defined in: server-types/index.d.ts:328

Gets the dimension of a player.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |

#### Returns

`number`

The dimension number.

***

<a id="getplayerendpoint"></a>

### getPlayerEndpoint()

```ts
getPlayerEndpoint(netID): string;
```

Defined in: server-types/index.d.ts:386

Gets the IP address of a player.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |

#### Returns

`string`

IP address.

***

<a id="getplayergameidbynetworkid"></a>

### getPlayerGameIdByNetworkId()

```ts
getPlayerGameIdByNetworkId(id): number;
```

Defined in: client-types/out/precomputed/global.d.ts:30

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`number`

***

<a id="getplayeridentifier"></a>

### getPlayerIdentifier()

```ts
getPlayerIdentifier(netID, index): string;
```

Defined in: server-types/index.d.ts:371

Gets a specific identifier by index.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |
| `index` | `number` | Index of the identifier. |

#### Returns

`string`

Identifier string.

***

<a id="getplayeridentifierbytype"></a>

### getPlayerIdentifierByType()

```ts
getPlayerIdentifierByType(netID, type): string;
```

Defined in: server-types/index.d.ts:379

Gets a specific identifier by type.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |
| `type` | `string` | Identifier type (e.g., "ip"). |

#### Returns

`string`

Identifier string.

***

<a id="getplayername"></a>

### getPlayerName()

```ts
getPlayerName(netID): string;
```

Defined in: server-types/index.d.ts:356

Gets the name of a player.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |

#### Returns

`string`

Player name.

***

<a id="getplayernetworkidbygameid"></a>

### getPlayerNetworkIdByGameId()

```ts
getPlayerNetworkIdByGameId(hash): number;
```

Defined in: client-types/out/precomputed/global.d.ts:36

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`number`

***

<a id="getplayerped"></a>

### getPlayerPed()

```ts
getPlayerPed(netID): number;
```

Defined in: server-types/index.d.ts:415

Gets the entity ID of a player's ped.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |

#### Returns

`number`

Entity ID of the player's ped.

***

<a id="getplayerping"></a>

### getPlayerPing()

```ts
getPlayerPing(netID): number;
```

Defined in: server-types/index.d.ts:393

Gets the ping of a player.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |

#### Returns

`number`

Ping in ms.

***

<a id="getplayers"></a>

### getPlayers()

```ts
getPlayers(): number[];
```

Defined in: server-types/index.d.ts:277

Gets all connected players.

#### Returns

`number`[]

Array of player entity IDs.

***

<a id="getplayerserverid"></a>

### getPlayerServerId()

```ts
getPlayerServerId(playerHash): number;
```

Defined in: client-types/out/precomputed/global.d.ts:112

Get server ID from player hash.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerHash` | `number` |

#### Returns

`number`

***

<a id="getresourcemetadata"></a>

### getResourceMetadata()

```ts
getResourceMetadata(
   resourceName, 
   keyName, 
   index): string;
```

Defined in: server-types/index.d.ts:525

Gets metadata from a resource manifest.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Resource name. |
| `keyName` | `string` | Metadata key. |
| `index` | `number` | Index (if multiple values exist). |

#### Returns

`string`

Metadata string.

***

<a id="getresourcestate"></a>

### getResourceState()

```ts
getResourceState(resourceName): string;
```

Defined in: server-types/index.d.ts:563

Gets the current state of a resource.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | The resource to check. |

#### Returns

`string`

Resource state as string.

***

<a id="getstreamedplayers"></a>

### getStreamedPlayers()

```ts
getStreamedPlayers(): number[];
```

Defined in: client-types/out/precomputed/global.d.ts:16

#### Returns

`number`[]

***

<a id="getstreamedpool"></a>

### getStreamedPool()

```ts
getStreamedPool(objName): number[];
```

Defined in: client-types/out/precomputed/global.d.ts:13

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `objName` | `"CVehicle"` \| `"CPed"` \| `"CPickups"` \| `"CObject"` |

#### Returns

`number`[]

***

<a id="getvar"></a>

### getVar()

```ts
getVar(varName): string;
```

Defined in: server-types/index.d.ts:570

Gets a console variable's value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `varName` | `string` | Variable name. |

#### Returns

`string`

Value as string.

***

<a id="getvarint"></a>

### getVarInt()

```ts
getVarInt(varName): number;
```

Defined in: server-types/index.d.ts:577

Gets a console variable's integer value.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `varName` | `string` | Variable name. |

#### Returns

`number`

Value as integer.

***

<a id="getvehiclegameidbynetworkid"></a>

### getVehicleGameIdByNetworkId()

```ts
getVehicleGameIdByNetworkId(id): number;
```

Defined in: client-types/out/precomputed/global.d.ts:28

Mapping between network and game IDs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`number`

***

<a id="getvehiclehealth"></a>

### getVehicleHealth()

```ts
getVehicleHealth(entity): number;
```

Defined in: server-types/index.d.ts:246

Gets a vehicle's current health.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | Vehicle entity. |

#### Returns

`number`

Health as a number.

***

<a id="getvehiclenetworkidbygameid"></a>

### getVehicleNetworkIdByGameId()

```ts
getVehicleNetworkIdByGameId(hash): number;
```

Defined in: client-types/out/precomputed/global.d.ts:34

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`number`

***

<a id="getvehiclepedisin"></a>

### getVehiclePedIsIn()

```ts
getVehiclePedIsIn(player, lastVehicle): number;
```

Defined in: server-types/index.d.ts:285

Gets the vehicle a player is in.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `player` | `number` | Player entity ID. |
| `lastVehicle` | `boolean` | If true, returns the last vehicle, else the current vehicle. |

#### Returns

`number`

Vehicle entity ID.

***

<a id="isinceffocusstate"></a>

### isInCefFocusState()

```ts
isInCefFocusState(): boolean;
```

Defined in: client-types/out/precomputed/global.d.ts:23

#### Returns

`boolean`

***

<a id="isplayerhaveright"></a>

### isPlayerHaveRight()

```ts
isPlayerHaveRight(netID, right): boolean;
```

Defined in: server-types/index.d.ts:408

Checks if a player has a specific permission.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |
| `right` | `string` | Right/permission string. |

#### Returns

`boolean`

True if player has the right, false otherwise.

***

<a id="isserver"></a>

### isServer()

```ts
isServer(): boolean;
```

Defined in: server-types/index.d.ts:549

Checks if the code is running on the server.

#### Returns

`boolean`

True if running on server, false otherwise.

***

<a id="kickplayer"></a>

### kickPlayer()

```ts
kickPlayer(netID, reason): void;
```

Defined in: server-types/index.d.ts:400

Kicks a player from the server.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |
| `reason` | `string` | Reason for the kick. |

#### Returns

`void`

***

<a id="loadresourcefile"></a>

### loadResourceFile()

```ts
loadResourceFile(resourceName, pathToResource): string;
```

Defined in: server-types/index.d.ts:516

Reads a file inside a resource and returns its contents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Name of the resource. |
| `pathToResource` | `string` | Path to the file. |

#### Returns

`string`

File content as string.

***

<a id="networkgetentityfromnetworkid"></a>

### networkGetEntityFromNetworkId()

```ts
networkGetEntityFromNetworkId(netID): number;
```

Defined in: server-types/index.d.ts:176

Gets an entity by its network ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Network ID. |

#### Returns

`number`

Entity ID associated with the given network ID.

***

<a id="networkgetentityowner"></a>

### networkGetEntityOwner()

```ts
networkGetEntityOwner(entity): number;
```

Defined in: server-types/index.d.ts:183

Gets the current owner synchronizing the entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

`number`

The owner's entity ID.

***

<a id="networkgetfirstentityowner"></a>

### networkGetFirstEntityOwner()

```ts
networkGetFirstEntityOwner(entity): number;
```

Defined in: server-types/index.d.ts:190

Gets the first owner who synced this entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity. |

#### Returns

`number`

The first owner's entity ID.

***

<a id="networkgetnetworkidfromentity"></a>

### networkGetNetworkIdFromEntity()

```ts
networkGetNetworkIdFromEntity(entity): number;
```

Defined in: server-types/index.d.ts:169

Converts an entity to its associated network ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | The entity to convert. |

#### Returns

`number`

The network ID of the entity.

***

<a id="restartresource"></a>

### restartResource()

```ts
restartResource(resourceName): void;
```

Defined in: server-types/index.d.ts:122

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

***

<a id="setcefinfocusstate"></a>

### setCefInFocusState()

```ts
setCefInFocusState(justFocus, withMouse): void;
```

Defined in: client-types/out/precomputed/global.d.ts:21

Focus or unfocus CEF view.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `justFocus` | `boolean` |
| `withMouse` | `boolean` |

#### Returns

`void`

***

<a id="setentitydimension"></a>

### setEntityDimension()

```ts
setEntityDimension(entity, dimension): void;
```

Defined in: server-types/index.d.ts:349

Sets the dimension of an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | Entity ID. |
| `dimension` | `number` | Target dimension. |

#### Returns

`void`

***

<a id="setentitystreamingradius"></a>

### setEntityStreamingRadius()

```ts
setEntityStreamingRadius(entity, radius): void;
```

Defined in: server-types/index.d.ts:314

Sets the streaming radius for an entity.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `entity` | `number` | Entity ID. |
| `radius` | `number` | Radius in meters. |

#### Returns

`void`

***

<a id="setplayerdimension"></a>

### setPlayerDimension()

```ts
setPlayerDimension(netID, dimension): void;
```

Defined in: server-types/index.d.ts:335

Sets the dimension of a player.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |
| `dimension` | `number` | Target dimension. |

#### Returns

`void`

***

<a id="setplayerstreamingradius"></a>

### setPlayerStreamingRadius()

```ts
setPlayerStreamingRadius(netID, radius): void;
```

Defined in: server-types/index.d.ts:321

Sets the streaming radius for a player.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `netID` | `number` | Player's network ID. |
| `radius` | `number` | Radius in meters. |

#### Returns

`void`

***

<a id="setspawndatalocalplayer"></a>

### setSpawnDataLocalPlayer()

```ts
setSpawnDataLocalPlayer(
   x, 
   y, 
   z, 
   yaw): void;
```

Defined in: client-types/out/precomputed/global.d.ts:47

Local player spawning API.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `yaw` | `number` |

#### Returns

`void`

***

<a id="settick"></a>

### setTick()

```ts
setTick(cb): number;
```

Defined in: client-types/out/precomputed/global.d.ts:135

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cb` | () => `void` \| `Promise`\<`void`\> |

#### Returns

`number`

***

<a id="spawnlocalobject"></a>

### spawnLocalObject()

```ts
spawnLocalObject(
   skinHash, 
   appHash, 
   x, 
   y, 
   z, 
   roll, 
   pitch, 
   yaw, 
   streaming): number;
```

Defined in: client-types/out/precomputed/global.d.ts:76

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `skinHash` | `number` \| `bigint` |
| `appHash` | `number` \| `bigint` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `roll` | `number` |
| `pitch` | `number` |
| `yaw` | `number` |
| `streaming` | `boolean` |

#### Returns

`number`

***

<a id="spawnlocalped"></a>

### spawnLocalPed()

```ts
spawnLocalPed(
   skinHash, 
   appHash, 
   x, 
   y, 
   z, 
   yaw, 
   streaming): number;
```

Defined in: client-types/out/precomputed/global.d.ts:54

Spawn local-only entities (not synced).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `skinHash` | `number` |
| `appHash` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `yaw` | `number` |
| `streaming` | `boolean` |

#### Returns

`number`

***

<a id="spawnlocalplayer"></a>

### spawnLocalPlayer()

```ts
spawnLocalPlayer(): boolean;
```

Defined in: client-types/out/precomputed/global.d.ts:49

#### Returns

`boolean`

***

<a id="spawnlocalvehicle"></a>

### spawnLocalVehicle()

```ts
spawnLocalVehicle(
   skinHash, 
   appHash, 
   x, 
   y, 
   z, 
   roll, 
   pitch, 
   yaw, 
   streaming): number;
```

Defined in: client-types/out/precomputed/global.d.ts:64

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `skinHash` | `number` |
| `appHash` | `number` |
| `x` | `number` |
| `y` | `number` |
| `z` | `number` |
| `roll` | `number` |
| `pitch` | `number` |
| `yaw` | `number` |
| `streaming` | `boolean` |

#### Returns

`number`

***

<a id="startresource"></a>

### startResource()

```ts
startResource(resourceName): void;
```

Defined in: server-types/index.d.ts:128

Starts a specific resource by name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Name of the resource to start. |

#### Returns

`void`

***

<a id="stopresource"></a>

### stopResource()

```ts
stopResource(resourceName): void;
```

Defined in: server-types/index.d.ts:134

Stops a specific resource by name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Name of the resource to stop. |

#### Returns

`void`

***

<a id="verifybcrypthash"></a>

### verifyBcryptHash()

```ts
verifyBcryptHash(password, hash): boolean;
```

Defined in: server-types/index.d.ts:501

Verifies if a plain password matches a bcrypt hash.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `password` | `string` | Plain password string. |
| `hash` | `string` | Hashed bcrypt string. |

#### Returns

`boolean`

True if match, false otherwise.
