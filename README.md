# volta-vue

> Vue.js single file components for Vonage [Volta](https://github.com/Nexmo/volta) authored with [vue-loader](https://github.com/vuejs/vue-loader)

## Contributing
### Steps
1. Create a branch from the **develop** branch
2. Make your changes and commit to your branch
3. Create a pull request to merge your branch to **develop**

### Guidelines
- Create one branch per feature/fix
- Branches should be deleted after being merged in to **develop**

## Getting Started with NPM
``` bash
npm install @vonagevolta/vue
```

### Fonts
Set the font variable value before loading the volta style sheet
``` bash
$Vlt-font-url: '~@vonagevolta/core/fonts/';
@import '~@vonagevolta/core/scss/volta';
```

### Icons
Icons have a dependency on [svg-sprite-loader](https://github.com/kisenka/svg-sprite-loader)

``` bash
npm install svg-sprite-loader --save-dev
```

*Webpack config*
``` bash
{
  test: /\.svg$/,
  loader: 'svg-sprite-loader',
  options: {
    symbolId: 'V' 
  }
} 
```

*App.vue*
``` bash
import VoltaIcons from '@vonagevolta/core/dist/symbol/volta-icons.svg';
...
data () {
  return { 
    VoltaIcons
  }
}
```

*In your vue component*
``` bash
<template>
  <vlt-icon icon="help" />
</template>

<script>
  import { VltIcon } from '@vonagevolta/vue';

  export default {
    components: {
      VltIcon
    }
    ...
  }
</script>
```

## Running tests
We use [Vue Test Utils](https://vue-test-utils.vuejs.org/) with [Jest](https://jestjs.io/en/) for unit testing.
You can run all the tests: 
``` bash
npm test
```
Or a single test:
``` bash
npm test test/radio/VltRadio.spec.js
```


## Viewing the docs

Clone repo

``` bash
npm run dev
```
