---
editUrl: false
next: false
prev: false
title: "MpEvents"
---

Defined in: events.d.ts:37

## Methods

<a id="addcommand"></a>

### addCommand()

```ts
addCommand(commandName, callback): void;
```

Defined in: events.d.ts:59

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `commandName` | `string` |
| `callback` | (`id`, `args`) => `void` |

#### Returns

`void`

***

<a id="emit"></a>

### emit()

```ts
emit(eventName, ...args): void;
```

Defined in: events.d.ts:38

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

***

<a id="emitcef"></a>

### emitCef()

```ts
emitCef(eventName, ...args): void;
```

Defined in: events.d.ts:40

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

***

<a id="emitserver"></a>

### emitServer()

```ts
emitServer(eventName, ...args): void;
```

Defined in: events.d.ts:39

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

***

<a id="off"></a>

### off()

#### Call Signature

```ts
off<E>(eventName, callback): void;
```

Defined in: events.d.ts:53

##### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* keyof [`MpEventsMap`](/reference/client/api/other/mpeventsmap/) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `E` |
| `callback` | [`MpEventsMap`](/reference/client/api/other/mpeventsmap/)\[`E`\] |

##### Returns

`void`

#### Call Signature

```ts
off(eventName, callback): void;
```

Defined in: events.d.ts:57

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (...`args`) => `void` |

##### Returns

`void`

***

<a id="on"></a>

### on()

#### Call Signature

```ts
on<E>(eventName, callback): void;
```

Defined in: events.d.ts:50

##### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* keyof [`MpEventsMap`](/reference/client/api/other/mpeventsmap/) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `E` |
| `callback` | [`MpEventsMap`](/reference/client/api/other/mpeventsmap/)\[`E`\] |

##### Returns

`void`

#### Call Signature

```ts
on(eventName, callback): void;
```

Defined in: events.d.ts:51

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (...`args`) => `void` |

##### Returns

`void`

***

<a id="oncef"></a>

### onCef()

#### Call Signature

```ts
onCef<E>(eventName, callback): void;
```

Defined in: events.d.ts:44

##### Type Parameters

| Type Parameter |
| ------ |
| `E` *extends* keyof [`MpCefEventsMap`](/reference/client/api/other/mpcefeventsmap/) |

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `E` |
| `callback` | [`MpCefEventsMap`](/reference/client/api/other/mpcefeventsmap/)\[`E`\] |

##### Returns

`void`

#### Call Signature

```ts
onCef(eventName, callback): void;
```

Defined in: events.d.ts:48

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (...`args`) => `void` |

##### Returns

`void`

***

<a id="onserver"></a>

### onServer()

```ts
onServer(eventName, callback): void;
```

Defined in: events.d.ts:42

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `eventName` | `string` |
| `callback` | (...`args`) => `void` |

#### Returns

`void`
