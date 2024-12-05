"use client";
import PageWrapper from "@/components/global/PageWrapper";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SparklesText from "@/components/ui/sparkles-text";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

  const Coming = () => {
  const formSchema = z.object({
    email: z.string().email("Invalid email address"),
  });

  type FormValues = z.infer<typeof formSchema>;

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    await axios
      .post(`/api/sendEmail`, {
        email: data.email,
      })
      .then(() => {
        setIsLoading(false);
        toast({
          title: "Received your mail!",
          style: {
            backgroundColor: "var(--mygreen)",
            color: "#fff",
            border: "none",
          },
        });
        form.reset();
      })
      .catch((err) => {
        setIsLoading(false);
        const prodErr = err.response?.data?.message;
        if (prodErr) {
          toast({
            variant: "destructive",
            title: prodErr,
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error occurred 💥💥!!",
          });
        }
      });
  };

  return (
    <PageWrapper className="bg-background">
      <div className="px-[5vw] pt-[10rem] bgpatternM lg:pt-[10rem] pb-10   min-h-[20rem] lg:min-h-fit flex flex-col gap-y-6 md:gap-y-10 text-black">
        <h1 className="text-center font-extrabold uppercase text-3xl lg:text-5xl"><SparklesText text="Coming Soon" /></h1>
        <div className="relative h-[50px]">
          <motion.h6
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-sm lg:text-xl w-full mx-auto lg:w-[60%] text-center absolute top-0 left-0 right-0 leading-relaxed"
          >
            Prepare to connect with top services effortlessly. Say goodbye to the hassle and hello to convenience! Exciting Features Await!
          </motion.h6>
        </div>
        <div className=" font-bold flex justify-center">
        <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 text-center"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          {...field}
                          className="w-80 text-center"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <RainbowButton 
                  type="submit"
                  className="text-sm"
                  aria-disabled={isLoading}
                  >
                  {isLoading ? "Sending Mail..." : "Get Early Access"}
                  </RainbowButton>
              </form>
            </Form>
          
        </div>
      </div>
    </PageWrapper>
  );
};

export default Coming;
