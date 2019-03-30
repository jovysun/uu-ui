# 搭建一套自己Vue UI组件库范式

# 若npm包发布成功后可以如下使用
## Install
```shell
npm install uu-ui -S
```

## Quick Start
``` javascript
import Vue from 'vue'
import UU from 'uu-ui'
import 'uu-ui/lib/uu-ui.css'

Vue.use(UU)

// or
import {
  Loading,
  Button
  // ...
} from 'uu-ui'

Vue.component(Loading.name, Loading)
Vue.component(Button.name, Button)
```

## Browser Support
Modern browsers and Internet Explorer 10+.