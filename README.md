# IDSK 3.0 React Components Library

## Library usage

The npm packages for this library are stored in Gitlab: 

https://gitlab.com/eslovensko/esvk_web_idsk_react_library/-/packages

To be able to install the `@eslovensko/idsk-react` package you need these credentials to be stored in `.npmrc` file:
```
@eslovensko:registry=https://gitlab.com/api/v4/packages/npm/
//gitlab.com/api/v4/packages/npm/:_authToken=nZ9p6y9zGTpVWo9-g5G5
```

Then you can add the library to your project dependencies
```
npm install @eslovensko/idsk-react
```

## Storybook

The storybook for this library containing the latest version of the components is deployed here: 

http://library.dev.idsk.skit.zone

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
