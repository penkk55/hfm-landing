'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const countries = [
  { code: 'CY', name: 'Cyprus', dialCode: '+357' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44' },
  { code: 'DE', name: 'Germany', dialCode: '+49' },
] as const

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email'),
  country: z.string().min(1, 'Please select a country'),
  phone: z.string().min(1, 'Phone number is required'),
})

type ContactFormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const { toast } = useToast()
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      phone: '',
    },
  })

  const selectedCountry = countries.find((c) => c.code === form.watch('country'))

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form submitted:', data)
    toast({
      title: 'Form Submitted Successfully!',
      description: "Thank you for your interest. We'll contact you soon.",
    })
  }

  const handleCountryChange = (code: string) => {
    form.setValue('country', code)
    const country = countries.find((c) => c.code === code)
    if (country) {
      form.setValue('phone', `${country.dialCode} `)
    }
  }

  return (
    <div className="w-full max-w-md bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Lorem ipsum dolor sit amet
        </h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Country Select */}
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={handleCountryChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {countries.map((c) => (
                      <SelectItem key={c.code} value={c.code}>
                        {c.name} ({c.dialCode})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" className="w-full">
            JOIN NOW
          </Button>
        </form>
      </Form>
    </div>
  )
}
