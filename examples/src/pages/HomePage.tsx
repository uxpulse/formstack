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

import PlaceholderImage from "@assets/placeholder.svg"

export function HomePage () {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <header className="w-full py-6 px-10 bg-card-foreground">

        <section className="flex items-center mx-auto max-w-6xl gap-6">
          <div className="text-slate-100">
            Home Page
          </div>
        </section>

      </header>
      <main className="flex flex-1">
        <div className="w-full lg:grid lg:grid-cols-5">
          <div className="py-10 lg:col-span-3">
            <div className="flex flex-col w-full px-8 gap-6 max-w-lg mx-auto">

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
          </div>
          <div className="hidden bg-muted lg:block lg:col-span-2">
            <img
              src={PlaceholderImage}
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage