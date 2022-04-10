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

### Tailwind configuration

To make use of our colour scheme, in your tailwind configuration file import our formatted tokens and ensure that Tailwind is not purging your Unlocked components. 

```js
const tokens = require('@unlocked/foundation/tokens')

console.log(tokens)

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './node_modules/@unlocked/foundation/dist/**/**/**/*.{js,css}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    ...tokens,
```

:::tip 
Find out more information on how to use your [own design tokens]('/styles/design-tokens').
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