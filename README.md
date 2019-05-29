# DEPRECATED
This sissi package is deprecated and will no longer be maintained. Please use [sissi-core](https://github.com/square-a/sissi-core) and [sissi-cli](https://github.com/square-a/sissi-cli) instead.

See you there!


# sissi-guides – routing solution for [sissi]

<img src='https://raw.githubusercontent.com/square-a/sissi/master/sissi.png'  width='160px' />

Hi, it’s me again. *sissi*, your ***si**mple **s**tatic **si**tes* generator.

If you want to turn your simple React app into a static site with a built-in CMS look no further! Or actually, do: [the sissi repo][sissi] is where you'll find all you need. See you there!

If you're a sissi fan and want to contribute – welcome! I'm glad you're here. I have to apologise, though. Please bear with me. I have but two parents and they are working hard on their sissi-to-do-lists. *Contribution guidelines* and *thorough documentation of all packages* are somewhere in there. Somewhere... For now, this will have to do:

## What sissi-guides can do
*sissi-guides* is basically a wrapper for [ReactRouter](https://github.com/ReactTraining/react-router/) and provides a `render()` function and a `SissiLink` component.

### render(Component, content)
The `render()` function is used in [sissi] projects and takes a *React Component* and a *content* object (the imported `content.json`). It then maps the *pages* and renders the given component for each page, enhanced with the following content props:

| Key | Type | Notes |
| - | - | - |
| content | object | the full content object |
| global | object | the global content |
| page | object | the current page |
| pages | object[] | all pages |
| path | string | the path of the current page |
| sections | object[] | the sections of the current page |

### SissiLink
`SissiLink` is a wrapper for the [ReactRouter Link](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md) component and supports all its main features.

It also adds the `data-type="sissi-internal"` attribute which is used by [sissi-snaps] to determine which pages to snapshot.


[sissi]:https://github.com/square-a/sissi
[sissi-snaps]:https://github.com/square-a/sissi-snaps
