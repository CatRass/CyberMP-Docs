---
editUrl: false
next: false
prev: false
title: "MpExports"
---

> **MpExports** = [`MpExternalExports`](/reference/client/api/global/mpexternalexports/) & [`MpCreateExport`](/reference/client/api/global/mpcreateexport/)

Defined in: exports.d.ts:13

Interface managing cross-resource execution pipelines.

This intersection type enables a dual-purpose pattern: it can be invoked directly as a
function to register and expose local routines (`MpCreateExport`), or accessed as a nested
directory dictionary to invoke public endpoints exposed by external resources (`MpExternalExports`).

## Example

```ts
// in resource named "freeroam" -
mp.exports('showNotification', (message) => console.log("Notification from freeroam", message))
// triggering this function in any other resource -
mp.exports.freeroam.showNotification('test message')
```
