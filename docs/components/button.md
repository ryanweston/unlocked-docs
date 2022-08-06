# Button

Button component for Unlocked.

 <iframe
  src="https://www.storybook.unlocked.to/iframe.html?id=components-button--primary&viewMode=story"
  width="100%"
  height="70"
></iframe>

[View on storybook](https://storybook.unlocked.to)
## Usage

#### Install
```bash
npm install @unlocked/base
```

#### Import
```js
import { UButton } from '@unlocked/base
```

#### Syntax 
```html
<UButton>Example</UButton>
```
## Variants

There are a multitude of variants to make use of with the button component. These are `success`, `error`, `text` and `secondary`.

```js
<Button type='secondary'>Example</Button>
```
## Icon usage
You can both append and prefix an icon with the button component. To do this, make use of the slots `appendIcon` and `prefixIcon` with our [icon component]('/components/icon.html').

```html
<UButton>
  Example
  <template #appendIcon>
    <Icon>
      {{ mdiAccount }}
    </Icon>
  </template>
</UButton>
```

## Sizes

The default size for the button component is `md`. However, to change this, pass your desired size out of `xs`, `s`, `lg` and `xl` through the size prop like so.

```html
<UButton size="sm">Example</UButton>
```

## Button group
You can create a button group using props. Assign all the buttons the `group` prop. Then ensure that the first and last buttons have the `first` and `last` props assigned also. 

You can then pass the `active` prop that accepts a boolean to apply active button styling. 

```html
<UButton group first :active="false">
  First
</UButton>
<UButton group :active="false">
  Middle
</UButton>
<UButton group last :active="true">
  Middle
</UButton>
```

## Emits
The Button component also emits `click`, `mouseenter` and `mouseout` events.

```html
<UButton @click="e => example(e)">
  Example
</UButton>
```

## Figma

See below for the Figma component.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3RLpJ0ZEXlbIBYLTUtLaL9%2Funlocked-ui%3Fnode-id%3D4%253A624" allowfullscreen></iframe>

## API Reference

| Property              | Type                       |
| --------------------- | -------------------------- |
| class       | string | string[]            |
| size       | `small` `medium` `large`            |
| disabled       | boolean           |
| type       | `primary` `secondary` `variant` `text` `error` `success`           |
| ariaRole | string |
| href | string | 
| target | string |
| group | boolean |
| first | boolean |
| last | boolean |
| active | boolean |
| text | string |
