'use client'

import { ReactNode, FC } from "react"
import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"

import { Button } from "@components/ui/button"

interface PageProps {
  children: ReactNode
}

const FormPage: FC<PageProps> = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <header className="w-full h-24 py-8 px-10 bg-card-foreground">
        <div className="mx-auto max-w-6xl">
          <Link to="/">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" /> Back
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex flex-1">{children}</main>
    </div>
  )
}

export default FormPage