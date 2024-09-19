"use client";
import AnimatedButton from "@/components/aceternity/AnimatedButton";
import PageWrapper from "@/components/global/PageWrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, PhoneCall } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type Props = {};

const TourAndTravel = (props: Props) => {
  const formSchema = z.object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name must not exceed 100 characters"),
    phoneNumber: z
      .string()
      .regex(/^\d+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits long")
      .max(15, "Phone number must not exceed 15 digits"),
    destination: z.enum(["New York", "London", "Paris", "Tokyo", "Sydney"]),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <PageWrapper>
      <div className="relative h-fit lg:min-h-[20rem] bg-black antialiased bg-grid-pattern bg-grid-size flex flex-col pt-[10.5rem] lg:pt-[8rem] pb-[8rem] px-[5vw] justify-center items-center gap-y-6 overflow-x-hidden overflow-y-hidden">
        <div className="w-full md:items-center md:justify-center antialiased relative overflow-hidden ">
          <div className="relative z-10 w-[65%] mx-auto flex flex-col items-center justify-center bg-white rounded-2xl">
            <div className="py-10 flex flex-col items-center justify-center gap-y-1">
              <h1 className="text-2xl font-bold">Elevate your travel leads</h1>
              <h4 className="text-sm">
                Connect with travelers ready to explore your destinations.
              </h4>
            </div>
            <div className="flex w-full">
              <div className="border-l border-b border-b-white border-r border-r-black bg-black/100 rounded-bl-2xl flex flex-col gap-y-4 items-start justify-center pl-8 w-[40%] py-8">
                <div className="flex gap-2 items-center">
                  <div className="bg-white p-2 w-[38px] rounded-full flex items-center justify-center">
                    <PhoneCall size={20} color="black" />
                  </div>
                  <span className="text-lg text-white font-semibold">
                    843 991 1779
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="bg-white w-[38px] p-2 rounded-full flex items-center justify-center">
                    <Mail size={20} color="black" />
                  </div>
                  <span className="text-lg text-white font-semibold">
                    grow@boomzo.in
                  </span>
                </div>
              </div>
              <div className="border-t border-black w-[60%] flex items-center justify-center">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-2 w-[100%] px-8 pt-8 pb-12" 
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="your name" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="your phone number" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Destination</FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={(value) => field.onChange(value)} // Update the form value with the selected destination
                              defaultValue={field.value} // Ensure the field is synchronized
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a destination" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="New York">
                                  New York
                                </SelectItem>
                                <SelectItem value="London">London</SelectItem>
                                <SelectItem value="Paris">Paris</SelectItem>
                                <SelectItem value="Tokyo">Tokyo</SelectItem>
                                <SelectItem value="Sydney">Sydney</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <AnimatedButton
                      text="Submit"
                      buttonType="submit"
                      className="bg-black text-white/80 text-sm transform translate-y-3"
                      //   disableButton={isLoading}
                    />
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TourAndTravel;
