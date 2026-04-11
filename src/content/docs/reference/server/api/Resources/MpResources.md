---
editUrl: false
next: false
prev: false
title: "MpResources"
---

Defined in: resources.d.ts:5

## Methods

<a id="getcurrentname"></a>

### getCurrentName()

```ts
getCurrentName(): string;
```

Defined in: resources.d.ts:31

Gets the current resource's name.

#### Returns

`string`

Resource name.

***

<a id="getmetadata"></a>

### getMetadata()

```ts
getMetadata(
   resourceName, 
   keyName, 
   index): string;
```

Defined in: resources.d.ts:40

Gets metadata from a resource manifest.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Resource name. |
| `keyName` | `string` | Metadata key. |
| `index` | `number` | Index (if multiple values exist). |

#### Returns

`string`

Metadata string.

***

<a id="getstate"></a>

### getState()

```ts
getState(resourceName): string;
```

Defined in: resources.d.ts:11

Gets the current state of a resource.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | The resource to check. |

#### Returns

`string`

Resource state as string.

***

<a id="loadfile"></a>

### loadFile()

```ts
loadFile(resourceName, pathToResource): string;
```

Defined in: resources.d.ts:48

Reads a file inside a resource and returns its contents.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Name of the resource. |
| `pathToResource` | `string` | Path to the file. |

#### Returns

`string`

File content as string.

***

<a id="restart"></a>

### restart()

```ts
restart(resourceName): void;
```

Defined in: resources.d.ts:25

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

***

<a id="start"></a>

### start()

```ts
start(resourceName): void;
```

Defined in: resources.d.ts:17

Starts a specific resource by name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Name of the resource to start. |

#### Returns

`void`

***

<a id="stop"></a>

### stop()

```ts
stop(resourceName): void;
```

Defined in: resources.d.ts:23

Stops a specific resource by name.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `resourceName` | `string` | Name of the resource to stop. |

#### Returns

`void`
