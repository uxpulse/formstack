"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form"

import PlaceholderImage from '@assets/placeholder.svg'

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters",
  }),
})

export function MultistepForm() {
  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // Define a submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values
    console.log(values)
  }

  return (
    <div className="w-full lg:grid lg:grid-cols-5">
      <div className="flex items-center justify-center py-12 lg:col-span-3">
        <div className="mx-auto w-full px-8 grid gap-6">
          <div className="grid gap-1 text-center">
            <h1 className="text-3xl font-bold">Example Multistep</h1>
            <p className="text-balance text-muted-foreground">
              Please take our simple survey.
            </p>
          </div>
          <div className="grid gap-4 w-full max-w-lg mx-auto">

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="py-4">
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </div>

              </form>
            </Form>

          </div>
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
  )
}

export default MultistepForm