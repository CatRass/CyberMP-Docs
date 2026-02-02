---
editUrl: false
next: false
prev: false
title: "index"
---

## Enumerations

### EntityType

Defined in: server-types/index.d.ts:14

Entity types.

#### Enumeration Members

##### Object

> **Object**: `3`

Defined in: server-types/index.d.ts:17

##### Player

> **Player**: `1`

Defined in: server-types/index.d.ts:15

##### Vehicle

> **Vehicle**: `2`

Defined in: server-types/index.d.ts:16

***

### PickupType

Defined in: server-types/index.d.ts:23

Pickup types.

#### Enumeration Members

##### Clothes

> **Clothes**: `1`

Defined in: server-types/index.d.ts:24

##### Other

> **Other**: `3`

Defined in: server-types/index.d.ts:26

##### Weapon

> **Weapon**: `2`

Defined in: server-types/index.d.ts:25

***

### VehicleSeat

Defined in: server-types/index.d.ts:32

Vehicle seat indexes.

#### Enumeration Members

##### Driver

> **Driver**: `0`

Defined in: server-types/index.d.ts:33

##### Passenger

> **Passenger**: `1`

Defined in: server-types/index.d.ts:34

##### RearLeft

> **RearLeft**: `2`

Defined in: server-types/index.d.ts:35

##### RearRight

> **RearRight**: `3`

Defined in: server-types/index.d.ts:36

## Interfaces

### Mp

Defined in: server-types/index.d.ts:117

Main MP API interface.

#### Extends

- `MpGlobalPrecomputed`

#### Properties

##### events

> **events**: [`MpEvents`](/server-reference/index/#mpevents-1)

Defined in: server-types/index.d.ts:118

##### game

> **game**: `MpGame`

Defined in: client-types/out/index.d.ts:16141

##### meta

> **meta**: [`MpMeta`](/server-reference/index/#mpmeta-1)

Defined in: server-types/index.d.ts:119

##### voiceChat

> **voiceChat**: [`MpVoiceChat`](/server-reference/index/#mpvoicechat-1)

Defined in: server-types/index.d.ts:120

#### Methods

##### addVar()

> **addVar**(`varName`, `value`): `void`

Defined in: server-types/index.d.ts:141

Adds a server console variable.

###### Parameters

###### varName

`string`

Variable name.

###### value

`any`

Variable value.

###### Returns

`void`

##### addVarServer()

> **addVarServer**(`varName`, `value`): `void`

Defined in: server-types/index.d.ts:148

Adds a server-only console variable.

###### Parameters

###### varName

`string`

Variable name.

###### value

`any`

Variable value.

###### Returns

`void`

##### addVarShared()

> **addVarShared**(`varName`, `value`): `void`

Defined in: server-types/index.d.ts:155

Adds a shared (client+server) console variable.

###### Parameters

###### varName

`string`

Variable name.

###### value

`any`

Variable value.

###### Returns

`void`

##### changeCefViewUrl()

> **changeCefViewUrl**(`newUrl`): `void`

Defined in: client-types/out/precomputed/global.d.ts:133

###### Parameters

###### newUrl

`string`

###### Returns

`void`

##### clearTick()

> **clearTick**(`tickId`): `void`

Defined in: client-types/out/precomputed/global.d.ts:137

###### Parameters

###### tickId

`number`

###### Returns

`void`

##### createObject()

> **createObject**(`modelHash`, `x`, `y`, `z`, `yaw`, `dynamic`): `number`

Defined in: server-types/index.d.ts:467

Spawns an object in the game world.

###### Parameters

###### modelHash

`number`

Object model hash.

###### x

`number`

X position.

###### y

`number`

Y position.

###### z

`number`

Z position.

###### yaw

`number`

Yaw rotation.

###### dynamic

`boolean`

Whether the object is dynamic.

###### Returns

`number`

Entity ID of the object.

##### createPed()

> **createPed**(`hash`, `x`, `y`, `z`, `health`, `yaw`): `number`

Defined in: server-types/index.d.ts:486

Spawns a ped in the game world.

###### Parameters

###### hash

`number`

Ped model hash.

###### x

`number`

X coordinate.

###### y

`number`

Y coordinate.

###### z

`number`

Z coordinate.

###### health

`number`

Ped health.

###### yaw

`number`

Orientation yaw.

###### Returns

`number`

Entity ID of the ped.

##### createPickup()

> **createPickup**(`hash`, `type`, `x`, `y`, `z`, `yaw`): `number`

Defined in: server-types/index.d.ts:427

Spawns a pickup item in the game world.

###### Parameters

###### hash

`number`

Pickup model hash.

###### type

[`PickupType`](/server-reference/index/#pickuptype)

Pickup type.

###### x

`number`

X position.

###### y

`number`

Y position.

###### z

`number`

Z position.

###### yaw

`number`

Yaw rotation.

###### Returns

`number`

Entity ID of the pickup.

##### createVehicle()

> **createVehicle**(`modelHash`, `appearanceHash`, `x`, `y`, `z`, `health`, `yaw`): `number`

Defined in: server-types/index.d.ts:447

Spawns a vehicle in the world.

###### Parameters

###### modelHash

Vehicle model hash.

`number` | `bigint`

###### appearanceHash

Vehicle tuning hash.

`number` | `bigint`

###### x

`number`

X position.

###### y

`number`

Y position.

###### z

`number`

Z position.

###### health

`number`

Vehicle health.

###### yaw

`number`

Yaw rotation.

###### Returns

`number`

Entity ID of the created vehicle.

##### deleteEntity()

> **deleteEntity**(`entity`): `void`

Defined in: server-types/index.d.ts:307

Deletes an entity from the world.

###### Parameters

###### entity

`number`

The entity to delete.

###### Returns

`void`

##### despawnLocalObject()

> **despawnLocalObject**(`hash`): `void`

Defined in: client-types/out/precomputed/global.d.ts:92

###### Parameters

###### hash

`number`

###### Returns

`void`

##### despawnLocalPed()

> **despawnLocalPed**(`hash`): `void`

Defined in: client-types/out/precomputed/global.d.ts:88

###### Parameters

###### hash

`number`

###### Returns

`void`

##### despawnLocalVehicle()

> **despawnLocalVehicle**(`hash`): `void`

Defined in: client-types/out/precomputed/global.d.ts:90

###### Parameters

###### hash

`number`

###### Returns

`void`

##### doesEntityExist()

> **doesEntityExist**(`entity`): `boolean`

Defined in: server-types/index.d.ts:162

Checks if an entity exists in the game world.

###### Parameters

###### entity

`number`

Entity ID.

###### Returns

`boolean`

True if entity exists, otherwise false.

##### ~~executeCommand()~~

> **executeCommand**(`commandName`): `void`

Defined in: server-types/index.d.ts:556

Executes a registered server command.

:::caution[Deprecated]
Use proper command APIs instead.
:::

###### Parameters

###### commandName

`string`

Command string.

###### Returns

`void`

##### generateBcryptHash()

> **generateBcryptHash**(`password`): `string`

Defined in: server-types/index.d.ts:508

Generates a bcrypt hash from a password.

###### Parameters

###### password

`string`

Plain password string.

###### Returns

`string`

Bcrypt hash.

##### getAllObject()

> **getAllObject**(): `number`[]

Defined in: server-types/index.d.ts:265

Gets all server-side objects.

###### Returns

`number`[]

Array of object entity IDs.

##### getAllPeds()

> **getAllPeds**(): `number`[]

Defined in: server-types/index.d.ts:271

Gets all server-side peds.

###### Returns

`number`[]

Array of ped entity IDs.

##### getAllVehicles()

> **getAllVehicles**(): `number`[]

Defined in: server-types/index.d.ts:259

Gets all vehicles created by the server.

###### Returns

`number`[]

Array of vehicle entity IDs.

##### getCurrentResourceName()

> **getCurrentResourceName**(): `string`

Defined in: server-types/index.d.ts:543

Gets the current resource's name.

###### Returns

`string`

Resource name.

##### getCurrentServerEndpoint()

> **getCurrentServerEndpoint**(): `string`

Defined in: client-types/out/precomputed/global.d.ts:107

Returns current server IP:PORT string.

###### Returns

`string`

##### getDiscordCodeAuthorization()

> **getDiscordCodeAuthorization**(`discordAppId`, `scopes`): `string`

Defined in: client-types/out/precomputed/global.d.ts:102

Get Discord auth code (preferred).

###### Parameters

###### discordAppId

`string`

###### scopes

`string`

###### Returns

`string`

##### getDiscordOAuth2Token()

> **getDiscordOAuth2Token**(`discordAppId`): `string`

Defined in: client-types/out/precomputed/global.d.ts:97

Get Discord token via game SDK (unstable).

###### Parameters

###### discordAppId

`string`

###### Returns

`string`

##### getEntityAngularVelocity()

> **getEntityAngularVelocity**(`entity`): [`Vector3`](/server-reference/index/#vector3)

Defined in: server-types/index.d.ts:211

Gets the angular velocity of a vehicle.

###### Parameters

###### entity

`number`

The vehicle entity.

###### Returns

[`Vector3`](/server-reference/index/#vector3)

[X, Y, Z] angular velocity.

##### getEntityDimension()

> **getEntityDimension**(`entity`): `number`

Defined in: server-types/index.d.ts:342

Gets the dimension of an entity.

###### Parameters

###### entity

`number`

Entity ID.

###### Returns

`number`

The dimension number.

##### getEntityHealth()

> **getEntityHealth**(`entity`): `number`

Defined in: server-types/index.d.ts:253

Gets an entity's health (player, ped, or object).

###### Parameters

###### entity

`number`

The entity.

###### Returns

`number`

Health as a number.

##### getEntityModel()

> **getEntityModel**(`entity`): `number`

Defined in: server-types/index.d.ts:232

Gets the model hash of an entity.

###### Parameters

###### entity

`number`

The entity.

###### Returns

`number`

Model hash as number.

##### getEntityPos()

> **getEntityPos**(`entity`): [`Vector3`](/server-reference/index/#vector3)

Defined in: server-types/index.d.ts:197

Gets the position of an entity in 3D space.

###### Parameters

###### entity

`number`

The entity.

###### Returns

[`Vector3`](/server-reference/index/#vector3)

[X, Y, Z] coordinates.

##### getEntityRotation()

> **getEntityRotation**(`entity`): [`Vector3`](/server-reference/index/#vector3)

Defined in: server-types/index.d.ts:218

Gets the rotation of an entity.

###### Parameters

###### entity

`number`

The entity.

###### Returns

[`Vector3`](/server-reference/index/#vector3)

[Pitch, Roll, Yaw] rotation.

##### getEntityType()

> **getEntityType**(`entity`): [`EntityType`](/server-reference/index/#entitytype)

Defined in: server-types/index.d.ts:239

Gets the type of an entity.

###### Parameters

###### entity

`number`

The entity.

###### Returns

[`EntityType`](/server-reference/index/#entitytype)

The entity type (Player, Vehicle, or Object).

##### getEntityVelocity()

> **getEntityVelocity**(`entity`): [`Vector3`](/server-reference/index/#vector3)

Defined in: server-types/index.d.ts:204

Gets the linear velocity of an entity.

###### Parameters

###### entity

`number`

The entity.

###### Returns

[`Vector3`](/server-reference/index/#vector3)

[X, Y, Z] velocity components.

##### getEntityYaw()

> **getEntityYaw**(`entity`): `number`

Defined in: server-types/index.d.ts:225

Gets the yaw angle of an entity.

###### Parameters

###### entity

`number`

The entity.

###### Returns

`number`

Yaw in degrees.

##### getGameTimer()

> **getGameTimer**(): `number`

Defined in: server-types/index.d.ts:583

Gets the current process uptime in milliseconds.

###### Returns

`number`

Uptime in milliseconds.

##### getLastPedInVehicleSeat()

> **getLastPedInVehicleSeat**(`vehicle`, `seatId`): `number`

Defined in: server-types/index.d.ts:301

Gets the last player that was in the given seat.

###### Parameters

###### vehicle

`number`

Vehicle entity ID.

###### seatId

[`VehicleSeat`](/server-reference/index/#vehicleseat)

Seat index.

###### Returns

`number`

Entity ID or 0 if none.

##### getLauncherSettings()

> **getLauncherSettings**(): `any`

Defined in: client-types/out/precomputed/global.d.ts:131

###### Returns

`any`

##### getLauncherSettingsJSON()

> **getLauncherSettingsJSON**(): `string`

Defined in: client-types/out/precomputed/global.d.ts:129

###### Returns

`string`

##### getNumPlayerIdentifiers()

> **getNumPlayerIdentifiers**(`netID`): `number`

Defined in: server-types/index.d.ts:363

Gets the number of identifiers available for a player.

###### Parameters

###### netID

`number`

Player's network ID.

###### Returns

`number`

Number of identifiers.

##### getNumResourceMetadata()

> **getNumResourceMetadata**(`resourceName`, `keyString`): `number`

Defined in: server-types/index.d.ts:537

Gets the number of metadata values for a key.

###### Parameters

###### resourceName

`string`

Resource name.

###### keyString

`string`

Metadata key name.

###### Returns

`number`

Number of metadata entries.

##### getObjectGameIdByNetworkId()

> **getObjectGameIdByNetworkId**(`id`): `number`

Defined in: client-types/out/precomputed/global.d.ts:32

###### Parameters

###### id

`number`

###### Returns

`number`

##### getObjectNetworkIdByGameId()

> **getObjectNetworkIdByGameId**(`hash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:38

###### Parameters

###### hash

`number`

###### Returns

`number`

##### getPedGameIdByNetworkId()

> **getPedGameIdByNetworkId**(`hash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:42

###### Parameters

###### hash

`number`

###### Returns

`number`

##### getPedInVehicleSeat()

> **getPedInVehicleSeat**(`vehicle`, `seatId`): `number`

Defined in: server-types/index.d.ts:293

Gets the player in a specific vehicle seat.

###### Parameters

###### vehicle

`number`

Vehicle entity ID.

###### seatId

[`VehicleSeat`](/server-reference/index/#vehicleseat)

Seat index.

###### Returns

`number`

Entity ID or 0 if empty.

##### getPedNetworkIdByGameId()

> **getPedNetworkIdByGameId**(`hash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:40

###### Parameters

###### hash

`number`

###### Returns

`number`

##### getPlayerDimension()

> **getPlayerDimension**(`netID`): `number`

Defined in: server-types/index.d.ts:328

Gets the dimension of a player.

###### Parameters

###### netID

`number`

Player's network ID.

###### Returns

`number`

The dimension number.

##### getPlayerEndpoint()

> **getPlayerEndpoint**(`netID`): `string`

Defined in: server-types/index.d.ts:386

Gets the IP address of a player.

###### Parameters

###### netID

`number`

Player's network ID.

###### Returns

`string`

IP address.

##### getPlayerGameIdByNetworkId()

> **getPlayerGameIdByNetworkId**(`id`): `number`

Defined in: client-types/out/precomputed/global.d.ts:30

###### Parameters

###### id

`number`

###### Returns

`number`

##### getPlayerIdentifier()

> **getPlayerIdentifier**(`netID`, `index`): `string`

Defined in: server-types/index.d.ts:371

Gets a specific identifier by index.

###### Parameters

###### netID

`number`

Player's network ID.

###### index

`number`

Index of the identifier.

###### Returns

`string`

Identifier string.

##### getPlayerIdentifierByType()

> **getPlayerIdentifierByType**(`netID`, `type`): `string`

Defined in: server-types/index.d.ts:379

Gets a specific identifier by type.

###### Parameters

###### netID

`number`

Player's network ID.

###### type

`string`

Identifier type (e.g., "ip").

###### Returns

`string`

Identifier string.

##### getPlayerName()

> **getPlayerName**(`netID`): `string`

Defined in: server-types/index.d.ts:356

Gets the name of a player.

###### Parameters

###### netID

`number`

Player's network ID.

###### Returns

`string`

Player name.

##### getPlayerNetworkIdByGameId()

> **getPlayerNetworkIdByGameId**(`hash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:36

###### Parameters

###### hash

`number`

###### Returns

`number`

##### getPlayerPed()

> **getPlayerPed**(`netID`): `number`

Defined in: server-types/index.d.ts:415

Gets the entity ID of a player's ped.

###### Parameters

###### netID

`number`

Player's network ID.

###### Returns

`number`

Entity ID of the player's ped.

##### getPlayerPing()

> **getPlayerPing**(`netID`): `number`

Defined in: server-types/index.d.ts:393

Gets the ping of a player.

###### Parameters

###### netID

`number`

Player's network ID.

###### Returns

`number`

Ping in ms.

##### getPlayers()

> **getPlayers**(): `number`[]

Defined in: server-types/index.d.ts:277

Gets all connected players.

###### Returns

`number`[]

Array of player entity IDs.

##### getPlayerServerId()

> **getPlayerServerId**(`playerHash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:112

Get server ID from player hash.

###### Parameters

###### playerHash

`number`

###### Returns

`number`

##### getResourceMetadata()

> **getResourceMetadata**(`resourceName`, `keyName`, `index`): `string`

Defined in: server-types/index.d.ts:525

Gets metadata from a resource manifest.

###### Parameters

###### resourceName

`string`

Resource name.

###### keyName

`string`

Metadata key.

###### index

`number`

Index (if multiple values exist).

###### Returns

`string`

Metadata string.

##### getResourceState()

> **getResourceState**(`resourceName`): `string`

Defined in: server-types/index.d.ts:563

Gets the current state of a resource.

###### Parameters

###### resourceName

`string`

The resource to check.

###### Returns

`string`

Resource state as string.

##### getStreamedPlayers()

> **getStreamedPlayers**(): `number`[]

Defined in: client-types/out/precomputed/global.d.ts:16

###### Returns

`number`[]

##### getStreamedPool()

> **getStreamedPool**(`objName`): `number`[]

Defined in: client-types/out/precomputed/global.d.ts:13

###### Parameters

###### objName

`"CVehicle"` | `"CPed"` | `"CPickups"` | `"CObject"`

###### Returns

`number`[]

##### getVar()

> **getVar**(`varName`): `string`

Defined in: server-types/index.d.ts:570

Gets a console variable's value.

###### Parameters

###### varName

`string`

Variable name.

###### Returns

`string`

Value as string.

##### getVarInt()

> **getVarInt**(`varName`): `number`

Defined in: server-types/index.d.ts:577

Gets a console variable's integer value.

###### Parameters

###### varName

`string`

Variable name.

###### Returns

`number`

Value as integer.

##### getVehicleGameIdByNetworkId()

> **getVehicleGameIdByNetworkId**(`id`): `number`

Defined in: client-types/out/precomputed/global.d.ts:28

Mapping between network and game IDs.

###### Parameters

###### id

`number`

###### Returns

`number`

##### getVehicleHealth()

> **getVehicleHealth**(`entity`): `number`

Defined in: server-types/index.d.ts:246

Gets a vehicle's current health.

###### Parameters

###### entity

`number`

Vehicle entity.

###### Returns

`number`

Health as a number.

##### getVehicleNetworkIdByGameId()

> **getVehicleNetworkIdByGameId**(`hash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:34

###### Parameters

###### hash

`number`

###### Returns

`number`

##### getVehiclePedIsIn()

> **getVehiclePedIsIn**(`player`, `lastVehicle`): `number`

Defined in: server-types/index.d.ts:285

Gets the vehicle a player is in.

###### Parameters

###### player

`number`

Player entity ID.

###### lastVehicle

`boolean`

If true, returns the last vehicle, else the current vehicle.

###### Returns

`number`

Vehicle entity ID.

##### isInCefFocusState()

> **isInCefFocusState**(): `boolean`

Defined in: client-types/out/precomputed/global.d.ts:23

###### Returns

`boolean`

##### isPlayerHaveRight()

> **isPlayerHaveRight**(`netID`, `right`): `boolean`

Defined in: server-types/index.d.ts:408

Checks if a player has a specific permission.

###### Parameters

###### netID

`number`

Player's network ID.

###### right

`string`

Right/permission string.

###### Returns

`boolean`

True if player has the right, false otherwise.

##### isServer()

> **isServer**(): `boolean`

Defined in: server-types/index.d.ts:549

Checks if the code is running on the server.

###### Returns

`boolean`

True if running on server, false otherwise.

##### kickPlayer()

> **kickPlayer**(`netID`, `reason`): `void`

Defined in: server-types/index.d.ts:400

Kicks a player from the server.

###### Parameters

###### netID

`number`

Player's network ID.

###### reason

`string`

Reason for the kick.

###### Returns

`void`

##### loadResourceFile()

> **loadResourceFile**(`resourceName`, `pathToResource`): `string`

Defined in: server-types/index.d.ts:516

Reads a file inside a resource and returns its contents.

###### Parameters

###### resourceName

`string`

Name of the resource.

###### pathToResource

`string`

Path to the file.

###### Returns

`string`

File content as string.

##### networkGetEntityFromNetworkId()

> **networkGetEntityFromNetworkId**(`netID`): `number`

Defined in: server-types/index.d.ts:176

Gets an entity by its network ID.

###### Parameters

###### netID

`number`

Network ID.

###### Returns

`number`

Entity ID associated with the given network ID.

##### networkGetEntityOwner()

> **networkGetEntityOwner**(`entity`): `number`

Defined in: server-types/index.d.ts:183

Gets the current owner synchronizing the entity.

###### Parameters

###### entity

`number`

The entity.

###### Returns

`number`

The owner's entity ID.

##### networkGetFirstEntityOwner()

> **networkGetFirstEntityOwner**(`entity`): `number`

Defined in: server-types/index.d.ts:190

Gets the first owner who synced this entity.

###### Parameters

###### entity

`number`

The entity.

###### Returns

`number`

The first owner's entity ID.

##### networkGetNetworkIdFromEntity()

> **networkGetNetworkIdFromEntity**(`entity`): `number`

Defined in: server-types/index.d.ts:169

Converts an entity to its associated network ID.

###### Parameters

###### entity

`number`

The entity to convert.

###### Returns

`number`

The network ID of the entity.

##### restartResource()

> **restartResource**(`resourceName`): `void`

Defined in: server-types/index.d.ts:122

###### Parameters

###### resourceName

`string`

###### Returns

`void`

##### setCefInFocusState()

> **setCefInFocusState**(`justFocus`, `withMouse`): `void`

Defined in: client-types/out/precomputed/global.d.ts:21

Focus or unfocus CEF view.

###### Parameters

###### justFocus

`boolean`

###### withMouse

`boolean`

###### Returns

`void`

##### setEntityDimension()

> **setEntityDimension**(`entity`, `dimension`): `void`

Defined in: server-types/index.d.ts:349

Sets the dimension of an entity.

###### Parameters

###### entity

`number`

Entity ID.

###### dimension

`number`

Target dimension.

###### Returns

`void`

##### setEntityStreamingRadius()

> **setEntityStreamingRadius**(`entity`, `radius`): `void`

Defined in: server-types/index.d.ts:314

Sets the streaming radius for an entity.

###### Parameters

###### entity

`number`

Entity ID.

###### radius

`number`

Radius in meters.

###### Returns

`void`

##### setPlayerDimension()

> **setPlayerDimension**(`netID`, `dimension`): `void`

Defined in: server-types/index.d.ts:335

Sets the dimension of a player.

###### Parameters

###### netID

`number`

Player's network ID.

###### dimension

`number`

Target dimension.

###### Returns

`void`

##### setPlayerStreamingRadius()

> **setPlayerStreamingRadius**(`netID`, `radius`): `void`

Defined in: server-types/index.d.ts:321

Sets the streaming radius for a player.

###### Parameters

###### netID

`number`

Player's network ID.

###### radius

`number`

Radius in meters.

###### Returns

`void`

##### setSpawnDataLocalPlayer()

> **setSpawnDataLocalPlayer**(`x`, `y`, `z`, `yaw`): `void`

Defined in: client-types/out/precomputed/global.d.ts:47

Local player spawning API.

###### Parameters

###### x

`number`

###### y

`number`

###### z

`number`

###### yaw

`number`

###### Returns

`void`

##### setTick()

> **setTick**(`cb`): `number`

Defined in: client-types/out/precomputed/global.d.ts:135

###### Parameters

###### cb

() => `void` \| `Promise`\<`void`\>

###### Returns

`number`

##### spawnLocalObject()

> **spawnLocalObject**(`skinHash`, `appHash`, `x`, `y`, `z`, `roll`, `pitch`, `yaw`, `streaming`): `number`

Defined in: client-types/out/precomputed/global.d.ts:76

###### Parameters

###### skinHash

`number` | `bigint`

###### appHash

`number` | `bigint`

###### x

`number`

###### y

`number`

###### z

`number`

###### roll

`number`

###### pitch

`number`

###### yaw

`number`

###### streaming

`boolean`

###### Returns

`number`

##### spawnLocalPed()

> **spawnLocalPed**(`skinHash`, `appHash`, `x`, `y`, `z`, `yaw`, `streaming`): `number`

Defined in: client-types/out/precomputed/global.d.ts:54

Spawn local-only entities (not synced).

###### Parameters

###### skinHash

`number`

###### appHash

`number`

###### x

`number`

###### y

`number`

###### z

`number`

###### yaw

`number`

###### streaming

`boolean`

###### Returns

`number`

##### spawnLocalPlayer()

> **spawnLocalPlayer**(): `boolean`

Defined in: client-types/out/precomputed/global.d.ts:49

###### Returns

`boolean`

##### spawnLocalVehicle()

> **spawnLocalVehicle**(`skinHash`, `appHash`, `x`, `y`, `z`, `roll`, `pitch`, `yaw`, `streaming`): `number`

Defined in: client-types/out/precomputed/global.d.ts:64

###### Parameters

###### skinHash

`number`

###### appHash

`number`

###### x

`number`

###### y

`number`

###### z

`number`

###### roll

`number`

###### pitch

`number`

###### yaw

`number`

###### streaming

`boolean`

###### Returns

`number`

##### startResource()

> **startResource**(`resourceName`): `void`

Defined in: server-types/index.d.ts:128

Starts a specific resource by name.

###### Parameters

###### resourceName

`string`

Name of the resource to start.

###### Returns

`void`

##### stopResource()

> **stopResource**(`resourceName`): `void`

Defined in: server-types/index.d.ts:134

Stops a specific resource by name.

###### Parameters

###### resourceName

`string`

Name of the resource to stop.

###### Returns

`void`

##### verifyBcryptHash()

> **verifyBcryptHash**(`password`, `hash`): `boolean`

Defined in: server-types/index.d.ts:501

Verifies if a plain password matches a bcrypt hash.

###### Parameters

###### password

`string`

Plain password string.

###### hash

`string`

Hashed bcrypt string.

###### Returns

`boolean`

True if match, false otherwise.

***

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

***

### MpMeta

Defined in: client-types/out/precomputed/meta.d.ts:1

#### Methods

##### getEntityMeta()

###### Call Signature

> **getEntityMeta**\<`T`\>(`netId`, `key`): `T`

Defined in: client-types/out/precomputed/meta.d.ts:12

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### netId

`number`

###### key

`string`

###### Returns

`T`

###### Call Signature

> **getEntityMeta**\<`T`\>(`netId`, `key`): `T`

Defined in: server-types/index.d.ts:111

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### netId

`number`

###### key

`string`

###### Returns

`T`

##### getGlobalMeta()

###### Call Signature

> **getGlobalMeta**\<`T`\>(`key`): `T`

Defined in: client-types/out/precomputed/meta.d.ts:3

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### key

`string`

###### Returns

`T`

###### Call Signature

> **getGlobalMeta**\<`T`\>(`key`): `T`

Defined in: server-types/index.d.ts:102

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### key

`string`

###### Returns

`T`

##### getLocalPlayerMeta()

> **getLocalPlayerMeta**\<`T`\>(`key`): `T`

Defined in: client-types/out/precomputed/meta.d.ts:14

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### key

`string`

###### Returns

`T`

##### getPlayerMeta()

###### Call Signature

> **getPlayerMeta**\<`T`\>(`playerId`, `key`): `T`

Defined in: client-types/out/precomputed/meta.d.ts:10

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### playerId

`number`

###### key

`string`

###### Returns

`T`

###### Call Signature

> **getPlayerMeta**\<`T`\>(`playerId`, `key`): `T`

Defined in: server-types/index.d.ts:109

###### Type Parameters

###### T

`T` = `any`

###### Parameters

###### playerId

`number`

###### key

`string`

###### Returns

`T`

##### setEntityMeta()

###### Call Signature

> **setEntityMeta**(`netId`, `key`, `value`, `sync?`): `void`

Defined in: client-types/out/precomputed/meta.d.ts:11

###### Parameters

###### netId

`number`

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

###### Call Signature

> **setEntityMeta**(`netId`, `key`, `value`, `sync?`): `void`

Defined in: server-types/index.d.ts:110

###### Parameters

###### netId

`number`

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

##### setGlobalMeta()

###### Call Signature

> **setGlobalMeta**(`key`, `value`, `sync?`): `void`

Defined in: client-types/out/precomputed/meta.d.ts:2

###### Parameters

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

###### Call Signature

> **setGlobalMeta**(`key`, `value`, `sync?`): `void`

Defined in: server-types/index.d.ts:101

###### Parameters

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

##### setLocalPlayerMeta()

> **setLocalPlayerMeta**(`key`, `value`): `void`

Defined in: client-types/out/precomputed/meta.d.ts:13

###### Parameters

###### key

`string`

###### value

`any`

###### Returns

`void`

##### setPlayerMeta()

###### Call Signature

> **setPlayerMeta**(`playerId`, `key`, `value`, `sync?`): `void`

Defined in: client-types/out/precomputed/meta.d.ts:4

###### Parameters

###### playerId

`number`

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

###### Call Signature

> **setPlayerMeta**(`playerId`, `key`, `value`, `sync?`): `void`

Defined in: server-types/index.d.ts:103

###### Parameters

###### playerId

`number`

###### key

`string`

###### value

`any`

###### sync?

`boolean`

###### Returns

`void`

***

### MpVoiceChat

Defined in: server-types/index.d.ts:43

#### Methods

##### bindPushToTalkKey()

> **bindPushToTalkKey**(`key`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:9

###### Parameters

###### key

`number`

###### Returns

`void`

##### changeActivationType()

> **changeActivationType**(`type`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:8

###### Parameters

###### type

`VoiceActivationType`

###### Returns

`void`

##### createChannel()

> **createChannel**(`voiceId`): `void`

Defined in: server-types/index.d.ts:45

###### Parameters

###### voiceId

`number`

###### Returns

`void`

##### enable()

> **enable**(`state`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:7

###### Parameters

###### state

`boolean`

###### Returns

`void`

##### getInputDevices()

> **getInputDevices**(): `string`[]

Defined in: client-types/out/precomputed/voice-chat.d.ts:14

###### Returns

`string`[]

##### getOutputDevices()

> **getOutputDevices**(): `string`[]

Defined in: client-types/out/precomputed/voice-chat.d.ts:13

###### Returns

`string`[]

##### isActive()

> **isActive**(): `boolean`

Defined in: client-types/out/precomputed/voice-chat.d.ts:19

###### Returns

`boolean`

##### isPlayerMuted()

> **isPlayerMuted**(`playerId`): `boolean`

Defined in: server-types/index.d.ts:46

###### Parameters

###### playerId

`number`

###### Returns

`boolean`

##### mutePlayer()

> **mutePlayer**(`playerId`): `void`

Defined in: server-types/index.d.ts:44

###### Parameters

###### playerId

`number`

###### Returns

`void`

##### setInputDevice()

> **setInputDevice**(`index`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:16

###### Parameters

###### index

`number`

###### Returns

`void`

##### setInputVolume()

> **setInputVolume**(`value`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:11

###### Parameters

###### value

`number`

###### Returns

`void`

##### setMicrophoneSensitivity()

> **setMicrophoneSensitivity**(`value`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:12

###### Parameters

###### value

`number`

###### Returns

`void`

##### setOutputDevice()

> **setOutputDevice**(`index`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:15

###### Parameters

###### index

`number`

###### Returns

`void`

##### setOutputVolume()

> **setOutputVolume**(`value`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:10

###### Parameters

###### value

`number`

###### Returns

`void`

##### setVoiceInputDistance()

> **setVoiceInputDistance**(`distance`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:17

###### Parameters

###### distance

`number`

###### Returns

`void`

##### setVoiceOutputDistance()

> **setVoiceOutputDistance**(`distance`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:18

###### Parameters

###### distance

`number`

###### Returns

`void`

## Type Aliases

### Entity

> **Entity** = `number`

Defined in: server-types/index.d.ts:4

Represents an in-game entity.

***

### NetID

> **NetID** = `number`

Defined in: server-types/index.d.ts:9

Represents a network ID associated with an entity.

***

### Vector3

> **Vector3** = \[`number`, `number`, `number`\]

Defined in: server-types/index.d.ts:39

***

### Vector4

> **Vector4** = \[`number`, `number`, `number`, `number`\]

Defined in: server-types/index.d.ts:41

## Variables

### mp

> `const` **mp**: [`Mp`](/server-reference/index/#mp)

Defined in: server-types/index.d.ts:586
