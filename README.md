# Form Stack

Library and set of open-source examples that help to scaffold form handling and business logic for the fully custom forms.

This monorepo uses [Turborepo](https://turbo.build) and pnpm "workspaces", contains source code of the Server Function for in `packages/formstack` folder and example frontend applications with most common types of forms in `examples`.

For more information, please check each individual package `README.md` files.

## Installation

To run the dependecies installation across the monorepo:

```bash
pnpm install
```

It's recommended to intall Turborepo globally.

```bash
npm install turbo -g
```

## Development

Run the local web server at <http://localhost:8080> with the example application:

```bash
turbo dev
```
