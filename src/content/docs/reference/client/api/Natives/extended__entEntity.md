---
editUrl: false
next: false
prev: false
title: "extended__entEntity"
---

Defined in: game.d.ts:349

Extended by CyberMP `entEntity` class

## Methods

<a id="getmorphweights"></a>

### GetMorphWeights()

> **GetMorphWeights**(): `entMorphTargetWeightEntry`[]

Defined in: game.d.ts:354

Obtains lists specifying explicit weight indexes controlling facial custom blendshapes or structural targets.

#### Returns

`entMorphTargetWeightEntry`[]

Array listing mesh blend weights structures.

***

<a id="reassemblewithcomponents"></a>

### ReassembleWithComponents()

> **ReassembleWithComponents**(`arr`): `void`

Defined in: game.d.ts:360

Forces the entity container model frame structural layers to assemble and update via selected visual components arrays.

#### Parameters

##### arr

`entIComponent`[]

List containing components structures to attach.

#### Returns

`void`

***

<a id="teleportped"></a>

### TeleportPed()

> **TeleportPed**(`position`, `rotation?`): `void`

Defined in: game.d.ts:367

Teleports a physical game object / Pedestrian directly to specific vector coordinates.

#### Parameters

##### position

`Vector3`

Target 3D destination coordinate vector.

##### rotation?

`EulerAngles`

Optional Euler orientation layout coordinates (Pitch, Roll, Yaw).

#### Returns

`void`
