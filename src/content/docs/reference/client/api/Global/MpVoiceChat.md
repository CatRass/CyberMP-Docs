---
editUrl: false
next: false
prev: false
title: "MpVoiceChat"
---

Defined in: voice-chat.d.ts:7

Interface managing the integrated voice communication subsystem.
Provides controls for device routing, audio leveling, capture thresholds, and distance-based 3D spatial attenuation.

## Methods

<a id="bindpushtotalkkey"></a>

### bindPushToTalkKey()

> **bindPushToTalkKey**(`key`): `void`

Defined in: voice-chat.d.ts:24

Binds a specific hardware key code or input identifier to trigger microphone transmission when using Push-To-Talk.

#### Parameters

##### key

`number`

The numerical key code or explicit structural input key enum to assign.

#### Returns

`void`

***

<a id="changeactivationtype"></a>

### changeActivationType()

> **changeActivationType**(`type`): `void`

Defined in: voice-chat.d.ts:18

Modifies how the local microphone capture is triggered (e.g., Continuous, Voice Activity, or Push-To-Talk).

#### Parameters

##### type

[`EVoiceActivationType`](/reference/client/api/enums/evoiceactivationtype/)

The target voice activation mode enumeration value.

#### Returns

`void`

***

<a id="enable"></a>

### enable()

> **enable**(`state`): `void`

Defined in: voice-chat.d.ts:12

Toggles the global operational state of the voice chat system.

#### Parameters

##### state

`boolean`

`true` to fully initialize and connect to the voice server channels, `false` to shut down capture and playback.

#### Returns

`void`

***

<a id="getinputdevices"></a>

### getInputDevices()

> **getInputDevices**(): `string`[]

Defined in: voice-chat.d.ts:55

Queries the system multimedia framework to retrieve descriptive text labels of all available physical audio input recording devices.

#### Returns

`string`[]

An array containing the plaintext names or driver descriptors of accessible input hardware components.

***

<a id="getoutputdevices"></a>

### getOutputDevices()

> **getOutputDevices**(): `string`[]

Defined in: voice-chat.d.ts:49

Queries the system multimedia framework to retrieve descriptive text labels of all available physical audio output playback devices.

#### Returns

`string`[]

An array containing the plaintext names or driver descriptors of accessible output hardware components.

***

<a id="isactive"></a>

### isActive()

> **isActive**(): `boolean`

Defined in: voice-chat.d.ts:85

Evaluates whether the voice client manager is initialized, connected to a voice channel, and operating normally.

#### Returns

`boolean`

`true` if the system layer is running and ready, otherwise `false`.

***

<a id="setinputdevice"></a>

### setInputDevice()

> **setInputDevice**(`index`): `void`

Defined in: voice-chat.d.ts:67

Selects and hooks the physical recording mic input stream into a specific hardware component using its indexed layout match.

#### Parameters

##### index

`number`

The hardware array element position index matching the list returned by [getInputDevices](/reference/client/api/global/mpvoicechat/#getinputdevices).

#### Returns

`void`

***

<a id="setinputdistance"></a>

### setInputDistance()

> **setInputDistance**(`distance`): `void`

Defined in: voice-chat.d.ts:73

Configures the local input listening radius or proximity box boundaries.

#### Parameters

##### distance

`number`

Maximum distance measurement units used to bound transmission scopes.

#### Returns

`void`

***

<a id="setinputvolume"></a>

### setInputVolume()

> **setInputVolume**(`value`): `void`

Defined in: voice-chat.d.ts:36

Adjusts the local recording gain modification layer applied to the hardware microphone input before network broadcasting.

#### Parameters

##### value

`number`

Volumetric multiplier factor (typically ranging from `0.0` to `1.0`).

#### Returns

`void`

***

<a id="setmicrophonesensitivity"></a>

### setMicrophoneSensitivity()

> **setMicrophoneSensitivity**(`value`): `void`

Defined in: voice-chat.d.ts:43

Sets the voice activity detection (VAD) audio floor threshold.
Captured audio below this amplitude level will be automatically gated and ignored.

#### Parameters

##### value

`number`

The cutoff sensitivity threshold limit.

#### Returns

`void`

***

<a id="setoutputdevice"></a>

### setOutputDevice()

> **setOutputDevice**(`index`): `void`

Defined in: voice-chat.d.ts:61

Routes the voice playback audio rendering stream into a specific physical output device using its indexed layout match.

#### Parameters

##### index

`number`

The hardware array element position index matching the list returned by [getOutputDevices](/reference/client/api/global/mpvoicechat/#getoutputdevices).

#### Returns

`void`

***

<a id="setoutputdistance"></a>

### setOutputDistance()

> **setOutputDistance**(`distance`): `void`

Defined in: voice-chat.d.ts:79

Sets the maximum linear distance radius over which a remote player's 3D spatialized voice stream will attenuate down to silence.

#### Parameters

##### distance

`number`

Proximity spatial calculation distance limits.

#### Returns

`void`

***

<a id="setoutputvolume"></a>

### setOutputVolume()

> **setOutputVolume**(`value`): `void`

Defined in: voice-chat.d.ts:30

Sets the master playback volume level for inbound remote voice streams.

#### Parameters

##### value

`number`

Volumetric multiplier factor (typically ranging from `0.0` for muted up to `1.0` or higher for boosted gain).

#### Returns

`void`
