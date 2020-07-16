[![Build Status](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks.svg?branch=master)](https://travis-ci.org/beautifulinteractions/beautiful-react-hooks)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/v/beautiful-react-hooks)
![GitHub stars](https://img.shields.io/github/stars/beautifulinteractions/beautiful-react-hooks?style=social)


<div align="center">
  <p align="center">
    <img src="../logo.png" alt="Beautiful React Hooks" width="750px" />
  </p>
</div>
<br />
<div>
  <p align="center">
    Uma coleção de React hooks lindos (e esperamos que úteis) para acelerar o desenvolvimento de seus componentes e hooks
  </p>
</div>

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Playground aqui 🌟
    </a>
  </p>
</div>

![Exemplo de uso](../usage_example.png)


<a href="https://github.com/beautifulinteractions/beautiful-react-hooks/">🇬🇧 English</a>  | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.zh-CN.md">🇨🇳 简体中文</a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.it-IT.md">🇮🇹 Italiano</a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.es-ES.md"> 🇪🇸 Español </a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.uk-UA.md">🇺🇦 Ukrainian</a> | 🇧🇷 Brazilian Portuguese | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.pl-PL.md">🇵🇱 Polski </a> | <a href="https://github.com/beautifulinteractions/beautiful-react-hooks/blob/master/docs/README.jp-JP.md">&#x1f1ef;&#x1f1f5; 日本語 </a>

## 💡 Por quê?

React hooks permitem a abstrair a lógica de negócios dos componentes em funções únicas e reutilizáveis.<br />
Até agora, descobrimos que a maioria dos hooks que criamos e, portanto, compartilhamos entre nossos projetos internos, muitas vezes têm uma essência semelhante que envolve referências de callback, eventos e ciclo de vida dos componentes. <br />
Por este motivo, tentamos resumir esta essência em `beautiful-react-hooks`: uma coleção de React hooks úteis (*assim esperamos*)
para possivelmente ajudar outras empresas e profissionais à agilizarem seus processos de desenvolvimento.<br /><br />
Além disso, criamos uma API simples porém sólida, tendo em mente a legibilidade do código, com o objetivo
de manter a curva de aprendizado o mais baixa possível, para que possa ser usada e compartilhada em equipes maiores.


**-- Por favor, antes de utilizar qualquer hook, leia a sua documentação! --**

## ☕️ Recursos

* API simples
* Pequeno e leve
* Fácil de aprender
* Abordagem funcional
* Totalmente escrito em JS (embora os tipos em TS sejam suportados)

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Playground aqui 🌟
    </a>
  </p>
</div>

## 🕺 Instalação

utilizando `npm`:
```bash
$ npm install beautiful-react-hooks
```

utilizando `yarn`:

```bash
$ yarn add beautiful-react-hooks
```

## 🎨 Hooks

* [useGlobalEvent](./useGlobalEvent.md)
* [usePreviousValue](./usePreviousValue.md)
* [useValueHistory](./useValueHistory.md)
* [useValidatedState](./useValidatedState.md)
* [useMediaQuery](./useMediaQuery.md)
* [useOnlineState](./useOnlineState.md)
* [useViewportSpy](./useViewportSpy.md)
* [useGeolocation](./useGeolocation.md), [useGeolocationState](./useGeolocationState.md) and [useGeolocationEvents](./useGeolocationEvents.md)
* [useDrag](./useDrag.md), [useDropZone](./useDropZone.md) and [useDragEvents](./useDragEvents.md)
* [useMouse](./useMouse.md), [useMouseState](./useMouseState.md) and [useMouseEvents](./useMouseEvents.md)
* [useLifecycle](./useLifecycle.md), [useDidMount](./useDidMount.md) and [useWillUnmount](./useWillUnmount.md)
* [useWindowResize](./useWindowResize.md)
* [useWindowScroll](./useWindowScroll.md)
* [useRequestAnimationFrame](./useRequestAnimationFrame.md)
* [useResizeObserver](./useResizeObserver.md)
* [useTimeout](./useTimeout.md)
* [useConditionalTimeout](./useConditionalTimeout.md)
* [useInterval](./useInterval.md)
* [useDebouncedFn](./useDebouncedFn.md)
* [useThrottledFn](./useThrottledFn.md)
* [useLocalStorage](./useLocalStorage.md)
* [useSessionStorage](./useSessionStorage.md)
* [useStorage](./useStorage.md)

<div>
  <p align="center">
    <a href="https://beautifulinteractions.github.io/beautiful-react-hooks/" target="_blank">
    🌟 Playground aqui 🌟
    </a>
  </p>
</div>

## Contribuindo

Contribuições são muito bem-vindas e desejadas.

Para enviar sua hook, por favor, certifique-se de ler o nosso arquivo [CONTRIBUTING](../CONTRIBUTING.md).

**Antes de enviar** um novo merge request, por favor certifique-se:

1. Você atualizou a versão no package.json e relatou suas alterações no arquivo [CHANGELOG](../CHANGELOG.md)
2. Certifique-se de rodar `npm test` e `npm build` antes de enviar o merge request.
3. Certifique-se de que você adicionou a documentação da sua hook (*você pode utilizar como base o [HOOK_DOCUMENTATION_TEMPLATE](../HOOK_DOCUMENTATION_TEMPLATE.md) para documentar sua hook*).
4. Certifique-se de que atualizou o arquivo `index.d.ts` com os tipos da sua hook.

### Feito com

* [React](https://reactjs.org/)
* [Mocha](https://mochajs.org/)
* [Chai](https://www.chaijs.com/)
* [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro)
* [@testing-library/react-hooks](https://react-hooks-testing-library.com/)


### Créditos

Esta biblioteca é fornecida e patrocinada por:

<div>
  <p>
    <a href="https://beautifulinteractions.com/">
      <img src="https://beautifulinteractions.com/img/logo-colorful.svg" alt="Beautiful interactions" width="140px" />
    </a>
  </p>
</div>

Como parte do nosso compromisso de apoiar e contribuir para a comunidade de código aberto.

---

Ícone criado por [Freepik](https://www.flaticon.com/authors/freepik) / [www.flaticon.com](https://www.flaticon.com/free-icon/hook_1081812)
