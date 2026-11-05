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
| disconnect_peer | `<index>`    | Forcefully disconnects the player associated with the provided numeric index.            |
| exec_cfg        | `<filename>` | Parses and executes the specified `.toml` or configuration file from the root directory. |
| max_players     | `<integer>`  | Dynamically updates the maximum player slot count for the current session.               |
| quit            | None         | Initiates the graceful shutdown sequence for all resources and stops the server.         |
| refresh         | None         | Reindex all resources without restarting them.                                           |
| restart         | `<resName>`  | Restarts the specific resource.                                                          |
| start           | `<resName>`  | Start the specific resource.                                                             |
| stop            | `<resName>`  | Stop the specific resource.                                                              |
| version         | None         | Outputs current server version.                                                          |
