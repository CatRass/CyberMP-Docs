---
title: Creating Your First Resource
description: .
slug: guides/server/first-resource
---

This tutorial will guide you through creating a simple "Hello World" resource to learn the basic structure of CyberMP server-side scripting.

By the end of this guide, you will have a resource that prints a message to the server console when it starts.

### 1. Create the Resource Folder

CyberMP identifies resources by their folder names within the resources directory.

- Navigate to your server's resources folder.
- Create a new folder named `hello_world`. This is your resource directory.

### 2. Configure the Resource

Every resource requires a `resource.toml` file to define its entry points and behavior.

- Inside the `hello_world` folder, create a file named `resource.toml`.
- Paste the following configuration into the file:

```toml title="resource.toml"
# Define the script that the server will execute
server_script = './server.js'
```

### 3. Write the Script

Now, create the actual logic for your resource.

- In the same folder, create a file named server.js.
- Add the following line of code:

```js title="server.js"
console.log('Hello World from CyberMP!');
```

### 4. Load the Resource

To see your resource in action, you need to tell the server to load it.

- Open your `server.toml` (located in the server root directory).
- Locate the resources array and add your folder name:

```toml title="server.toml" ins={7}
tcp_host = "0.0.0.0:2077"
udp_host = "0.0.0.0:2077"

connection_host_addr = "127.0.0.1:2077"
max_players = 20

resources = ['hello_world']

disable_VoIP_server = false

steam_api_key = "none"
```

### 5. Verify the Result

Start your server. If everything is configured correctly, you will see your message in the console logs during the initialization phase:

```ansi {3}
[38;2;179;133;0m[00:00:00] [Server][0m CyberMP server starting...
[38;2;179;133;0m[00:00:00] [Server][0m Resources initializing...
[38;2;179;133;0m[00:00:00] [script:hello_world][0m Hello World from CyberMP!
[38;2;179;133;0m[00:00:00] [Resources][0m Loaded resource hello_world
```
