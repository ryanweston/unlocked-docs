# Installation

## Global registration

Global registration ensures that all of Unlocked foundation's components are available to use in your application and won't require any imports.

```js
import { unlockedGlobal, defaultTheme } from '@unlocked/foundation'

const app = createApp(App).use(unlockedGlobal, { 
  theme: defaultTheme
})
```

:::tip 
Global registration is not terribly efficient if you have a small application. If you do have a smaller application, look at modular installation.
:::
## Modular installation

For modular installation, Unlocked components still rely on a theme injection. Therefore you'll still need to register our modular installation service.

We can register this with the `createApp` function.

```js
import { unlockedModular, defaultTheme } from '@unlocked/foundation'

const app = createApp(App).use(unlockedGlobal, { 
  theme: defaultTheme
})
```