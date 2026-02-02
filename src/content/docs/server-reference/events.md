---
editUrl: false
next: false
prev: false
title: "events"
---

## Type Aliases

### OnDamageEvent

> **OnDamageEvent** = `object`

Defined in: server-types/events.d.ts:1

#### Properties

##### compName

> **compName**: `string`[]

Defined in: server-types/events.d.ts:18

##### damageType

> **damageType**: `number`

Defined in: server-types/events.d.ts:2

##### damageValues

> **damageValues**: `number`[]

Defined in: server-types/events.d.ts:15

##### dismembermentParts

> **dismembermentParts**: `any`[]

Defined in: server-types/events.d.ts:19

##### flags

> **flags**: `number`[]

Defined in: server-types/events.d.ts:16

##### hitComponent

> **hitComponent**: `number`

Defined in: server-types/events.d.ts:8

##### hitDirectionX

> **hitDirectionX**: `number`

Defined in: server-types/events.d.ts:12

##### hitDirectionY

> **hitDirectionY**: `number`

Defined in: server-types/events.d.ts:13

##### hitDirectionZ

> **hitDirectionZ**: `number`

Defined in: server-types/events.d.ts:14

##### hitGlobalIds

> **hitGlobalIds**: `number`[]

Defined in: server-types/events.d.ts:17

##### hitPositionX

> **hitPositionX**: `number`

Defined in: server-types/events.d.ts:9

##### hitPositionY

> **hitPositionY**: `number`

Defined in: server-types/events.d.ts:10

##### hitPositionZ

> **hitPositionZ**: `number`

Defined in: server-types/events.d.ts:11

##### hitReactionZones

> **hitReactionZones**: `any`[]

Defined in: server-types/events.d.ts:20

##### hitShapeNames

> **hitShapeNames**: `string`[]

Defined in: server-types/events.d.ts:22

##### hitShapeTypes

> **hitShapeTypes**: `any`[]

Defined in: server-types/events.d.ts:21

##### killerId

> **killerId**: `number`

Defined in: server-types/events.d.ts:6

##### overrideDefaultDamage

> **overrideDefaultDamage**: `boolean`

Defined in: server-types/events.d.ts:4

##### physicsMaterials

> **physicsMaterials**: `string`[]

Defined in: server-types/events.d.ts:23

##### totalDamage

> **totalDamage**: `number`

Defined in: server-types/events.d.ts:5

##### victimId

> **victimId**: `number`

Defined in: server-types/events.d.ts:7

##### weaponHash

> **weaponHash**: `number`

Defined in: server-types/events.d.ts:3

***

### OnDoorChangeStateEvent

> **OnDoorChangeStateEvent** = `object`

Defined in: server-types/events.d.ts:26

#### Properties

##### hashObject

> **hashObject**: `number`

Defined in: server-types/events.d.ts:27

##### posX

> **posX**: `number`

Defined in: server-types/events.d.ts:29

##### posY

> **posY**: `number`

Defined in: server-types/events.d.ts:30

##### posZ

> **posZ**: `number`

Defined in: server-types/events.d.ts:31

##### state

> **state**: `boolean`

Defined in: server-types/events.d.ts:28

***

### OnLiftChangeStateEvent

> **OnLiftChangeStateEvent** = `object`

Defined in: server-types/events.d.ts:34

#### Properties

##### currentFloor

> **currentFloor**: `number`

Defined in: server-types/events.d.ts:38

##### hashObject

> **hashObject**: `number`

Defined in: server-types/events.d.ts:35

##### maxFloor

> **maxFloor**: `number`

Defined in: server-types/events.d.ts:39

##### playerID

> **playerID**: `number`

Defined in: server-types/events.d.ts:36

##### posX

> **posX**: `number`

Defined in: server-types/events.d.ts:40

##### posY

> **posY**: `number`

Defined in: server-types/events.d.ts:41

##### posZ

> **posZ**: `number`

Defined in: server-types/events.d.ts:42

##### targetFloor

> **targetFloor**: `number`

Defined in: server-types/events.d.ts:37

## References

### MpEvents

Re-exports [MpEvents](/server-reference/index/#mpevents-1)
