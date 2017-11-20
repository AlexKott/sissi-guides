# sissi-guides

## Introduction
_Sissi-guides_ is part of [sissi](https://github.com/AlexKott/sissi), a simple static site generator. Because _sissi_ doesn't like to do everything on herself, she employs some modules who can help. _Sissi_ is still young and the modules might change from time to time to adjust to her different life situations.

Of course you can use _sissi-guides_ independently as well if it fits your needs. Just consider that the main goal for the module is, to make _sissi_ happy. Everything else is just an extra.

## Installation
When you're asking for _sissi_, _sissi-guides_ is already included. For every other use case just do the usual:

`yarn add sissi-guides`

or

`npm i sissi-guides`

## Usage
_Sissi-guides_ has two exports which you can use inside your _sissi_ project.

### render

```
import { render } from 'sissi-guides';

import App from './App';
import routes from './routes';

render(App, routes);
```

_render_ is not much more than a wrapper around _ReactDOM_ and _ReactRouter_. It takes a _EntryComponent_ and the array with all your _routes_:

```
export default [
  {
    path: '/',
    text: 'Hello',
  },
  {
    path: '/about',
    text: 'About me',
  },
]
```

Each route needs a _path_ attribute and can contain any data that will get passed through to your _EntryComponent_:

```
import React from 'react';

export default ({ text }) => <strong>{text}</strong>;
```

Easy as this you'll see __Hello__ on `/` and __About me__ on `/about`.


### SissiLink
```
import { SissiLink } from 'sissi-guides';

export default () => (
  <SissiLink to='/about'>
    Read more about me
  </SissiLink>
);
```
Of course you'll want to provide links to all your pages. _SissiLink_ is a simple wrapper around _ReactRouter_'s `Link`-Component. The only thing it adds is one attribute:

```
<a href="/about" data-type="sissi-internal">Read more about me</a>
```

This is important for [sissi-snaps](https://github.com/AlexKott/sissi-snaps), since it will only crawl through links marked with this attribute.

## Contributing
This is just one of several things that _sissi_ needs for her well being. It is important to keep all settings focussed on her so that she'll always be the center.

Feel free to open an issue or [get in touch](https://alexkott.com), if you're interested in helping _sissi_ through her childhood or see some parenting mistake that you'd like to fix.


## Credits
_Sissi-guides_ is just a wrapper around [react-router](https://github.com/ReactTraining/react-router/).
