---
editUrl: false
next: false
prev: false
title: "MpCefEventsMap"
---

Defined in: events.d.ts:126

Map containing standard event listeners bound to web context layers (Chromium Embedded Framework).

## Methods

<a id="domready"></a>

### domReady()

> **domReady**(`name`): `void`

Defined in: events.d.ts:131

Fired when a target browser instance finishes parsing the document structure tree.

#### Parameters

##### name

`string`

Unique registration name tracking the browser frame entity.

#### Returns

`void`

***

<a id="loadingfailed"></a>

### loadingFailed()

> **loadingFailed**(`error`): `void`

Defined in: events.d.ts:137

Fired if the underlying browser layer drops connectivity or triggers initialization errors.

#### Parameters

##### error

[`CefLoadingFailedError`](/reference/client/api/events/cefloadingfailederror/)

The comprehensive failure metadata payload context object.

#### Returns

`void`
