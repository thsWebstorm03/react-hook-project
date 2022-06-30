![CI/CD](https://github.com/beautifulinteractions/beautiful-react-hooks/workflows/CI/CD/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/beautifulinteractions/beautiful-react-hooks/badge.svg?branch=master)](https://coveralls.io/github/beautifulinteractions/beautiful-react-hooks?branch=master)[![License:
MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/beautiful-react-hooks)
![GitHub stars](https://img.shields.io/github/stars/beautifulinteractions/beautiful-react-hooks?style=social)


<div align="center">
  <p align="center">
    <img src="./logo.png" alt="Beautiful React Hooks" width="750px" />
  </p>
</div>
<br />
<div>
  <p align="center">
    A collection of beautiful (and hopefully useful) React hooks to speed-up your
    components and hooks development
  </p>
</div>

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Live playground here 🌟
    </a>
  </p>
</div>

![Usage example](./usage_example.png)

🇬🇧 English | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md">🇨🇳 简体中文</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.it-IT.md">🇮🇹 Italiano</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.es-ES.md"> 🇪🇸 Español </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.uk-UA.md">🇺🇦 Ukrainian</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pt-BR.md">🇧🇷 Brazilian Portuguese</a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pl-PL.md">🇵🇱 Polski </a>
| <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.jp-JP.md">&#x1f1ef;&#x1f1f5; 日本語 </a>

## 💡 Why?

React custom hooks allow to abstract components' business logic into single reusable functions.<br />
So far, we've found that most of the hooks we've created and therefore shared between our internal projects have quite often a similar gist
that involves callback references, events and components' lifecycle. <br />
For this reason we've tried to sum up that gist into `beautiful-react-hooks`: a collection of (*hopefully*) useful React hooks to possibly
help other companies and professionals to speed up their development process.<br /><br />
Furthermore, we created a concise yet concrete API having in mind the code readability, focusing to keep the learning curve as lower as
possible so that the it can be used and shared in bigger teams.

**-- Please before using any hook, read its documentation! --**

## ☕️ Features

* Concise API
* Small and lightweight
* Easy to learn

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Live playground here 🌟
    </a>
  </p>
</div>

## 🕺 Install

by using `npm`:

```bash
$ npm install beautiful-react-hooks
```

by using `yarn`:

```bash
$ yarn add beautiful-react-hooks
```

## 🎨 Hooks

* [useQueryParam](docs/useQueryParam.md)
* [useQueryParams](docs/useQueryParams.md)
* [useSearchQuery](docs/useSearchQuery.md)
* [useURLSearchParams](docs/useURLSearchParams.md)
* [useInfiniteScroll](docs/useInfiniteScroll.md)
* [useObservable](docs/useObservable.md)
* [useEvent](docs/useEvent.md)
* [useGlobalEvent](docs/useGlobalEvent.md)
* [usePreviousValue](docs/usePreviousValue.md)
* [useValueHistory](docs/useValueHistory.md)
* [useValidatedState](docs/useValidatedState.md)
* [useMediaQuery](docs/useMediaQuery.md)
* [useOnlineState](docs/useOnlineState.md)
* [useViewportSpy](docs/useViewportSpy.md)
* [useViewportState](docs/useViewportState.md)
* [useSpeechSynthesis](docs/useSpeechSynthesis.md) and [useSystemVoices](docs/useSystemVoices.md)
* [useGeolocation](docs/useGeolocation.md), [useGeolocationState](docs/useGeolocationState.md)
  and [useGeolocationEvents](docs/useGeolocationEvents.md)
* [useDrag](docs/useDrag.md), [useDropZone](docs/useDropZone.md) and [useDragEvents](docs/useDragEvents.md)
* [useMouse](docs/useMouse.md), [useMouseState](docs/useMouseState.md) and [useMouseEvents](docs/useMouseEvents.md)
* [useTouch](docs/useTouch.md), [useTouchState](docs/useTouchState.md) and [useTouchEvents](docs/useTouchEvents.md)
* [useLifecycle](docs/useLifecycle.md), [useDidMount](docs/useDidMount.md) and [useWillUnmount](docs/useWillUnmount.md)
* [useWindowResize](docs/useWindowResize.md)
* [useWindowScroll](docs/useWindowScroll.md)
* [useRequestAnimationFrame](docs/useRequestAnimationFrame.md)
* [useResizeObserver](docs/useResizeObserver.md)
* [useTimeout](docs/useTimeout.md)
* [useInterval](docs/useInterval.md)
* [useDebouncedCallback](docs/useDebouncedCallback.md)
* [useThrottledCallback](docs/useThrottledCallback.md)
* [useLocalStorage](docs/useLocalStorage.md)
* [useSessionStorage](docs/useSessionStorage.md)
* [useDefaultedState](docs/useDefaultedState.md)
* [useRenderInfo](docs/useRenderInfo.md)
* [useSwipe](docs/useSwipe.md), [useHorizontalSwipe](docs/useHorizontalSwipe.md) and [useVerticalSwipe](docs/useVerticalSwipe.md)
* [useSwipeEvents](docs/useSwipeEvents.md)
* [useConditionalTimeout](docs/useConditionalTimeout.md)
* [useCookie](docs/useCookie.md)
* [useMutationObserver](docs/useMutationObserver.md)

<div>
  <p align="center">
    <a href="https://antonioru.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Live playground here 🌟
    </a>
  </p>
</div>

## Peer dependencies

Some hooks are built on top of third-party libraries (rxjs, react-router-dom, redux), therefore you will notice those libraries listed as
peer dependencies. You don't have to install these dependencies unless you directly use those hooks.

## Contributing

Contributions are very welcome and wanted.

To submit your custom hook, please make sure your read our [CONTRIBUTING](./CONTRIBUTING.md) guidelines.

**Before submitting** a new merge request, please make sure:

1. make sure to write tests for your code, run `npm test` and `npm build` before submitting your merge request.
2. in case you're creating a custom hook, make sure you've added the documentation (*you can possibly use
   the [HOOK_DOCUMENTATION_TEMPLATE](./HOOK_DOCUMENTATION_TEMPLATE.md) to document your custom hook*).

### Made with

* [React](https://reactjs.org/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [@testing-library/react-hooks](https://react-hooks-testing-library.com/)

---

Icon made by [Freepik](https://www.flaticon.com/authors/freepik) from [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
