---
title: Tooltip
---
# Tooltip

Tooltip component for Unlocked.

 <iframe
  src="https://www.storybook.unlocked.to/iframe.html?id=components-tooltip--default&viewMode=story"
  width="100%"
  height="150"
></iframe>

[View on storybook](https://storybook.unlocked.to)

## Usage

#### Install
```bash
npm install @unlocked/base
```

#### Import
```js
import { UTooltip } from '@unlocked/base
```

#### Syntax 
```html
<UTooltip>
  <template #activators={on}>
    <UButton v-on="on">Button</UButton>
  </template>
  Tooltip
</UTooltip>
```

## Props

You can pass one of the following to dictate where the popup appears: `top`, `bottom`, `left` or `right`.

Passing `click` or `hover` will dictate the event that triggers the tooltip.

## Slots

### Default
The `default` slot dictates the text content within the tooltip popup.

### Tooltip
You can use this `tooltip` slot instead of passing the default slot. This will replace
our styled tooltip with content of your choice.

### Activator
The `activator` slot is the element in which emits the event to trigger the tooltip.
It does this by binding the `on` events.

We expose the `reveal` function, that triggers the tooltip internally, in the `activator` slot. This allows you to customise what happens during the interaction.

The `reveal` function takes a time prop that will dictate how long the tooltip appears for.

:::tip
You don't need to pass the `click` or `hover` props if you utilise `reveal`
:::

```js
const customAction = (callback) => {
  // perform action
  callback(10000)
}
```
```html
<u-tooltip top>
  <template #activator="{reveal}">
    <u-button
      type="variant"
      @click="() => { customAction(reveal)}"
    >
      Click me
    </u-button>
  </template>
  Tooltip!
</u-tooltip>
```

## Figma

See below for the Figma component.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1GKZEhOubObtIb1UHXMV95%2FMaterial-2-Design-Kit-(Community)%3Fnode-id%3D0%253A2347" allowfullscreen></iframe>

## API Reference

| Property              | Type                       |
| --------------------- | -------------------------- |
| top       | boolean            |
| left       | boolean            |
| bottom       | boolean           |
| right       | boolean            |
| hover       | boolean            |
| click       | boolean            |