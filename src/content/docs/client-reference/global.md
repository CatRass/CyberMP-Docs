---
editUrl: false
next: false
prev: false
title: "global"
---

## Interfaces

### MpGlobalPrecomputed

Defined in: client-types/out/precomputed/global.d.ts:8

#### Properties

##### events

> **events**: [`MpEvents`](/client-reference/events/#mpevents)

Defined in: client-types/out/precomputed/global.d.ts:9

##### meta

> **meta**: [`MpMeta`](/client-reference/meta/#mpmeta)

Defined in: client-types/out/precomputed/global.d.ts:10

##### voiceChat

> **voiceChat**: [`MpVoiceChat`](/client-reference/voice-chat/#mpvoicechat)

Defined in: client-types/out/precomputed/global.d.ts:11

#### Methods

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

##### getGameTimer()

> **getGameTimer**(): `number`

Defined in: client-types/out/precomputed/global.d.ts:127

Returns time in ms since game start.

###### Returns

`number`

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

##### getPedNetworkIdByGameId()

> **getPedNetworkIdByGameId**(`hash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:40

###### Parameters

###### hash

`number`

###### Returns

`number`

##### getPlayerGameIdByNetworkId()

> **getPlayerGameIdByNetworkId**(`id`): `number`

Defined in: client-types/out/precomputed/global.d.ts:30

###### Parameters

###### id

`number`

###### Returns

`number`

##### getPlayerNetworkIdByGameId()

> **getPlayerNetworkIdByGameId**(`hash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:36

###### Parameters

###### hash

`number`

###### Returns

`number`

##### getPlayerServerId()

> **getPlayerServerId**(`playerHash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:112

Get server ID from player hash.

###### Parameters

###### playerHash

`number`

###### Returns

`number`

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

Defined in: client-types/out/precomputed/global.d.ts:117

Get src variable value as string.

###### Parameters

###### varName

`string`

###### Returns

`string`

##### getVarInt()

> **getVarInt**(`varName`): `number`

Defined in: client-types/out/precomputed/global.d.ts:122

Get console variable value as integer.

###### Parameters

###### varName

`string`

###### Returns

`number`

##### getVehicleGameIdByNetworkId()

> **getVehicleGameIdByNetworkId**(`id`): `number`

Defined in: client-types/out/precomputed/global.d.ts:28

Mapping between network and game IDs.

###### Parameters

###### id

`number`

###### Returns

`number`

##### getVehicleNetworkIdByGameId()

> **getVehicleNetworkIdByGameId**(`hash`): `number`

Defined in: client-types/out/precomputed/global.d.ts:34

###### Parameters

###### hash

`number`

###### Returns

`number`

##### isInCefFocusState()

> **isInCefFocusState**(): `boolean`

Defined in: client-types/out/precomputed/global.d.ts:23

###### Returns

`boolean`

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

## Type Aliases

### ServerVector3

> **ServerVector3** = \[`number`, `number`, `number`\]

Defined in: client-types/out/precomputed/global.d.ts:5

***

### ServerVector4

> **ServerVector4** = \[`number`, `number`, `number`, `number`\]

Defined in: client-types/out/precomputed/global.d.ts:6
