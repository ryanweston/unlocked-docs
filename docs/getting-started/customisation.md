# Styling

Unlocked was built with customisation in mind. Each component loads a formatted set of classes that can be edited as you please, no matter how you've installed Unlocked.

You can see an example below demonstrating how the button classes are formatted.

### Example

```js
export default { 
  button: {
    base: 'px-6 py-4 rounded-lg', // abstract padding to a size object
    disabled: 'opacity-50 cursor-not-allowed pointer-events-none',
    variants: {
      default: 'text-white bg-black',
      warning: 'text-white bg-orange',
      error: 'text-white bg-red',
    }
  },
}
```

More information on this can be found in the [creating a theme page]('/styles/creating-a-theme').

## Overriding

The default theme is constructed through the imported class files for every component. This modularity ensures that we can now go in and customise the component themes in an accessible way by overriding the default theme.

## Colour scheme 
Unlocked uses it's own class name system, formatted to work with design systems. If you wish to customise the colour scheme being used by Unlocked components, you can set these in your Tailwind configuration. 

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

:::tip 
Planning on using design tokens? Find out more [here]('/styles/design-tokens')
:::
