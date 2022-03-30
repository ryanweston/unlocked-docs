# Creating a theme

Creating a new theme is straight forward with Unlocked. Create a new typescript file that will export your new theme object. 

```js
export const exampleTheme = { 
  // ...
}
```

Now where you're registering Unlocked, make sure you pass your new theme in as an option.

```js
import { unlockedModular } from '@unlocked/foundation'
import { customTheme } from './customTheme'

const app = createApp(App).use(unlockedGlobal, { 
  theme: customTheme
})
```

## Overriding a component

To override a single component, create a new theme object as shown above, spread the defaultTheme into your new theme object, and override as you see fit.

```js
import { defaultTheme } from '@unlocked/foundation'

export const exampleTheme = { 
 ...defaulTheme,
 button: { 
   ...defaultTheme.button,
   variants: {
     ...defaultTheme.button.variants
     warning: 'text-black'
   }
 }
}
```

## Tree-shaking
Unfortunately our theming system isn't yet treeshakable. If you're concious of bundle sizing and are only making use of a few components, we've made individual class objects available to import so you can construct a new, minimised theme for your application.


```js
import { buttonTheme } from '@unlocked/foundation'

export const exampleTheme = { 
 ...buttonTheme
}
```