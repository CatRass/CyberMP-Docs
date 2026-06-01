---
editUrl: false
next: false
prev: false
title: "extended__gameuiICharacterCustomizationSystem"
---

Defined in: game.d.ts:374

Extended by CyberMP `gameuiICharacterCustomizationSystem` class

## Methods

<a id="onplayergenderchanged"></a>

### OnPlayerGenderChanged()

> **OnPlayerGenderChanged**(`gender`): `void`

Defined in: game.d.ts:386

Callback fired immediately following successful adjustments to player character gender states.

#### Parameters

##### gender

[`EPlayerGender`](/reference/client/api/enums/eplayergender/)

The incoming target modified gender enumeration value.

#### Returns

`void`

***

<a id="setplayergender"></a>

### SetPlayerGender()

> **SetPlayerGender**(`gender`, `savedPos?`): `void`

Defined in: game.d.ts:380

Updates player's gender state representation variables directly inside system profiles.

#### Parameters

##### gender

[`EPlayerGender`](/reference/client/api/enums/eplayergender/)

Target gender enum identifier asset option.

##### savedPos?

`boolean`

Optional parameter to persist or retain vector frame state context layout positions.

#### Returns

`void`
