---
editUrl: false
next: false
prev: false
title: "MpCommands"
---

Defined in: commands.ts:6

## Methods

<a id="add"></a>

### add()

```ts
add(commandName, callback): void;
```

Defined in: commands.ts:12

Register a command in the server scope.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandName` | `string` | Command name without "/". |
| `callback` | (`player`, `args`) => `void` | Callback with player and args. |

#### Returns

`void`
