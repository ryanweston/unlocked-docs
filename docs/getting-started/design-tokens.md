# Design tokens

Unlocked uses it's own colour classes, formatted to work with both Tailwind and design tokens.

### Colour classes
```js
{
  textOne: '#ffffff', // Brand text colour. Should contrast both the layout background & the brand background.
  brandPrimary: '#ffffff', // Primary brand colour
  interfaceOne: '#1d1f23', // Layout background colour. Should slightly contrast against brand background. Used for containers.
  actionError: '#ee4343', // Action error colour. Used to connote error states and negative actions.
  actionSuccess: '#49b737', // Action success colour. Used to connote a successful or positive action.
  textTwo: '#70747d', // Brand text contrast colour. Should contrast against the primary colour.
  interfacePage: '#000000', // No description
  interfaceTwo: '#2e3137', // No description
  interfaceContrast: '#4a4d54', // No description
  interactiveVariant: '#b1b1b1', // Action link colour. Used for external hyperlinks.
  focusOne: '#0a5fff', // No description
  actionWarning: '#dd8a3d', // No description
  textContrast: '#000000', // No description
  hoverInterface: '#1e1e1e', // No description
  focusTwo: '#ffffff', // No description
  activeInterface: '#9a9a9a', // No description
  disabledBackground: '#1b1b1b', // No description
  disabledContent: '#494949', // No description
  hoverPrimary: '#ffffff', // No description
  hoverPrimarytext: '#ffffff', // No description
  hoverSecondary: '#ffffff', // No description
  hoverVariant: '#169d00', // No description
  hoverVarianttext: '#169d00', // No description
  activePrimary: '#ffffff', // No description
  activeSecondary: '#169d00', // No description
  textPlaceholder: '#535353', // No description
  interactivePrimary: '#ffffff', // No description
  interactiveSecondary: '#ffffff', // No description
  inputOne: '#272727', // No description
  inputTwo: '#cf2121', // No description
  inputThree: '#169d00', // No description
  iconOne: '#ffffff', // No description
  iconTwo: '#b1b1b1', // No description
  iconThree: '#169d00', // No description
  textInverse: '#000000', // No description
  interactiveLink: '#0068c8', // No description
  disabledIcon: '#333333', // No description
}
```

You use our default colours in your tailwind config like so:

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
## Renaming the tokens
We understand it will be necessary to some to rename the design tokens provided. Because of this, we structured our theming system to allow for this. You will however need to host your own theme to allow for this.

:::tip
You can find out about how this works in the [creating a theme documentation](/getting-started/creating-a-theme). 
:::

To rename tokens you will need to pass the token mappings into the `createTheme` function. If I want to rename the `textOne` colour to `textPrimary` for example, and I want to continue using all the base components provided by Unlocked without any other customisations, I would do the following. 

```js 
import { tokenMap, createTheme, componentThemes } from '@unlocked/base'
const newTokenMap = {
  ...tokenMap, 
  textOne: 'textPrimary'
}
createTheme(newTokenMap, componentThemes)
```

## Customising colours
You can export your design tokens from our Figma kit and then use style dictionary to format and import these instead of our default tokens in your Tailwind config. 

Take a look at our example [Style Dictionary repository](https://github.com/UnlockedUI/style-dictionary-example) for an example on how to do this. It also provides a formatter to speed up this process!

You can also do everything manually, adjusting the values of the classes used at the top of the documentation. 


## Using Figma & style dictionary

If you're utilising our Figma UI kit, we have structured the file in order for it to be design token friendly.

::: tip 
We recommend you use the [Design Tokens](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) plugin for Figma as this is the tool we used when initially structuring the file. 
:::

To utilise the design tokens exported from figma and built with style dictionary, take your `/dist/tokens.js` file (or wherever your generated tokens are exported to) and import it into your Tailwind configuration. 

Depending on your style dictionary build settings, these tokens may need to be formatted.
