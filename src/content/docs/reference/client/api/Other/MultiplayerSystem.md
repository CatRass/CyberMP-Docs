---
editUrl: false
next: false
prev: false
title: "MultiplayerSystem"
---

Defined in: game.d.ts:46

## Methods

<a id="declaredeletedobjects"></a>

### DeclareDeletedObjects()

```ts
DeclareDeletedObjects(objectClassMap): void;
```

Defined in: game.d.ts:51

Removes game object classes (e.g., T extends gameObject, playerPuppet, NpcPuppet) from the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objectClassMap` | keyof `MpClasses`[] | Array of class names to delete. |

#### Returns

`void`

***

<a id="deletedobjectsbyuniquehash"></a>

### DeletedObjectsByUniqueHash()

```ts
DeletedObjectsByUniqueHash(objectHashMap): void;
```

Defined in: game.d.ts:57

Removes game objects by their unique hashes from the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objectHashMap` | `string`[] | Array of unique game object hashes to delete. |

#### Returns

`void`

***

<a id="setdefaultspawnposition"></a>

### SetDefaultSpawnPosition()

```ts
SetDefaultSpawnPosition(position, yaw): void;
```

Defined in: game.d.ts:65

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `position` | `Vector3` |
| `yaw` | `number` |

#### Returns

`void`

***

<a id="usedefaulteffectsbyplatform"></a>

### UseDefaultEffectsByPlatform()

```ts
UseDefaultEffectsByPlatform(value): void;
```

Defined in: game.d.ts:63

Enables or disables synchronization of default effects, as defined by the CyberMP platform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` | Whether to use the default effects. |

#### Returns

`void`
