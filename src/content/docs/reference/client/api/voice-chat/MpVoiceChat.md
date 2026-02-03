---
editUrl: false
next: false
prev: false
title: "MpVoiceChat"
---

Defined in: server-types/index.d.ts:43

## Methods

<a id="bindpushtotalkkey"></a>

### bindPushToTalkKey()

```ts
bindPushToTalkKey(key): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:9

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `key` | `number` |

#### Returns

`void`

***

<a id="changeactivationtype"></a>

### changeActivationType()

```ts
changeActivationType(type): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:8

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | [`VoiceActivationType`](/reference/client/api/enums/voiceactivationtype/) |

#### Returns

`void`

***

<a id="createchannel"></a>

### createChannel()

```ts
createChannel(voiceId): void;
```

Defined in: server-types/index.d.ts:45

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `voiceId` | `number` |

#### Returns

`void`

***

<a id="enable"></a>

### enable()

```ts
enable(state): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:7

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `state` | `boolean` |

#### Returns

`void`

***

<a id="getinputdevices"></a>

### getInputDevices()

```ts
getInputDevices(): string[];
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:14

#### Returns

`string`[]

***

<a id="getoutputdevices"></a>

### getOutputDevices()

```ts
getOutputDevices(): string[];
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:13

#### Returns

`string`[]

***

<a id="isactive"></a>

### isActive()

```ts
isActive(): boolean;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:19

#### Returns

`boolean`

***

<a id="isplayermuted"></a>

### isPlayerMuted()

```ts
isPlayerMuted(playerId): boolean;
```

Defined in: server-types/index.d.ts:46

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |

#### Returns

`boolean`

***

<a id="muteplayer"></a>

### mutePlayer()

```ts
mutePlayer(playerId): void;
```

Defined in: server-types/index.d.ts:44

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `playerId` | `number` |

#### Returns

`void`

***

<a id="setinputdevice"></a>

### setInputDevice()

```ts
setInputDevice(index): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:16

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`void`

***

<a id="setinputvolume"></a>

### setInputVolume()

```ts
setInputVolume(value): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:11

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

***

<a id="setmicrophonesensitivity"></a>

### setMicrophoneSensitivity()

```ts
setMicrophoneSensitivity(value): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:12

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

***

<a id="setoutputdevice"></a>

### setOutputDevice()

```ts
setOutputDevice(index): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:15

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `index` | `number` |

#### Returns

`void`

***

<a id="setoutputvolume"></a>

### setOutputVolume()

```ts
setOutputVolume(value): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:10

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`void`

***

<a id="setvoiceinputdistance"></a>

### setVoiceInputDistance()

```ts
setVoiceInputDistance(distance): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:17

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `distance` | `number` |

#### Returns

`void`

***

<a id="setvoiceoutputdistance"></a>

### setVoiceOutputDistance()

```ts
setVoiceOutputDistance(distance): void;
```

Defined in: client-types/out/precomputed/voice-chat.d.ts:18

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `distance` | `number` |

#### Returns

`void`
