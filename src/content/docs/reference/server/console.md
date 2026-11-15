---
title: Console
description: .
---

The CyberMP Server console is an interactive command-line interface (CLI) that allows you to control server resources and execute administrative commands in real-time.

You can use built-in commands or create your own using server API

## Built-in commands

| Name            | Arguments    | Description                                                                              |
| --------------- | ------------ | ---------------------------------------------------------------------------------------- |
| cmdlist         | None         | Returns a complete list of all registered commands (Core + Resources).                   |
| config          | None         | Effective `server.toml` values and their source (file or environment). `private_token` is masked. |
| kick_player     | `<playerId>`  | Disconnect the player with that id (no reason sent).                                     |
| max_players     | `[integer]`  | Print or set the console variable. The enforced slot cap is read from `server.toml` at startup and does not change. |
| quit            | None         | Initiates the graceful shutdown sequence for all resources and stops the server.         |
| refresh         | None         | Reindex all resources without restarting them.                                           |
| restart         | `<resName>`  | Restarts the specific resource.                                                          |
| start           | `<resName>`  | Start the specific resource.                                                             |
| stop            | `<resName>`  | Stop the specific resource.                                                              |
| version         | None         | Outputs current server version.                                                          |
