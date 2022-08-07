# Typings 

Unlocked has made good progress in being as type safe as possible. All component
props are exported for you and available to import for your needs. 

This is especially helpful if you need to wrap a component. 

### Example
```javascript
import type { ButtonProps } from '@unlocked/base'
```

## Volar & IDE

Vue [recommends the use of the Volar](https://vuejs.org/guide/typescript/overview.html#ide-support) extension to help with proper Typescript support for Vue3. You can find the extension [here](https://github.com/johnsoncodehk/volar). 

To make use of the benefits of this with Unlocked, if you don't have a component's type file already, create a `components.d.ts` and add the following code from `@unlocked/base`'s type file. 

You can find the file [here](https://github.com/UnlockedUI/unlocked-ui/blob/master/global-components.d.ts).


