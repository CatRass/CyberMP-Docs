---
editUrl: false
next: false
prev: false
title: "MpEventsMap"
---

Defined in: events.ts:539

## Extends

- [`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`PedEvents`](/reference/server/api/events/peds/pedevents/).[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/)

## Methods

<a id="anyresourcestart"></a>

### anyResourceStart()

```ts
anyResourceStart(resourceName): void;
```

Defined in: events.ts:267

Triggered when any resource starts.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`anyResourceStart`](/reference/server/api/events/resources/resourcesevents/#anyresourcestart)

***

<a id="anyresourcestop"></a>

### anyResourceStop()

```ts
anyResourceStop(resourceName): void;
```

Defined in: events.ts:271

Triggered when any resource stops.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`anyResourceStop`](/reference/server/api/events/resources/resourcesevents/#anyresourcestop)

***

<a id="anyserverresourcestart"></a>

### anyServerResourceStart()

```ts
anyServerResourceStart(resourceName): void;
```

Defined in: events.ts:275

Triggered when any server resource starts.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`anyServerResourceStart`](/reference/server/api/events/resources/resourcesevents/#anyserverresourcestart)

***

<a id="anyserverresourcestop"></a>

### anyServerResourceStop()

```ts
anyServerResourceStop(resourceName): void;
```

Defined in: events.ts:279

Triggered when any server resource stops.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`anyServerResourceStop`](/reference/server/api/events/resources/resourcesevents/#anyserverresourcestop)

***

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`damage`](/reference/server/api/events/players/playersevents/#damage)

***

<a id="doorstatechange"></a>

### doorStateChange()

```ts
doorStateChange(playerId, data): boolean | void;
```

Defined in: events.ts:372

Triggered when a any door's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`DoorStateChangeEventData`](/reference/server/api/events/world/doorstatechangeeventdata/) |

#### Returns

`boolean` \| `void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`doorStateChange`](/reference/server/api/events/world/worldevents/#doorstatechange)

***

<a id="entervehicle"></a>

### enterVehicle()

```ts
enterVehicle(id, seat): void;
```

Defined in: events.ts:448

Triggered when a player enters a vehicle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |
| `seat` | [`VehicleSeat`](/reference/server/api/entities/vehicles/vehicleseat/) |

#### Returns

`void`

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`enterVehicle`](/reference/server/api/events/vehicles/vehiclesevents/#entervehicle)

***

<a id="entitydespawn"></a>

### entityDespawn()

```ts
entityDespawn(id, type): void;
```

Defined in: events.ts:515

Triggered when an entity despawns.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | The entity ID |
| `type` | [`EntityType`](/reference/server/api/entities/entitytype/) | The entity type (see [EntityType](/reference/server/api/entities/entitytype/)) |

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`entityDespawn`](/reference/server/api/events/entities/entitiesevents/#entitydespawn)

***

<a id="entityspawn"></a>

### entitySpawn()

```ts
entitySpawn(id, type): void;
```

Defined in: events.ts:507

Triggered when an entity spawns.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | `number` | The entity ID |
| `type` | [`EntityType`](/reference/server/api/entities/entitytype/) | The entity type (see [EntityType](/reference/server/api/entities/entitytype/)) |

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`entitySpawn`](/reference/server/api/events/entities/entitiesevents/#entityspawn)

***

<a id="exitvehicle"></a>

### exitVehicle()

```ts
exitVehicle(id): void;
```

Defined in: events.ts:443

Triggered when a player exits a vehicle.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`exitVehicle`](/reference/server/api/events/vehicles/vehiclesevents/#exitvehicle)

***

<a id="explosion"></a>

### explosion()

```ts
explosion(playerId, data): boolean | void;
```

Defined in: events.ts:390

Triggered when an explosion occurs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`ExplosionEventData`](/reference/server/api/events/world/explosioneventdata/) |

#### Returns

`boolean` \| `void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`explosion`](/reference/server/api/events/world/worldevents/#explosion)

***

<a id="fire"></a>

### fire()

```ts
fire(playerId, data): boolean | void;
```

Defined in: events.ts:386

Triggered when a fire starts anywhere on map.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`FireEventData`](/reference/server/api/events/world/fireeventdata/) |

#### Returns

`boolean` \| `void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`fire`](/reference/server/api/events/world/worldevents/#fire)

***

<a id="gameobjectdespawn"></a>

### gameObjectDespawn()

```ts
gameObjectDespawn(id): void;
```

Defined in: events.ts:533

Triggered when a game object despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`gameObjectDespawn`](/reference/server/api/events/entities/entitiesevents/#gameobjectdespawn)

***

<a id="gameobjectspawn"></a>

### gameObjectSpawn()

```ts
gameObjectSpawn(id): void;
```

Defined in: events.ts:529

Triggered when a game object spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`gameObjectSpawn`](/reference/server/api/events/entities/entitiesevents/#gameobjectspawn)

***

<a id="liftstatechange"></a>

### liftStateChange()

```ts
liftStateChange(playerId, data): boolean | void;
```

Defined in: events.ts:379

Triggered when a any lift's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`LiftStateChangeEventData`](/reference/server/api/events/world/liftstatechangeeventdata/) |

#### Returns

`boolean` \| `void`

#### Inherited from

[`WorldEvents`](/reference/server/api/events/world/worldevents/).[`liftStateChange`](/reference/server/api/events/world/worldevents/#liftstatechange)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`meleeAction`](/reference/server/api/events/players/playersevents/#meleeaction)

***

<a id="objectdespawn"></a>

### objectDespawn()

```ts
objectDespawn(id): void;
```

Defined in: events.ts:524

Triggered when an object despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`objectDespawn`](/reference/server/api/events/entities/entitiesevents/#objectdespawn)

***

<a id="objectspawn"></a>

### objectSpawn()

```ts
objectSpawn(id): void;
```

Defined in: events.ts:520

Triggered when an object spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`EntitiesEvents`](/reference/server/api/events/entities/entitiesevents/).[`objectSpawn`](/reference/server/api/events/entities/entitiesevents/#objectspawn)

***

<a id="peddespawn"></a>

### pedDespawn()

```ts
pedDespawn(id): void;
```

Defined in: events.ts:494

Triggered when a ped despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`PedEvents`](/reference/server/api/events/peds/pedevents/).[`pedDespawn`](/reference/server/api/events/peds/pedevents/#peddespawn)

***

<a id="pedspawn"></a>

### pedSpawn()

```ts
pedSpawn(id): void;
```

Defined in: events.ts:490

Triggered when a ped spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`PedEvents`](/reference/server/api/events/peds/pedevents/).[`pedSpawn`](/reference/server/api/events/peds/pedevents/#pedspawn)

***

<a id="pickupchange"></a>

### pickupChange()

```ts
pickupChange(playerId, data): boolean | void;
```

Defined in: events.ts:459

Triggered when a pickup's state changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupChangeEventData`](/reference/server/api/events/pickups/pickupchangeeventdata/) |

#### Returns

`boolean` \| `void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupChange`](/reference/server/api/events/pickups/pickupsevents/#pickupchange)

***

<a id="pickupdespawn"></a>

### pickupDespawn()

```ts
pickupDespawn(id): void;
```

Defined in: events.ts:479

Triggered when a pickup despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupDespawn`](/reference/server/api/events/pickups/pickupsevents/#pickupdespawn)

***

<a id="pickupdrop"></a>

### pickupDrop()

```ts
pickupDrop(playerId, data): boolean | void;
```

Defined in: events.ts:469

Triggered when a pickup is dropped.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupCreateEventData`](/reference/server/api/events/pickups/pickupcreateeventdata/) |

#### Returns

`boolean` \| `void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupDrop`](/reference/server/api/events/pickups/pickupsevents/#pickupdrop)

***

<a id="pickupraise"></a>

### pickupRaise()

```ts
pickupRaise(playerId, data): boolean | void;
```

Defined in: events.ts:464

Triggered when a pickup is raised.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`PickupDespawnEventData`](/reference/server/api/events/pickups/pickupdespawneventdata/) |

#### Returns

`boolean` \| `void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupRaise`](/reference/server/api/events/pickups/pickupsevents/#pickupraise)

***

<a id="pickupspawn"></a>

### pickupSpawn()

```ts
pickupSpawn(id): void;
```

Defined in: events.ts:474

Triggered when a pickup spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`PickupsEvents`](/reference/server/api/events/pickups/pickupsevents/).[`pickupSpawn`](/reference/server/api/events/pickups/pickupsevents/#pickupspawn)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerAppearanceChange`](/reference/server/api/events/players/playersevents/#playerappearancechange)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerConnected`](/reference/server/api/events/players/playersevents/#playerconnected)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerConnecting`](/reference/server/api/events/players/playersevents/#playerconnecting)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerDeath`](/reference/server/api/events/players/playersevents/#playerdeath)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerDespawn`](/reference/server/api/events/players/playersevents/#playerdespawn)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerDisconnected`](/reference/server/api/events/players/playersevents/#playerdisconnected)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerHealing`](/reference/server/api/events/players/playersevents/#playerhealing)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerKnockdown`](/reference/server/api/events/players/playersevents/#playerknockdown)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerRespawn`](/reference/server/api/events/players/playersevents/#playerrespawn)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`playerSpawn`](/reference/server/api/events/players/playersevents/#playerspawn)

***

<a id="resourcesrefresh"></a>

### resourcesRefresh()

```ts
resourcesRefresh(): void;
```

Defined in: events.ts:291

Triggered when resources are refreshed.

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`resourcesRefresh`](/reference/server/api/events/resources/resourcesevents/#resourcesrefresh)

***

<a id="resourcestart"></a>

### resourceStart()

```ts
resourceStart(): void;
```

Defined in: events.ts:283

Triggered when a resource starts.

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`resourceStart`](/reference/server/api/events/resources/resourcesevents/#resourcestart)

***

<a id="resourcestop"></a>

### resourceStop()

```ts
resourceStop(): void;
```

Defined in: events.ts:287

Triggered when a resource stops.

#### Returns

`void`

#### Inherited from

[`ResourcesEvents`](/reference/server/api/events/resources/resourcesevents/).[`resourceStop`](/reference/server/api/events/resources/resourcesevents/#resourcestop)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`shootAction`](/reference/server/api/events/players/playersevents/#shootaction)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`throwGrenade`](/reference/server/api/events/players/playersevents/#throwgrenade)

***

<a id="vehiclecustomizationchange"></a>

### vehicleCustomizationChange()

```ts
vehicleCustomizationChange(playerId, data): void;
```

Defined in: events.ts:401

Triggered when a vehicle's customization changes (usually CrystalCoat).

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`VehicleCustomizationChangeEventData`](/reference/server/api/events/vehicles/vehiclecustomizationchangeeventdata/) |

#### Returns

`void`

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleCustomizationChange`](/reference/server/api/events/vehicles/vehiclesevents/#vehiclecustomizationchange)

***

<a id="vehicledespawn"></a>

### vehicleDespawn()

```ts
vehicleDespawn(id): void;
```

Defined in: events.ts:422

Triggered when a vehicle despawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleDespawn`](/reference/server/api/events/vehicles/vehiclesevents/#vehicledespawn)

***

<a id="vehicledestructionchange"></a>

### vehicleDestructionChange()

```ts
vehicleDestructionChange(playerId, data): void;
```

Defined in: events.ts:409

Triggered when a vehicle's destruction changes.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |
| `data` | [`VehicleDestructionChangeEventData`](/reference/server/api/events/vehicles/vehicledestructionchangeeventdata/) |

#### Returns

`void`

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleDestructionChange`](/reference/server/api/events/vehicles/vehiclesevents/#vehicledestructionchange)

***

<a id="vehiclehittedbyplayer"></a>

### vehicleHittedByPlayer()

```ts
vehicleHittedByPlayer(id, data): boolean | void;
```

Defined in: events.ts:435

Triggered when a vehicle is hit by a player.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |
| `data` | `VehicleHittedByPlayerEventData` |

#### Returns

`boolean` \| `void`

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleHittedByPlayer`](/reference/server/api/events/vehicles/vehiclesevents/#vehiclehittedbyplayer)

***

<a id="vehiclespawn"></a>

### vehicleSpawn()

```ts
vehicleSpawn(id): void;
```

Defined in: events.ts:417

Triggered when a vehicle spawns.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |

#### Returns

`void`

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleSpawn`](/reference/server/api/events/vehicles/vehiclesevents/#vehiclespawn)

***

<a id="vehicleweaponshoot"></a>

### vehicleWeaponShoot()

```ts
vehicleWeaponShoot(id, data): boolean | void;
```

Defined in: events.ts:427

Triggered when a vehicle's weapon shoots.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `id` | `number` |
| `data` | [`VehicleWeaponShootEventData`](/reference/server/api/events/vehicles/vehicleweaponshooteventdata/) |

#### Returns

`boolean` \| `void`

#### Inherited from

[`VehiclesEvents`](/reference/server/api/events/vehicles/vehiclesevents/).[`vehicleWeaponShoot`](/reference/server/api/events/vehicles/vehiclesevents/#vehicleweaponshoot)

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

#### Inherited from

[`PlayersEvents`](/reference/server/api/events/players/playersevents/).[`weaponReload`](/reference/server/api/events/players/playersevents/#weaponreload)
