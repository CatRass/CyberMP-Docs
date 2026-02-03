---
editUrl: false
next: false
prev: false
title: "CyberMP"
---

Defined in: client-types/out/precomputed/classes.d.ts:4

Class with custom CyberMP native methods.

## Methods

<a id="declaredeletedobjects"></a>

### DeclareDeletedObjects()

```ts
DeclareDeletedObjects(objectClassMap): void;
```

Defined in: client-types/out/precomputed/classes.d.ts:9

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

Defined in: client-types/out/precomputed/classes.d.ts:15

Removes game objects by their unique hashes from the map.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `objectHashMap` | `string`[] | Array of unique game object hashes to delete. |

#### Returns

`void`

***

<a id="usedefaulteffectsbyplatform"></a>

### UseDefaultEffectsByPlatform()

```ts
UseDefaultEffectsByPlatform(value): void;
```

Defined in: client-types/out/precomputed/classes.d.ts:21

Enables or disables synchronization of default effects, as defined by the CyberMP platform.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `boolean` | Whether to use the default effects. |

#### Returns

`void`
