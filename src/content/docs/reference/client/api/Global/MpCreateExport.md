---
editUrl: false
next: false
prev: false
title: "MpCreateExport"
---

> **MpCreateExport** = \<`T`, `R`\>(`name`, `callback`) => `void`

Defined in: exports.d.ts:47

Defines a function signature used to expose a local routine to the global environment.

Registers a callback execution mapping under a specific name identifier, making it
discoverable and executable by separate script runtime containers.

## Type Parameters

<a id="__typet"></a>

### T

`T` *extends* `unknown`[] = `unknown`[]

Array type mapping the callback's expected input parameters.

<a id="__typer"></a>

### R

`R` = `unknown`

The expected synchronous or asynchronous return layout pattern.

## Parameters

### name

`string`

The unique public string label assigned to this export entry point.

### callback

(...`args`) => `R` \| `Promise`\<`R`\>

The underlying functional routine logic triggered upon external invocation.

## Returns

`void`
