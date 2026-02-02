---
editUrl: false
next: false
prev: false
title: "voice-chat"
---

## Interfaces

### MpVoiceChat

Defined in: server-types/index.d.ts:43

#### Methods

##### bindPushToTalkKey()

> **bindPushToTalkKey**(`key`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:9

###### Parameters

###### key

`number`

###### Returns

`void`

##### changeActivationType()

> **changeActivationType**(`type`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:8

###### Parameters

###### type

[`VoiceActivationType`](/client-reference/enums/#voiceactivationtype)

###### Returns

`void`

##### createChannel()

> **createChannel**(`voiceId`): `void`

Defined in: server-types/index.d.ts:45

###### Parameters

###### voiceId

`number`

###### Returns

`void`

##### enable()

> **enable**(`state`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:7

###### Parameters

###### state

`boolean`

###### Returns

`void`

##### getInputDevices()

> **getInputDevices**(): `string`[]

Defined in: client-types/out/precomputed/voice-chat.d.ts:14

###### Returns

`string`[]

##### getOutputDevices()

> **getOutputDevices**(): `string`[]

Defined in: client-types/out/precomputed/voice-chat.d.ts:13

###### Returns

`string`[]

##### isActive()

> **isActive**(): `boolean`

Defined in: client-types/out/precomputed/voice-chat.d.ts:19

###### Returns

`boolean`

##### isPlayerMuted()

> **isPlayerMuted**(`playerId`): `boolean`

Defined in: server-types/index.d.ts:46

###### Parameters

###### playerId

`number`

###### Returns

`boolean`

##### mutePlayer()

> **mutePlayer**(`playerId`): `void`

Defined in: server-types/index.d.ts:44

###### Parameters

###### playerId

`number`

###### Returns

`void`

##### setInputDevice()

> **setInputDevice**(`index`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:16

###### Parameters

###### index

`number`

###### Returns

`void`

##### setInputVolume()

> **setInputVolume**(`value`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:11

###### Parameters

###### value

`number`

###### Returns

`void`

##### setMicrophoneSensitivity()

> **setMicrophoneSensitivity**(`value`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:12

###### Parameters

###### value

`number`

###### Returns

`void`

##### setOutputDevice()

> **setOutputDevice**(`index`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:15

###### Parameters

###### index

`number`

###### Returns

`void`

##### setOutputVolume()

> **setOutputVolume**(`value`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:10

###### Parameters

###### value

`number`

###### Returns

`void`

##### setVoiceInputDistance()

> **setVoiceInputDistance**(`distance`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:17

###### Parameters

###### distance

`number`

###### Returns

`void`

##### setVoiceOutputDistance()

> **setVoiceOutputDistance**(`distance`): `void`

Defined in: client-types/out/precomputed/voice-chat.d.ts:18

###### Parameters

###### distance

`number`

###### Returns

`void`
