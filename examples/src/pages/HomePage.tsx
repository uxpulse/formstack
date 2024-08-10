'use client'

import { Link } from "react-router-dom"

import formElements, { FormElement } from "@components/forms"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@components/ui/card"

export function HomePage () {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <header className="w-full h-24 py-8 px-10 bg-card-foreground">
        <section className="mx-auto max-w-6xl text-slate-100">Home Page</section>
      </header>
      <main className="mx-auto max-w-6xl my-8">
        <div className="flex gap-6">
          { formElements.map((el: FormElement, index) => {
            return (
              <Link to={"forms/" + el.id}>
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Example {index + 1}</CardTitle>
                    <CardDescription>{el.title}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    ...
                  </CardContent>
                </Card>
              </Link>
            )
          }) }
        </div>
      </main>
    </div>
  )
}

export default HomePage