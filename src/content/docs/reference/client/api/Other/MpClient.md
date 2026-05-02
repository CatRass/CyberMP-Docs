---
editUrl: false
next: false
prev: false
title: "MpClient"
---

Defined in: mp.d.ts:12

## Properties

<a id="cef"></a>

### cef

```ts
cef: MpCef;
```

Defined in: mp.d.ts:17

***

<a id="discord"></a>

### discord

```ts
discord: MpDiscord;
```

Defined in: mp.d.ts:18

***

<a id="events"></a>

### events

```ts
events: MpEvents;
```

Defined in: mp.d.ts:14

***

<a id="game"></a>

### game

```ts
game: MpGame;
```

Defined in: mp.d.ts:13

***

<a id="localstorage"></a>

### localStorage

```ts
localStorage: MpLocalStorage;
```

Defined in: mp.d.ts:19

***

<a id="meta"></a>

### meta

```ts
meta: MpMeta;
```

Defined in: mp.d.ts:15

***

<a id="voicechat"></a>

### voiceChat

```ts
voiceChat: MpVoiceChat;
```

Defined in: mp.d.ts:16

## Methods

<a id="cleartick"></a>

### clearTick()

```ts
clearTick(tickId): void;
```

Defined in: mp.d.ts:136

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

Defined in: mp.d.ts:93

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

Defined in: mp.d.ts:89

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

Defined in: mp.d.ts:91

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

Defined in: mp.d.ts:108

Returns current server IP:PORT string.

#### Returns

`string`

***

<a id="getdiscordcodeauthorization"></a>

### getDiscordCodeAuthorization()

```ts
getDiscordCodeAuthorization(discordAppId, scopes): string;
```

Defined in: mp.d.ts:103

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

Defined in: mp.d.ts:98

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

Defined in: mp.d.ts:128

Returns time in ms since game start.

#### Returns

`number`

***

<a id="getlaunchersettings"></a>

### getLauncherSettings()

```ts
getLauncherSettings(): any;
```

Defined in: mp.d.ts:132

#### Returns

`any`

***

<a id="getlaunchersettingsjson"></a>

### getLauncherSettingsJSON()

```ts
getLauncherSettingsJSON(): string;
```

Defined in: mp.d.ts:130

#### Returns

`string`

***

<a id="getobjectgameidbynetworkid"></a>

### getObjectGameIdByNetworkId()

```ts
getObjectGameIdByNetworkId(id): number;
```

Defined in: mp.d.ts:33

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

Defined in: mp.d.ts:39

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

Defined in: mp.d.ts:43

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

Defined in: mp.d.ts:41

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

Defined in: mp.d.ts:31

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

Defined in: mp.d.ts:37

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

Defined in: mp.d.ts:113

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

Defined in: mp.d.ts:24

#### Returns

`number`[]

***

<a id="getstreamedpool"></a>

### getStreamedPool()

```ts
getStreamedPool(objName): number[];
```

Defined in: mp.d.ts:21

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `objName` | `"CVehicle"` \| `"CPed"` \| `"CPickup"` \| `"CObject"` |

#### Returns

`number`[]

***

<a id="getvar"></a>

### getVar()

```ts
getVar(varName): string;
```

Defined in: mp.d.ts:118

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

Defined in: mp.d.ts:123

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

Defined in: mp.d.ts:29

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

Defined in: mp.d.ts:35

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `hash` | `number` |

#### Returns

`number`

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

Defined in: mp.d.ts:48

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

Defined in: mp.d.ts:134

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `cb` | () => `any` |

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

Defined in: mp.d.ts:77

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

Defined in: mp.d.ts:55

Spawn local-only entities (not synced).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `skinHash` | `number` \| `bigint` |
| `appHash` | `number` \| `bigint` |
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

Defined in: mp.d.ts:50

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

Defined in: mp.d.ts:65

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
