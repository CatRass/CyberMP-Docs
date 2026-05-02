---
editUrl: false
next: false
prev: false
title: "ResourcesEvents"
---

Defined in: events.ts:263

Events related to resources.

## Extended by

- [`MpEventsMap`](/reference/server/api/events/mpeventsmap/)

## Methods

<a id="anyresourcestart"></a>

### anyResourceStart()

```ts
anyResourceStart(resourceName): void;
```

Defined in: events.ts:267

Triggered when any resource starts.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

***

<a id="anyresourcestop"></a>

### anyResourceStop()

```ts
anyResourceStop(resourceName): void;
```

Defined in: events.ts:271

Triggered when any resource stops.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

***

<a id="anyserverresourcestart"></a>

### anyServerResourceStart()

```ts
anyServerResourceStart(resourceName): void;
```

Defined in: events.ts:275

Triggered when any server resource starts.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

***

<a id="anyserverresourcestop"></a>

### anyServerResourceStop()

```ts
anyServerResourceStop(resourceName): void;
```

Defined in: events.ts:279

Triggered when any server resource stops.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `resourceName` | `string` |

#### Returns

`void`

***

<a id="resourcesrefresh"></a>

### resourcesRefresh()

```ts
resourcesRefresh(): void;
```

Defined in: events.ts:291

Triggered when resources are refreshed.

#### Returns

`void`

***

<a id="resourcestart"></a>

### resourceStart()

```ts
resourceStart(): void;
```

Defined in: events.ts:283

Triggered when a resource starts.

#### Returns

`void`

***

<a id="resourcestop"></a>

### resourceStop()

```ts
resourceStop(): void;
```

Defined in: events.ts:287

Triggered when a resource stops.

#### Returns

`void`
