---
editUrl: false
next: false
prev: false
title: "classes"
---

## Classes

### gameScriptableSystemsContainer

Defined in: client-types/out/precomputed/classes.d.ts:60

#### Extends

- `gameIScriptableSystemsContainer`

#### Type Parameters

##### Map

`Map` = [`OnlyExtendingScriptableSystem`](/client-reference/classes/#onlyextendingscriptablesystem)\<`MpClasses`\>

#### Constructors

##### Constructor

> **new gameScriptableSystemsContainer**\<`Map`\>(): [`gameScriptableSystemsContainer`](/client-reference/classes/#gamescriptablesystemscontainer)\<`Map`\>

###### Returns

[`gameScriptableSystemsContainer`](/client-reference/classes/#gamescriptablesystemscontainer)\<`Map`\>

#### Methods

##### Get()

> **Get**\<`N`\>(`systemName`): [`UnwrapMpClass`](/client-reference/primitives/#unwrapmpclass)\<`Map`\[`N`\]\>

Defined in: client-types/out/precomputed/classes.d.ts:63

###### Type Parameters

###### N

`N` *extends* `string` \| `number` \| `symbol`

###### Parameters

###### systemName

`N`

###### Returns

[`UnwrapMpClass`](/client-reference/primitives/#unwrapmpclass)\<`Map`\[`N`\]\>

##### GetClassName()

> **GetClassName**(): `string`

Defined in: client-types/out/classes.d.ts:81898

###### Returns

`string`

##### IsA()

> **IsA**(`className`): `boolean`

Defined in: client-types/out/classes.d.ts:81899

###### Parameters

###### className

`string`

###### Returns

`boolean`

##### IsExactlyA()

> **IsExactlyA**(`className`): `boolean`

Defined in: client-types/out/classes.d.ts:81900

###### Parameters

###### className

`string`

###### Returns

`boolean`

##### QueueRequest()

> **QueueRequest**(`request`): `void`

Defined in: client-types/out/classes.d.ts:61498

###### Parameters

###### request

`gameScriptableSystemRequest`

###### Returns

`void`

##### ToString()

> **ToString**(): `string`

Defined in: client-types/out/classes.d.ts:81901

###### Returns

`string`

##### DetectScriptableCycles()

> `static` **DetectScriptableCycles**(): `void`

Defined in: client-types/out/classes.d.ts:81897

###### Returns

`void`

***

### vehicleBaseObject

Defined in: client-types/out/precomputed/classes.d.ts:35

#### Extends

- `gameObject`

#### Constructors

##### Constructor

> **new vehicleBaseObject**(): [`vehicleBaseObject`](/client-reference/classes/#vehiclebaseobject)

###### Returns

[`vehicleBaseObject`](/client-reference/classes/#vehiclebaseobject)

###### Inherited from

`gameObject.constructor`

#### Properties

##### abandoned

> **abandoned**: `boolean`

Defined in: client-types/out/classes.d.ts:132482

##### accumulatedTimePasssed

> **accumulatedTimePasssed**: `number`

Defined in: client-types/out/classes.d.ts:58903

###### Inherited from

`gameObject.accumulatedTimePasssed`

##### archetype

> **archetype**: `AIArchetype`

Defined in: client-types/out/classes.d.ts:132479

##### attitudeAgent

> **attitudeAgent**: `gameAttitudeAgent`

Defined in: client-types/out/classes.d.ts:132483

##### audioResourceName

> **audioResourceName**: `string`

Defined in: client-types/out/classes.d.ts:58878

###### Inherited from

`gameObject.audioResourceName`

##### bumpedRecently

> **bumpedRecently**: `number`

Defined in: client-types/out/classes.d.ts:132484

##### bumpTimestamp

> **bumpTimestamp**: `number`

Defined in: client-types/out/classes.d.ts:132485

##### crowdMemberComponent

> **crowdMemberComponent**: `CrowdMemberBaseComponent`

Defined in: client-types/out/classes.d.ts:132481

##### currentlyUploadingAction

> **currentlyUploadingAction**: `ScriptableDeviceAction`

Defined in: client-types/out/classes.d.ts:132486

##### customCameraTarget

> **customCameraTarget**: `ECustomCameraTarget`

Defined in: client-types/out/classes.d.ts:33994

###### Inherited from

`gameObject.customCameraTarget`

##### displayDescription

> **displayDescription**: `string`

Defined in: client-types/out/classes.d.ts:58879

###### Inherited from

`gameObject.displayDescription`

##### displayName

> **displayName**: `string`

Defined in: client-types/out/classes.d.ts:58880

###### Inherited from

`gameObject.displayName`

##### driverUnconscious

> **driverUnconscious**: `boolean`

Defined in: client-types/out/classes.d.ts:132487

##### drivingTrafficPattern

> **drivingTrafficPattern**: `string`

Defined in: client-types/out/classes.d.ts:132488

##### e3ObjectRevealed

> **e3ObjectRevealed**: `boolean`

Defined in: client-types/out/classes.d.ts:58904

###### Inherited from

`gameObject.e3ObjectRevealed`

##### fearInside

> **fearInside**: `boolean`

Defined in: client-types/out/classes.d.ts:132489

##### forceDefeatReward

> **forceDefeatReward**: `boolean`

Defined in: client-types/out/classes.d.ts:58886

###### Inherited from

`gameObject.forceDefeatReward`

##### forceRegisterInHudManager

> **forceRegisterInHudManager**: `boolean`

Defined in: client-types/out/classes.d.ts:58887

###### Inherited from

`gameObject.forceRegisterInHudManager`

##### gotStuckIncrement

> **gotStuckIncrement**: `number`

Defined in: client-types/out/classes.d.ts:132490

##### hasReactedToStimuli

> **hasReactedToStimuli**: `boolean`

Defined in: client-types/out/classes.d.ts:132491

##### hasVisibilityForcedInAnimSystem

> **hasVisibilityForcedInAnimSystem**: `boolean`

Defined in: client-types/out/classes.d.ts:58905

###### Inherited from

`gameObject.hasVisibilityForcedInAnimSystem`

##### hitByPlayer

> **hitByPlayer**: `boolean`

Defined in: client-types/out/classes.d.ts:132492

##### hitInstigatorCooldownID

> **hitInstigatorCooldownID**: `gameDelayID`

Defined in: client-types/out/classes.d.ts:58906

###### Inherited from

`gameObject.hitInstigatorCooldownID`

##### hitTimestamp

> **hitTimestamp**: `number`

Defined in: client-types/out/classes.d.ts:132493

##### inTrafficLane

> **inTrafficLane**: `boolean`

Defined in: client-types/out/classes.d.ts:132494

##### isDead

> **isDead**: `boolean`

Defined in: client-types/out/classes.d.ts:58888

###### Inherited from

`gameObject.isDead`

##### isHighlightedInFocusMode

> **isHighlightedInFocusMode**: `boolean`

Defined in: client-types/out/classes.d.ts:58889

###### Inherited from

`gameObject.isHighlightedInFocusMode`

##### isQhackUploadInProgress

> **isQhackUploadInProgress**: `boolean`

Defined in: client-types/out/classes.d.ts:132495

##### isScannerDataDirty

> **isScannerDataDirty**: `boolean`

Defined in: client-types/out/classes.d.ts:58907

###### Inherited from

`gameObject.isScannerDataDirty`

##### isTargetedWithSmartWeapon

> **isTargetedWithSmartWeapon**: `boolean`

Defined in: client-types/out/classes.d.ts:58890

###### Inherited from

`gameObject.isTargetedWithSmartWeapon`

##### isVehicleOnStateLocked

> **isVehicleOnStateLocked**: `boolean`

Defined in: client-types/out/classes.d.ts:132480

##### killRewardDisabled

> **killRewardDisabled**: `boolean`

Defined in: client-types/out/classes.d.ts:58891

###### Inherited from

`gameObject.killRewardDisabled`

##### lastEngineTime

> **lastEngineTime**: `number`

Defined in: client-types/out/classes.d.ts:58908

###### Inherited from

`gameObject.lastEngineTime`

##### lastHitInstigatorID

> **lastHitInstigatorID**: `entEntityID`

Defined in: client-types/out/classes.d.ts:58909

###### Inherited from

`gameObject.lastHitInstigatorID`

##### markAsQuest

> **markAsQuest**: `boolean`

Defined in: client-types/out/classes.d.ts:58892

###### Inherited from

`gameObject.markAsQuest`

##### minUnconsciousImpact

> **minUnconsciousImpact**: `number`

Defined in: client-types/out/classes.d.ts:132496

##### onPavement

> **onPavement**: `boolean`

Defined in: client-types/out/classes.d.ts:132497

##### persistentState

> **persistentState**: `gamePersistentState`

Defined in: client-types/out/classes.d.ts:58881

###### Inherited from

`gameObject.persistentState`

##### photoModeActiveListener

> **photoModeActiveListener**: `redCallbackObject`

Defined in: client-types/out/classes.d.ts:132498

##### playerSocket

> **playerSocket**: `gamePlayerSocket`

Defined in: client-types/out/classes.d.ts:58882

###### Inherited from

`gameObject.playerSocket`

##### prereqListeners

> **prereqListeners**: `GameObjectListener`[]

Defined in: client-types/out/classes.d.ts:58893

###### Inherited from

`gameObject.prereqListeners`

##### reactionTriggerEvent

> **reactionTriggerEvent**: `HandleReactionEvent`

Defined in: client-types/out/classes.d.ts:132499

##### receivedDamageHistory

> **receivedDamageHistory**: `DamageHistoryEntry`[]

Defined in: client-types/out/classes.d.ts:58894

###### Inherited from

`gameObject.receivedDamageHistory`

##### renderSceneLayerMask

> **renderSceneLayerMask**: `RenderSceneLayerMask`

Defined in: client-types/out/classes.d.ts:33995

###### Inherited from

`gameObject.renderSceneLayerMask`

##### scanningComponent

> **scanningComponent**: `gameScanningComponent`

Defined in: client-types/out/classes.d.ts:58895

###### Inherited from

`gameObject.scanningComponent`

##### sourceShootComponent

> **sourceShootComponent**: `gameSourceShootComponent`

Defined in: client-types/out/classes.d.ts:58910

###### Inherited from

`gameObject.sourceShootComponent`

##### squadMemberComponent

> **squadMemberComponent**: `SquadMemberBaseComponent`

Defined in: client-types/out/classes.d.ts:58896

###### Inherited from

`gameObject.squadMemberComponent`

##### statusEffectComponent

> **statusEffectComponent**: `gameStatusEffectComponent`

Defined in: client-types/out/classes.d.ts:58897

###### Inherited from

`gameObject.statusEffectComponent`

##### statusEffectListeners

> **statusEffectListeners**: `StatusEffectTriggerListener`[]

Defined in: client-types/out/classes.d.ts:58898

###### Inherited from

`gameObject.statusEffectListeners`

##### stimBroadcaster

> **stimBroadcaster**: `StimBroadcasterComponent`

Defined in: client-types/out/classes.d.ts:58899

###### Inherited from

`gameObject.stimBroadcaster`

##### tags

> **tags**: `redTagList`

Defined in: client-types/out/classes.d.ts:58883

###### Inherited from

`gameObject.tags`

##### targetShootComponent

> **targetShootComponent**: `gameTargetShootComponent`

Defined in: client-types/out/classes.d.ts:58911

###### Inherited from

`gameObject.targetShootComponent`

##### timesSentReactionEvent

> **timesSentReactionEvent**: `number`

Defined in: client-types/out/classes.d.ts:132500

##### timesToResendHandleReactionEvent

> **timesToResendHandleReactionEvent**: `number`

Defined in: client-types/out/classes.d.ts:132501

##### triggerPanicDrivingEventDelayID

> **triggerPanicDrivingEventDelayID**: `gameDelayID`

Defined in: client-types/out/classes.d.ts:132502

##### uiComponent

> **uiComponent**: `WorldWidgetComponent`

Defined in: client-types/out/classes.d.ts:132503

##### uiSlotComponent

> **uiSlotComponent**: `entSlotComponent`

Defined in: client-types/out/classes.d.ts:58884

###### Inherited from

`gameObject.uiSlotComponent`

##### vehicleComponent

> **vehicleComponent**: `VehicleComponent`

Defined in: client-types/out/classes.d.ts:132504

##### vehicleUpsideDown

> **vehicleUpsideDown**: `boolean`

Defined in: client-types/out/classes.d.ts:132505

##### visibilityCheckDistance

> **visibilityCheckDistance**: `number`

Defined in: client-types/out/classes.d.ts:58885

###### Inherited from

`gameObject.visibilityCheckDistance`

##### visionComponent

> **visionComponent**: `gameVisionModeComponent`

Defined in: client-types/out/classes.d.ts:58900

###### Inherited from

`gameObject.visionComponent`

##### waitForPassengersToSpawnEventDelayID

> **waitForPassengersToSpawnEventDelayID**: `gameDelayID`

Defined in: client-types/out/classes.d.ts:132506

##### willDieSoon

> **willDieSoon**: `boolean`

Defined in: client-types/out/classes.d.ts:58901

###### Inherited from

`gameObject.willDieSoon`

##### workspotMapper

> **workspotMapper**: `WorkspotMapperComponent`

Defined in: client-types/out/classes.d.ts:58902

###### Inherited from

`gameObject.workspotMapper`

#### Methods

##### ActivateNetrunnerQuickhack()

> **ActivateNetrunnerQuickhack**(`chooseHack`): `void`

Defined in: client-types/out/classes.d.ts:132507

###### Parameters

###### chooseHack

`vehicleVehicleNetrunnerQuickhackType`

###### Returns

`void`

##### ActivateTemporaryLossOfControl()

> **ActivateTemporaryLossOfControl**(): `void`

Defined in: client-types/out/classes.d.ts:132508

###### Returns

`void`

##### AddCollisionForce()

> **AddCollisionForce**(`force`): `void`

Defined in: client-types/out/classes.d.ts:132509

###### Parameters

###### force

`Vector4`

###### Returns

`void`

##### AddLinelyVelocity()

> **AddLinelyVelocity**(`velocity`, `angularVelocity`): `boolean`

Defined in: client-types/out/precomputed/classes.d.ts:38

###### Parameters

###### velocity

`Vector3`

###### angularVelocity

`Vector3`

###### Returns

`boolean`

##### ApplyAvgZOffset()

> **ApplyAvgZOffset**(): `void`

Defined in: client-types/out/classes.d.ts:132510

###### Returns

`void`

##### ApplyDamagesToDriver()

> **ApplyDamagesToDriver**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:132511

###### Parameters

###### evt

`gameeventsHitEvent`

###### Returns

`void`

##### ApplyPermanentStun()

> **ApplyPermanentStun**(): `void`

Defined in: client-types/out/classes.d.ts:132512

###### Returns

`void`

##### AreFrontWheelsCentered()

> **AreFrontWheelsCentered**(): `boolean`

Defined in: client-types/out/classes.d.ts:132513

###### Returns

`boolean`

##### BlockFinisherThreshold()

> **BlockFinisherThreshold**(): `boolean`

Defined in: client-types/out/classes.d.ts:58917

###### Returns

`boolean`

###### Inherited from

`gameObject.BlockFinisherThreshold`

##### BlockWorkspotFinishers()

> **BlockWorkspotFinishers**(): `boolean`

Defined in: client-types/out/classes.d.ts:58918

###### Returns

`boolean`

###### Inherited from

`gameObject.BlockWorkspotFinishers`

##### CanBeInvestigated()

> **CanBeInvestigated**(): `boolean`

Defined in: client-types/out/classes.d.ts:58920

###### Returns

`boolean`

###### Inherited from

`gameObject.CanBeInvestigated`

##### CanBeTagged()

> **CanBeTagged**(): `boolean`

Defined in: client-types/out/classes.d.ts:58921

###### Returns

`boolean`

###### Inherited from

`gameObject.CanBeTagged`

##### CancelForcedVisionAppearance()

> **CancelForcedVisionAppearance**(`data`): `void`

Defined in: client-types/out/classes.d.ts:59168

###### Parameters

###### data

`FocusForcedHighlightData`

###### Returns

`void`

###### Inherited from

`gameObject.CancelForcedVisionAppearance`

##### CanNPCsLeaveVehicle()

> **CanNPCsLeaveVehicle**(): `boolean`

Defined in: client-types/out/classes.d.ts:132692

###### Returns

`boolean`

##### CanOverrideNetworkContext()

> **CanOverrideNetworkContext**(): `boolean`

Defined in: client-types/out/classes.d.ts:58922

###### Returns

`boolean`

###### Inherited from

`gameObject.CanOverrideNetworkContext`

##### CanPassDemolitionSkillCheck()

> **CanPassDemolitionSkillCheck**(): `boolean`

Defined in: client-types/out/classes.d.ts:58923

###### Returns

`boolean`

###### Inherited from

`gameObject.CanPassDemolitionSkillCheck`

##### CanPassEngineeringSkillCheck()

> **CanPassEngineeringSkillCheck**(): `boolean`

Defined in: client-types/out/classes.d.ts:58924

###### Returns

`boolean`

###### Inherited from

`gameObject.CanPassEngineeringSkillCheck`

##### CanPassHackingSkillCheck()

> **CanPassHackingSkillCheck**(): `boolean`

Defined in: client-types/out/classes.d.ts:58925

###### Returns

`boolean`

###### Inherited from

`gameObject.CanPassHackingSkillCheck`

##### CanPlayerScanThroughWalls()

> **CanPlayerScanThroughWalls**(): `boolean`

Defined in: client-types/out/classes.d.ts:58926

###### Returns

`boolean`

###### Inherited from

`gameObject.CanPlayerScanThroughWalls`

##### CanPlayerUseQuickHackVulnerability()

> **CanPlayerUseQuickHackVulnerability**(`data`): `boolean`

Defined in: client-types/out/classes.d.ts:58927

###### Parameters

###### data

`string`

###### Returns

`boolean`

###### Inherited from

`gameObject.CanPlayerUseQuickHackVulnerability`

##### CanReceivePoiseDamage()

> **CanReceivePoiseDamage**(): `boolean`

Defined in: client-types/out/classes.d.ts:58928

###### Returns

`boolean`

###### Inherited from

`gameObject.CanReceivePoiseDamage`

##### CanRevealRemoteActionsWheel()

> **CanRevealRemoteActionsWheel**(): `boolean`

Defined in: client-types/out/classes.d.ts:132514

###### Returns

`boolean`

###### Inherited from

`gameObject.CanRevealRemoteActionsWheel`

##### CanServiceEvent()

> **CanServiceEvent**(`evtName`): `boolean`

Defined in: client-types/out/classes.d.ts:33996

###### Parameters

###### evtName

`string`

###### Returns

`boolean`

###### Inherited from

`gameObject.CanServiceEvent`

##### CanStartPanicDriving()

> **CanStartPanicDriving**(): `boolean`

Defined in: client-types/out/classes.d.ts:132515

###### Returns

`boolean`

##### CanSwitchWeapons()

> **CanSwitchWeapons**(): `boolean`

Defined in: client-types/out/classes.d.ts:132516

###### Returns

`boolean`

##### CanUnmount()

> **CanUnmount**(`isPlayer`, `mountedObject`, `checkSpecificDirection?`): `vehicleUnmountPosition`

Defined in: client-types/out/classes.d.ts:132517

###### Parameters

###### isPlayer

`boolean`

###### mountedObject

`gameObject`

###### checkSpecificDirection?

`vehicleExitDirection`

###### Returns

`vehicleUnmountPosition`

##### ChangeLinelyVelocity()

> **ChangeLinelyVelocity**(`velocity`, `angularVelocity`, `switchIndex`): `boolean`

Defined in: client-types/out/precomputed/classes.d.ts:39

###### Parameters

###### velocity

`Vector3`

###### angularVelocity

`Vector3`

###### switchIndex

`number`

###### Returns

`boolean`

##### CheckIfPreventionShouldReact()

> **CheckIfPreventionShouldReact**(`damageDealers`): `void`

Defined in: client-types/out/classes.d.ts:59267

###### Parameters

###### damageDealers

`gameObject`[]

###### Returns

`void`

###### Inherited from

`gameObject.CheckIfPreventionShouldReact`

##### ClearForcedVisibilityInAnimSystem()

> **ClearForcedVisibilityInAnimSystem**(): `void`

Defined in: client-types/out/classes.d.ts:59169

###### Returns

`void`

###### Inherited from

`gameObject.ClearForcedVisibilityInAnimSystem`

##### CommandsFromDriverEnabled()

> **CommandsFromDriverEnabled**(): `boolean`

Defined in: client-types/out/classes.d.ts:132518

###### Returns

`boolean`

##### CompileScannerChunks()

> **CompileScannerChunks**(): `boolean`

Defined in: client-types/out/classes.d.ts:132519

###### Returns

`boolean`

###### Inherited from

`gameObject.CompileScannerChunks`

##### ComputeIsVehicleUpsideDown()

> **ComputeIsVehicleUpsideDown**(): `boolean`

Defined in: client-types/out/classes.d.ts:132520

###### Returns

`boolean`

##### DamagePipelineFinalized()

> **DamagePipelineFinalized**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:132649

###### Parameters

###### evt

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.DamagePipelineFinalized`

##### DestructionResetGlass()

> **DestructionResetGlass**(): `void`

Defined in: client-types/out/classes.d.ts:132521

###### Returns

`void`

##### DestructionResetGrid()

> **DestructionResetGrid**(): `void`

Defined in: client-types/out/classes.d.ts:132522

###### Returns

`void`

##### DetachAllParts()

> **DetachAllParts**(): `void`

Defined in: client-types/out/classes.d.ts:132523

###### Returns

`void`

##### DetachPart()

> **DetachPart**(`partName`): `void`

Defined in: client-types/out/classes.d.ts:132524

###### Parameters

###### partName

`string`

###### Returns

`void`

##### DetermineCoolExitImpulseLevel()

> **DetermineCoolExitImpulseLevel**(`mountedObject`, `maxImpulseHeightThreshold`, `minImpulseHeightThreshold`): `vehicleCoolExitImpulseLevel`

Defined in: client-types/out/classes.d.ts:132525

###### Parameters

###### mountedObject

`gameObject`

###### maxImpulseHeightThreshold

`number`

###### minImpulseHeightThreshold

`number`

###### Returns

`vehicleCoolExitImpulseLevel`

##### DeterminGameplayRole()

> **DeterminGameplayRole**(): `EGameplayRole`

Defined in: client-types/out/classes.d.ts:58933

###### Returns

`EGameplayRole`

###### Inherited from

`gameObject.DeterminGameplayRole`

##### DeterminGameplayRoleMappinRange()

> **DeterminGameplayRoleMappinRange**(`data`): `number`

Defined in: client-types/out/classes.d.ts:58934

###### Parameters

###### data

`SDeviceMappinData`

###### Returns

`number`

###### Inherited from

`gameObject.DeterminGameplayRoleMappinRange`

##### DeterminGameplayRoleMappinVisuaState()

> **DeterminGameplayRoleMappinVisuaState**(`data`): `EMappinVisualState`

Defined in: client-types/out/classes.d.ts:58935

###### Parameters

###### data

`SDeviceMappinData`

###### Returns

`EMappinVisualState`

###### Inherited from

`gameObject.DeterminGameplayRoleMappinVisuaState`

##### DisableKillReward()

> **DisableKillReward**(`value`): `void`

Defined in: client-types/out/classes.d.ts:58936

###### Parameters

###### value

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.DisableKillReward`

##### DisableOffMeshConnections()

> **DisableOffMeshConnections**(`player`, `npc`): `void`

Defined in: client-types/out/classes.d.ts:59171

###### Parameters

###### player

`boolean`

###### npc

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.DisableOffMeshConnections`

##### DisplayHitUI()

> **DisplayHitUI**(`dmgInfos`): `void`

Defined in: client-types/out/classes.d.ts:58937

###### Parameters

###### dmgInfos

`gameuiDamageInfo`[]

###### Returns

`void`

###### Inherited from

`gameObject.DisplayHitUI`

##### DisplayKillUI()

> **DisplayKillUI**(`killInfo`): `void`

Defined in: client-types/out/classes.d.ts:58938

###### Parameters

###### killInfo

`gameuiKillInfo`

###### Returns

`void`

###### Inherited from

`gameObject.DisplayKillUI`

##### Dispose()

> **Dispose**(): `void`

Defined in: client-types/out/classes.d.ts:33997

###### Returns

`void`

###### Inherited from

`gameObject.Dispose`

##### EnableAirControl()

> **EnableAirControl**(`toggle`): `void`

Defined in: client-types/out/classes.d.ts:132526

###### Parameters

###### toggle

`boolean`

###### Returns

`void`

##### EnableGravity()

> **EnableGravity**(`is_enable`): `boolean`

Defined in: client-types/out/precomputed/classes.d.ts:37

###### Parameters

###### is\_enable

`boolean`

###### Returns

`boolean`

##### EnableHighPriorityPanicDriving()

> **EnableHighPriorityPanicDriving**(): `void`

Defined in: client-types/out/classes.d.ts:132527

###### Returns

`void`

##### EnableNPCCombat()

> **EnableNPCCombat**(`enable`): `void`

Defined in: client-types/out/classes.d.ts:132528

###### Parameters

###### enable

`boolean`

###### Returns

`void`

##### EnableOffMeshConnections()

> **EnableOffMeshConnections**(`player`, `npc`): `void`

Defined in: client-types/out/classes.d.ts:59172

###### Parameters

###### player

`boolean`

###### npc

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.EnableOffMeshConnections`

##### EnableTransformUpdates()

> **EnableTransformUpdates**(`enable`): `void`

Defined in: client-types/out/classes.d.ts:58939

###### Parameters

###### enable

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.EnableTransformUpdates`

##### EscalateBumpVehicleReaction()

> **EscalateBumpVehicleReaction**(): `void`

Defined in: client-types/out/classes.d.ts:132693

###### Returns

`void`

##### EvaluateMappinsVisualState()

> **EvaluateMappinsVisualState**(): `void`

Defined in: client-types/out/classes.d.ts:58940

###### Returns

`void`

###### Inherited from

`gameObject.EvaluateMappinsVisualState`

##### EverPerformedChase()

> **EverPerformedChase**(): `boolean`

Defined in: client-types/out/classes.d.ts:132529

###### Returns

`boolean`

##### ExecuteVisualCustomizationWithDelay()

> **ExecuteVisualCustomizationWithDelay**(`set`, `reset`, `instant`, `delay?`): `void`

Defined in: client-types/out/classes.d.ts:132650

###### Parameters

###### set

`boolean`

###### reset

`boolean`

###### instant

`boolean`

###### delay?

`number`

###### Returns

`void`

##### FillObjectDescription()

> **FillObjectDescription**(): `void`

Defined in: client-types/out/classes.d.ts:59173

###### Returns

`void`

###### Inherited from

`gameObject.FillObjectDescription`

##### FindAndRewardKiller()

> **FindAndRewardKiller**(`killType`, `instigator?`): `void`

Defined in: client-types/out/classes.d.ts:58941

###### Parameters

###### killType

`gameKillType`

###### instigator?

`gameObject`

###### Returns

`void`

###### Inherited from

`gameObject.FindAndRewardKiller`

##### FindComponentByName()

> **FindComponentByName**(`componentName`): `entIComponent`

Defined in: client-types/out/classes.d.ts:33998

###### Parameters

###### componentName

`string`

###### Returns

`entIComponent`

###### Inherited from

`gameObject.FindComponentByName`

##### ForceBrakesFor()

> **ForceBrakesFor**(`seconds`): `void`

Defined in: client-types/out/classes.d.ts:132530

###### Parameters

###### seconds

`number`

###### Returns

`void`

##### ForceBrakesUntilStoppedOrFor()

> **ForceBrakesUntilStoppedOrFor**(`secondsToTimeout`, `callback?`): `void`

Defined in: client-types/out/classes.d.ts:132531

###### Parameters

###### secondsToTimeout

`number`

###### callback?

`vehicleForceBrakesCallbackListener`

###### Returns

`void`

##### ForceDefeatReward()

> **ForceDefeatReward**(`value`): `void`

Defined in: client-types/out/classes.d.ts:58942

###### Parameters

###### value

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.ForceDefeatReward`

##### ForceVisionAppearance()

> **ForceVisionAppearance**(`data`): `void`

Defined in: client-types/out/classes.d.ts:59174

###### Parameters

###### data

`FocusForcedHighlightData`

###### Returns

`void`

###### Inherited from

`gameObject.ForceVisionAppearance`

##### GetAccessoryController()

> **GetAccessoryController**(): `vehicleController`

Defined in: client-types/out/classes.d.ts:132532

###### Returns

`vehicleController`

##### GetAcousticQuerryStartPoint()

> **GetAcousticQuerryStartPoint**(): `Vector4`

Defined in: client-types/out/classes.d.ts:58944

###### Returns

`Vector4`

###### Inherited from

`gameObject.GetAcousticQuerryStartPoint`

##### GetActiveWeapons()

> **GetActiveWeapons**(): `void`

Defined in: client-types/out/classes.d.ts:132533

###### Returns

`void`

##### GetAIComponent()

> **GetAIComponent**(): `AIVehicleAgent`

Defined in: client-types/out/classes.d.ts:132534

###### Returns

`AIVehicleAgent`

##### GetAngularVelocity()

> **GetAngularVelocity**(): `Vector3`

Defined in: client-types/out/precomputed/classes.d.ts:45

###### Returns

`Vector3`

##### GetAnimationSystemForcedVisibilityManager()

> **GetAnimationSystemForcedVisibilityManager**(): `AnimationSystemForcedVisibilityManager`

Defined in: client-types/out/classes.d.ts:58946

###### Returns

`AnimationSystemForcedVisibilityManager`

###### Inherited from

`gameObject.GetAnimationSystemForcedVisibilityManager`

##### GetAnimsetOverrideForPassenger()

> **GetAnimsetOverrideForPassenger**(`slotName`): `string`

Defined in: client-types/out/classes.d.ts:132535

###### Parameters

###### slotName

`string`

###### Returns

`string`

##### GetAnimsetOverrideForPassengerFromBoneName()

> **GetAnimsetOverrideForPassengerFromBoneName**(`boneName`): `string`

Defined in: client-types/out/classes.d.ts:132536

###### Parameters

###### boneName

`string`

###### Returns

`string`

##### GetAnimsetOverrideForPassengerFromSlotName()

> **GetAnimsetOverrideForPassengerFromSlotName**(`slotName`): `string`

Defined in: client-types/out/classes.d.ts:132537

###### Parameters

###### slotName

`string`

###### Returns

`string`

##### GetAttitudeAgent()

> **GetAttitudeAgent**(): `gameAttitudeAgent`

Defined in: client-types/out/classes.d.ts:132538

###### Returns

`gameAttitudeAgent`

###### Inherited from

`gameObject.GetAttitudeAgent`

##### GetAttitudeTowards()

> **GetAttitudeTowards**(`target`): `EAIAttitude`

Defined in: client-types/out/classes.d.ts:58952

###### Parameters

###### target

`gameObject`

###### Returns

`EAIAttitude`

###### Inherited from

`gameObject.GetAttitudeTowards`

##### GetAudioName()

> **GetAudioName**(): `void`

Defined in: client-types/out/classes.d.ts:58953

###### Returns

`void`

###### Inherited from

`gameObject.GetAudioName`

##### GetAvailableClueIndex()

> **GetAvailableClueIndex**(): `number`

Defined in: client-types/out/classes.d.ts:58954

###### Returns

`number`

###### Inherited from

`gameObject.GetAvailableClueIndex`

##### GetBasePS()

> **GetBasePS**(): `gameObjectPS`

Defined in: client-types/out/classes.d.ts:58955

###### Returns

`gameObjectPS`

###### Inherited from

`gameObject.GetBasePS`

##### GetBlackboard()

> **GetBlackboard**(): `gameIBlackboard`

Defined in: client-types/out/classes.d.ts:132539

###### Returns

`gameIBlackboard`

##### GetBoneNameFromSlot()

> **GetBoneNameFromSlot**(`slotName`): `string`

Defined in: client-types/out/classes.d.ts:132540

###### Parameters

###### slotName

`string`

###### Returns

`string`

##### GetBoundaryBox()

> **GetBoundaryBox**(): `Box`

Defined in: client-types/out/precomputed/classes.d.ts:48

###### Returns

`Box`

##### GetBraindanceLayer()

> **GetBraindanceLayer**(): `braindanceVisionMode`

Defined in: client-types/out/classes.d.ts:58956

###### Returns

`braindanceVisionMode`

###### Inherited from

`gameObject.GetBraindanceLayer`

##### GetCameraManager()

> **GetCameraManager**(): `vehicleCameraManager`

Defined in: client-types/out/classes.d.ts:132541

###### Returns

`vehicleCameraManager`

##### GetClassName()

> **GetClassName**(): `string`

Defined in: client-types/out/classes.d.ts:81898

###### Returns

`string`

###### Inherited from

`gameObject.GetClassName`

##### GetCollisionForce()

> **GetCollisionForce**(): `Vector4`

Defined in: client-types/out/classes.d.ts:132542

###### Returns

`Vector4`

##### GetContentScale()

> **GetContentScale**(): `string`

Defined in: client-types/out/classes.d.ts:58957

###### Returns

`string`

###### Inherited from

`gameObject.GetContentScale`

##### GetControllerPersistentState()

> **GetControllerPersistentState**(): `gamePersistentState`

Defined in: client-types/out/classes.d.ts:132651

###### Returns

`gamePersistentState`

##### GetControllingPeerID()

> **GetControllingPeerID**(): `number`

Defined in: client-types/out/classes.d.ts:33999

###### Returns

`number`

###### Inherited from

`gameObject.GetControllingPeerID`

##### GetCrowdMemberComponent()

> **GetCrowdMemberComponent**(): `CrowdMemberBaseComponent`

Defined in: client-types/out/classes.d.ts:132543

###### Returns

`CrowdMemberBaseComponent`

##### GetCurrentAppearanceName()

> **GetCurrentAppearanceName**(): `string`

Defined in: client-types/out/classes.d.ts:34000

###### Returns

`string`

###### Inherited from

`gameObject.GetCurrentAppearanceName`

##### GetCurrentColorVariantName()

> **GetCurrentColorVariantName**(): `string`

Defined in: client-types/out/classes.d.ts:34001

###### Returns

`string`

###### Inherited from

`gameObject.GetCurrentColorVariantName`

##### GetCurrentContext()

> **GetCurrentContext**(): `string`

Defined in: client-types/out/classes.d.ts:58958

###### Returns

`string`

###### Inherited from

`gameObject.GetCurrentContext`

##### GetCurrentlyUploadingAction()

> **GetCurrentlyUploadingAction**(): `ScriptableDeviceAction`

Defined in: client-types/out/classes.d.ts:132544

###### Returns

`ScriptableDeviceAction`

###### Inherited from

`gameObject.GetCurrentlyUploadingAction`

##### GetCurrentOutline()

> **GetCurrentOutline**(): `EFocusOutlineType`

Defined in: client-types/out/classes.d.ts:132545

###### Returns

`EFocusOutlineType`

###### Inherited from

`gameObject.GetCurrentOutline`

##### GetCurrentRadioIndex()

> **GetCurrentRadioIndex**(): `number`

Defined in: client-types/out/classes.d.ts:132546

###### Returns

`number`

##### GetCurrentSlotEstimatedTimeToArrival()

> **GetCurrentSlotEstimatedTimeToArrival**(): `number`

Defined in: client-types/out/classes.d.ts:132547

###### Returns

`number`

##### GetCurrentSlotLocalPathLength()

> **GetCurrentSlotLocalPathLength**(): `number`

Defined in: client-types/out/classes.d.ts:132548

###### Returns

`number`

##### GetCurrentSlotLocalPathProgression()

> **GetCurrentSlotLocalPathProgression**(): `number`

Defined in: client-types/out/classes.d.ts:132549

###### Returns

`number`

##### GetCurrentSpeed()

> **GetCurrentSpeed**(): `number`

Defined in: client-types/out/classes.d.ts:132550

###### Returns

`number`

##### GetCurveValue()

> **GetCurveValue**(`curveName`, `isDebug`): `void`

Defined in: client-types/out/classes.d.ts:58961

###### Parameters

###### curveName

`string`

###### isDebug

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.GetCurveValue`

##### GetCustomizationComponent()

> **GetCustomizationComponent**(): `vehicleVehicleCustomization`

Defined in: client-types/out/classes.d.ts:132551

###### Returns

`vehicleVehicleCustomization`

##### GetCustomizationWidgets()

> **GetCustomizationWidgets**(): `WorldWidgetComponent`[]

Defined in: client-types/out/classes.d.ts:132552

###### Returns

`WorldWidgetComponent`[]

##### GetDefaultHighlight()

> **GetDefaultHighlight**(): `FocusForcedHighlightData`

Defined in: client-types/out/classes.d.ts:132553

###### Returns

`FocusForcedHighlightData`

###### Inherited from

`gameObject.GetDefaultHighlight`

##### GetDefaultHighlightType()

> **GetDefaultHighlightType**(): `EFocusForcedHighlightType`

Defined in: client-types/out/classes.d.ts:58963

###### Returns

`EFocusForcedHighlightType`

###### Inherited from

`gameObject.GetDefaultHighlightType`

##### GetDeviceLink()

> **GetDeviceLink**(): `VehicleDeviceLinkPS`

Defined in: client-types/out/classes.d.ts:132554

###### Returns

`VehicleDeviceLinkPS`

###### Inherited from

`gameObject.GetDeviceLink`

##### GetDisplayDescription()

> **GetDisplayDescription**(): `string`

Defined in: client-types/out/classes.d.ts:58965

###### Returns

`string`

###### Inherited from

`gameObject.GetDisplayDescription`

##### GetDisplayName()

> **GetDisplayName**(): `string`

Defined in: client-types/out/classes.d.ts:58966

###### Returns

`string`

###### Inherited from

`gameObject.GetDisplayName`

##### GetDistanceToPlayerSquared()

> **GetDistanceToPlayerSquared**(): `number`

Defined in: client-types/out/classes.d.ts:132555

###### Returns

`number`

##### GetEntitiesAroundObject()

> **GetEntitiesAroundObject**(`range?`, `searchFilter?`): `entEntity`[]

Defined in: client-types/out/classes.d.ts:58967

###### Parameters

###### range?

`number`

###### searchFilter?

`gameTargetSearchFilter`

###### Returns

`entEntity`[]

###### Inherited from

`gameObject.GetEntitiesAroundObject`

##### GetEntity()

> **GetEntity**(): `entEntityGameInterface`

Defined in: client-types/out/classes.d.ts:34002

###### Returns

`entEntityGameInterface`

###### Inherited from

`gameObject.GetEntity`

##### GetEntityID()

> **GetEntityID**(): `entEntityID`

Defined in: client-types/out/classes.d.ts:34003

###### Returns

`entEntityID`

###### Inherited from

`gameObject.GetEntityID`

##### GetFastTravelSystem()

> **GetFastTravelSystem**(): `FastTravelSystem`

Defined in: client-types/out/classes.d.ts:59175

###### Returns

`FastTravelSystem`

###### Inherited from

`gameObject.GetFastTravelSystem`

##### GetFocusClueSystem()

> **GetFocusClueSystem**(): `FocusCluesSystem`

Defined in: client-types/out/classes.d.ts:58968

###### Returns

`FocusCluesSystem`

###### Inherited from

`gameObject.GetFocusClueSystem`

##### GetFreeWorkspotDataForAIAction()

> **GetFreeWorkspotDataForAIAction**(`aiAction`): `WorkspotEntryData`

Defined in: client-types/out/classes.d.ts:58969

###### Parameters

###### aiAction

`gamedataWorkspotActionType`

###### Returns

`WorkspotEntryData`

###### Inherited from

`gameObject.GetFreeWorkspotDataForAIAction`

##### GetFreeWorkspotRefForAIAction()

> **GetFreeWorkspotRefForAIAction**(`aiAction`): `string`

Defined in: client-types/out/classes.d.ts:58970

###### Parameters

###### aiAction

`gamedataWorkspotActionType`

###### Returns

`string`

###### Inherited from

`gameObject.GetFreeWorkspotRefForAIAction`

##### GetFreeWorkspotsCountForAIAction()

> **GetFreeWorkspotsCountForAIAction**(`aiAction`): `number`

Defined in: client-types/out/classes.d.ts:58971

###### Parameters

###### aiAction

`gamedataWorkspotActionType`

###### Returns

`number`

###### Inherited from

`gameObject.GetFreeWorkspotsCountForAIAction`

##### GetFxResourceByKey()

> **GetFxResourceByKey**(`key`): `gameFxResource`

Defined in: client-types/out/classes.d.ts:58972

###### Parameters

###### key

`string`

###### Returns

`gameFxResource`

###### Inherited from

`gameObject.GetFxResourceByKey`

##### GetGame()

> **GetGame**(): `ScriptGameInstance`

Defined in: client-types/out/classes.d.ts:58973

###### Returns

`ScriptGameInstance`

###### Inherited from

`gameObject.GetGame`

##### GetHudManager()

> **GetHudManager**(): `HUDManager`

Defined in: client-types/out/classes.d.ts:58974

###### Returns

`HUDManager`

###### Inherited from

`gameObject.GetHudManager`

##### GetIsBroken()

> **GetIsBroken**(): `boolean`

Defined in: client-types/out/classes.d.ts:58975

###### Returns

`boolean`

###### Inherited from

`gameObject.GetIsBroken`

##### GetIsIconic()

> **GetIsIconic**(): `boolean`

Defined in: client-types/out/classes.d.ts:58976

###### Returns

`boolean`

###### Inherited from

`gameObject.GetIsIconic`

##### GetIsInFastFinisher()

> **GetIsInFastFinisher**(): `boolean`

Defined in: client-types/out/classes.d.ts:58977

###### Returns

`boolean`

###### Inherited from

`gameObject.GetIsInFastFinisher`

##### GetLinearVelocity()

> **GetLinearVelocity**(): `Vector4`

Defined in: client-types/out/classes.d.ts:132556

###### Returns

`Vector4`

##### GetLinkedClueData()

> **GetLinkedClueData**(`clueIndex`): `LinkedFocusClueData`

Defined in: client-types/out/classes.d.ts:58978

###### Parameters

###### clueIndex

`number`

###### Returns

`LinkedFocusClueData`

###### Inherited from

`gameObject.GetLinkedClueData`

##### GetLootQuality()

> **GetLootQuality**(): `gamedataQuality`

Defined in: client-types/out/classes.d.ts:58980

###### Returns

`gamedataQuality`

###### Inherited from

`gameObject.GetLootQuality`

##### GetName()

> **GetName**(): `string`

Defined in: client-types/out/classes.d.ts:58981

###### Returns

`string`

###### Inherited from

`gameObject.GetName`

##### GetNetworkBeamEndpoint()

> **GetNetworkBeamEndpoint**(): `Vector4`

Defined in: client-types/out/classes.d.ts:58982

###### Returns

`Vector4`

###### Inherited from

`gameObject.GetNetworkBeamEndpoint`

##### GetNetworkLinkSlotName()

###### Call Signature

> **GetNetworkLinkSlotName**(): \[`string`, `WorldTransform`\]

Defined in: client-types/out/classes.d.ts:58983

###### Returns

\[`string`, `WorldTransform`\]

###### Inherited from

`gameObject.GetNetworkLinkSlotName`

###### Call Signature

> **GetNetworkLinkSlotName**(): `string`

Defined in: client-types/out/classes.d.ts:58984

###### Returns

`string`

###### Inherited from

`gameObject.GetNetworkLinkSlotName`

##### GetNetworkSystem()

> **GetNetworkSystem**(): `NetworkSystem`

Defined in: client-types/out/classes.d.ts:59176

###### Returns

`NetworkSystem`

###### Inherited from

`gameObject.GetNetworkSystem`

##### GetNPCsAroundObject()

> **GetNPCsAroundObject**(`range?`): `NPCPuppet`[]

Defined in: client-types/out/classes.d.ts:58985

###### Parameters

###### range?

`number`

###### Returns

`NPCPuppet`[]

###### Inherited from

`gameObject.GetNPCsAroundObject`

##### GetNumberOfWorkpotsForAIAction()

> **GetNumberOfWorkpotsForAIAction**(`aiAction`): `number`

Defined in: client-types/out/classes.d.ts:58986

###### Parameters

###### aiAction

`gamedataWorkspotActionType`

###### Returns

`number`

###### Inherited from

`gameObject.GetNumberOfWorkpotsForAIAction`

##### GetObjectToForwardHighlight()

> **GetObjectToForwardHighlight**(): `gameObject`[]

Defined in: client-types/out/classes.d.ts:58987

###### Returns

`gameObject`[]

###### Inherited from

`gameObject.GetObjectToForwardHighlight`

##### GetOwner()

> **GetOwner**(): `gameObject`

Defined in: client-types/out/classes.d.ts:58988

###### Returns

`gameObject`

###### Inherited from

`gameObject.GetOwner`

##### GetPersistentID()

> **GetPersistentID**(): `gamePersistentID`

Defined in: client-types/out/classes.d.ts:58989

###### Returns

`gamePersistentID`

###### Inherited from

`gameObject.GetPersistentID`

##### GetPhoneCallIndicatorSlotName()

> **GetPhoneCallIndicatorSlotName**(): `string`

Defined in: client-types/out/classes.d.ts:58990

###### Returns

`string`

###### Inherited from

`gameObject.GetPhoneCallIndicatorSlotName`

##### GetPhysicsState()

> **GetPhysicsState**(): `number`

Defined in: client-types/out/precomputed/classes.d.ts:46

###### Returns

`number`

##### GetPlaystyleMappinLocalPos()

> **GetPlaystyleMappinLocalPos**(): `Vector4`

Defined in: client-types/out/classes.d.ts:58991

###### Returns

`Vector4`

###### Inherited from

`gameObject.GetPlaystyleMappinLocalPos`

##### GetPlaystyleMappinSlotWorldPos()

> **GetPlaystyleMappinSlotWorldPos**(): `Vector4`

Defined in: client-types/out/classes.d.ts:58992

###### Returns

`Vector4`

###### Inherited from

`gameObject.GetPlaystyleMappinSlotWorldPos`

##### GetPlaystyleMappinSlotWorldTransform()

> **GetPlaystyleMappinSlotWorldTransform**(): `WorldTransform`

Defined in: client-types/out/classes.d.ts:58993

###### Returns

`WorldTransform`

###### Inherited from

`gameObject.GetPlaystyleMappinSlotWorldTransform`

##### GetPoliceStrategy()

> **GetPoliceStrategy**(): `vehiclePoliceStrategy`

Defined in: client-types/out/classes.d.ts:132557

###### Returns

`vehiclePoliceStrategy`

##### GetPoliceStrategyDestination()

> **GetPoliceStrategyDestination**(): `Vector3`

Defined in: client-types/out/classes.d.ts:132558

###### Returns

`Vector3`

##### GetPreventionSystem()

> **GetPreventionSystem**(): `PreventionSystem`

Defined in: client-types/out/classes.d.ts:58994

###### Returns

`PreventionSystem`

###### Inherited from

`gameObject.GetPreventionSystem`

##### GetPS()

> **GetPS**(): `gameObjectPS`

Defined in: client-types/out/classes.d.ts:58995

###### Returns

`gameObjectPS`

###### Inherited from

`gameObject.GetPS`

##### GetPSClassName()

> **GetPSClassName**(): `string`

Defined in: client-types/out/classes.d.ts:132559

###### Returns

`string`

###### Inherited from

`gameObject.GetPSClassName`

##### GetPSOwnerData()

> **GetPSOwnerData**(): `PSOwnerData`

Defined in: client-types/out/classes.d.ts:58997

###### Returns

`PSOwnerData`

###### Inherited from

`gameObject.GetPSOwnerData`

##### GetQuickHackIndicatorSlotName()

> **GetQuickHackIndicatorSlotName**(): `string`

Defined in: client-types/out/classes.d.ts:58998

###### Returns

`string`

###### Inherited from

`gameObject.GetQuickHackIndicatorSlotName`

##### GetRadioReceiverStationName()

> **GetRadioReceiverStationName**(): `string`

Defined in: client-types/out/classes.d.ts:132560

###### Returns

`string`

##### GetRadioReceiverTrackName()

> **GetRadioReceiverTrackName**(): `string`

Defined in: client-types/out/classes.d.ts:132561

###### Returns

`string`

##### GetReceivedDamageByPlayerLastTimeStamp()

> **GetReceivedDamageByPlayerLastTimeStamp**(): `number`

Defined in: client-types/out/classes.d.ts:58999

###### Returns

`number`

###### Inherited from

`gameObject.GetReceivedDamageByPlayerLastTimeStamp`

##### GetRecord()

> **GetRecord**(): `gamedataVehicle_Record`

Defined in: client-types/out/classes.d.ts:132562

###### Returns

`gamedataVehicle_Record`

##### GetRecordID()

> **GetRecordID**(): `string`

Defined in: client-types/out/classes.d.ts:132563

###### Returns

`string`

##### GetRoleMappinSlotName()

> **GetRoleMappinSlotName**(): `string`

Defined in: client-types/out/classes.d.ts:59000

###### Returns

`string`

###### Inherited from

`gameObject.GetRoleMappinSlotName`

##### GetScannableObjects()

> **GetScannableObjects**(): `gameScanningTooltipElementDef`[]

Defined in: client-types/out/classes.d.ts:59001

###### Returns

`gameScanningTooltipElementDef`[]

###### Inherited from

`gameObject.GetScannableObjects`

##### GetScannerAttitudeTweak()

> **GetScannerAttitudeTweak**(): `string`

Defined in: client-types/out/classes.d.ts:59002

###### Returns

`string`

###### Inherited from

`gameObject.GetScannerAttitudeTweak`

##### GetSecuritySystem()

> **GetSecuritySystem**(): `SecuritySystemControllerPS`

Defined in: client-types/out/classes.d.ts:59003

###### Returns

`SecuritySystemControllerPS`

###### Inherited from

`gameObject.GetSecuritySystem`

##### GetSensesComponent()

> **GetSensesComponent**(): `senseComponent`

Defined in: client-types/out/classes.d.ts:59004

###### Returns

`senseComponent`

###### Inherited from

`gameObject.GetSensesComponent`

##### GetSlotIdForMountedObject()

> **GetSlotIdForMountedObject**(`mountedObject`): `string`

Defined in: client-types/out/classes.d.ts:132564

###### Parameters

###### mountedObject

`gameObject`

###### Returns

`string`

##### GetSourceShootComponent()

> **GetSourceShootComponent**(): `gameSourceShootComponent`

Defined in: client-types/out/classes.d.ts:59005

###### Returns

`gameSourceShootComponent`

###### Inherited from

`gameObject.GetSourceShootComponent`

##### GetSquadMemberComponent()

> **GetSquadMemberComponent**(): `SquadMemberBaseComponent`

Defined in: client-types/out/classes.d.ts:59006

###### Returns

`SquadMemberBaseComponent`

###### Inherited from

`gameObject.GetSquadMemberComponent`

##### GetStatusEffectComponent()

> **GetStatusEffectComponent**(): `gameStatusEffectComponent`

Defined in: client-types/out/classes.d.ts:59007

###### Returns

`gameStatusEffectComponent`

###### Inherited from

`gameObject.GetStatusEffectComponent`

##### GetStimBroadcasterComponent()

> **GetStimBroadcasterComponent**(): `StimBroadcasterComponent`

Defined in: client-types/out/classes.d.ts:59008

###### Returns

`StimBroadcasterComponent`

###### Inherited from

`gameObject.GetStimBroadcasterComponent`

##### GetTaggingSystem()

> **GetTaggingSystem**(): `FocusModeTaggingSystem`

Defined in: client-types/out/classes.d.ts:59009

###### Returns

`FocusModeTaggingSystem`

###### Inherited from

`gameObject.GetTaggingSystem`

##### GetTakeOverControlSystem()

> **GetTakeOverControlSystem**(): `TakeOverControlSystem`

Defined in: client-types/out/classes.d.ts:59010

###### Returns

`TakeOverControlSystem`

###### Inherited from

`gameObject.GetTakeOverControlSystem`

##### GetTargetShootComponent()

> **GetTargetShootComponent**(): `gameTargetShootComponent`

Defined in: client-types/out/classes.d.ts:59014

###### Returns

`gameTargetShootComponent`

###### Inherited from

`gameObject.GetTargetShootComponent`

##### GetTargetTrackerComponent()

> **GetTargetTrackerComponent**(): `AITargetTrackerComponent`

Defined in: client-types/out/classes.d.ts:59015

###### Returns

`AITargetTrackerComponent`

###### Inherited from

`gameObject.GetTargetTrackerComponent`

##### GetTimeChasingTarget()

> **GetTimeChasingTarget**(): `number`

Defined in: client-types/out/classes.d.ts:132565

###### Returns

`number`

##### GetTotalCountOfInvestigationSlots()

> **GetTotalCountOfInvestigationSlots**(): `number`

Defined in: client-types/out/classes.d.ts:59017

###### Returns

`number`

###### Inherited from

`gameObject.GetTotalCountOfInvestigationSlots`

##### GetTotalMass()

> **GetTotalMass**(): `number`

Defined in: client-types/out/classes.d.ts:132566

###### Returns

`number`

##### GetTracedActionName()

> **GetTracedActionName**(): `string`

Defined in: client-types/out/classes.d.ts:59018

###### Returns

`string`

###### Inherited from

`gameObject.GetTracedActionName`

##### GetUIComponents()

> **GetUIComponents**(): `WorldWidgetComponent`[]

Defined in: client-types/out/classes.d.ts:132567

###### Returns

`WorldWidgetComponent`[]

##### GetUISlotComponent()

> **GetUISlotComponent**(): `entSlotComponent`

Defined in: client-types/out/classes.d.ts:59019

###### Returns

`entSlotComponent`

###### Inherited from

`gameObject.GetUISlotComponent`

##### GetVehicleComponent()

> **GetVehicleComponent**(): `VehicleComponent`

Defined in: client-types/out/classes.d.ts:132568

###### Returns

`VehicleComponent`

##### GetVehiclePS()

> **GetVehiclePS**(): `VehicleComponentPS`

Defined in: client-types/out/classes.d.ts:132569

###### Returns

`VehicleComponentPS`

##### GetVehicleType()

> **GetVehicleType**(): `gamedataVehicleType`

Defined in: client-types/out/classes.d.ts:132570

###### Returns

`gamedataVehicleType`

##### GetVelocity()

> **GetVelocity**(): `Vector3`

Defined in: client-types/out/precomputed/classes.d.ts:44

###### Returns

`Vector3`

##### GetWorldForward()

> **GetWorldForward**(): `Vector4`

Defined in: client-types/out/classes.d.ts:34004

###### Returns

`Vector4`

###### Inherited from

`gameObject.GetWorldForward`

##### GetWorldOrientation()

> **GetWorldOrientation**(): `Quaternion`

Defined in: client-types/out/classes.d.ts:34005

###### Returns

`Quaternion`

###### Inherited from

`gameObject.GetWorldOrientation`

##### GetWorldPosition()

> **GetWorldPosition**(): `Vector4`

Defined in: client-types/out/classes.d.ts:34006

###### Returns

`Vector4`

###### Inherited from

`gameObject.GetWorldPosition`

##### GetWorldRight()

> **GetWorldRight**(): `Vector4`

Defined in: client-types/out/classes.d.ts:34007

###### Returns

`Vector4`

###### Inherited from

`gameObject.GetWorldRight`

##### GetWorldTransform()

> **GetWorldTransform**(): `WorldTransform`

Defined in: client-types/out/classes.d.ts:34008

###### Returns

`WorldTransform`

###### Inherited from

`gameObject.GetWorldTransform`

##### GetWorldUp()

> **GetWorldUp**(): `Vector4`

Defined in: client-types/out/classes.d.ts:34009

###### Returns

`Vector4`

###### Inherited from

`gameObject.GetWorldUp`

##### GetWorldYaw()

> **GetWorldYaw**(): `number`

Defined in: client-types/out/classes.d.ts:34010

###### Returns

`number`

###### Inherited from

`gameObject.GetWorldYaw`

##### HandleDeath()

> **HandleDeath**(`instigator`): `void`

Defined in: client-types/out/classes.d.ts:59177

###### Parameters

###### instigator

`gameObject`

###### Returns

`void`

###### Inherited from

`gameObject.HandleDeath`

##### HandleDeathByTask()

> **HandleDeathByTask**(`instigator`): `void`

Defined in: client-types/out/classes.d.ts:59178

###### Parameters

###### instigator

`gameObject`

###### Returns

`void`

###### Inherited from

`gameObject.HandleDeathByTask`

##### HandleDeathTask()

> **HandleDeathTask**(`data`): `void`

Defined in: client-types/out/classes.d.ts:59179

###### Parameters

###### data

`gameScriptTaskData`

###### Returns

`void`

###### Inherited from

`gameObject.HandleDeathTask`

##### HandleICEBreakerUpdate()

> **HandleICEBreakerUpdate**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59269

###### Parameters

###### evt

`gameeventsApplyStatusEffectEvent`

###### Returns

`void`

###### Inherited from

`gameObject.HandleICEBreakerUpdate`

##### HandleStimsOnHit()

> **HandleStimsOnHit**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59180

###### Parameters

###### evt

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.HandleStimsOnHit`

##### HandleTrafficBump()

> **HandleTrafficBump**(`impact`): `void`

Defined in: client-types/out/classes.d.ts:132694

###### Parameters

###### impact

`number`

###### Returns

`void`

##### HasActiveDistraction()

> **HasActiveDistraction**(): `boolean`

Defined in: client-types/out/classes.d.ts:59020

###### Returns

`boolean`

###### Inherited from

`gameObject.HasActiveDistraction`

##### HasActiveQuickHackUpload()

> **HasActiveQuickHackUpload**(): `boolean`

Defined in: client-types/out/classes.d.ts:59021

###### Returns

`boolean`

###### Inherited from

`gameObject.HasActiveQuickHackUpload`

##### HasAnyClue()

> **HasAnyClue**(): `boolean`

Defined in: client-types/out/classes.d.ts:59022

###### Returns

`boolean`

###### Inherited from

`gameObject.HasAnyClue`

##### HasAnyDirectInteractionActive()

> **HasAnyDirectInteractionActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:59023

###### Returns

`boolean`

###### Inherited from

`gameObject.HasAnyDirectInteractionActive`

##### HasAnySlaveDevices()

> **HasAnySlaveDevices**(): `boolean`

Defined in: client-types/out/classes.d.ts:59024

###### Returns

`boolean`

###### Inherited from

`gameObject.HasAnySlaveDevices`

##### HasAnyStoredClues()

> **HasAnyStoredClues**(): `boolean`

Defined in: client-types/out/classes.d.ts:59025

###### Returns

`boolean`

###### Inherited from

`gameObject.HasAnyStoredClues`

##### HasAttitude()

> **HasAttitude**(`attitude`): `boolean`

Defined in: client-types/out/classes.d.ts:59026

###### Parameters

###### attitude

`EAIAttitude`

###### Returns

`boolean`

###### Inherited from

`gameObject.HasAttitude`

##### HasDirectActionsActive()

> **HasDirectActionsActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:59027

###### Returns

`boolean`

###### Inherited from

`gameObject.HasDirectActionsActive`

##### HasFinisherAvailable()

> **HasFinisherAvailable**(): `boolean`

Defined in: client-types/out/classes.d.ts:59028

###### Returns

`boolean`

###### Inherited from

`gameObject.HasFinisherAvailable`

##### HasFreeWorkspotForInvestigation()

> **HasFreeWorkspotForInvestigation**(): `boolean`

Defined in: client-types/out/classes.d.ts:59029

###### Returns

`boolean`

###### Inherited from

`gameObject.HasFreeWorkspotForInvestigation`

##### HasGravity()

> **HasGravity**(): `boolean`

Defined in: client-types/out/precomputed/classes.d.ts:36

###### Returns

`boolean`

##### HasHighlight()

###### Call Signature

> **HasHighlight**(`highlightType`, `outlineType`, `sourceID`): `boolean`

Defined in: client-types/out/classes.d.ts:59030

###### Parameters

###### highlightType

`EFocusForcedHighlightType`

###### outlineType

`EFocusOutlineType`

###### sourceID

`entEntityID`

###### Returns

`boolean`

###### Inherited from

`gameObject.HasHighlight`

###### Call Signature

> **HasHighlight**(`highlightType`, `outlineType`, `sourceID`, `sourceName`): `boolean`

Defined in: client-types/out/classes.d.ts:59031

###### Parameters

###### highlightType

`EFocusForcedHighlightType`

###### outlineType

`EFocusOutlineType`

###### sourceID

`entEntityID`

###### sourceName

`string`

###### Returns

`boolean`

###### Inherited from

`gameObject.HasHighlight`

###### Call Signature

> **HasHighlight**(`highlightType`, `outlineType`): `boolean`

Defined in: client-types/out/classes.d.ts:59032

###### Parameters

###### highlightType

`EFocusForcedHighlightType`

###### outlineType

`EFocusOutlineType`

###### Returns

`boolean`

###### Inherited from

`gameObject.HasHighlight`

##### HasImportantInteraction()

> **HasImportantInteraction**(): `boolean`

Defined in: client-types/out/classes.d.ts:59033

###### Returns

`boolean`

###### Inherited from

`gameObject.HasImportantInteraction`

##### HasNavPathToTarget()

> **HasNavPathToTarget**(`targetID`, `duration`, `invert`): `boolean`

Defined in: client-types/out/classes.d.ts:132571

###### Parameters

###### targetID

`entEntityID`

###### duration

`number`

###### invert

`boolean`

###### Returns

`boolean`

##### HasOccupantSlot()

> **HasOccupantSlot**(`slotName`): `boolean`

Defined in: client-types/out/classes.d.ts:132572

###### Parameters

###### slotName

`string`

###### Returns

`boolean`

##### HasOutlineOrFill()

> **HasOutlineOrFill**(`highlightType`, `outlineType`): `boolean`

Defined in: client-types/out/classes.d.ts:59034

###### Parameters

###### highlightType

`EFocusForcedHighlightType`

###### outlineType

`EFocusOutlineType`

###### Returns

`boolean`

###### Inherited from

`gameObject.HasOutlineOrFill`

##### HasPassengers()

> **HasPassengers**(): `boolean`

Defined in: client-types/out/classes.d.ts:132573

###### Returns

`boolean`

##### HasRevealRequest()

> **HasRevealRequest**(`data`): `boolean`

Defined in: client-types/out/classes.d.ts:59035

###### Parameters

###### data

`gameVisionModeSystemRevealIdentifier`

###### Returns

`boolean`

###### Inherited from

`gameObject.HasRevealRequest`

##### HasTag()

> **HasTag**(`tag`): `boolean`

Defined in: client-types/out/classes.d.ts:59036

###### Parameters

###### tag

`string`

###### Returns

`boolean`

###### Inherited from

`gameObject.HasTag`

##### HasTrafficSlot()

> **HasTrafficSlot**(): `boolean`

Defined in: client-types/out/classes.d.ts:132574

###### Returns

`boolean`

##### HasVisibilityForcedInAnimSystem()

> **HasVisibilityForcedInAnimSystem**(): `boolean`

Defined in: client-types/out/classes.d.ts:59181

###### Returns

`boolean`

###### Inherited from

`gameObject.HasVisibilityForcedInAnimSystem`

##### IsA()

> **IsA**(`className`): `boolean`

Defined in: client-types/out/classes.d.ts:81899

###### Parameters

###### className

`string`

###### Returns

`boolean`

###### Inherited from

`gameObject.IsA`

##### IsAbandoned()

> **IsAbandoned**(): `boolean`

Defined in: client-types/out/classes.d.ts:132575

###### Returns

`boolean`

##### IsAccessPoint()

> **IsAccessPoint**(): `boolean`

Defined in: client-types/out/classes.d.ts:59037

###### Returns

`boolean`

###### Inherited from

`gameObject.IsAccessPoint`

##### IsActionQueueEnabled()

> **IsActionQueueEnabled**(): `boolean`

Defined in: client-types/out/classes.d.ts:132695

###### Returns

`boolean`

##### IsActionQueueFull()

> **IsActionQueueFull**(): `boolean`

Defined in: client-types/out/classes.d.ts:132696

###### Returns

`boolean`

##### IsActive()

> **IsActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:59038

###### Returns

`boolean`

###### Inherited from

`gameObject.IsActive`

##### IsActiveBackdoor()

> **IsActiveBackdoor**(): `boolean`

Defined in: client-types/out/classes.d.ts:59039

###### Returns

`boolean`

###### Inherited from

`gameObject.IsActiveBackdoor`

##### IsAirControlEnabled()

> **IsAirControlEnabled**(): `boolean`

Defined in: client-types/out/classes.d.ts:132576

###### Returns

`boolean`

##### IsAmmoLoot()

> **IsAmmoLoot**(): `boolean`

Defined in: client-types/out/classes.d.ts:59040

###### Returns

`boolean`

###### Inherited from

`gameObject.IsAmmoLoot`

##### IsAnyClueEnabled()

> **IsAnyClueEnabled**(): `boolean`

Defined in: client-types/out/classes.d.ts:59041

###### Returns

`boolean`

###### Inherited from

`gameObject.IsAnyClueEnabled`

##### IsAnyPlaystyleValid()

> **IsAnyPlaystyleValid**(): `boolean`

Defined in: client-types/out/classes.d.ts:59042

###### Returns

`boolean`

###### Inherited from

`gameObject.IsAnyPlaystyleValid`

##### IsArmedVehicle()

> **IsArmedVehicle**(): `boolean`

Defined in: client-types/out/classes.d.ts:132577

###### Returns

`boolean`

##### IsAttached()

> **IsAttached**(): `boolean`

Defined in: client-types/out/classes.d.ts:34011

###### Returns

`boolean`

###### Inherited from

`gameObject.IsAttached`

##### IsAutoDriveModeEnabled()

> **IsAutoDriveModeEnabled**(): `boolean`

Defined in: client-types/out/classes.d.ts:132578

###### Returns

`boolean`

##### IsBackdoor()

> **IsBackdoor**(): `boolean`

Defined in: client-types/out/classes.d.ts:59043

###### Returns

`boolean`

###### Inherited from

`gameObject.IsBackdoor`

##### IsBodyDisposalPossible()

> **IsBodyDisposalPossible**(): `boolean`

Defined in: client-types/out/classes.d.ts:59044

###### Returns

`boolean`

###### Inherited from

`gameObject.IsBodyDisposalPossible`

##### IsBraindanceBlocked()

> **IsBraindanceBlocked**(): `boolean`

Defined in: client-types/out/classes.d.ts:59045

###### Returns

`boolean`

###### Inherited from

`gameObject.IsBraindanceBlocked`

##### IsBreached()

> **IsBreached**(): `boolean`

Defined in: client-types/out/classes.d.ts:59046

###### Returns

`boolean`

###### Inherited from

`gameObject.IsBreached`

##### IsChasingTarget()

> **IsChasingTarget**(): `boolean`

Defined in: client-types/out/classes.d.ts:132579

###### Returns

`boolean`

##### IsClueInspected()

> **IsClueInspected**(): `boolean`

Defined in: client-types/out/classes.d.ts:59047

###### Returns

`boolean`

###### Inherited from

`gameObject.IsClueInspected`

##### IsConnectedToBackdoorDevice()

> **IsConnectedToBackdoorDevice**(): `boolean`

Defined in: client-types/out/classes.d.ts:59048

###### Returns

`boolean`

###### Inherited from

`gameObject.IsConnectedToBackdoorDevice`

##### IsConnectedToSecuritySystem()

> **IsConnectedToSecuritySystem**(): `boolean`

Defined in: client-types/out/classes.d.ts:59049

###### Returns

`boolean`

###### Inherited from

`gameObject.IsConnectedToSecuritySystem`

##### IsContainer()

> **IsContainer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59050

###### Returns

`boolean`

###### Inherited from

`gameObject.IsContainer`

##### IsControlledByAnotherClient()

> **IsControlledByAnotherClient**(): `boolean`

Defined in: client-types/out/classes.d.ts:34012

###### Returns

`boolean`

###### Inherited from

`gameObject.IsControlledByAnotherClient`

##### IsControlledByAnyPeer()

> **IsControlledByAnyPeer**(): `boolean`

Defined in: client-types/out/classes.d.ts:34013

###### Returns

`boolean`

###### Inherited from

`gameObject.IsControlledByAnyPeer`

##### IsControlledByLocalPeer()

> **IsControlledByLocalPeer**(): `boolean`

Defined in: client-types/out/classes.d.ts:34014

###### Returns

`boolean`

###### Inherited from

`gameObject.IsControlledByLocalPeer`

##### IsControllingDevices()

> **IsControllingDevices**(): `boolean`

Defined in: client-types/out/classes.d.ts:59051

###### Returns

`boolean`

###### Inherited from

`gameObject.IsControllingDevices`

##### IsCrowdVehicle()

> **IsCrowdVehicle**(): `boolean`

Defined in: client-types/out/classes.d.ts:132580

###### Returns

`boolean`

##### IsCurrentlyScanned()

> **IsCurrentlyScanned**(): `boolean`

Defined in: client-types/out/classes.d.ts:59182

###### Returns

`boolean`

###### Inherited from

`gameObject.IsCurrentlyScanned`

##### IsCurrentTarget()

> **IsCurrentTarget**(): `boolean`

Defined in: client-types/out/classes.d.ts:59183

###### Returns

`boolean`

###### Inherited from

`gameObject.IsCurrentTarget`

##### IsDead()

> **IsDead**(): `boolean`

Defined in: client-types/out/classes.d.ts:59053

###### Returns

`boolean`

###### Inherited from

`gameObject.IsDead`

##### IsDeadNoStatPool()

> **IsDeadNoStatPool**(): `boolean`

Defined in: client-types/out/classes.d.ts:59054

###### Returns

`boolean`

###### Inherited from

`gameObject.IsDeadNoStatPool`

##### IsDemolitionSkillCheckActive()

> **IsDemolitionSkillCheckActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:59055

###### Returns

`boolean`

###### Inherited from

`gameObject.IsDemolitionSkillCheckActive`

##### IsDestroyed()

> **IsDestroyed**(): `boolean`

Defined in: client-types/out/classes.d.ts:132581

###### Returns

`boolean`

##### IsDevice()

> **IsDevice**(): `boolean`

Defined in: client-types/out/classes.d.ts:59056

###### Returns

`boolean`

###### Inherited from

`gameObject.IsDevice`

##### IsDrone()

> **IsDrone**(): `boolean`

Defined in: client-types/out/classes.d.ts:59057

###### Returns

`boolean`

###### Inherited from

`gameObject.IsDrone`

##### IsDropPoint()

> **IsDropPoint**(): `boolean`

Defined in: client-types/out/classes.d.ts:59058

###### Returns

`boolean`

###### Inherited from

`gameObject.IsDropPoint`

##### IsEngineeringSkillCheckActive()

> **IsEngineeringSkillCheckActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:59059

###### Returns

`boolean`

###### Inherited from

`gameObject.IsEngineeringSkillCheckActive`

##### IsEngineTurnedOn()

> **IsEngineTurnedOn**(): `boolean`

Defined in: client-types/out/classes.d.ts:132582

###### Returns

`boolean`

##### IsExactlyA()

> **IsExactlyA**(`className`): `boolean`

Defined in: client-types/out/classes.d.ts:81900

###### Parameters

###### className

`string`

###### Returns

`boolean`

###### Inherited from

`gameObject.IsExactlyA`

##### IsExecutingAnyCommand()

> **IsExecutingAnyCommand**(): `boolean`

Defined in: client-types/out/classes.d.ts:132583

###### Returns

`boolean`

##### IsExplosive()

> **IsExplosive**(): `boolean`

Defined in: client-types/out/classes.d.ts:59060

###### Returns

`boolean`

###### Inherited from

`gameObject.IsExplosive`

##### IsFastTravelPoint()

> **IsFastTravelPoint**(): `boolean`

Defined in: client-types/out/classes.d.ts:59061

###### Returns

`boolean`

###### Inherited from

`gameObject.IsFastTravelPoint`

##### IsFlippedOver()

> **IsFlippedOver**(): `boolean`

Defined in: client-types/out/classes.d.ts:132584

###### Returns

`boolean`

##### IsGameplayRelevant()

> **IsGameplayRelevant**(): `boolean`

Defined in: client-types/out/classes.d.ts:132585

###### Returns

`boolean`

###### Inherited from

`gameObject.IsGameplayRelevant`

##### IsGameplayRoleValid()

> **IsGameplayRoleValid**(`role`): `boolean`

Defined in: client-types/out/classes.d.ts:59064

###### Parameters

###### role

`EGameplayRole`

###### Returns

`boolean`

###### Inherited from

`gameObject.IsGameplayRoleValid`

##### IsGrouppedClue()

> **IsGrouppedClue**(): `boolean`

Defined in: client-types/out/classes.d.ts:59065

###### Returns

`boolean`

###### Inherited from

`gameObject.IsGrouppedClue`

##### IsHackable()

> **IsHackable**(): `boolean`

Defined in: client-types/out/classes.d.ts:132586

###### Returns

`boolean`

##### IsHackingPlayer()

> **IsHackingPlayer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59066

###### Returns

`boolean`

###### Inherited from

`gameObject.IsHackingPlayer`

##### IsHackingSkillCheckActive()

> **IsHackingSkillCheckActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:59067

###### Returns

`boolean`

###### Inherited from

`gameObject.IsHackingSkillCheckActive`

##### IsHandgunAmmoLoot()

> **IsHandgunAmmoLoot**(): `boolean`

Defined in: client-types/out/classes.d.ts:59068

###### Returns

`boolean`

###### Inherited from

`gameObject.IsHandgunAmmoLoot`

##### IsHighlightedInFocusMode()

> **IsHighlightedInFocusMode**(): `boolean`

Defined in: client-types/out/classes.d.ts:59069

###### Returns

`boolean`

###### Inherited from

`gameObject.IsHighlightedInFocusMode`

##### IsHostile()

> **IsHostile**(): `boolean`

Defined in: client-types/out/classes.d.ts:59070

###### Returns

`boolean`

###### Inherited from

`gameObject.IsHostile`

##### IsInAir()

> **IsInAir**(): `boolean`

Defined in: client-types/out/classes.d.ts:132587

###### Returns

`boolean`

##### IsInFinisherHealthThreshold()

> **IsInFinisherHealthThreshold**(`playerPuppet`): `boolean`

Defined in: client-types/out/classes.d.ts:59071

###### Parameters

###### playerPuppet

`gameObject`

###### Returns

`boolean`

###### Inherited from

`gameObject.IsInFinisherHealthThreshold`

##### IsInIconForcedVisibilityRange()

> **IsInIconForcedVisibilityRange**(): `boolean`

Defined in: client-types/out/classes.d.ts:59072

###### Returns

`boolean`

###### Inherited from

`gameObject.IsInIconForcedVisibilityRange`

##### IsInitialized()

> **IsInitialized**(): `boolean`

Defined in: client-types/out/classes.d.ts:59073

###### Returns

`boolean`

###### Inherited from

`gameObject.IsInitialized`

##### IsInTrafficLane()

> **IsInTrafficLane**(): `boolean`

Defined in: client-types/out/classes.d.ts:132588

###### Returns

`boolean`

##### IsInTrafficPhysicsState()

> **IsInTrafficPhysicsState**(): `boolean`

Defined in: client-types/out/classes.d.ts:132589

###### Returns

`boolean`

##### IsInvestigating()

> **IsInvestigating**(): `boolean`

Defined in: client-types/out/classes.d.ts:59074

###### Returns

`boolean`

###### Inherited from

`gameObject.IsInvestigating`

##### IsInvestigatingObject()

> **IsInvestigatingObject**(`targetID`): `boolean`

Defined in: client-types/out/classes.d.ts:59075

###### Parameters

###### targetID

`gameObject`

###### Returns

`boolean`

###### Inherited from

`gameObject.IsInvestigatingObject`

##### IsItem()

> **IsItem**(): `boolean`

Defined in: client-types/out/classes.d.ts:59184

###### Returns

`boolean`

###### Inherited from

`gameObject.IsItem`

##### IsJohnnyReplacer()

> **IsJohnnyReplacer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59076

###### Returns

`boolean`

###### Inherited from

`gameObject.IsJohnnyReplacer`

##### IsLeaningOnOneWheel()

> **IsLeaningOnOneWheel**(): `boolean`

Defined in: client-types/out/classes.d.ts:132590

###### Returns

`boolean`

##### IsNetrunner()

> **IsNetrunner**(): `boolean`

Defined in: client-types/out/classes.d.ts:132591

###### Returns

`boolean`

###### Inherited from

`gameObject.IsNetrunner`

##### IsNetworkKnownToPlayer()

> **IsNetworkKnownToPlayer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59078

###### Returns

`boolean`

###### Inherited from

`gameObject.IsNetworkKnownToPlayer`

##### IsNetworkLinkDynamic()

> **IsNetworkLinkDynamic**(): `boolean`

Defined in: client-types/out/classes.d.ts:59079

###### Returns

`boolean`

###### Inherited from

`gameObject.IsNetworkLinkDynamic`

##### IsNeutral()

> **IsNeutral**(): `boolean`

Defined in: client-types/out/classes.d.ts:59080

###### Returns

`boolean`

###### Inherited from

`gameObject.IsNeutral`

##### IsNPC()

> **IsNPC**(): `boolean`

Defined in: client-types/out/classes.d.ts:59081

###### Returns

`boolean`

###### Inherited from

`gameObject.IsNPC`

##### IsNPCShooting()

> **IsNPCShooting**(): `boolean`

Defined in: client-types/out/classes.d.ts:132592

###### Returns

`boolean`

##### IsObjectRevealed()

> **IsObjectRevealed**(): `boolean`

Defined in: client-types/out/classes.d.ts:59082

###### Returns

`boolean`

###### Inherited from

`gameObject.IsObjectRevealed`

##### IsOnGround()

> **IsOnGround**(): `boolean`

Defined in: client-types/out/precomputed/classes.d.ts:47

###### Returns

`boolean`

##### IsOnPavement()

> **IsOnPavement**(): `boolean`

Defined in: client-types/out/classes.d.ts:132593

###### Returns

`boolean`

##### IsPaperdoll()

> **IsPaperdoll**(): `boolean`

Defined in: client-types/out/classes.d.ts:59083

###### Returns

`boolean`

###### Inherited from

`gameObject.IsPaperdoll`

##### IsPerformingPanicDriving()

> **IsPerformingPanicDriving**(): `boolean`

Defined in: client-types/out/classes.d.ts:132594

###### Returns

`boolean`

##### IsPerformingSceneAnimation()

> **IsPerformingSceneAnimation**(): `boolean`

Defined in: client-types/out/classes.d.ts:132595

###### Returns

`boolean`

##### IsPhotoModeBlocked()

> **IsPhotoModeBlocked**(): `boolean`

Defined in: client-types/out/classes.d.ts:59084

###### Returns

`boolean`

###### Inherited from

`gameObject.IsPhotoModeBlocked`

##### IsPlayer()

> **IsPlayer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59085

###### Returns

`boolean`

###### Inherited from

`gameObject.IsPlayer`

##### IsPlayerActiveVehicle()

> **IsPlayerActiveVehicle**(): `boolean`

Defined in: client-types/out/classes.d.ts:132596

###### Returns

`boolean`

##### IsPlayerControlled()

> **IsPlayerControlled**(): `boolean`

Defined in: client-types/out/classes.d.ts:59086

###### Returns

`boolean`

###### Inherited from

`gameObject.IsPlayerControlled`

##### IsPlayerDriver()

> **IsPlayerDriver**(): `boolean`

Defined in: client-types/out/classes.d.ts:132597

###### Returns

`boolean`

##### IsPlayerMounted()

> **IsPlayerMounted**(): `boolean`

Defined in: client-types/out/classes.d.ts:132598

###### Returns

`boolean`

##### IsPlayerStash()

> **IsPlayerStash**(): `boolean`

Defined in: client-types/out/classes.d.ts:59087

###### Returns

`boolean`

###### Inherited from

`gameObject.IsPlayerStash`

##### IsPlayerVehicle()

> **IsPlayerVehicle**(): `boolean`

Defined in: client-types/out/classes.d.ts:132599

###### Returns

`boolean`

##### IsPrevention()

> **IsPrevention**(): `boolean`

Defined in: client-types/out/classes.d.ts:132600

###### Returns

`boolean`

###### Inherited from

`gameObject.IsPrevention`

##### IsPuppet()

> **IsPuppet**(): `boolean`

Defined in: client-types/out/classes.d.ts:59089

###### Returns

`boolean`

###### Inherited from

`gameObject.IsPuppet`

##### IsQuest()

> **IsQuest**(): `boolean`

Defined in: client-types/out/classes.d.ts:132601

###### Returns

`boolean`

###### Inherited from

`gameObject.IsQuest`

##### IsQuickHackAble()

> **IsQuickHackAble**(): `boolean`

Defined in: client-types/out/classes.d.ts:132602

###### Returns

`boolean`

###### Inherited from

`gameObject.IsQuickHackAble`

##### IsQuickHacksExposed()

> **IsQuickHacksExposed**(): `boolean`

Defined in: client-types/out/classes.d.ts:132603

###### Returns

`boolean`

###### Inherited from

`gameObject.IsQuickHacksExposed`

##### IsRadioReceiverActive()

> **IsRadioReceiverActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:132604

###### Returns

`boolean`

##### IsReplacer()

> **IsReplacer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59093

###### Returns

`boolean`

###### Inherited from

`gameObject.IsReplacer`

##### IsReplicated()

> **IsReplicated**(): `boolean`

Defined in: client-types/out/classes.d.ts:34015

###### Returns

`boolean`

###### Inherited from

`gameObject.IsReplicated`

##### IsRifleAmmoLoot()

> **IsRifleAmmoLoot**(): `boolean`

Defined in: client-types/out/classes.d.ts:59094

###### Returns

`boolean`

###### Inherited from

`gameObject.IsRifleAmmoLoot`

##### IsScaningCluesBlocked()

> **IsScaningCluesBlocked**(): `boolean`

Defined in: client-types/out/classes.d.ts:59095

###### Returns

`boolean`

###### Inherited from

`gameObject.IsScaningCluesBlocked`

##### IsScanned()

> **IsScanned**(): `boolean`

Defined in: client-types/out/classes.d.ts:59096

###### Returns

`boolean`

###### Inherited from

`gameObject.IsScanned`

##### IsScannerDataDirty()

> **IsScannerDataDirty**(): `boolean`

Defined in: client-types/out/classes.d.ts:59097

###### Returns

`boolean`

###### Inherited from

`gameObject.IsScannerDataDirty`

##### IsSelectedForDebugging()

> **IsSelectedForDebugging**(): `boolean`

Defined in: client-types/out/classes.d.ts:59098

###### Returns

`boolean`

###### Inherited from

`gameObject.IsSelectedForDebugging`

##### IsSensor()

> **IsSensor**(): `boolean`

Defined in: client-types/out/classes.d.ts:59099

###### Returns

`boolean`

###### Inherited from

`gameObject.IsSensor`

##### IsShardContainer()

> **IsShardContainer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59100

###### Returns

`boolean`

###### Inherited from

`gameObject.IsShardContainer`

##### IsShotgunAmmoLoot()

> **IsShotgunAmmoLoot**(): `boolean`

Defined in: client-types/out/classes.d.ts:59101

###### Returns

`boolean`

###### Inherited from

`gameObject.IsShotgunAmmoLoot`

##### IsSkidding()

> **IsSkidding**(`wheelSlipThreshold`): `boolean`

Defined in: client-types/out/classes.d.ts:132605

###### Parameters

###### wheelSlipThreshold

`number`

###### Returns

`boolean`

##### IsSniperAmmoLoot()

> **IsSniperAmmoLoot**(): `boolean`

Defined in: client-types/out/classes.d.ts:59102

###### Returns

`boolean`

###### Inherited from

`gameObject.IsSniperAmmoLoot`

##### IsSolo()

> **IsSolo**(): `boolean`

Defined in: client-types/out/classes.d.ts:59103

###### Returns

`boolean`

###### Inherited from

`gameObject.IsSolo`

##### IsStolen()

> **IsStolen**(): `boolean`

Defined in: client-types/out/classes.d.ts:132606

###### Returns

`boolean`

##### IsTaggedinFocusMode()

> **IsTaggedinFocusMode**(): `boolean`

Defined in: client-types/out/classes.d.ts:59104

###### Returns

`boolean`

###### Inherited from

`gameObject.IsTaggedinFocusMode`

##### IsTargetClose()

> **IsTargetClose**(`targetPosition`, `distance`): `boolean`

Defined in: client-types/out/classes.d.ts:132697

###### Parameters

###### targetPosition

`Vector4`

###### distance

`number`

###### Returns

`boolean`

##### IsTargetedWithSmartWeapon()

> **IsTargetedWithSmartWeapon**(): `boolean`

Defined in: client-types/out/classes.d.ts:59185

###### Returns

`boolean`

###### Inherited from

`gameObject.IsTargetedWithSmartWeapon`

##### IsTargetTresspassingMyZone()

> **IsTargetTresspassingMyZone**(`target`): `boolean`

Defined in: client-types/out/classes.d.ts:59105

###### Parameters

###### target

`gameObject`

###### Returns

`boolean`

###### Inherited from

`gameObject.IsTargetTresspassingMyZone`

##### IsTechie()

> **IsTechie**(): `boolean`

Defined in: client-types/out/classes.d.ts:59106

###### Returns

`boolean`

###### Inherited from

`gameObject.IsTechie`

##### IsTurret()

> **IsTurret**(): `boolean`

Defined in: client-types/out/classes.d.ts:59107

###### Returns

`boolean`

###### Inherited from

`gameObject.IsTurret`

##### IsValidHostileTarget()

> **IsValidHostileTarget**(): `boolean`

Defined in: client-types/out/classes.d.ts:59108

###### Returns

`boolean`

###### Inherited from

`gameObject.IsValidHostileTarget`

##### IsVehicle()

> **IsVehicle**(): `boolean`

Defined in: client-types/out/classes.d.ts:132607

###### Returns

`boolean`

###### Inherited from

`gameObject.IsVehicle`

##### IsVehicleAccelerateQuickhackActive()

> **IsVehicleAccelerateQuickhackActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:132608

###### Returns

`boolean`

##### IsVehicleForceBrakesQuickhackActive()

> **IsVehicleForceBrakesQuickhackActive**(): `boolean`

Defined in: client-types/out/classes.d.ts:132609

###### Returns

`boolean`

##### IsVehicleInsideInnerAreaOfAreaSpeedLimiter()

> **IsVehicleInsideInnerAreaOfAreaSpeedLimiter**(): `boolean`

Defined in: client-types/out/classes.d.ts:132610

###### Returns

`boolean`

##### IsVehicleOnStateLocked()

> **IsVehicleOnStateLocked**(): `boolean`

Defined in: client-types/out/classes.d.ts:132611

###### Returns

`boolean`

##### IsVehicleParked()

> **IsVehicleParked**(): `boolean`

Defined in: client-types/out/classes.d.ts:132612

###### Returns

`boolean`

##### IsVehicleRemoteControlled()

> **IsVehicleRemoteControlled**(): `boolean`

Defined in: client-types/out/classes.d.ts:132613

###### Returns

`boolean`

##### IsVehicleTurnedOn()

> **IsVehicleTurnedOn**(): `boolean`

Defined in: client-types/out/classes.d.ts:132614

###### Returns

`boolean`

##### IsVehicleUpsideDown()

> **IsVehicleUpsideDown**(): `boolean`

Defined in: client-types/out/classes.d.ts:132615

###### Returns

`boolean`

##### IsVRReplacer()

> **IsVRReplacer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59111

###### Returns

`boolean`

###### Inherited from

`gameObject.IsVRReplacer`

##### IsWardrobe()

> **IsWardrobe**(): `boolean`

Defined in: client-types/out/classes.d.ts:59112

###### Returns

`boolean`

###### Inherited from

`gameObject.IsWardrobe`

##### LockVehicleOnState()

> **LockVehicleOnState**(`shouldLock`): `void`

Defined in: client-types/out/classes.d.ts:132616

###### Parameters

###### shouldLock

`boolean`

###### Returns

`void`

##### MarkAsQuest()

> **MarkAsQuest**(`isQuest`): `void`

Defined in: client-types/out/classes.d.ts:132652

###### Parameters

###### isQuest

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.MarkAsQuest`

##### MatchVisualTag()

> **MatchVisualTag**(`visualTag`): `boolean`

Defined in: client-types/out/classes.d.ts:34016

###### Parameters

###### visualTag

`string`

###### Returns

`boolean`

###### Inherited from

`gameObject.MatchVisualTag`

##### MatchVisualTags()

> **MatchVisualTags**(`visualTags`): `boolean`

Defined in: client-types/out/classes.d.ts:34017

###### Parameters

###### visualTags

`string`[]

###### Returns

`boolean`

###### Inherited from

`gameObject.MatchVisualTags`

##### NextRadioReceiverStation()

> **NextRadioReceiverStation**(): `void`

Defined in: client-types/out/classes.d.ts:132617

###### Returns

`void`

##### NotifyWindowChange()

> **NotifyWindowChange**(`windowName`, `isOpened`): `void`

Defined in: client-types/out/classes.d.ts:132618

###### Parameters

###### windowName

`string`

###### isOpened

`boolean`

###### Returns

`void`

##### NPCShoot()

> **NPCShoot**(`target`, `projectiles`): `void`

Defined in: client-types/out/classes.d.ts:132619

###### Parameters

###### target

`Vector4`

###### projectiles

`number`

###### Returns

`void`

##### OnAddOrRemoveListenerForGameObject()

> **OnAddOrRemoveListenerForGameObject**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59187

###### Parameters

###### evt

`AddOrRemoveListenerForGOEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnAddOrRemoveListenerForGameObject`

##### OnAddStatusEffectTriggerListener()

> **OnAddStatusEffectTriggerListener**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59188

###### Parameters

###### evt

`AddStatusEffectListenerEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnAddStatusEffectTriggerListener`

##### OnAnimEventReplicated()

> **OnAnimEventReplicated**(`eventName`): `void`

Defined in: client-types/out/classes.d.ts:59113

###### Parameters

###### eventName

`string`

###### Returns

`void`

###### Inherited from

`gameObject.OnAnimEventReplicated`

##### OnAnimFeatureReplicated()

> **OnAnimFeatureReplicated**(`inputName`, `value`): `void`

Defined in: client-types/out/classes.d.ts:59114

###### Parameters

###### inputName

`string`

###### value

`animAnimFeature`

###### Returns

`void`

###### Inherited from

`gameObject.OnAnimFeatureReplicated`

##### OnAttitudeChanged()

> **OnAttitudeChanged**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59189

###### Parameters

###### evt

`gameeventsAttitudeChangedEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnAttitudeChanged`

##### OnAutoSaveEvent()

> **OnAutoSaveEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59190

###### Parameters

###### evt

`AutoSaveEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnAutoSaveEvent`

##### OnChangeRewardSettingsEvent()

> **OnChangeRewardSettingsEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59191

###### Parameters

###### evt

`ChangeRewardSettingsEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnChangeRewardSettingsEvent`

##### OnCheckVehicleVisialCustomizationDistanceTermination()

> **OnCheckVehicleVisialCustomizationDistanceTermination**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132653

###### Parameters

###### evt

`CheckVehicleVisialCustomizationDistanceTermination`

###### Returns

`boolean`

##### OnCrowdSettingsEvent()

> **OnCrowdSettingsEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132654

###### Parameters

###### evt

`CrowdSettingsEvent`

###### Returns

`boolean`

##### OnCustomUIAnimationEvent()

> **OnCustomUIAnimationEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59192

###### Parameters

###### evt

`CustomUIAnimationEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnCustomUIAnimationEvent`

##### OnDamageReceived()

> **OnDamageReceived**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132655

###### Parameters

###### evt

`gameeventsDamageReceivedEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnDamageReceived`

##### OnDebugOutlineEvent()

> **OnDebugOutlineEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59194

###### Parameters

###### evt

`DebugOutlineEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnDebugOutlineEvent`

##### OnDelayPrereqEvent()

> **OnDelayPrereqEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59195

###### Parameters

###### evt

`DelayPrereqEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnDelayPrereqEvent`

##### OnDelayReactionToMissingPassengersEvent()

> **OnDelayReactionToMissingPassengersEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132656

###### Parameters

###### evt

`DelayReactionToMissingPassengersEvent`

###### Returns

`boolean`

##### OnDetach()

> **OnDetach**(): `boolean`

Defined in: client-types/out/classes.d.ts:132657

###### Returns

`boolean`

###### Inherited from

`gameObject.OnDetach`

##### OnDeviceLinkRequest()

> **OnDeviceLinkRequest**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132658

###### Parameters

###### evt

`DeviceLinkRequest`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnDeviceLinkRequest`

##### OnEventReceived()

> **OnEventReceived**(`stimEvent`): `boolean`

Defined in: client-types/out/classes.d.ts:132659

###### Parameters

###### stimEvent

`senseStimuliEvent`

###### Returns

`boolean`

##### OnEventReplicated()

> **OnEventReplicated**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59115

###### Parameters

###### evt

`redEvent`

###### Returns

`void`

###### Inherited from

`gameObject.OnEventReplicated`

##### OnGameAttached()

> **OnGameAttached**(): `boolean`

Defined in: client-types/out/classes.d.ts:132660

###### Returns

`boolean`

###### Inherited from

`gameObject.OnGameAttached`

##### OnGameplayRoleChangeNotification()

> **OnGameplayRoleChangeNotification**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59199

###### Parameters

###### evt

`GameplayRoleChangeNotification`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnGameplayRoleChangeNotification`

##### OnHandleReactionEvent()

> **OnHandleReactionEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132661

###### Parameters

###### evt

`HandleReactionEvent`

###### Returns

`boolean`

##### OnHit()

> **OnHit**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132662

###### Parameters

###### evt

`gameeventsHitEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnHit`

##### OnHitAnimation()

> **OnHitAnimation**(`hitEvent`): `void`

Defined in: client-types/out/classes.d.ts:59201

###### Parameters

###### hitEvent

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.OnHitAnimation`

##### OnHitBlockedOrDeflected()

> **OnHitBlockedOrDeflected**(`hitEvent`): `void`

Defined in: client-types/out/classes.d.ts:59202

###### Parameters

###### hitEvent

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.OnHitBlockedOrDeflected`

##### OnHitInstigatorCooldown()

> **OnHitInstigatorCooldown**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59203

###### Parameters

###### evt

`HitInstigatorCooldownEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnHitInstigatorCooldown`

##### OnHitProjection()

> **OnHitProjection**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59204

###### Parameters

###### evt

`gameeventsProjectedHitEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnHitProjection`

##### OnHitSounds()

> **OnHitSounds**(`hitEvent`): `void`

Defined in: client-types/out/classes.d.ts:132698

###### Parameters

###### hitEvent

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.OnHitSounds`

##### OnHitUI()

> **OnHitUI**(`hitEvent`): `void`

Defined in: client-types/out/classes.d.ts:59206

###### Parameters

###### hitEvent

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.OnHitUI`

##### OnHitVFX()

> **OnHitVFX**(`hitEvent`): `void`

Defined in: client-types/out/classes.d.ts:59207

###### Parameters

###### hitEvent

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.OnHitVFX`

##### OnHUDInstruction()

> **OnHUDInstruction**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132663

###### Parameters

###### evt

`HUDInstruction`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnHUDInstruction`

##### OnInCrowd()

> **OnInCrowd**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132664

###### Parameters

###### evt

`gameInCrowd`

###### Returns

`boolean`

##### OnInspectorDebugDraw()

> **OnInspectorDebugDraw**(): `void`

Defined in: client-types/out/classes.d.ts:34018

###### Returns

`void`

###### Inherited from

`gameObject.OnInspectorDebugDraw`

##### OnlinkedClueTagEvent()

> **OnlinkedClueTagEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59209

###### Parameters

###### evt

`linkedClueTagEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnlinkedClueTagEvent`

##### OnLookedAtEvent()

> **OnLookedAtEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132665

###### Parameters

###### evt

`LookedAtEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnLookedAtEvent`

##### OnMiss()

> **OnMiss**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59211

###### Parameters

###### evt

`gameeventsMissEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnMiss`

##### OnMountingEvent()

> **OnMountingEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132666

###### Parameters

###### evt

`gamemountingMountingEvent`

###### Returns

`boolean`

##### OnNewVehicleVisualCustomizationEvent()

> **OnNewVehicleVisualCustomizationEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132667

###### Parameters

###### evt

`NewVehicleVisualCustomizationEvent`

###### Returns

`boolean`

##### OnOffPavement()

> **OnOffPavement**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132668

###### Parameters

###### evt

`gameOffPavement`

###### Returns

`boolean`

##### OnOutlineRequestEvent()

> **OnOutlineRequestEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59212

###### Parameters

###### evt

`OutlineRequestEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnOutlineRequestEvent`

##### OnOutOfCrowd()

> **OnOutOfCrowd**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132669

###### Parameters

###### evt

`gameOutOfCrowd`

###### Returns

`boolean`

##### OnPavement()

> **OnPavement**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132670

###### Parameters

###### evt

`gameOnPavement`

###### Returns

`boolean`

##### OnPhysicalDestructionEvent()

> **OnPhysicalDestructionEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59213

###### Parameters

###### evt

`entPhysicalDestructionEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnPhysicalDestructionEvent`

##### OnPostInitialize()

> **OnPostInitialize**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59214

###### Parameters

###### evt

`entPostInitializeEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnPostInitialize`

##### OnPreUninitialize()

> **OnPreUninitialize**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59215

###### Parameters

###### evt

`entPreUninitializeEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnPreUninitialize`

##### OnProcessVehicleVisualCustomizationLights()

> **OnProcessVehicleVisualCustomizationLights**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132671

###### Parameters

###### evt

`VehicleCustomizationLightsEvent`

###### Returns

`boolean`

##### OnPulseEvent()

> **OnPulseEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59216

###### Parameters

###### evt

`gameVisionModeUpdateVisuals`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnPulseEvent`

##### OnRecord1DamageInHistoryEvent()

> **OnRecord1DamageInHistoryEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59217

###### Parameters

###### evt

`Record1DamageInHistoryEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnRecord1DamageInHistoryEvent`

##### OnRemoveStatusEffectTriggerListener()

> **OnRemoveStatusEffectTriggerListener**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59218

###### Parameters

###### evt

`RemoveStatusEffectListenerEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnRemoveStatusEffectTriggerListener`

##### OnRequestComponents()

> **OnRequestComponents**(`ri`): `boolean`

Defined in: client-types/out/classes.d.ts:132672

###### Parameters

###### ri

`entEntityRequestComponentsInterface`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnRequestComponents`

##### OnScaleAndLockLeftHandWeaponsCompensateInStashEvent()

> **OnScaleAndLockLeftHandWeaponsCompensateInStashEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59220

###### Parameters

###### evt

`ScaleAndLockLeftHandWeaponsCompensateInStashEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnScaleAndLockLeftHandWeaponsCompensateInStashEvent`

##### OnScanningLookedAt()

> **OnScanningLookedAt**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59221

###### Parameters

###### evt

`gameScanningLookAtEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnScanningLookedAt`

##### OnScanningModeChanged()

> **OnScanningModeChanged**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59222

###### Parameters

###### evt

`gameScanningModeEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnScanningModeChanged`

##### OnSetAsQuestImportantEvent()

> **OnSetAsQuestImportantEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59223

###### Parameters

###### evt

`gameSetAsQuestImportantEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnSetAsQuestImportantEvent`

##### OnSetExposeQuickHacks()

> **OnSetExposeQuickHacks**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132673

###### Parameters

###### evt

`SetExposeQuickHacks`

###### Returns

`boolean`

##### OnSetGlitchOnUIEvent()

> **OnSetGlitchOnUIEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:34024

###### Parameters

###### evt

`SetGlitchOnUIEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnSetGlitchOnUIEvent`

##### OnSmartGunLockEvent()

> **OnSmartGunLockEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59224

###### Parameters

###### evt

`gamesmartGunSmartGunLockEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnSmartGunLockEvent`

##### OnStatusEffectApplied()

> **OnStatusEffectApplied**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59225

###### Parameters

###### evt

`gameeventsApplyStatusEffectEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnStatusEffectApplied`

##### OnStatusEffectRemoved()

> **OnStatusEffectRemoved**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59226

###### Parameters

###### evt

`gameeventsRemoveStatusEffect`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnStatusEffectRemoved`

##### OnStealVehicleEvent()

> **OnStealVehicleEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132674

###### Parameters

###### evt

`vehicleStealEvent`

###### Returns

`boolean`

##### OnStuckEvent()

> **OnStuckEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132675

###### Parameters

###### evt

`vehicleVehicleStuckEvent`

###### Returns

`boolean`

##### OnSwitchVehicleVisualCustomizationStateEvent()

> **OnSwitchVehicleVisualCustomizationStateEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132676

###### Parameters

###### evt

`SwitchVehicleVisualCustomizationStateEvent`

###### Returns

`boolean`

##### OnTagObjectEvent()

> **OnTagObjectEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59227

###### Parameters

###### evt

`TagObjectEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnTagObjectEvent`

##### OnTakeControl()

> **OnTakeControl**(`ri`): `boolean`

Defined in: client-types/out/classes.d.ts:132677

###### Parameters

###### ri

`entEntityResolveComponentsInterface`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnTakeControl`

##### OnTeleport()

> **OnTeleport**(): `boolean`

Defined in: client-types/out/classes.d.ts:132678

###### Returns

`boolean`

##### OnToggleOffMeshConnections()

> **OnToggleOffMeshConnections**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59229

###### Parameters

###### evt

`ToggleOffMeshConnections`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnToggleOffMeshConnections`

##### OnToggleVisibilityInAnimSystemEvent()

> **OnToggleVisibilityInAnimSystemEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59230

###### Parameters

###### evt

`ToggleVisibilityInAnimSystemEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnToggleVisibilityInAnimSystemEvent`

##### OnTrafficAudioEvent()

> **OnTrafficAudioEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132679

###### Parameters

###### evt

`vehicleTrafficAudioEvent`

###### Returns

`boolean`

##### OnTransformUpdated()

> **OnTransformUpdated**(): `void`

Defined in: client-types/out/classes.d.ts:59231

###### Returns

`void`

###### Inherited from

`gameObject.OnTransformUpdated`

##### OnTriggerAttackEffectorWithDelay()

> **OnTriggerAttackEffectorWithDelay**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59232

###### Parameters

###### evt

`TriggerAttackEffectorWithDelay`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnTriggerAttackEffectorWithDelay`

##### OnTriggerPanicDrivingEvent()

> **OnTriggerPanicDrivingEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132680

###### Parameters

###### evt

`TriggerPanicDrivingEvent`

###### Returns

`boolean`

##### OnUnableToStartPanicDriving()

> **OnUnableToStartPanicDriving**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132681

###### Parameters

###### evt

`vehicleUnableToStartPanicDriving`

###### Returns

`boolean`

##### OnUnifyIconicsUpgradeCountWithEffectiveTierInStashEvent()

> **OnUnifyIconicsUpgradeCountWithEffectiveTierInStashEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59233

###### Parameters

###### evt

`UnifyIconicsUpgradeCountWithEffectiveTierInStashEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnUnifyIconicsUpgradeCountWithEffectiveTierInStashEvent`

##### OnUnmountingEvent()

> **OnUnmountingEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132682

###### Parameters

###### evt

`gamemountingUnmountingEvent`

###### Returns

`boolean`

##### OnUploadProgressStateChanged()

> **OnUploadProgressStateChanged**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132683

###### Parameters

###### evt

`UploadProgramProgressEvent`

###### Returns

`boolean`

##### OnVehicleBumpEvent()

> **OnVehicleBumpEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132684

###### Parameters

###### evt

`vehicleVehicleBumpEvent`

###### Returns

`boolean`

##### OnVehicleDestructionEvent()

> **OnVehicleDestructionEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132685

###### Parameters

###### evt

`gameeventsVehicleDestructionEvent`

###### Returns

`boolean`

##### OnVehicleFinishedMounting()

> **OnVehicleFinishedMounting**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132686

###### Parameters

###### evt

`vehicleFinishedMountingEvent`

###### Returns

`boolean`

##### OnVehicleFlippedOverEvent()

> **OnVehicleFlippedOverEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132687

###### Parameters

###### evt

`vehicleFlippedOverEvent`

###### Returns

`boolean`

##### OnVehicleHit()

> **OnVehicleHit**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59234

###### Parameters

###### evt

`gameeventsVehicleHitEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnVehicleHit`

##### OnWaitForPassengersToSpawnEvent()

> **OnWaitForPassengersToSpawnEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:132688

###### Parameters

###### evt

`WaitForPassengersToSpawnEvent`

###### Returns

`boolean`

##### OnWillDieSoonEventEvent()

> **OnWillDieSoonEventEvent**(`evt`): `boolean`

Defined in: client-types/out/classes.d.ts:59235

###### Parameters

###### evt

`WillDieSoonEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.OnWillDieSoonEventEvent`

##### OnWorkspotFinished()

> **OnWorkspotFinished**(`componentName`): `boolean`

Defined in: client-types/out/classes.d.ts:132689

###### Parameters

###### componentName

`string`

###### Returns

`boolean`

##### PanicDrivingBehavior()

> **PanicDrivingBehavior**(): `void`

Defined in: client-types/out/classes.d.ts:132699

###### Returns

`void`

##### PassUpdate()

> **PassUpdate**(`dt`): `void`

Defined in: client-types/out/classes.d.ts:59116

###### Parameters

###### dt

`number`

###### Returns

`void`

###### Inherited from

`gameObject.PassUpdate`

##### PhysicsWakeUp()

> **PhysicsWakeUp**(): `void`

Defined in: client-types/out/classes.d.ts:132620

###### Returns

`void`

##### PlayerLastUsedKBM()

> **PlayerLastUsedKBM**(): `boolean`

Defined in: client-types/out/classes.d.ts:59117

###### Returns

`boolean`

###### Inherited from

`gameObject.PlayerLastUsedKBM`

##### PlayerLastUsedPad()

> **PlayerLastUsedPad**(): `boolean`

Defined in: client-types/out/classes.d.ts:59118

###### Returns

`boolean`

###### Inherited from

`gameObject.PlayerLastUsedPad`

##### PlayerLastUsedPS5Pad()

> **PlayerLastUsedPS5Pad**(): `boolean`

Defined in: client-types/out/classes.d.ts:59119

###### Returns

`boolean`

###### Inherited from

`gameObject.PlayerLastUsedPS5Pad`

##### PlayVehicleVisualCustomizationShader()

> **PlayVehicleVisualCustomizationShader**(`play`, `instant?`, `affectRims?`): `void`

Defined in: client-types/out/classes.d.ts:132621

###### Parameters

###### play

`boolean`

###### instant?

`boolean`

###### affectRims?

`boolean`

###### Returns

`void`

##### PrefetchAppearanceChange()

> **PrefetchAppearanceChange**(`newAppearanceName`): `void`

Defined in: client-types/out/classes.d.ts:34019

###### Parameters

###### newAppearanceName

`string`

###### Returns

`void`

###### Inherited from

`gameObject.PrefetchAppearanceChange`

##### PreHijackPrepareDriverSlot()

> **PreHijackPrepareDriverSlot**(): `void`

Defined in: client-types/out/classes.d.ts:132622

###### Returns

`void`

##### ProcessDamagePipeline()

> **ProcessDamagePipeline**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59236

###### Parameters

###### evt

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.ProcessDamagePipeline`

##### ProcessDamageReceived()

> **ProcessDamageReceived**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59237

###### Parameters

###### evt

`gameeventsDamageReceivedEvent`

###### Returns

`void`

###### Inherited from

`gameObject.ProcessDamageReceived`

##### ProlongWeaponGlitchNPCDebuff()

> **ProlongWeaponGlitchNPCDebuff**(`player`): `void`

Defined in: client-types/out/classes.d.ts:59238

###### Parameters

###### player

`PlayerPuppet`

###### Returns

`void`

###### Inherited from

`gameObject.ProlongWeaponGlitchNPCDebuff`

##### PulseNetwork()

> **PulseNetwork**(`revealNetworkAtEnd`): `void`

Defined in: client-types/out/classes.d.ts:59239

###### Parameters

###### revealNetworkAtEnd

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.PulseNetwork`

##### PurgeScannerBlackboard()

> **PurgeScannerBlackboard**(): `void`

Defined in: client-types/out/classes.d.ts:59240

###### Returns

`void`

###### Inherited from

`gameObject.PurgeScannerBlackboard`

##### QueueEvent()

> **QueueEvent**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:34020

###### Parameters

###### evt

`redEvent`

###### Returns

`void`

###### Inherited from

`gameObject.QueueEvent`

##### QueueEventForEntityID()

> **QueueEventForEntityID**(`entityID`, `evt`): `boolean`

Defined in: client-types/out/classes.d.ts:34021

###### Parameters

###### entityID

`entEntityID`

###### evt

`redEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.QueueEventForEntityID`

##### QueueEventForNodeID()

> **QueueEventForNodeID**(`nodeID`, `evt`): `boolean`

Defined in: client-types/out/classes.d.ts:34022

###### Parameters

###### nodeID

`worldGlobalNodeRef`

###### evt

`redEvent`

###### Returns

`boolean`

###### Inherited from

`gameObject.QueueEventForNodeID`

##### QueueReplicatedEvent()

> **QueueReplicatedEvent**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59126

###### Parameters

###### evt

`redEvent`

###### Returns

`void`

###### Inherited from

`gameObject.QueueReplicatedEvent`

##### ReactToHitProcess()

> **ReactToHitProcess**(`hitEvent`): `void`

Defined in: client-types/out/classes.d.ts:132623

###### Parameters

###### hitEvent

`gameeventsHitEvent`

###### Returns

`void`

###### Inherited from

`gameObject.ReactToHitProcess`

##### Record1DamageInHistory()

> **Record1DamageInHistory**(`source`): `void`

Defined in: client-types/out/classes.d.ts:59128

###### Parameters

###### source

`gameObject`

###### Returns

`void`

###### Inherited from

`gameObject.Record1DamageInHistory`

##### RecordHasTag()

###### Call Signature

> **RecordHasTag**(`vehicleRecord`, `tag`): `boolean`

Defined in: client-types/out/classes.d.ts:132624

###### Parameters

###### vehicleRecord

`gamedataVehicle_Record`

###### tag

`string`

###### Returns

`boolean`

###### Call Signature

> **RecordHasTag**(`tag`): `boolean`

Defined in: client-types/out/classes.d.ts:132625

###### Parameters

###### tag

`string`

###### Returns

`boolean`

##### ReevaluateStealing()

> **ReevaluateStealing**(`character`, `slotID`, `stealingAction`): `boolean`

Defined in: client-types/out/classes.d.ts:132700

###### Parameters

###### character

`gameObject`

###### slotID

`string`

###### stealingAction

`boolean`

###### Returns

`boolean`

##### RegisterInputListener()

> **RegisterInputListener**(`listener`, `name?`): `void`

Defined in: client-types/out/classes.d.ts:59129

###### Parameters

###### listener

`IScriptable`

###### name?

`string`

###### Returns

`void`

###### Inherited from

`gameObject.RegisterInputListener`

##### RegisterInputListenerWithOwner()

> **RegisterInputListenerWithOwner**(`listener`, `name`): `void`

Defined in: client-types/out/classes.d.ts:59130

###### Parameters

###### listener

`IScriptable`

###### name

`string`

###### Returns

`void`

###### Inherited from

`gameObject.RegisterInputListenerWithOwner`

##### RegisterToHUDManager()

> **RegisterToHUDManager**(`shouldRegister`): `void`

Defined in: client-types/out/classes.d.ts:59241

###### Parameters

###### shouldRegister

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.RegisterToHUDManager`

##### RegisterToHUDManagerByTask()

> **RegisterToHUDManagerByTask**(`shouldRegister`): `void`

Defined in: client-types/out/classes.d.ts:59242

###### Parameters

###### shouldRegister

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.RegisterToHUDManagerByTask`

##### RegisterToHUDManagerTask()

> **RegisterToHUDManagerTask**(`data`): `void`

Defined in: client-types/out/classes.d.ts:59243

###### Parameters

###### data

`gameScriptTaskData`

###### Returns

`void`

###### Inherited from

`gameObject.RegisterToHUDManagerTask`

##### ReplicateAnimEvent()

> **ReplicateAnimEvent**(`obj`, `eventName`): `void`

Defined in: client-types/out/classes.d.ts:59135

###### Parameters

###### obj

`gameObject`

###### eventName

`string`

###### Returns

`void`

###### Inherited from

`gameObject.ReplicateAnimEvent`

##### ReplicateAnimFeature()

> **ReplicateAnimFeature**(`obj`, `inputName`, `value`): `void`

Defined in: client-types/out/classes.d.ts:59136

###### Parameters

###### obj

`gameObject`

###### inputName

`string`

###### value

`animAnimFeature`

###### Returns

`void`

###### Inherited from

`gameObject.ReplicateAnimFeature`

##### ReplicateInputBool()

> **ReplicateInputBool**(`obj`, `inputName`, `value`): `void`

Defined in: client-types/out/classes.d.ts:59137

###### Parameters

###### obj

`gameObject`

###### inputName

`string`

###### value

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.ReplicateInputBool`

##### ReplicateInputFloat()

> **ReplicateInputFloat**(`obj`, `inputName`, `value`): `void`

Defined in: client-types/out/classes.d.ts:59138

###### Parameters

###### obj

`gameObject`

###### inputName

`string`

###### value

`number`

###### Returns

`void`

###### Inherited from

`gameObject.ReplicateInputFloat`

##### ReplicateInputInt()

> **ReplicateInputInt**(`obj`, `inputName`, `value`): `void`

Defined in: client-types/out/classes.d.ts:59139

###### Parameters

###### obj

`gameObject`

###### inputName

`string`

###### value

`number`

###### Returns

`void`

###### Inherited from

`gameObject.ReplicateInputInt`

##### ReplicateInputVector()

> **ReplicateInputVector**(`obj`, `inputName`, `value`): `void`

Defined in: client-types/out/classes.d.ts:59140

###### Parameters

###### obj

`gameObject`

###### inputName

`string`

###### value

`Vector4`

###### Returns

`void`

###### Inherited from

`gameObject.ReplicateInputVector`

##### RequestAutoSave()

> **RequestAutoSave**(`isForced`): `boolean`

Defined in: client-types/out/classes.d.ts:59270

###### Parameters

###### isForced

`boolean`

###### Returns

`boolean`

###### Inherited from

`gameObject.RequestAutoSave`

##### RequestAutoSaveWithDelay()

> **RequestAutoSaveWithDelay**(`value`, `maxAttempts`, `isForced`): `void`

Defined in: client-types/out/classes.d.ts:59271

###### Parameters

###### value

`number`

###### maxAttempts

`number`

###### isForced

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.RequestAutoSaveWithDelay`

##### RequestHUDRefresh()

###### Call Signature

> **RequestHUDRefresh**(`targetID`, `updateData?`): `void`

Defined in: client-types/out/classes.d.ts:59244

###### Parameters

###### targetID

`entEntityID`

###### updateData?

`HUDActorUpdateData`

###### Returns

`void`

###### Inherited from

`gameObject.RequestHUDRefresh`

###### Call Signature

> **RequestHUDRefresh**(`updateData?`): `void`

Defined in: client-types/out/classes.d.ts:59245

###### Parameters

###### updateData?

`HUDActorUpdateData`

###### Returns

`void`

###### Inherited from

`gameObject.RequestHUDRefresh`

##### ResendHandleReactionEvent()

> **ResendHandleReactionEvent**(): `void`

Defined in: client-types/out/classes.d.ts:132701

###### Returns

`void`

##### ResetReactionSequenceOfAllPassengers()

> **ResetReactionSequenceOfAllPassengers**(): `void`

Defined in: client-types/out/classes.d.ts:132702

###### Returns

`void`

##### ResetTimesSentReactionEvent()

> **ResetTimesSentReactionEvent**(): `void`

Defined in: client-types/out/classes.d.ts:132703

###### Returns

`void`

##### ResolveFacts()

> **ResolveFacts**(`facts`): `void`

Defined in: client-types/out/classes.d.ts:59246

###### Parameters

###### facts

`SFactOperationData`[]

###### Returns

`void`

###### Inherited from

`gameObject.ResolveFacts`

##### ResolveFocusClueConclusion()

> **ResolveFocusClueConclusion**(`clueIndex`, `conclusionData`): `void`

Defined in: client-types/out/classes.d.ts:59272

###### Parameters

###### clueIndex

`number`

###### conclusionData

`gameScanningTooltipElementDef`

###### Returns

`void`

###### Inherited from

`gameObject.ResolveFocusClueConclusion`

##### ResolveFocusClueExtendedDescription()

> **ResolveFocusClueExtendedDescription**(`clueIndex`): `void`

Defined in: client-types/out/classes.d.ts:59273

###### Parameters

###### clueIndex

`number`

###### Returns

`void`

###### Inherited from

`gameObject.ResolveFocusClueExtendedDescription`

##### ResolveHitIstigatorCooldown()

> **ResolveHitIstigatorCooldown**(`instigatorID`): `boolean`

Defined in: client-types/out/classes.d.ts:59247

###### Parameters

###### instigatorID

`entEntityID`

###### Returns

`boolean`

###### Inherited from

`gameObject.ResolveHitIstigatorCooldown`

##### RestoreRevealState()

> **RestoreRevealState**(): `void`

Defined in: client-types/out/classes.d.ts:59274

###### Returns

`void`

###### Inherited from

`gameObject.RestoreRevealState`

##### RewardKiller()

> **RewardKiller**(`killer`, `killType`, `isAnyDamageNonlethal`): `void`

Defined in: client-types/out/classes.d.ts:59248

###### Parameters

###### killer

`gameObject`

###### killType

`gameKillType`

###### isAnyDamageNonlethal

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.RewardKiller`

##### ScheduleAppearanceChange()

> **ScheduleAppearanceChange**(`newAppearanceName`): `void`

Defined in: client-types/out/classes.d.ts:34023

###### Parameters

###### newAppearanceName

`string`

###### Returns

`void`

###### Inherited from

`gameObject.ScheduleAppearanceChange`

##### SendDelayedFinishedMountingEventToPS()

> **SendDelayedFinishedMountingEventToPS**(`isMounting`, `slotID`, `character`, `delay`): `void`

Defined in: client-types/out/classes.d.ts:132626

###### Parameters

###### isMounting

`boolean`

###### slotID

`string`

###### character

`gameObject`

###### delay

`number`

###### Returns

`void`

##### SendEventToDefaultPS()

> **SendEventToDefaultPS**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:132690

###### Parameters

###### evt

`redEvent`

###### Returns

`void`

###### Inherited from

`gameObject.SendEventToDefaultPS`

##### SendForceRevealObjectEvent()

> **SendForceRevealObjectEvent**(`reveal`, `reason`, `instigatorID?`, `lifetime?`, `delay?`): `void`

Defined in: client-types/out/classes.d.ts:59250

###### Parameters

###### reveal

`boolean`

###### reason

`string`

###### instigatorID?

`entEntityID`

###### lifetime?

`number`

###### delay?

`number`

###### Returns

`void`

###### Inherited from

`gameObject.SendForceRevealObjectEvent`

##### SendQuickhackCommands()

> **SendQuickhackCommands**(`shouldOpen`): `void`

Defined in: client-types/out/classes.d.ts:132691

###### Parameters

###### shouldOpen

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.SendQuickhackCommands`

##### SendReactivateHighlightEvent()

> **SendReactivateHighlightEvent**(): `void`

Defined in: client-types/out/classes.d.ts:59252

###### Returns

`void`

###### Inherited from

`gameObject.SendReactivateHighlightEvent`

##### SetCurrentlyUploadingAction()

> **SetCurrentlyUploadingAction**(`action`): `void`

Defined in: client-types/out/classes.d.ts:132627

###### Parameters

###### action

`ScriptableDeviceAction`

###### Returns

`void`

###### Inherited from

`gameObject.SetCurrentlyUploadingAction`

##### SetDestructionGridPointValues()

> **SetDestructionGridPointValues**(`layer`, `values`, `accumulate`): `void`

Defined in: client-types/out/classes.d.ts:132628

###### Parameters

###### layer

`number`

###### values

`number`[]

###### accumulate

`boolean`

###### Returns

`void`

##### SetHasExploded()

> **SetHasExploded**(): `void`

Defined in: client-types/out/classes.d.ts:132629

###### Returns

`void`

##### SetInteriorUIEnabled()

> **SetInteriorUIEnabled**(`enabled`): `void`

Defined in: client-types/out/classes.d.ts:132704

###### Parameters

###### enabled

`boolean`

###### Returns

`void`

##### SetIsHackable()

> **SetIsHackable**(`enable`): `void`

Defined in: client-types/out/classes.d.ts:132630

###### Parameters

###### enable

`boolean`

###### Returns

`void`

##### SetPoliceStrategy()

> **SetPoliceStrategy**(`strategy`): `void`

Defined in: client-types/out/classes.d.ts:132631

###### Parameters

###### strategy

`vehiclePoliceStrategy`

###### Returns

`void`

##### SetPoliceStrategyDestination()

> **SetPoliceStrategyDestination**(`dest`): `void`

Defined in: client-types/out/classes.d.ts:132632

###### Parameters

###### dest

`Vector4`

###### Returns

`void`

##### SetRadioReceiverStation()

> **SetRadioReceiverStation**(`stationIndex`): `void`

Defined in: client-types/out/classes.d.ts:132633

###### Parameters

###### stationIndex

`number`

###### Returns

`void`

##### SetRadioTier()

> **SetRadioTier**(`radioTier`, `overrideTier`): `void`

Defined in: client-types/out/classes.d.ts:132634

###### Parameters

###### radioTier

`number`

###### overrideTier

`boolean`

###### Returns

`void`

##### SetScannerDirty()

> **SetScannerDirty**(`dirty`): `void`

Defined in: client-types/out/classes.d.ts:59147

###### Parameters

###### dirty

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.SetScannerDirty`

##### SetVehicleRemoteControlled()

> **SetVehicleRemoteControlled**(`enable`, `shouldUnseatPassengers`, `shouldModifyInteractionState`): `void`

Defined in: client-types/out/classes.d.ts:132635

###### Parameters

###### enable

`boolean`

###### shouldUnseatPassengers

`boolean`

###### shouldModifyInteractionState

`boolean`

###### Returns

`void`

##### ShouldDamageSystemIgnoreHit()

> **ShouldDamageSystemIgnoreHit**(`hitComponentName`): `boolean`

Defined in: client-types/out/classes.d.ts:132636

###### Parameters

###### hitComponentName

`string`

###### Returns

`boolean`

##### ShouldEnableRemoteLayer()

> **ShouldEnableRemoteLayer**(): `boolean`

Defined in: client-types/out/classes.d.ts:59148

###### Returns

`boolean`

###### Inherited from

`gameObject.ShouldEnableRemoteLayer`

##### ShouldForceRegisterInHUDManager()

> **ShouldForceRegisterInHUDManager**(): `boolean`

Defined in: client-types/out/classes.d.ts:59149

###### Returns

`boolean`

###### Inherited from

`gameObject.ShouldForceRegisterInHUDManager`

##### ShouldPreventionReactToExplosion()

> **ShouldPreventionReactToExplosion**(): `boolean`

Defined in: client-types/out/classes.d.ts:132637

###### Returns

`boolean`

##### ShouldReactToTarget()

> **ShouldReactToTarget**(`targetID`): `boolean`

Defined in: client-types/out/classes.d.ts:59150

###### Parameters

###### targetID

`entEntityID`

###### Returns

`boolean`

###### Inherited from

`gameObject.ShouldReactToTarget`

##### ShouldRegisterToHUD()

> **ShouldRegisterToHUD**(): `boolean`

Defined in: client-types/out/classes.d.ts:132638

###### Returns

`boolean`

###### Inherited from

`gameObject.ShouldRegisterToHUD`

##### ShouldSendGameAttachedEventToPS()

> **ShouldSendGameAttachedEventToPS**(): `boolean`

Defined in: client-types/out/classes.d.ts:59152

###### Returns

`boolean`

###### Inherited from

`gameObject.ShouldSendGameAttachedEventToPS`

##### ShouldShowScanner()

> **ShouldShowScanner**(): `boolean`

Defined in: client-types/out/classes.d.ts:132639

###### Returns

`boolean`

###### Inherited from

`gameObject.ShouldShowScanner`

##### StartPingingNetwork()

> **StartPingingNetwork**(): `void`

Defined in: client-types/out/classes.d.ts:59253

###### Returns

`void`

###### Inherited from

`gameObject.StartPingingNetwork`

##### StartStatusEffectSFX()

> **StartStatusEffectSFX**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59254

###### Parameters

###### evt

`gameeventsApplyStatusEffectEvent`

###### Returns

`void`

###### Inherited from

`gameObject.StartStatusEffectSFX`

##### StartStatusEffectVFX()

> **StartStatusEffectVFX**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59255

###### Parameters

###### evt

`gameeventsApplyStatusEffectEvent`

###### Returns

`void`

###### Inherited from

`gameObject.StartStatusEffectVFX`

##### StealVehicle()

> **StealVehicle**(`thief`): `void`

Defined in: client-types/out/classes.d.ts:132705

###### Parameters

###### thief

`gameObject`

###### Returns

`void`

##### StopPingingNetwork()

> **StopPingingNetwork**(): `void`

Defined in: client-types/out/classes.d.ts:59256

###### Returns

`void`

###### Inherited from

`gameObject.StopPingingNetwork`

##### StopStatusEffectSFX()

> **StopStatusEffectSFX**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59257

###### Parameters

###### evt

`gameeventsRemoveStatusEffect`

###### Returns

`void`

###### Inherited from

`gameObject.StopStatusEffectSFX`

##### StopStatusEffectVFX()

> **StopStatusEffectVFX**(`evt`): `void`

Defined in: client-types/out/classes.d.ts:59258

###### Parameters

###### evt

`gameeventsRemoveStatusEffect`

###### Returns

`void`

###### Inherited from

`gameObject.StopStatusEffectVFX`

##### SyncVehicleVisualCustomizationDefinition()

> **SyncVehicleVisualCustomizationDefinition**(): `void`

Defined in: client-types/out/classes.d.ts:132706

###### Returns

`void`

##### ToggleForcedVisibilityInAnimSystem()

> **ToggleForcedVisibilityInAnimSystem**(`sourceName`, `isVisibe`, `transitionTime?`, `entityID?`, `forcedVisibleOnlyInFrustum?`): `void`

Defined in: client-types/out/classes.d.ts:59261

###### Parameters

###### sourceName

`string`

###### isVisibe

`boolean`

###### transitionTime?

`number`

###### entityID?

`entEntityID`

###### forcedVisibleOnlyInFrustum?

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.ToggleForcedVisibilityInAnimSystem`

##### ToggleHorn()

> **ToggleHorn**(`toggle`, `isPolice?`): `void`

Defined in: client-types/out/classes.d.ts:132640

###### Parameters

###### toggle

`boolean`

###### isPolice?

`boolean`

###### Returns

`void`

##### ToggleQuestImportance()

> **ToggleQuestImportance**(`isImportant`): `void`

Defined in: client-types/out/classes.d.ts:59262

###### Parameters

###### isImportant

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.ToggleQuestImportance`

##### ToggleRadioReceiver()

> **ToggleRadioReceiver**(`toggle`): `void`

Defined in: client-types/out/classes.d.ts:132641

###### Parameters

###### toggle

`boolean`

###### Returns

`void`

##### ToggleSiren()

> **ToggleSiren**(`toggle`): `void`

Defined in: client-types/out/classes.d.ts:132642

###### Parameters

###### toggle

`boolean`

###### Returns

`void`

##### ToggleVehicleRemoteControlCamera()

> **ToggleVehicleRemoteControlCamera**(): `void`

Defined in: client-types/out/classes.d.ts:132643

###### Returns

`void`

##### ToString()

> **ToString**(): `string`

Defined in: client-types/out/classes.d.ts:81901

###### Returns

`string`

###### Inherited from

`gameObject.ToString`

##### TriggerDrivingPanicBehavior()

> **TriggerDrivingPanicBehavior**(`threatPosition`): `void`

Defined in: client-types/out/classes.d.ts:132707

###### Parameters

###### threatPosition

`Vector4`

###### Returns

`void`

##### TriggerEvent()

> **TriggerEvent**(`eventName`, `data?`, `flags?`): `boolean`

Defined in: client-types/out/classes.d.ts:59163

###### Parameters

###### eventName

`string`

###### data?

`IScriptable`

###### flags?

`number`

###### Returns

`boolean`

###### Inherited from

`gameObject.TriggerEvent`

##### TriggerExitBehavior()

> **TriggerExitBehavior**(`maxDelayOverride?`): `void`

Defined in: client-types/out/classes.d.ts:132644

###### Parameters

###### maxDelayOverride?

`number`

###### Returns

`void`

##### TriggerFearInsideVehicleBehavior()

> **TriggerFearInsideVehicleBehavior**(): `void`

Defined in: client-types/out/classes.d.ts:132708

###### Returns

`void`

##### TriggerMenuEvent()

> **TriggerMenuEvent**(`eventName`): `void`

Defined in: client-types/out/classes.d.ts:59263

###### Parameters

###### eventName

`string`

###### Returns

`void`

###### Inherited from

`gameObject.TriggerMenuEvent`

##### TriggerUnconsciousBehaviorForPassengers()

> **TriggerUnconsciousBehaviorForPassengers**(): `void`

Defined in: client-types/out/classes.d.ts:132709

###### Returns

`void`

##### TryGetControlledProxy()

> **TryGetControlledProxy**(): `gameObject`

Defined in: client-types/out/classes.d.ts:59164

###### Returns

`gameObject`

###### Inherited from

`gameObject.TryGetControlledProxy`

##### TryOpenQuickhackMenu()

> **TryOpenQuickhackMenu**(`shouldOpen`): `void`

Defined in: client-types/out/classes.d.ts:59264

###### Parameters

###### shouldOpen

`boolean`

###### Returns

`void`

###### Inherited from

`gameObject.TryOpenQuickhackMenu`

##### TrySetHitCooldown()

> **TrySetHitCooldown**(): `boolean`

Defined in: client-types/out/classes.d.ts:132645

###### Returns

`boolean`

##### TurnEngineOn()

> **TurnEngineOn**(`on`): `void`

Defined in: client-types/out/classes.d.ts:132646

###### Parameters

###### on

`boolean`

###### Returns

`void`

##### TurnVehicleOn()

> **TurnVehicleOn**(`on`): `void`

Defined in: client-types/out/classes.d.ts:132647

###### Parameters

###### on

`boolean`

###### Returns

`void`

##### UnregisterInputListener()

> **UnregisterInputListener**(`listener`, `name?`): `void`

Defined in: client-types/out/classes.d.ts:59165

###### Parameters

###### listener

`IScriptable`

###### name?

`string`

###### Returns

`void`

###### Inherited from

`gameObject.UnregisterInputListener`

##### Update()

> **Update**(`dt`): `void`

Defined in: client-types/out/classes.d.ts:59265

###### Parameters

###### dt

`number`

###### Returns

`void`

###### Inherited from

`gameObject.Update`

##### UpdateAdditionalScanningData()

> **UpdateAdditionalScanningData**(): `void`

Defined in: client-types/out/classes.d.ts:59167

###### Returns

`void`

###### Inherited from

`gameObject.UpdateAdditionalScanningData`

##### UpdateDefaultHighlight()

> **UpdateDefaultHighlight**(): `void`

Defined in: client-types/out/classes.d.ts:59266

###### Returns

`void`

###### Inherited from

`gameObject.UpdateDefaultHighlight`

##### VehicleOwnerWasChanged()

> **VehicleOwnerWasChanged**(): `void`

Defined in: client-types/out/precomputed/classes.d.ts:49

###### Returns

`void`

##### WasRadioReceiverPlaying()

> **WasRadioReceiverPlaying**(): `boolean`

Defined in: client-types/out/classes.d.ts:132648

###### Returns

`boolean`

##### AddListener()

> `static` **AddListener**(`obj`, `listener`): `void`

Defined in: client-types/out/classes.d.ts:58912

###### Parameters

###### obj

`gameObject`

###### listener

`GameObjectListener`

###### Returns

`void`

##### AddStatusEffectTriggerListener()

> `static` **AddStatusEffectTriggerListener**(`target`, `listener`): `void`

Defined in: client-types/out/classes.d.ts:58913

###### Parameters

###### target

`gameObject`

###### listener

`StatusEffectTriggerListener`

###### Returns

`void`

##### ApplyModifierGroup()

> `static` **ApplyModifierGroup**(`self`, `modifierGroupID`): `void`

Defined in: client-types/out/classes.d.ts:58914

###### Parameters

###### self

`gameObject`

###### modifierGroupID

`number`

###### Returns

`void`

##### AudioParameter()

> `static` **AudioParameter**(`self`, `parameterName`, `parameterValue`, `emitterName?`): `void`

Defined in: client-types/out/classes.d.ts:58915

###### Parameters

###### self

`gameObject`

###### parameterName

`string`

###### parameterValue

`number`

###### emitterName?

`string`

###### Returns

`void`

##### AudioSwitch()

> `static` **AudioSwitch**(`self`, `switchName`, `switchValue`, `emitterName?`): `void`

Defined in: client-types/out/classes.d.ts:58916

###### Parameters

###### self

`gameObject`

###### switchName

`string`

###### switchValue

`string`

###### emitterName?

`string`

###### Returns

`void`

##### BreakReplicatedEffectLoopEvent()

> `static` **BreakReplicatedEffectLoopEvent**(`self`, `effectName`): `void`

Defined in: client-types/out/classes.d.ts:58919

###### Parameters

###### self

`gameObject`

###### effectName

`string`

###### Returns

`void`

##### ChangeAttitudeToHostile()

> `static` **ChangeAttitudeToHostile**(`owner`, `target`): `void`

Defined in: client-types/out/classes.d.ts:58930

###### Parameters

###### owner

`gameObject`

###### target

`gameObject`

###### Returns

`void`

##### ChangeAttitudeToNeutral()

> `static` **ChangeAttitudeToNeutral**(`owner`, `target`): `void`

Defined in: client-types/out/classes.d.ts:58931

###### Parameters

###### owner

`gameObject`

###### target

`gameObject`

###### Returns

`void`

##### DetectScriptableCycles()

> `static` **DetectScriptableCycles**(): `void`

Defined in: client-types/out/classes.d.ts:81897

###### Returns

`void`

##### ForceVisionAppearance()

> `static` **ForceVisionAppearance**(`self`, `data`): `void`

Defined in: client-types/out/classes.d.ts:58943

###### Parameters

###### self

`gameObject`

###### data

`FocusForcedHighlightData`

###### Returns

`void`

###### Inherited from

`gameObject.ForceVisionAppearance`

##### GetActiveWeapon()

> `static` **GetActiveWeapon**(`object`): `gameweaponObject`

Defined in: client-types/out/classes.d.ts:58945

###### Parameters

###### object

`gameObject`

###### Returns

`gameweaponObject`

##### GetAttackAngleInFloat()

> `static` **GetAttackAngleInFloat**(`hitEvent`): `number`

Defined in: client-types/out/classes.d.ts:58947

###### Parameters

###### hitEvent

`gameeventsHitEvent`

###### Returns

`number`

##### GetAttackAngleInInt()

> `static` **GetAttackAngleInInt**(`hitEvent`, `hitSource?`): `number`

Defined in: client-types/out/classes.d.ts:58948

###### Parameters

###### hitEvent

`gameeventsHitEvent`

###### hitSource?

`number`

###### Returns

`number`

##### GetAttitudeBetween()

> `static` **GetAttitudeBetween**(`first`, `second`): `EAIAttitude`

Defined in: client-types/out/classes.d.ts:58950

###### Parameters

###### first

`gameObject`

###### second

`gameObject`

###### Returns

`EAIAttitude`

##### GetAttitudeTowards()

> `static` **GetAttitudeTowards**(`first`, `second`): `EAIAttitude`

Defined in: client-types/out/classes.d.ts:58951

###### Parameters

###### first

`gameObject`

###### second

`gameObject`

###### Returns

`EAIAttitude`

###### Inherited from

`gameObject.GetAttitudeTowards`

##### GetFinisherHealthThresholdIncrease()

> `static` **GetFinisherHealthThresholdIncrease**(`target`, `playerPuppet`): `number`

Defined in: client-types/out/classes.d.ts:59268

###### Parameters

###### target

`gameObject`

###### playerPuppet

`gameObject`

###### Returns

`number`

##### GetLocalAngleForDirectionInInt()

> `static` **GetLocalAngleForDirectionInInt**(`direction`, `owner`): `number`

Defined in: client-types/out/classes.d.ts:58979

###### Parameters

###### direction

`Vector4`

###### owner

`gameObject`

###### Returns

`number`

##### GetTargetAngleInFloat()

> `static` **GetTargetAngleInFloat**(`target`, `owner`): `number`

Defined in: client-types/out/classes.d.ts:59011

###### Parameters

###### target

`gameObject`

###### owner

`gameObject`

###### Returns

`number`

##### GetTargetAngleInInt()

###### Call Signature

> `static` **GetTargetAngleInInt**(`target`, `owner`): \[`number`, `number`\]

Defined in: client-types/out/classes.d.ts:59012

###### Parameters

###### target

`gameObject`

###### owner

`gameObject`

###### Returns

\[`number`, `number`\]

###### Call Signature

> `static` **GetTargetAngleInInt**(`target`, `owner`): `number`

Defined in: client-types/out/classes.d.ts:59013

###### Parameters

###### target

`gameObject`

###### owner

`gameObject`

###### Returns

`number`

##### GetTDBID()

> `static` **GetTDBID**(`object`): `string`

Defined in: client-types/out/classes.d.ts:59016

###### Parameters

###### object

`gameObject`

###### Returns

`string`

##### IsCooldownActive()

> `static` **IsCooldownActive**(`self`, `cooldownName`, `id?`): `boolean`

Defined in: client-types/out/classes.d.ts:59052

###### Parameters

###### self

`gameObject`

###### cooldownName

`string`

###### id?

`number`

###### Returns

`boolean`

##### IsFriendlyTowardsPlayer()

> `static` **IsFriendlyTowardsPlayer**(`obj`): `boolean`

Defined in: client-types/out/classes.d.ts:59062

###### Parameters

###### obj

`gameObject`

###### Returns

`boolean`

##### IsVehicle()

> `static` **IsVehicle**(`object`): `boolean`

Defined in: client-types/out/classes.d.ts:59109

###### Parameters

###### object

`gameObject`

###### Returns

`boolean`

###### Inherited from

`gameObject.IsVehicle`

##### PlayMetadataEvent()

> `static` **PlayMetadataEvent**(`self`, `eventName`): `void`

Defined in: client-types/out/classes.d.ts:59120

###### Parameters

###### self

`gameObject`

###### eventName

`string`

###### Returns

`void`

##### PlaySound()

> `static` **PlaySound**(`self`, `eventName`, `emitterName?`): `void`

Defined in: client-types/out/classes.d.ts:59121

###### Parameters

###### self

`gameObject`

###### eventName

`string`

###### emitterName?

`string`

###### Returns

`void`

##### PlaySoundEvent()

> `static` **PlaySoundEvent**(`self`, `eventName`): `void`

Defined in: client-types/out/classes.d.ts:59122

###### Parameters

###### self

`gameObject`

###### eventName

`string`

###### Returns

`void`

##### PlaySoundEventWithParams()

> `static` **PlaySoundEventWithParams**(`self`, `eventName`, `flag?`, `type?`): `void`

Defined in: client-types/out/classes.d.ts:59123

###### Parameters

###### self

`gameObject`

###### eventName

`string`

###### flag?

`audioAudioEventFlags`

###### type?

`audioEventActionType`

###### Returns

`void`

##### PlaySoundWithParams()

> `static` **PlaySoundWithParams**(`self`, `eventName`, `emitterName?`, `flag?`, `type?`): `void`

Defined in: client-types/out/classes.d.ts:59124

###### Parameters

###### self

`gameObject`

###### eventName

`string`

###### emitterName?

`string`

###### flag?

`audioAudioEventFlags`

###### type?

`audioEventActionType`

###### Returns

`void`

##### PlayVoiceOver()

> `static` **PlayVoiceOver**(`self`, `voName`, `debugInitialContext`, `delay?`, `answeringEntityID?`, `canPlayInVehicle?`): `gameDelayID`

Defined in: client-types/out/classes.d.ts:59125

###### Parameters

###### self

`gameObject`

###### voName

`string`

###### debugInitialContext

`string`

###### delay?

`number`

###### answeringEntityID?

`entEntityID`

###### canPlayInVehicle?

`boolean`

###### Returns

`gameDelayID`

##### RemoveCooldown()

> `static` **RemoveCooldown**(`self`, `cooldownName`): `void`

Defined in: client-types/out/classes.d.ts:59131

###### Parameters

###### self

`gameObject`

###### cooldownName

`string`

###### Returns

`void`

##### RemoveListener()

> `static` **RemoveListener**(`obj`, `listener`): `void`

Defined in: client-types/out/classes.d.ts:59132

###### Parameters

###### obj

`gameObject`

###### listener

`GameObjectListener`

###### Returns

`void`

##### RemoveModifierGroup()

> `static` **RemoveModifierGroup**(`self`, `modifierGroupID`): `void`

Defined in: client-types/out/classes.d.ts:59133

###### Parameters

###### self

`gameObject`

###### modifierGroupID

`number`

###### Returns

`void`

##### RemoveStatusEffectTriggerListener()

> `static` **RemoveStatusEffectTriggerListener**(`target`, `listener`): `void`

Defined in: client-types/out/classes.d.ts:59134

###### Parameters

###### target

`gameObject`

###### listener

`StatusEffectTriggerListener`

###### Returns

`void`

##### SendForceRevealObjectEvent()

> `static` **SendForceRevealObjectEvent**(`self`, `reveal`, `reason`, `instigatorID?`, `lifetime?`, `delay?`): `void`

Defined in: client-types/out/classes.d.ts:59141

###### Parameters

###### self

`gameObject`

###### reveal

`boolean`

###### reason

`string`

###### instigatorID?

`entEntityID`

###### lifetime?

`number`

###### delay?

`number`

###### Returns

`void`

###### Inherited from

`gameObject.SendForceRevealObjectEvent`

##### SetAudioParameter()

> `static` **SetAudioParameter**(`self`, `paramName`, `paramValue`): `void`

Defined in: client-types/out/classes.d.ts:59142

###### Parameters

###### self

`gameObject`

###### paramName

`string`

###### paramValue

`number`

###### Returns

`void`

##### SetAudioSwitch()

> `static` **SetAudioSwitch**(`self`, `switchName`, `switchValue`): `void`

Defined in: client-types/out/classes.d.ts:59143

###### Parameters

###### self

`gameObject`

###### switchName

`string`

###### switchValue

`string`

###### Returns

`void`

##### SetFocusForcedHightlightData()

> `static` **SetFocusForcedHightlightData**(`outType`, `highType`, `prio`, `id`, `className`): `FocusForcedHighlightData`

Defined in: client-types/out/classes.d.ts:59145

###### Parameters

###### outType

`EFocusOutlineType`

###### highType

`EFocusForcedHighlightType`

###### prio

`EPriority`

###### id

`entEntityID`

###### className

`string`

###### Returns

`FocusForcedHighlightData`

##### SetMeshAppearanceEvent()

> `static` **SetMeshAppearanceEvent**(`self`, `appearance`): `void`

Defined in: client-types/out/classes.d.ts:59146

###### Parameters

###### self

`gameObject`

###### appearance

`string`

###### Returns

`void`

##### StartCooldown()

> `static` **StartCooldown**(`self`, `cooldownName`, `cooldownDuration`, `ignoreTimeDilation?`): `number`

Defined in: client-types/out/classes.d.ts:59154

###### Parameters

###### self

`gameObject`

###### cooldownName

`string`

###### cooldownDuration

`number`

###### ignoreTimeDilation?

`boolean`

###### Returns

`number`

##### StartReplicatedEffectEvent()

> `static` **StartReplicatedEffectEvent**(`self`, `effectName`, `shouldPersist?`, `breakAllOnDestroy?`): `void`

Defined in: client-types/out/classes.d.ts:59155

###### Parameters

###### self

`gameObject`

###### effectName

`string`

###### shouldPersist?

`boolean`

###### breakAllOnDestroy?

`boolean`

###### Returns

`void`

##### StopEffectEvent()

> `static` **StopEffectEvent**(`self`, `id`, `effectName`): `void`

Defined in: client-types/out/classes.d.ts:59156

###### Parameters

###### self

`gameObject`

###### id

`entEntityID`

###### effectName

`string`

###### Returns

`void`

##### StopReplicatedEffectEvent()

> `static` **StopReplicatedEffectEvent**(`self`, `effectName`): `void`

Defined in: client-types/out/classes.d.ts:59157

###### Parameters

###### self

`gameObject`

###### effectName

`string`

###### Returns

`void`

##### StopSound()

> `static` **StopSound**(`self`, `eventName`, `emitterName?`): `void`

Defined in: client-types/out/classes.d.ts:59158

###### Parameters

###### self

`gameObject`

###### eventName

`string`

###### emitterName?

`string`

###### Returns

`void`

##### StopSoundEvent()

> `static` **StopSoundEvent**(`self`, `eventName`): `void`

Defined in: client-types/out/classes.d.ts:59159

###### Parameters

###### self

`gameObject`

###### eventName

`string`

###### Returns

`void`

##### TagObject()

> `static` **TagObject**(`obj`): `void`

Defined in: client-types/out/classes.d.ts:59160

###### Parameters

###### obj

`gameObject`

###### Returns

`void`

##### TargetHasDebuff()

> `static` **TargetHasDebuff**(`target`): `boolean`

Defined in: client-types/out/classes.d.ts:59161

###### Parameters

###### target

`gameObject`

###### Returns

`boolean`

##### TargetHasLocomotionMalfunction()

> `static` **TargetHasLocomotionMalfunction**(`target`): `boolean`

Defined in: client-types/out/classes.d.ts:59259

###### Parameters

###### target

`gameObject`

###### Returns

`boolean`

##### TargetIsStunned()

> `static` **TargetIsStunned**(`target`): `boolean`

Defined in: client-types/out/classes.d.ts:59260

###### Parameters

###### target

`gameObject`

###### Returns

`boolean`

##### ToggleForcedVisibilityInAnimSystemEvent()

> `static` **ToggleForcedVisibilityInAnimSystemEvent**(`owner`, `sourceName`, `isVisibe`, `transitionTime?`): `void`

Defined in: client-types/out/classes.d.ts:59162

###### Parameters

###### owner

`gameObject`

###### sourceName

`string`

###### isVisibe

`boolean`

###### transitionTime?

`number`

###### Returns

`void`

##### UntagObject()

> `static` **UntagObject**(`obj`): `void`

Defined in: client-types/out/classes.d.ts:59166

###### Parameters

###### obj

`gameObject`

###### Returns

`void`

***

### worldWeatherScriptInterface

Defined in: client-types/out/precomputed/classes.d.ts:24

#### Extends

- `IScriptable`

#### Constructors

##### Constructor

> **new worldWeatherScriptInterface**(): [`worldWeatherScriptInterface`](/client-reference/classes/#worldweatherscriptinterface)

###### Returns

[`worldWeatherScriptInterface`](/client-reference/classes/#worldweatherscriptinterface)

###### Inherited from

`IScriptable.constructor`

#### Methods

##### GetClassName()

> **GetClassName**(): `string`

Defined in: client-types/out/classes.d.ts:81898

###### Returns

`string`

###### Inherited from

`IScriptable.GetClassName`

##### GetEnvironmentDefinition()

> **GetEnvironmentDefinition**(): `worldEnvironmentDefinition`

Defined in: client-types/out/precomputed/classes.d.ts:32

###### Returns

`worldEnvironmentDefinition`

##### GetRainIntensity()

> **GetRainIntensity**(): `number`

Defined in: client-types/out/classes.d.ts:141797

###### Returns

`number`

##### GetRainIntensityType()

> **GetRainIntensityType**(): `worldRainIntensity`

Defined in: client-types/out/classes.d.ts:141798

###### Returns

`worldRainIntensity`

##### GetRainMoisture()

> **GetRainMoisture**(): `number`

Defined in: client-types/out/classes.d.ts:141799

###### Returns

`number`

##### GetRainPuddles()

> **GetRainPuddles**(): `number`

Defined in: client-types/out/classes.d.ts:141800

###### Returns

`number`

##### GetWeatherState()

> **GetWeatherState**(): `worldWeatherState`

Defined in: client-types/out/precomputed/classes.d.ts:31

###### Returns

`worldWeatherState`

##### IsA()

> **IsA**(`className`): `boolean`

Defined in: client-types/out/classes.d.ts:81899

###### Parameters

###### className

`string`

###### Returns

`boolean`

###### Inherited from

`IScriptable.IsA`

##### IsExactlyA()

> **IsExactlyA**(`className`): `boolean`

Defined in: client-types/out/classes.d.ts:81900

###### Parameters

###### className

`string`

###### Returns

`boolean`

###### Inherited from

`IScriptable.IsExactlyA`

##### RegisterWeatherListener()

> **RegisterWeatherListener**(`callback`): `number`

Defined in: client-types/out/classes.d.ts:141801

###### Parameters

###### callback

`worldWeatherScriptListener`

###### Returns

`number`

##### ResetWeather()

> **ResetWeather**(`forceRestore?`, `blendTime?`): `void`

Defined in: client-types/out/precomputed/classes.d.ts:30

###### Parameters

###### forceRestore?

`boolean`

###### blendTime?

`number`

###### Returns

`void`

##### SetWeather()

> **SetWeather**(`weather`, `blendTime?`, `priority?`): `void`

Defined in: client-types/out/precomputed/classes.d.ts:25

###### Parameters

###### weather

`WeatherState`

###### blendTime?

`number`

###### priority?

`number`

###### Returns

`void`

##### ToString()

> **ToString**(): `string`

Defined in: client-types/out/classes.d.ts:81901

###### Returns

`string`

###### Inherited from

`IScriptable.ToString`

##### UnregisterWeatherListener()

> **UnregisterWeatherListener**(`callbackId`): `void`

Defined in: client-types/out/classes.d.ts:141802

###### Parameters

###### callbackId

`number`

###### Returns

`void`

##### DetectScriptableCycles()

> `static` **DetectScriptableCycles**(): `void`

Defined in: client-types/out/classes.d.ts:81897

###### Returns

`void`

## Interfaces

### CyberMP

Defined in: client-types/out/precomputed/classes.d.ts:4

Class with custom CyberMP native methods.

#### Methods

##### DeclareDeletedObjects()

> **DeclareDeletedObjects**(`objectClassMap`): `void`

Defined in: client-types/out/precomputed/classes.d.ts:9

Removes game object classes (e.g., T extends gameObject, playerPuppet, NpcPuppet) from the map.

###### Parameters

###### objectClassMap

keyof `MpClasses`[]

Array of class names to delete.

###### Returns

`void`

##### DeletedObjectsByUniqueHash()

> **DeletedObjectsByUniqueHash**(`objectHashMap`): `void`

Defined in: client-types/out/precomputed/classes.d.ts:15

Removes game objects by their unique hashes from the map.

###### Parameters

###### objectHashMap

`string`[]

Array of unique game object hashes to delete.

###### Returns

`void`

##### UseDefaultEffectsByPlatform()

> **UseDefaultEffectsByPlatform**(`value`): `void`

Defined in: client-types/out/precomputed/classes.d.ts:21

Enables or disables synchronization of default effects, as defined by the CyberMP platform.

###### Parameters

###### value

`boolean`

Whether to use the default effects.

###### Returns

`void`

***

### gameMappinSystem

Defined in: client-types/out/precomputed/classes.d.ts:52

#### Extends

- `gamemappinsIMappinSystem`

#### Methods

##### GetClassName()

> **GetClassName**(): `string`

Defined in: client-types/out/classes.d.ts:81898

###### Returns

`string`

###### Inherited from

`gamemappinsIMappinSystem.GetClassName`

##### IsA()

> **IsA**(`className`): `boolean`

Defined in: client-types/out/classes.d.ts:81899

###### Parameters

###### className

`string`

###### Returns

`boolean`

###### Inherited from

`gamemappinsIMappinSystem.IsA`

##### IsExactlyA()

> **IsExactlyA**(`className`): `boolean`

Defined in: client-types/out/classes.d.ts:81900

###### Parameters

###### className

`string`

###### Returns

`boolean`

###### Inherited from

`gamemappinsIMappinSystem.IsExactlyA`

##### ToString()

> **ToString**(): `string`

Defined in: client-types/out/classes.d.ts:81901

###### Returns

`string`

###### Inherited from

`gamemappinsIMappinSystem.ToString`

##### TrackMappin()

> **TrackMappin**(`id`): `void`

Defined in: client-types/out/precomputed/classes.d.ts:53

###### Parameters

###### id

`gameNewMappinID`

###### Returns

`void`

## Type Aliases

### OnlyExtendingScriptableSystem

> **OnlyExtendingScriptableSystem**\<`T`\> = `{ [K in keyof T as T[K] extends typeof gameScriptableSystem ? K : never]: T[K] }`

Defined in: client-types/out/precomputed/classes.d.ts:56

#### Type Parameters

##### T

`T`
