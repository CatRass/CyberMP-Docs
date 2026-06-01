---
editUrl: false
next: false
prev: false
title: "MpResources"
---

Defined in: resources.ts:1

## Methods

<a id="getcurrentname"></a>

### getCurrentName()

> **getCurrentName**(): `string`

Defined in: resources.ts:27

Gets the current resource's name.

#### Returns

`string`

Resource name.

***

<a id="getmetadata"></a>

### getMetadata()

> **getMetadata**(`resourceName`, `keyName`, `index`): `string`

Defined in: resources.ts:36

Gets metadata from a resource manifest.

#### Parameters

##### resourceName

`string`

Resource name.

##### keyName

`string`

Metadata key.

##### index

`number`

Index (if multiple values exist).

#### Returns

`string`

Metadata string.

***

<a id="getstate"></a>

### getState()

> **getState**(`resourceName`): `string`

Defined in: resources.ts:7

Gets the current state of a resource.

#### Parameters

##### resourceName

`string`

The resource to check.

#### Returns

`string`

Resource state as string.

***

<a id="loadfile"></a>

### loadFile()

> **loadFile**(`resourceName`, `pathToResource`): `string`

Defined in: resources.ts:44

Reads a file inside a resource and returns its contents.

#### Parameters

##### resourceName

`string`

Name of the resource.

##### pathToResource

`string`

Path to the file.

#### Returns

`string`

File content as string.

***

<a id="restart"></a>

### restart()

> **restart**(`resourceName`): `void`

Defined in: resources.ts:21

#### Parameters

##### resourceName

`string`

#### Returns

`void`

***

<a id="start"></a>

### start()

> **start**(`resourceName`): `void`

Defined in: resources.ts:13

Starts a specific resource by name.

#### Parameters

##### resourceName

`string`

Name of the resource to start.

#### Returns

`void`

***

<a id="stop"></a>

### stop()

> **stop**(`resourceName`): `void`

Defined in: resources.ts:19

Stops a specific resource by name.

#### Parameters

##### resourceName

`string`

Name of the resource to stop.

#### Returns

`void`
