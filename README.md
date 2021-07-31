# vue-readable-console-log

You can use console.log(...) for vue3 proxy fields

How to use?

Import library to main.js file

Example:
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vue-readable-console-log' // <-- import the package to the project

createApp(App).use(store).use(router).mount('#app')
```

Great!
Now all arguments passed to the console.log() are forcibly wrapped vue.js toRaw()
Instead of a reactive or readonly proxy object, you will see the original object in the console

More info about toRaw
https://v3.vuejs.org/api/basic-reactivity.html#toraw


