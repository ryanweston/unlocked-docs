# Design tokens

Unlocked uses it's own formatted set of colour classes, replicating standardised naming conventions to help lay the foundations for your design system. 

Colours are divided into brand, action and layout groups. As seen in our Figma file.

You can also use our own pre-formatted tokens as described in the [installation guide]('/getting-started/installation'). 

### Colour classes
```js
colors: {
  text: '#000000',
  primary: '#000000',
  layoutBackground: '#fbfbfb',
  error: '#cf2121',
  success: '#169d00',
  textContrast: '#ffffff',
  background: '#ffffff',
  layoutBorder: '#e7e7e7',
  layoutContrast: '#c1c1c1',
  layoutHeavyContrast: '#7b7b7b',
  link: '#0068c8',
}
```

 ::: warning 
 You can of course work around our class names if you need to by creating your own theme. However, this intended to be worked around.
 :::

## Using Figma & style dictionary

If you're utilising our Figma UI kit, we have structured the file in order for it to be design token friendly.

::: tip 
We recommend you use the [Design Tokens](https://github.com) plugin for Figma as this is the tool we used when initially structuring the file. 
:::

To utilise the design tokens exported from figma and built with style dictionary, take your `/dist/tokens.js` file and import it into your Tailwind configuration. 

Depending on your style dictionary build settings, these tokens will then need to be formatted. 

### Example

```js
const tokens = require('./tokens')

const formattedTokens = Object.fromEntries(Object
  .values(tokens.color)
  .map(({ attributes, value }) => [
    attributes.type, value,
  ]))


/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './node_modules/@unlocked/foundation/dist/**/**/**/*.{js,css}', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    formattedTokens,
```

