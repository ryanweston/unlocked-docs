---
title: Typography
---
# Typography

Unlocked typography components: `Headline`, `Subtitle`, `Body` & `Caption`.

## Usage

#### Install
```bash
npm install @unlocked/base
```

#### Import
```js
import { UHeadline } from '@unlocked/base
```
```js
import { USubtitle } from '@unlocked/base
```
```js
import { UBody } from '@unlocked/base
```
```js
import { UCaption } from '@unlocked/base
```

## Type
### Headline
The headline has a size prop with a range from `1` to `6`. The default being `1`.

```html
<UHeadline :size="6">Example</Headline>
```

### Subtitle
The subtitle has a size prop with a range from `1` to `2`. The default being `1`.

```html
<USubtitle :size="2">Example</Headline>
```

### Body
The body has a size prop with a range from `1` to `2`. The default being `1`.

```html
<UBody :size="2">Example</UBody>
```

### Caption

```html
<UCaption>Example</UCaption>
```
## Figma

See below for the Figma component.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F3RLpJ0ZEXlbIBYLTUtLaL9%2Funlocked-ui%3Fnode-id%3D4%253A577" allowfullscreen></iframe>

## API Reference

| Property              | Type                       |
| --------------------- | -------------------------- |
| class      | string | string[]            |
| size     | `See above`            |
