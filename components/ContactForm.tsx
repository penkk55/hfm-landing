"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  country: z.string().min(1, "Please select a country"),
  phone: z.string().min(1, "Phone number is required"),
});

type ContactFormValues = z.infer<typeof formSchema>;

type Country = {
  code: string;
  name: string;
  dialCode: string;
};

export default function ContactForm() {
  const { toast } = useToast();
  const [countries, setCountries] = useState<Country[]>([]);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      phone: "",
    },
  });

  const selectedCountry = countries.find(
    (c) => c.code === form.watch("country")
  );

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    toast({
      title: "Form Submitted Successfully!",
      description: "Thank you for your interest. We'll contact you soon.",
      variant: "success",
    });
  };

  const handleCountryChange = (code: string) => {
    form.setValue("country", code);
  };

  useEffect(() => {
    fetch("/api/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Failed to load countries:", err));
  }, []);

  return (
    <div className="w-fit bg-white/90 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          Lorem ipsum dolor sit amet
        </h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-[320px]">
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className="border-2 border-gray-300 rounded-md"
                    />
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
                <FormItem className="w-[320px]">
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className="border-2 border-gray-300 w-[320px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-[320px]">
                  <FormControl>
                    <Select
                      onValueChange={handleCountryChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="border-2 border-gray-300 w-[320px]">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((c) => (
                          <SelectItem key={c.code} value={c.code}>
                            {c.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Code + Phone */}
            <div className="flex gap-2">
              <Input
                placeholder="Code"
                className="border-2 border-gray-300 w-[64px]"
                value={selectedCountry?.dialCode || ""}
                disabled
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone"
                        {...field}
                        className="border-2 border-gray-300 w-[248px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-[320px]">
                  <FormControl>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="border-2 border-gray-300 w-[320px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Experience */}
            <FormItem className="w-[320px]">
              <Select>
                <SelectTrigger className="border-2 border-gray-300 w-[320px]">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <input type="checkbox" className="mt-1" required />
            <label className="opacity-70">
              I have read and accepted the{" "}
              <a href="#" className="text-red-500 underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="text-red-500 underline">
                Terms and Conditions
              </a>
            </label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="w-[300px] text-white text-lg bg-[#179149] hover:bg-green-700 rounded-sm"
          >
            JOIN NOW
          </Button>
        </form>
      </Form>
    </div>
  );
}
