---
editUrl: false
next: false
prev: false
title: "MpClient"
---

Defined in: mp.d.ts:17

The main client-side manager interface for CyberMP.
Aggregates all core subsystems, network synchronization mappers, local entity spawning arrays, and launcher-level APIs.

## Properties

<a id="cef"></a>

### cef

> **cef**: [`MpCef`](/reference/client/api/global/mpcef/)

Defined in: mp.d.ts:41

Controls and interfaces with the embedded Chromium Embedded Framework web views.

***

<a id="discord"></a>

### discord

> **discord**: [`MpDiscord`](/reference/client/api/global/mpdiscord/)

Defined in: mp.d.ts:46

Provides access to Discord rich presence and authentications integration layers.

***

<a id="events"></a>

### events

> **events**: [`MpEvents`](/reference/client/api/events/mpevents/)

Defined in: mp.d.ts:26

The client event communication system bridge.

***

<a id="game"></a>

### game

> **game**: [`MpGame`](/reference/client/api/global/mpgame/) & `MpGlobals` & `MpClasses`

Defined in: mp.d.ts:21

Access interface for native game engines, classes, and global engine parameters.

***

<a id="localstorage"></a>

### localStorage

> **localStorage**: [`MpLocalStorage`](/reference/client/api/global/mplocalstorage/)

Defined in: mp.d.ts:51

Provides access to local key-value data storage states spanning resource restarts.

***

<a id="meta"></a>

### meta

> **meta**: [`MpMeta`](/reference/client/api/global/mpmeta/)

Defined in: mp.d.ts:31

Metadata state synchronization manager across entities and network profiles.

***

<a id="voicechat"></a>

### voiceChat

> **voiceChat**: [`MpVoiceChat`](/reference/client/api/global/mpvoicechat/)

Defined in: mp.d.ts:36

Integrated structural client voice communication management interface.

## Methods

<a id="cleartick"></a>

### clearTick()

> **clearTick**(`tickId`): `void`

Defined in: mp.d.ts:304

Removes and unbinds an active rendering cycle tracking loop execution block.

#### Parameters

##### tickId

`number`

The original registration index key returned by [setTick](/reference/client/api/global/mpclient/#settick).

#### Returns

`void`

***

<a id="despawnlocalobject"></a>

### despawnLocalObject()

> **despawnLocalObject**(`hash`): `void`

Defined in: mp.d.ts:229

Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local object.

#### Parameters

##### hash

`number`

Unique local game engine entity instance handle to clear.

#### Returns

`void`

***

<a id="despawnlocalped"></a>

### despawnLocalPed()

> **despawnLocalPed**(`hash`): `void`

Defined in: mp.d.ts:217

Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local pedestrian.

#### Parameters

##### hash

`number`

Unique local game engine entity instance handle to clear.

#### Returns

`void`

***

<a id="despawnlocalvehicle"></a>

### despawnLocalVehicle()

> **despawnLocalVehicle**(`hash`): `void`

Defined in: mp.d.ts:223

Forces immediate engine de-allocation and cleanup deletion maps targeting an isolated local vehicle.

#### Parameters

##### hash

`number`

Unique local game engine entity instance handle to clear.

#### Returns

`void`

***

<a id="getcurrentserverendpoint"></a>

### getCurrentServerEndpoint()

> **getCurrentServerEndpoint**(): `string`

Defined in: mp.d.ts:252

Returns the endpoint address configuration tracking string of the current server session.

#### Returns

`string`

Endpoint routing connection destination details string (e.g., `"127.0.0.1:4430"`).

***

<a id="getdiscordcodeauthorization"></a>

### ~~getDiscordCodeAuthorization()~~

> **getDiscordCodeAuthorization**(`discordAppId`, `scopes`): `string`

Defined in: mp.d.ts:246

Requests a preferred secure authentication application code payload via Discord's authorization flow.

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### discordAppId

`string`

The registered client registration application client ID string.

##### scopes

`string`

Separated validation permission request keyword groups strings (e.g., `"identify guilds"`).

#### Returns

`string`

An authentication code string convertible into access tokens server-side.

***

<a id="getdiscordoauth2token"></a>

### ~~getDiscordOAuth2Token()~~

> **getDiscordOAuth2Token**(`discordAppId`): `string`

Defined in: mp.d.ts:237

Requests a secure Discord authentication OAuth2 user token via embedded client game SDK pathways.

:::caution[Deprecated]
This method is unstable and may cause engine synchronization pauses. Use [getDiscordCodeAuthorization](/reference/client/api/global/mpclient/#getdiscordcodeauthorization) instead.
:::

#### Parameters

##### discordAppId

`string`

The registered client registration application client ID string.

#### Returns

`string`

Token string payload containing user authorization tokens.

***

<a id="getgametimer"></a>

### getGameTimer()

> **getGameTimer**(): `number`

Defined in: mp.d.ts:279

Retrieves total execution duration elapsed since initialization of the master game engine shell layer tracking loops.

#### Returns

`number`

Calculated time tracker measurement value in milliseconds.

***

<a id="getlaunchersettings"></a>

### getLauncherSettings()

> **getLauncherSettings**(): `any`

Defined in: mp.d.ts:291

Fetches parsed layout profiles tracking core client options configurations.

#### Returns

`any`

Object tracking client properties choices.

***

<a id="getlaunchersettingsjson"></a>

### getLauncherSettingsJSON()

> **getLauncherSettingsJSON**(): `string`

Defined in: mp.d.ts:285

Fetches raw unparsed configurations mapping platform launcher operational states.

#### Returns

`string`

Unparsed JSON payload string representing client settings configurations.

***

<a id="getobjectgameidbynetworkid"></a>

### getObjectGameIdByNetworkId()

> **getObjectGameIdByNetworkId**(`id`): `number`

Defined in: mp.d.ts:87

Resolves a network sync ID into its corresponding local native game engine entity reference handle for a static object.

#### Parameters

##### id

`number`

The unique synchronization network ID assigned by the server host.

#### Returns

`number`

The corresponding local native game engine object handle ID.

***

<a id="getobjectnetworkidbygameid"></a>

### getObjectNetworkIdByGameId()

> **getObjectNetworkIdByGameId**(`hash`): `number`

Defined in: mp.d.ts:108

Translates a native object or entity prop handle into its global shared replication network sync ID.

#### Parameters

##### hash

`number`

The local native game engine entity instance handle.

#### Returns

`number`

The synchronized network ID assigned to that object.

***

<a id="getpedgameidbynetworkid"></a>

### getPedGameIdByNetworkId()

> **getPedGameIdByNetworkId**(`hash`): `number`

Defined in: mp.d.ts:122

Resolves a network sync ID into its corresponding local native game engine entity reference handle for a pedestrian.

#### Parameters

##### hash

`number`

#### Returns

`number`

The corresponding local native game engine pedestrian handle ID.

***

<a id="getpednetworkidbygameid"></a>

### getPedNetworkIdByGameId()

> **getPedNetworkIdByGameId**(`hash`): `number`

Defined in: mp.d.ts:115

Translates a native pedestrian/NPC handle into its global shared replication network sync ID.

#### Parameters

##### hash

`number`

The local native game engine entity instance handle.

#### Returns

`number`

The synchronized network ID assigned to that pedestrian.

***

<a id="getplayergameidbynetworkid"></a>

### getPlayerGameIdByNetworkId()

> **getPlayerGameIdByNetworkId**(`id`): `number`

Defined in: mp.d.ts:80

Resolves a network sync ID into its corresponding local native game engine entity reference handle for a player.

#### Parameters

##### id

`number`

The unique synchronization network ID assigned by the server host.

#### Returns

`number`

The corresponding local native game engine player handle ID.

***

<a id="getplayernetworkidbygameid"></a>

### getPlayerNetworkIdByGameId()

> **getPlayerNetworkIdByGameId**(`hash`): `number`

Defined in: mp.d.ts:101

Translates a native player character entity handle into its global shared replication network sync ID.

#### Parameters

##### hash

`number`

The local native game engine entity instance handle.

#### Returns

`number`

The synchronized network ID assigned to that player.

***

<a id="getplayerserverid"></a>

### getPlayerServerId()

> **getPlayerServerId**(`playerHash`): `number`

Defined in: mp.d.ts:259

Extracts the unique global player numeric index ID matching an active native local player entity handle.

#### Parameters

##### playerHash

`number`

The target local engine character object handle tracking number.

#### Returns

`number`

Network server-side entity tracking index ID number.

***

<a id="getstreamedplayers"></a>

### getStreamedPlayers()

> **getStreamedPlayers**(): `number`[]

Defined in: mp.d.ts:66

Gets an array containing all active remote network players currently streaming inside the local user's zone.

#### Returns

`number`[]

An array of native game engine entity IDs.

***

<a id="getstreamedpool"></a>

### getStreamedPool()

> **getStreamedPool**(`objName`): `number`[]

Defined in: mp.d.ts:58

Returns an array of game engine handling entities currently within the local player's streaming radius.

#### Parameters

##### objName

`"CVehicle"` \| `"CPed"` \| `"CPickup"` \| `"CObject"`

The engine pool target class filter type to look up.

#### Returns

`number`[]

An array containing the local runtime engine IDs matching the target pool.

***

<a id="getvar"></a>

### getVar()

> **getVar**(`varName`): `string`

Defined in: mp.d.ts:266

Queries environment configuration arrays to fetch string system variable values defined inside config manifest structures.

#### Parameters

##### varName

`string`

Target environmental variable path identifier name key string.

#### Returns

`string`

The corresponding variable value matching that name string.

***

<a id="getvarint"></a>

### getVarInt()

> **getVarInt**(`varName`): `number`

Defined in: mp.d.ts:273

Queries environment configuration arrays to fetch integer variable values defined inside config manifest structures.

#### Parameters

##### varName

`string`

Target environmental variable path identifier name key string.

#### Returns

`number`

The variable evaluation value parsed into a numerical integer.

***

<a id="getvehiclegameidbynetworkid"></a>

### getVehicleGameIdByNetworkId()

> **getVehicleGameIdByNetworkId**(`id`): `number`

Defined in: mp.d.ts:73

Resolves a network sync ID into its corresponding local native game engine entity reference handle for a vehicle.

#### Parameters

##### id

`number`

The unique synchronization network ID assigned by the server host.

#### Returns

`number`

The corresponding local native game engine vehicle handle ID.

***

<a id="getvehiclenetworkidbygameid"></a>

### getVehicleNetworkIdByGameId()

> **getVehicleNetworkIdByGameId**(`hash`): `number`

Defined in: mp.d.ts:94

Translates a native vehicle game handle into its global shared replication network sync ID.

#### Parameters

##### hash

`number`

The local native game engine entity instance handle.

#### Returns

`number`

The synchronized network ID assigned to that vehicle.

***

<a id="setspawndatalocalplayer"></a>

### setSpawnDataLocalPlayer()

> **setSpawnDataLocalPlayer**(`x`, `y`, `z`, `yaw`): `void`

Defined in: mp.d.ts:131

Assigns the spawn coordinates and rotation tracking data for spawnLocalPlayer function.

#### Parameters

##### x

`number`

Horizontal grid position coordinate value.

##### y

`number`

Vertical grid position coordinate value.

##### z

`number`

Height grid elevation coordinate value.

##### yaw

`number`

The horizontal rotation layout angle in degrees.

#### Returns

`void`

***

<a id="settick"></a>

### setTick()

> **setTick**(`cb`): `number`

Defined in: mp.d.ts:298

Registers a callback execution function that runs continuously on every game engine render frame.

#### Parameters

##### cb

() => `any`

The logic routine executed on every render cycle.

#### Returns

`number`

An execution identifier handle index required to disable the execution loop later.

***

<a id="spawnlocalobject"></a>

### spawnLocalObject()

> **spawnLocalObject**(`skinHash`, `appHash`, `x`, `y`, `z`, `roll`, `pitch`, `yaw`, `streaming`): `number`

Defined in: mp.d.ts:201

Instantiates a localized world object or dynamic prop entity inside the engine environment.
This entity remains completely un-synchronized and invisible to other remote clients.

#### Parameters

##### skinHash

`number` \| `bigint`

Asset model signature key hash.

##### appHash

`number` \| `bigint`

Visual appearance setup key components variation hash.

##### x

`number`

Horizontal coordinate space.

##### y

`number`

Vertical coordinate space.

##### z

`number`

Elevation height space coordinate.

##### roll

`number`

Longitudinal rotation axis orientation angle.

##### pitch

`number`

Lateral rotation axis orientation angle.

##### yaw

`number`

Directional heading alignment angle.

##### streaming

`boolean`

Controls if engine virtualization automatically handles streaming boundaries tracking.

#### Returns

`number`

The resulting unique local game entity handle ID.

***

<a id="spawnlocalped"></a>

### spawnLocalPed()

> **spawnLocalPed**(`skinHash`, `appHash`, `x`, `y`, `z`, `yaw`, `streaming`): `number`

Defined in: mp.d.ts:151

Instantiates a localized ped entity.
This entity remains completely un-synchronized and invisible to other remote clients.

#### Parameters

##### skinHash

`number` \| `bigint`

Asset model signature key hash.

##### appHash

`number` \| `bigint`

Visual appearance setup key components variation hash.

##### x

`number`

Horizontal coordinate space.

##### y

`number`

Vertical coordinate space.

##### z

`number`

Elevation height space coordinate.

##### yaw

`number`

Rotational alignment facing angle.

##### streaming

`boolean`

Controls if engine virtualization automatically handles streaming boundaries tracking.

#### Returns

`number`

The resulting unique local game entity handle ID.

***

<a id="spawnlocalplayer"></a>

### spawnLocalPlayer()

> **spawnLocalPlayer**(): `boolean`

Defined in: mp.d.ts:137

Spawns local player based on data setted by [setSpawnDataLocalPlayer](/reference/client/api/global/mpclient/#setspawndatalocalplayer)

#### Returns

`boolean`

`true` if the spawn lifecycle sequence initiated successfully, otherwise `false`.

***

<a id="spawnlocalvehicle"></a>

### spawnLocalVehicle()

> **spawnLocalVehicle**(`skinHash`, `appHash`, `x`, `y`, `z`, `roll`, `pitch`, `yaw`, `streaming`): `number`

Defined in: mp.d.ts:175

Instantiates a localized vehicle entity inside the engine environment.
This entity remains completely un-synchronized and invisible to other remote clients.

#### Parameters

##### skinHash

`number` \| `bigint`

Asset model signature key hash.

##### appHash

`number` \| `bigint`

Visual appearance setup key components variation hash.

##### x

`number`

Horizontal coordinate space.

##### y

`number`

Vertical coordinate space.

##### z

`number`

Elevation height space coordinate.

##### roll

`number`

Longitudinal rotation axis orientation angle.

##### pitch

`number`

Lateral rotation axis orientation angle.

##### yaw

`number`

Directional heading alignment angle.

##### streaming

`boolean`

Controls if engine virtualization automatically handles streaming boundaries tracking.

#### Returns

`number`

The resulting unique local game entity handle ID.
