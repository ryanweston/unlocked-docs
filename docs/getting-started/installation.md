# Installation

Unlocked consists of two products. We believe in the atomic design approach and
our component library and compositions are subsequently structured as such. Feel free to take a look at our [compositions](https://unlocked.to/compositions) and the [getting started documentation](/compositions/getting-started).

:::tip
Experiment with Unlocked by forking our [playground template](https://codesandbox.io/s/unlocked-playground-3xxjez)!
:::

### Install package 
```bash
npm install @unlocked/base
```

### Tailwind configuration

To make use of our colour scheme, in your tailwind configuration file import our formatted tokens and ensure that Tailwind is not purging your Unlocked components. 

```js
const tokens = require('@unlocked/base/tokens.js')

console.log(tokens)

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './node_modules/@unlocked/base/dist/**/*/*.{js,css}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    ...tokens,
  }
```
:::tip 
Find out more information on how to use your [own design tokens]('/getting-started/design-tokens').
:::

### Global registration

Global registration ensures that all of Unlocked's atomic components are available to use in your application and won't require any imports.

```js
import { unlocked, defaultTheme } from '@unlocked/base'

const app = createApp(App)

app.use(unlocked, { 
  theme: defaultTheme
})
```

### Modular installation

Our components are treeshakable, however they still rely on a global theme injection. 

Because of this, unfortunately, our theming system isn't yet treeshakable. If you're concious of bundle sizing and are only making use of a few components, we've made individual class objects available to import so you can construct a new, minimised theme for your application.

We can do this with the `createTheme` function. Importing the component themes 
you will be using in your application.

:::tip
You can find out how to do this in the [creating a theme documentation](/getting-started/creating-a-theme).
:::

You will then need to pass this into the `app.use` options. Using the `unlockedModular` installer over `unlocked` will ensure that the packages components
are not globally registered.

```js
import { unlockedModular } from '@unlocked/base'
import { CREATED_THEME } from 'THEME_PATH'

app.use(unlockedModular, { 
  theme: CREATED_THEME
})
```
