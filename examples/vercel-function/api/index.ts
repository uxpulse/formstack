import { Hono } from "hono"
import { handle } from "hono/vercel"
import type { PageConfig } from "next"

export const config: PageConfig = {
  runtime: 'edge',
  api: {
    bodyParser: false,
  },
}

const app = new Hono().basePath('/api')

app.get('/', (c: any) => {
  return c.json({
    message: "Congrats! You've deployed Hono to Vercel",
  })
})

export default handle(app)