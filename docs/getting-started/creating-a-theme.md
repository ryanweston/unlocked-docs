# Creating a theme

## How does theming work?

Unlocked uses a globally provided theme object containing styles for each component. 

Individual components then have their classes injected from the provided theme object utilising the `withTheme` function within their `setup`.

Below is an example of imported classes that will be injected from the theme object.

```js
wrapper: 'relative flex flex-col items-center',
popover: {
  base: 'absolute z-10',
  positions: {
    bottom: 'top-full mt-2',
    left: 'right-full mr-2',
    top: 'bottom-full mb-2',
    right: 'left-full ml-2',
  },
  tooltip: 'px-4 py-2 bg-interactivePrimary text-textInverse rounded-full',
},
```

### Do you need to create a theme?

Unlocked provides a default theme. The colours of which are controlled by the dynamic design tokens that you can customise. You can find how to change these in the [design tokens documentation](/getting-started/design-tokens). 

If you wish to just customise colours, there's no need to create your own theme.

### But I want to override specific component styles

If you wish to override specific component styles, then you can pass in a modified default theme to your Unlocked installation options.

```js 
const theme = { 
  ...defaultTheme,
  button: { 
    ...defaultTheme.button,
    variants: {
      ...defaultTheme.button.variants
      warning: 'text-black'
    }
  }
}

app.use(unlocked, { theme })
```

::: warning
If you've remapped your token names, please generate your own theme with `createTheme`.
:::

## Create a theme

:::warning
This process will soon be moved to a CLI tool to help improve your experience with this process
:::

### Introduction

If you're looking for more control over theming, then creating your own theme is a good choice. This can be done through the exposed `createTheme` function. 

The function takes two parameters: 
- Token mapping
  - This allows you to rename the design tokens that Unlocked uses
- Component themes
  - Array of component themes 

The function will then return a theme that will need to be saved in it's own file. 

:::tip 
For now the best approach is just to console log the result of the function, and copying and pasting the result into the required format. 
```js
console.log(createTheme(tokenMap, componentThemes))
```
:::

### Options 

We export each component's classes file to use, as well as the combination of those classes in an array to provide you with flexibility. 

#### Using individual component classes

```js
import { tokenMap, buttonTheme, tooltipTheme } from '@unlocked/base'

createTheme(tokenMap, [buttonTheme, tooltipTheme])
```

These files are functions that take in the token mappings provided and use these dynamically in the file to allow you to rename the tokens to provide you flexibility with your design tokens.

#### Example classes file
```js
import type { UTokens } from '@/types'

const button = (tokens: UTokens) => {
  return {
    button: {
      small: `px-3 py-2 text-${tokens.textOne} rounded-md text-sm font-medium inline-flex`,
    }
  }
}
```

#### Using all component classes

```js
import { tokenMap, componentThemes } from '@unlocked/base'

createTheme(tokenMap, componentThemes)
```

### Installation
```js
// example.ts

const theme = { 
  // Paste results here
}

export { theme }
```

```js
import { theme } from 'THEME_PATH'

const app = createApp(App)

app.use(unlocked, { 
  theme
})
```
