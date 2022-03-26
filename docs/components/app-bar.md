---
title: App bar
---
# App bar

App bar component for Unlocked.

#### Install
```js
npm i @unlocked/foundation
```

#### Import
```js
import { UAppBar } from '@unlocked/foundation
```
## Usage

```html
<Button>Example</Button>
```
### Variants

There are a multitude of variants to make use of with the button component. These are `warning`, `error`, `text` and `secondary`.

```js
<Button type='secondary'>Example</Button>
```
### Icon usage
You can both append and prefix an icon with the button component. To do this, make use of the slots `appendIcon` and `prefixIcon` with our [icon component]('/components/icon.html').

```html
<Button>
  Example
  <template #appendIcon>
    <Icon>
      {{ mdiAccount }}
    </Icon>
  </template>
</Button>
```

### Sizes

The default size for the button component is `md`. However, to change this, pass your desired size out of `xs`, `s`, `lg` and `xl` through the size prop like so.

```html
<Button size="sm">Example</Button>
```
## Figma

See below for the Figma component.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1GKZEhOubObtIb1UHXMV95%2FMaterial-2-Design-Kit-(Community)%3Fnode-id%3D0%253A2347" allowfullscreen></iframe>

## API Reference

| Property              | Type                       |
| --------------------- | -------------------------- |
| width       | string            |
| height       | string            |
| width       | string            |
| height       | string            |