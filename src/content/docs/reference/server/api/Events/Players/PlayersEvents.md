---
editUrl: false
next: false
prev: false
title: "PlayersEvents"
---

Defined in: events.d.ts:219

Events related to players.

## Methods

<a id="damage"></a>

### damage()

```ts
damage(playerId, data): void;
```

Defined in: events.d.ts:259

Triggered when a player takes damage.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`DamageEventData`](/reference/server/api/events/players/damageeventdata/) |

#### Returns

`void`

***

<a id="playerappearancechange"></a>

### playerAppearanceChange()

```ts
playerAppearanceChange(playerId, data): void;
```

Defined in: events.d.ts:251

Triggered when a player's appearance changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PlayerAppearanceChangeEventData`](/reference/server/api/events/players/playerappearancechangeeventdata/) |

#### Returns

`void`

***

<a id="playerconnected"></a>

### playerConnected()

```ts
playerConnected(playerId, tempId): void;
```

Defined in: events.d.ts:227

Triggered when a player has connected.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `tempId` | `string` |

#### Returns

`void`

***

<a id="playerconnecting"></a>

### playerConnecting()

```ts
playerConnecting(tempId, name): void;
```

Defined in: events.d.ts:223

Triggered when a player is connecting.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tempId` | `number` |
| `name` | `string` |

#### Returns

`void`

***

<a id="playerdeath"></a>

### playerDeath()

```ts
playerDeath(playerId, data): void;
```

Defined in: events.d.ts:243

Triggered when a player dies.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PlayerDeathEventData`](/reference/server/api/events/players/playerdeatheventdata/) |

#### Returns

`void`

***

<a id="playerdespawn"></a>

### playerDespawn()

```ts
playerDespawn(playerId): void;
```

Defined in: events.d.ts:239

Triggered when a player despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |

#### Returns

`void`

***

<a id="playerdisconnected"></a>

### playerDisconnected()

```ts
playerDisconnected(playerId, reason): void;
```

Defined in: events.d.ts:247

Triggered when a player disconnects.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `reason` | `string` |

#### Returns

`void`

***

<a id="playerrespawn"></a>

### playerRespawn()

```ts
playerRespawn(playerId, data): void;
```

Defined in: events.d.ts:235

Triggered when a player respawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`Vector3Object`](/reference/server/api/events/world/vector3object/) |

#### Returns

`void`

***

<a id="playerspawn"></a>

### playerSpawn()

```ts
playerSpawn(playerId): void;
```

Defined in: events.d.ts:231

Triggered when a player spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |

#### Returns

`void`
