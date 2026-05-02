---
editUrl: false
next: false
prev: false
title: "EntitiesEvents"
---

Defined in: events.ts:500

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

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
