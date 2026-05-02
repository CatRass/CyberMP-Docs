---
editUrl: false
next: false
prev: false
title: "PlayersEvents"
---

Defined in: events.ts:298

Events related to players.

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="damage"></a>

### damage()

```ts
damage(playerId, data): boolean | void;
```

Defined in: events.ts:345

Triggered when a player takes damage.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`DamageEventData`](/reference/server/api/events/players/damageeventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="meleeaction"></a>

### meleeAction()

```ts
meleeAction(playerId, data): boolean | void;
```

Defined in: events.ts:349

Triggered when a player performs a melee action.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`MeleeActionEventData`](/reference/server/api/events/players/meleeactioneventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="playerappearancechange"></a>

### playerAppearanceChange()

```ts
playerAppearanceChange(playerId, data): boolean | void;
```

Defined in: events.ts:330

Triggered when a player's appearance changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PlayerAppearanceChangeEventData`](/reference/server/api/events/players/playerappearancechangeeventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="playerconnected"></a>

### playerConnected()

```ts
playerConnected(playerId, tempId): void;
```

Defined in: events.ts:306

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

Defined in: events.ts:302

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

Defined in: events.ts:322

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

Defined in: events.ts:318

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

Defined in: events.ts:326

Triggered when a player disconnects.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `reason` | `string` |

#### Returns

`void`

***

<a id="playerhealing"></a>

### playerHealing()

```ts
playerHealing(playerId): boolean | void;
```

Defined in: events.ts:337

Triggered when a player's healing.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |

#### Returns

`boolean` \| `void`

***

<a id="playerknockdown"></a>

### playerKnockdown()

```ts
playerKnockdown(playerId): boolean | void;
```

Defined in: events.ts:341

Triggered when a player's knocked down.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |

#### Returns

`boolean` \| `void`

***

<a id="playerrespawn"></a>

### playerRespawn()

```ts
playerRespawn(playerId, data): void;
```

Defined in: events.ts:314

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

Defined in: events.ts:310

Triggered when a player spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |

#### Returns

`void`

***

<a id="shootaction"></a>

### shootAction()

```ts
shootAction(playerId, data): boolean | void;
```

Defined in: events.ts:353

Triggered when a player performs a shoot action.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`ShootActionEventData`](/reference/server/api/events/players/shootactioneventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="throwgrenade"></a>

### throwGrenade()

```ts
throwGrenade(playerId, data): boolean | void;
```

Defined in: events.ts:361

Triggered when a player throws a grenade.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`ThrowGrenadeEventData`](/reference/server/api/events/players/throwgrenadeeventdata/) |

#### Returns

`boolean` \| `void`

***

<a id="weaponreload"></a>

### weaponReload()

```ts
weaponReload(playerId, weaponHash): boolean | void;
```

Defined in: events.ts:357

Triggered when a player reloads their weapon.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `weaponHash` | [`GameHash`](/reference/server/api/hashes/gamehash/) |

#### Returns

`boolean` \| `void`
