# Icons
Icon component for Unlocked.

<iframe
  src="https://www.storybook.unlocked.to/iframe.html?id=components-icon--primary&viewMode=story"
  width="100%"
  height="70"
></iframe>

::: warning
We currently only support [material design icons](https://github.com/Templarian/MaterialDesign-JS). 
:::

## Usage

#### Install
```bash
npm install @unlocked/base
```

#### Import
```js
import { UIcon } from '@unlocked/base
```

#### Syntax 
```html
<UIcon>{{ mdiAccount }}</UIcon>
```

## Slots
The `default` slot is to pass in your SVG icon. As we currently only support [material design icons](https://github.com/Templarian/MaterialDesign-JS), here is how to do it.

```js
import { mdiAccount } from '@mdi/js'
```
```html
<UIcon>
 {{ mdiAccount }}
</UIcon>
```

## Props

### Sizes
We expose a `size` prop that dictates the icon size. The default value being `md`. Other sizes include `xs`, `sm`, `md`, `lg` and `xl`. 

We also provide `height` and `width` props to allow you flexibility to customise.

### Source image
We expose an `src` prop that will render an image over an svg, allowing you some flexibility in terms of icon display.

### SVG path
We expect the default slot to take an SVG path. If you would prefer to use a prop, you can utilise the `path` prop. 

### Type
We have icon variants that change the colour of the icon according to the design tokens provided in the theme. These include `primary`, `secondary` and `variant`.

If you want to use an alternative colour, use the `color` prop added for flexibility.

## API Reference

| Property              | Type                       |
| --------------------- | -------------------------- |
| size       | `xs` `sm` `md` `lg` `xl`            |
| type      | `primary` `secondary` `variant`            |
| color       | string            |
| height       | string        |
| width       | string        |
| src       | string        |
| path       | string        |
| disabled       | boolean        |

