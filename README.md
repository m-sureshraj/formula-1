## Formula 1

[![Build](https://github.com/m-sureshraj/formula-1/actions/workflows/main.yml/badge.svg)](https://github.com/m-sureshraj/formula-1/actions?query=branch:main)

![formula 1 webpage in action](./docs/formula-1.gif)

Formula 1 is a single page application that presents a list that shows
the F1 world champions starting from 2005 until now. Clicking on an item
shows the list of winners for every race for the selected year.

## Requirements

* Node.js >= v16.x.x
* [nvm](https://github.com/nvm-sh/nvm) (optional)

## Getting Started

First, clone the project to local:

```bash
> git clone git@github.com:m-sureshraj/formula-1.git
```

Navigate to the cloned project and install the project dependencies. Also, make sure you are using Node.js version `>= v16.x.x` to avoid
any dependency incompatibility issues.

> If you have `nvm` available on your system, run the `nvm use` command from the project root to switch to the correct Node.js version.

```bash
> cd <cloned project path>
> npm ci
```

Run the development server:

```bash
> npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit the file.

## Tech Stack

* [Next.js](https://nextjs.org/) - For client side rendering & static side generation (SSG)
  * TypeScript
  * [CSS Modules](https://github.com/css-modules/css-modules) with [SCSS](https://sass-lang.com/) - Component scoped styles with CSS Modules
  * React [context](https://reactjs.org/docs/context.html) for shared states
  * Functional Components with [Hooks](https://reactjs.org/docs/hooks-intro.html)
* [React Query](https://react-query.tanstack.com/) - Data fetching & Caching
* [Cypress](https://www.cypress.io/) - For End-to-End (E2E) tests
* [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Code quality tools

## Design References

* [User Interfaces](https://www.figma.com/file/tZQT1zjdqSl4xlBYX4Slnm/formula-1?node-id=0%3A1)

## Technical Choices

* WIP

## Improvements

* Make the page fully responsive
* [Server-side render](https://nextjs.org/docs/basic-features/pages#server-side-rendering) (SSR) the season result page to [improve](https://www.patterns.dev/posts/server-side-rendering/)
  the page's first contentful paint (FCP) and time to interactive (TTI).
* Document and test [reusable components](./components/ui) via [Storybook](https://storybook.js.org/)
* Configure git hooks via [Husky package](https://github.com/typicode/husky) to validate [commit messages](https://github.com/conventional-changelog/commitlint)
* Improve End-to-end tests via [Snapshot](https://www.cypress.io/blog/2018/01/16/end-to-end-snapshot-testing/) testing.
