---
editUrl: false
next: false
prev: false
title: "MpServer"
---

Defined in: mp.ts:64

## Properties

<a id="commands"></a>

### commands

```ts
commands: MpCommands;
```

Defined in: mp.ts:68

***

<a id="config"></a>

### config

```ts
config: ServerConfig;
```

Defined in: mp.ts:92

***

<a id="entities"></a>

### entities

```ts
entities: MpEntities;
```

Defined in: mp.ts:69

***

<a id="events"></a>

### events

```ts
events: MpEvents;
```

Defined in: mp.ts:65

***

<a id="hashes"></a>

### hashes

```ts
hashes: MpHashes;
```

Defined in: mp.ts:75

***

<a id="meta"></a>

### meta

```ts
meta: MpMeta;
```

Defined in: mp.ts:66

***

<a id="mpentity"></a>

### MpEntity

```ts
MpEntity: Class<MpEntity<EntityType>>;
```

Defined in: mp.ts:80

***

<a id="mpobject"></a>

### MpObject

```ts
MpObject: Class<MpObject>;
```

Defined in: mp.ts:84

***

<a id="mpped"></a>

### MpPed

```ts
MpPed: Class<MpPed>;
```

Defined in: mp.ts:83

***

<a id="mppickup"></a>

### MpPickup

```ts
MpPickup: Class<MpPickup>;
```

Defined in: mp.ts:81

***

<a id="mpplayer"></a>

### MpPlayer

```ts
MpPlayer: Class<MpPlayer>;
```

Defined in: mp.ts:79

***

<a id="mpvehicle"></a>

### MpVehicle

```ts
MpVehicle: Class<MpVehicle>;
```

Defined in: mp.ts:82

***

<a id="objects"></a>

### objects

```ts
objects: MpObjects;
```

Defined in: mp.ts:72

***

<a id="peds"></a>

### peds

```ts
peds: MpPeds;
```

Defined in: mp.ts:74

***

<a id="pickups"></a>

### pickups

```ts
pickups: MpPickups;
```

Defined in: mp.ts:73

***

<a id="players"></a>

### players

```ts
players: MpPlayers;
```

Defined in: mp.ts:71

***

<a id="resources"></a>

### resources

```ts
resources: MpResources;
```

Defined in: mp.ts:67

***

<a id="vehicles"></a>

### vehicles

```ts
vehicles: MpVehicles;
```

Defined in: mp.ts:70

## Methods

<a id="cancelevent"></a>

### cancelEvent()

```ts
cancelEvent(): void;
```

Defined in: mp.ts:77

#### Returns

`void`

***

<a id="isserver"></a>

### isServer()

```ts
isServer(): boolean;
```

Defined in: mp.ts:90

Checks if the code is running on the server.

#### Returns

`boolean`

True if running on server, false otherwise.
