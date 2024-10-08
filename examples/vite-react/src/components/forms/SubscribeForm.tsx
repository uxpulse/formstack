"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

// Specific form config
import { subscribeFormSchema } from "../../../formstack.config"

import { Button } from "@components/ui/button"
import { Input } from "@components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form"

import PlaceholderImage from '@assets/placeholder.svg'

export function SubscribeForm() {
  // Define subscription form
  const form = useForm<z.infer<typeof subscribeFormSchema.formSchema>>({
    resolver: zodResolver(subscribeFormSchema.formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof subscribeFormSchema.formSchema>) {
    // Check form data if needed
    const request = JSON.stringify(values);

    const response = await fetch(`/api/forms?formId=${subscribeFormSchema.id}`, {
        method: 'POST',
        body: request,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="w-full lg:grid lg:grid-cols-5">
      <div className="flex items-center justify-center py-12 lg:col-span-3">
        <div className="mx-auto w-full px-8 grid gap-6">
          <div className="grid gap-1 text-center">
            <h1 className="text-3xl font-bold">Example Subscription</h1>
            <p className="text-balance text-muted-foreground">
              Subscribe to our newsletter.
            </p>
          </div>
          <div className="grid gap-3 w-full max-w-lg mx-auto">
        
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="johndoe@gmail.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">
                  Subscribe
                </Button>

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

export default SubscribeForm