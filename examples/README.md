# Example Application

This is collection of example form templates, created using [Vite](https://vitejs.dev), [React](https://react.dev) and [TypeScript](https://www.typescriptlang.org) boilerplate, with a usage of open-source components and blocks from [shadcn/ui](https://ui.shadcn.com).

## Installation

Run the packages installation from top-level folder:

```bash
pnpm install
```

## Environment Variables

To setup custom proxy for the Form Stack server function, so APIs will be accessible from the application URL like <http://localhost:8080/api/forms> you need to copy `.env.example` to `.env` file.

- VITE_SERVER_URL is the server endpoint which is used in `packages/formstack`, default is <http://localhost:3001>
- VITE_SERVER_API_PATH is the APIs path, default is "/api/forms"

## Development

To run local server at the <http://localhost:8080> you can use top-level commands from `package.json`

```bash
pnpm dev
```

Or run application separately using:

```bash
pnpm --filter examples dev
```
