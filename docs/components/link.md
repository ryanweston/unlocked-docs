# Link
Link component for Unlocked.

<iframe
  src="https://www.storybook.unlocked.to/iframe.html?id=components-link--default&viewMode=story"
  width="100%"
  height="70"
></iframe>

## Usage

#### Install
```bash
npm install @unlocked/base
```

#### Import
```js
import { ULink } from '@unlocked/base
```

#### Syntax 
```html
<ULink href="/">{{ mdiAccount }}</ULink>
```

## Emits
The Button component also emits `click`, `mouseenter` and `mouseout` events.

```html
<ULink @click="e => example(e)">
  Example
</UButton>
```
## API Reference

| Property              | Type                       |
| --------------------- | -------------------------- |
| class       | string | string[]           |
| href      | string            |
| ariaRole       | string            |
| target       | string            |


