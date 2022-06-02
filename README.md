# IDSK 3.0 React Components Library

## Library usage

The npm packages for this library are stored in Gitlab: 

https://gitlab.slovenskoit.sk/components/shared-web-libs/esvk_web_lib_idsk_react/-/packages

To be able to install the `@eslovensko/idsk-react` package you need these credentials to be stored in `.npmrc` file:
```
@eslovensko:registry=https://gitlab.slovenskoit.sk/api/v4/projects/153/packages/npm/
//gitlab.slovenskoit.sk/api/v4/projects/153/packages/npm/:_authToken=glpat-cMW7oe44yv3sfLb8okfi
```

Then you can add the library to your project dependencies
```
npm install @eslovensko/idsk-react
```

## Storybook

The storybook for this library containing the latest version of the components is deployed here: 

http://reactlib.dev.idsk.skit.zone

## Library development

### Install dependencies

```
npm install
```

### Format code with Prettier

```
npm run prettier
```

### Run linter

```
npm run lint
```

### Run unit tests

```
npm run test
```

### Run storybook locally

```
npm run storybook
```

### Build storybook

```
npm run build-storybook
```
This builds the static storybook website content and stores it into `storybook-static` folder. Open the `index.html` file to see the static storybook in your browser.

### Build the library

```
npm run rollup
```

### Publish the library

We don't publish the library locally. Both Storybook and npm package are published automatically during Gitlab CI pipeline when merged into develop branch.
Just **make sure to increment the project version in package.json** whenever you make any changes.

### Importing Assets

The assets like svg icons and images are saved in the `@eslovensko/idsk-core` package. If there are new assets, they need to be updated in the `idsk-core` repository:
https://gitlab.com/eslovensko/esvk_web_idsk_core

We don't use these svgs directly. We use SVGR to first transform svgs to React components (https://react-svgr.com)
These React icons and images can then be easily used in other React components.

### SVG icons and images import scripts

Run this script to build React icons:

```
npm run build-svg-icons
```

Run this script to build React components for svg images:

```
npm run build-svg-images
```
