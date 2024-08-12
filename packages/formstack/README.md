# Form Stack Server

Server Function for the Form Stack, which is tend to be deployed to [AWS Lambda](https://aws.amazon.com/lambda/), [Vercel Functions](https://vercel.com/docs/functions), [Cloudflare Worker](https://workers.cloudflare.com), etc.

Exposing internal API and listening for the GET and POST requests from your application to process the forms data.

Function developed using [Express](https://expressjs.com) and [TypeScript](https://www.typescriptlang.org).

## Installation

You can install all necessary dependencies from the top-level `package.json` using preferred package manager, recommend is [PNPM](https://pnpm.io):

```bash
pnpm install
```

## Environment Variables

To run local server on specific port and with specific base path, first copy `.env.example` to `.env` file and change variable values.

- PORT is for custom server port, default is "3001"
- BASE_PATH is for APIs path prefix, default is "/api"

## Development

To run local server use `pnpm dev` from the top-level package folder or run it separately:

```bash
pnpm --filter formstack dev
```

By default APIs available at <http://localhost:3001/api/forms>

- GET /api/forms
- POST /api/forms
