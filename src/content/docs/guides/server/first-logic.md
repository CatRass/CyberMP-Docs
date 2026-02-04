---
title: Creating Your first client resource
sidebar:
  label: First logic
description: .
slug: guides/server/first-event
---

In [previous](/guides/server/first-resource) guide we've created resource `hello_world` that just displays console log in server console.

For real server its obviously not enough. In this tutorial we create our first console commands using `mp.events` server API.

Navigate to our `hello_world` resource, and create new file `client.js`, after that change `resource.toml`:

```toml title="resource.toml" ins={"Include client script": 1-2}
\n
client_script = './client.js'
server_script = './server.js'
```

insert following code in `client.js`:

```js title="client.js" ins={1-3}
mp.events.addCommand('test-log', () => {
  console.log('You just called a test-log command!');
});
```

Now connect to server using launcher, you can do it by clicking a little icon next to "Direct connect" button, or just direct connect by address http://127.0.0.1:2077.

After you connected press `F8`, client console should open, after that type `test-log` in console. You should see a "You just called a test-log command!" message.

To interact with game logic in client we need to tell our client side runtime that our resource is using game natives:

```toml title="resource.toml" ins={4}
client_script = './client.js'
server_script = './server.js'

use_game_natives = "true"
```

Now you can either restart server or type `refresh` and `restart hello_world` in server console, for more information about server console address [Server Console Reference](/reference/server/console)

If you restarted server you can type in client console `reconnect` and it would reconnect to server, otherwise if you restarted resource changes should apply automatically.

Now lets expand our `client.js` file to interact with game world:

```js title="client.js"
let MenuScenario_PauseMenu = null;
let SettingsMainGameController = null;

mp.game.onGameLoaded(() => {
  mp.game.observe('SettingsMainGameController', 'OnMenuChanged', (self) => {
    SettingsMainGameController = self;
  });

  mp.game.observe('SettingsMainGameController', 'RequestClose', () => {
    SettingsMainGameController = null;
  });

  mp.game.observe('MenuScenario_PauseMenu', 'OnSwitchToSettings', (self) => {
    MenuScenario_PauseMenu = self;
  });

  mp.game.observe('MenuScenario_PauseMenu', 'OnEnterScenario', (self) => {
    MenuScenario_PauseMenu = self;
  });
});

const closeAllMenus = () => {
  const player = mp.game.GetPlayer();

  player.QueueEvent(new mp.game.ForceCloseHubMenuEvent());

  MenuScenario_PauseMenu?.OnClosePauseMenu();
  SettingsMainGameController?.RequestClose();
};

const teleportPlayer = (x, y, z, yaw = 1) => {
  closeAllMenus();

  const teleportFacility =
    mp.game.ScriptGameInstance.GetTeleportationFacility();

  const playerObj = mp.game.GetPlayerObject();

  teleportFacility.Teleport(
    playerObj,
    Object.assign(new mp.game.Vector4(), { x, y, z, w: 1 }),
    Object.assign(new mp.game.EulerAngles(), {
      roll: 0,
      pitch: 0,
      yaw,
    }),
  );
};

// Health stat pool type - https://nativedb.red4ext.com/e/5923428624360168
const HEALTH_STAT_POOL_TYPE = 17;
// Health stat type taken from here - https://nativedb.red4ext.com/e/8958699713058621
const HEALTH_STAT_TYPE = 787;
// Additive modifier taken from here - https://nativedb.red4ext.com/e/5896876661927857
const ADDITIVE_MODIFIER_TYPE = 0;

const setHealth = (value) => {
  const player = mp.game.GetPlayer();
  const playerGameId = player.GetEntityID();

  const statePoolSystem = mp.game.ScriptGameInstance.GetStatPoolsSystem();

  statePoolSystem.RequestSettingStatPoolValueIgnoreChangeMode(
    playerGameId,
    HEALTH_STAT_POOL_TYPE,
    value,
    new mp.game.gameObject(),
    false,
  );
};

const setMaxHealth = (value) => {
  const player = mp.game.GetPlayer();
  const playerGameId = player.GetEntityID();

  mp.game.ScriptGameInstance.GetStatsSystem().RemoveAllModifiers(
    playerGameId,
    HEALTH_STAT_TYPE,
    true,
  );

  const newStats = new mp.game.gameConstantStatModifierData_Deprecated();
  newStats.statType = HEALTH_STAT_TYPE;
  newStats.modifierType = ADDITIVE_MODIFIER_TYPE;
  newStats.value = value;

  mp.game.ScriptGameInstance.GetStatsSystem().AddModifier(
    playerGameId,
    newStats,
  );

  const statePoolSystem = mp.game.ScriptGameInstance.GetStatPoolsSystem();

  statePoolSystem.RequestSettingStatPoolValueIgnoreChangeMode(
    playerGameId,
    HEALTH_STAT_POOL_TYPE,
    value,
    new mp.game.gameObject(),
    true,
  );
};

// Player spawn logic

const SPAWN_HEALTH = 300;

const spawnPlayer = (x, y, z, yaw = 1) => {
  setMaxHealth(SPAWN_HEALTH);
  setHealth(SPAWN_HEALTH);

  closeAllMenus();

  mp.setSpawnDataLocalPlayer(x, y, z, yaw);
  mp.spawnLocalPlayer();
};

// Vi's apartment
const DEFAULT_SPAWN_LOCATION = [-1392.637329, 1271.536865, 123.082397, 1];

mp.game.onGameLoaded(() => {
  spawnPlayer(...DEFAULT_SPAWN_LOCATION);
});

// Commands

mp.events.addCommand('spawn', () => {
  spawnPlayer(...DEFAULT_SPAWN_LOCATION);
});

mp.events.addCommand('hp', (playerId, value) => {
  const valueAsNumber = Number(value);

  if (isNaN(valueAsNumber)) {
    console.log('Given value is not a number');
    return;
  }

  setHealth(valueAsNumber);
  console.log('Setted your hp to', valueAsNumber);
});

mp.events.addCommand('max-hp', (playerId, value) => {
  const valueAsNumber = Number(value);

  if (isNaN(valueAsNumber)) {
    console.log('Given value is not a number');
    return;
  }

  setMaxHealth(valueAsNumber);
  console.log('Setted your max hp to', valueAsNumber);
});

mp.events.addCommand('close-menu', () => {
  closeAllMenus();
});

mp.events.addCommand('afterlife', () => {
  teleportPlayer(-1456.893433, 1038.277222, 16.825035, 1);
});
```

With this snippet of code, you are spawning close to vi's apartment with 300 hp, this is the bare minimum to get started, you also have some commands:

- `spawn` - for spawning again in case of death
- `close-menu` - close player's current menu
- `hp`- sets current hp
- `max-hp` - sets max possible hp
- `afterlife` - teleport to afterlife
