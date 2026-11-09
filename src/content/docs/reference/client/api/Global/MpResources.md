---
editUrl: false
next: false
prev: false
title: "MpResources"
---

Defined in: resources.d.ts:9

Interface for managing, loading, and tracking resources.

Provides utilities for reading configuration files (TOML), loading raw file contents,
querying the lifecycle status of specific assets, and identifying the active resource container.

## Methods

<a id="getcurrentname"></a>

### getCurrentName()

> **getCurrentName**(): `string`

Defined in: resources.d.ts:36

Gets the name identifier of the current resource or script execution context.

#### Returns

`string`

The name string of the active resource bundle.

***

<a id="getstate"></a>

### getState()

> **getState**(`name`): [`EResourceState`](/reference/client/api/enums/eresourcestate/)

Defined in: resources.d.ts:30

Queries the current loading or runtime execution state of a specific resource.

#### Parameters

##### name

`string`

The name of the target resource to check.

#### Returns

[`EResourceState`](/reference/client/api/enums/eresourcestate/)

The current operational state enumeration value.

***

<a id="gettoml"></a>

### getTOML()

> **getTOML**(`name`): `string`

Defined in: resources.d.ts:15

Retrieves the raw string contents of a specified TOML configuration file.

#### Parameters

##### name

`string`

The name or identifier key of the target TOML resource.

#### Returns

`string`

The raw TOML formatted configuration string.

***

<a id="loadfile"></a>

### loadFile()

> **loadFile**(`resourceName`, `pathToResource`): `string`

Defined in: resources.d.ts:23

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
