---
editUrl: false
next: false
prev: false
title: "MpGlobalPrecomputed"
---

Defined in: client-types/out/precomputed/global.d.ts:8

## Properties

<a id="events"></a>

### events

```ts
events: MpEvents;
```

Defined in: client-types/out/precomputed/global.d.ts:9

***

<a id="meta"></a>

### meta

```ts
meta: MpMeta;
```

Defined in: client-types/out/precomputed/global.d.ts:10

***

<a id="voicechat"></a>

### voiceChat

```ts
voiceChat: MpVoiceChat;
```

Defined in: client-types/out/precomputed/global.d.ts:11

## Methods

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

<a id="getgametimer"></a>

### getGameTimer()

```ts
getGameTimer(): number;
```

Defined in: client-types/out/precomputed/global.d.ts:127

Returns time in ms since game start.

#### Returns

`number`

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

Defined in: client-types/out/precomputed/global.d.ts:117

Get src variable value as string.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |

#### Returns

`string`

***

<a id="getvarint"></a>

### getVarInt()

```ts
getVarInt(varName): number;
```

Defined in: client-types/out/precomputed/global.d.ts:122

Get console variable value as integer.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `varName` | `string` |

#### Returns

`number`

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

<a id="isinceffocusstate"></a>

### isInCefFocusState()

```ts
isInCefFocusState(): boolean;
```

Defined in: client-types/out/precomputed/global.d.ts:23

#### Returns

`boolean`

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
