# strolo-ui-components

A home for all shared Strolo components. Let's not be savages who copy/paste components to different projects.

## Installing this Package

`npm install git+ssh://git@github.com:strolo-app/strolo-ui-components#v1.0.1`

## Creating a New Component

1. `npm i`
2. `npm start` (Not implemented yet)
3. Create a new folder inside of `src/components` for your component
4. Export your component in `src/index.ts`

## Publishing Your Changes

1. Commit your changes (build artifacts will be updated as part of a pre-commit hook)
2. `npm version <major|minor|patch>`
3. `git push —-tags origin <branch-name>`


## Notes

https://levelup.gitconnected.com/create-a-react-component-library-with-typescript-and-storybook-ed28fc7511f2

### Linking to another project

in consumer project:

`cd ./strolo-web/node_modules/react && npm link && cd ../react-dom && npm link && cd ../../../strolo-ui-components && npm link react react-dom styled-components && npm link && cd ../strolo-web && npm link @strolo-fit/ui-components && cd ../`

in this project:

`npm link react && npm link react-dom`

in consumer project:

`npm link @strolo-fit/ui-components`