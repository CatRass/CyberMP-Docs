---
editUrl: false
next: false
prev: false
title: "MpDiscord"
---

Defined in: discord.d.ts:1

## Methods

<a id="getcodeauthorization"></a>

### ~~getCodeAuthorization()~~

> **getCodeAuthorization**(`discordAppId`, `scopes`): `string`

Defined in: discord.d.ts:19

Requests a preferred secure authentication application code payload via Discord's authorization flow.

:::caution[Deprecated]
This API is no longer supported and may be removed in a future release.
:::

#### Parameters

##### discordAppId

`string`

The registered client registration application client ID string.

##### scopes

`string`

Separated validation permission request keyword groups strings (e.g., `"identify guilds"`).

#### Returns

`string`

An authentication code string convertible into access tokens server-side.

***

<a id="getoauth2token"></a>

### getOAuth2Token()

> **getOAuth2Token**(`discordAppId`, `scopes`): `string`

Defined in: discord.d.ts:10

Requests a preferred secure authentication application code payload via Discord's authorization flow.

#### Parameters

##### discordAppId

`string`

The registered client registration application client ID string.

##### scopes

`string`

Separated validation permission request keyword groups strings (e.g., `"identify guilds"`).

#### Returns

`string`

An authentication code string convertible into access tokens server-side.

***

<a id="updaterichpresence"></a>

### updateRichPresence()

> **updateRichPresence**(`state?`, `details?`): `void`

Defined in: discord.d.ts:2

#### Parameters

##### state?

`string`

##### details?

`string`

#### Returns

`void`
