# Getting started

Compositions are Unlocked's solution to following the atomic design principles.

We provide atomic components with `@unlocked/base`. But molecules and organisms in the form of 'compositions' are available to [copy, paste and customise](https://unlocked.to/compositions), providing you with more control over your code base.

:::warning 
You must already be using `@unlocked/base` to make use of compositions. Please refer to the standard documentation.
:::

## Handling styles

Some components have styles in the classes tab. These are provided in a object format and there are a number of ways for you to handle these. 

### Using global theme

Using the global theme is our recommended approach. Here, you will need to generate your theme locally by using the `createTheme` function.

Please refer to the [creating a theme documentation](/getting-started/creating-a-theme) to find out more information on how to do this and best practices.

Let's say you're using the dropdown compositonal component and you've organised the files like this: `components/dropdown/classes.ts` & `components/dropdown/Dropdown.vue`

The syntax will be along these lines.

```js
const dropdown = { 
  dropdown: {
    // classes
  }
}

export default dropdown
```

```js
import dropdownClasses from './components/dropdown/classes'
import { createTheme, tokenMap, componentThemes } from '@unlocked/base'

const components = [...componentThemes, dropdownClasses]
createTheme(tokenMap, components)
```

#### I've renamed my tokens

If you've renamed (remapped) your token names, you can follow the format above, except renaming the design tokens inside the classes to align with your own. 

You can also change your classes file structure to align with how we handle token mapping in `@unlocked/base` components.

```js
import type { UTokens } from '@unlocked/base'

const dropdown = (tokens: UTokens) => {
  return {
    dropdown: {
      // classes
    },
  }
}

export default dropdown
```

You can then replace all the instances of the design token names, to use dynamic the dynamic variables. 

```js
`bg-${tokens.interfaceOne}`
```

### Local classes

While it's inconsistent, if you don't want to utilise the global theme handler, you can always replace the `withTheme` function by instead just importing the classes file.


