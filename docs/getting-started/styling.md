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

## Overriding

## Custom theme