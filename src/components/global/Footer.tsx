"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import WhiteLogo from "../../../public/logoWhiteCom.png";
import { FlipWords } from "../aceternity/flip-words";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { API_VERSION, BASE_URL } from "@/constants/endpoints";
import SocialIcons from "./SocialIcons";
import AnimatedButton from "../aceternity/AnimatedButton";
// import { SERVICE_ROUTES } from "@/constants/service-routes";

const PAGEROUTES = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "About us",
    route: "/about",
  },
  {
    name: "Contact Us",
    route: "/contact",
  },
  {
    name: "Terms and Conditions",
    route: "/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    route: "/privacy-policy",
  },
];

const words = ["Innovate", "Transform", "Achieve", "Be"];

const Footer = () => {
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
    // Handle form submission
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}${API_VERSION}/contact/newsletter`, {
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
        // console.log(err);
        setIsLoading(false);
        const prodErr = err.response.data.message;
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
    <div className="relative">
      <div className="flex flex-col lg:grid lg:grid-cols-7 gap-y-[4rem] md:gap-y-[5rem] px-[5vw] pt-[4rem] pb-[5rem] text-white bg-black">
        {/* <---------------- Heading ----------------> */}
        <div className="flex flex-col justify-start lg:justify-between col-span-3">
          <h1 className="sm:block text-4xl lg:text-5xl md:hidden lg:block leading-tight font-semibold font-wix">
            <FlipWords words={words} /> <br />
            <span
              className="block"
              style={{
                background: "linear-gradient(135deg, #542daf, #ff9100)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BeyondOrdinary
            </span>
          </h1>
          <Link href="/">
            <Image
              alt="boomzo"
              src={WhiteLogo}
              width={220}
              height={220}
              priority={true}
              className="hidden lg:block"
            />
          </Link>
          <h1 className="hidden md:block lg:hidden text-4xl lg:text-5xl text-center leading-tight font-semibold font-wix">
            <FlipWords words={words} /> <br />
            <span
              className="inline-block pr-3"
              style={{
                background: "linear-gradient(135deg, #542daf, #ff9100)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              BeyondOrdinary
            </span>
          </h1>
        </div>
        {/* <---------------- Links ----------------> */}
        <div className="w-[100%] col-span-4 flex gap-6 items-start justify-around border-none border-white">
          {/* %%%% Links %%%% */}
          <div className="w-[50%] flex flex-col gap-y-12">
            {/* Services */}
            {/* <div className=" border-none border-white flex flex-col gap-y-4">
              <h2 className="text-xl font-bold">Services</h2>
              <ul className="flex flex-col gap-y-2 text-white/50">
                {SERVICE_ROUTES.map((service, idx) => {
                  return (
                    <Link className="w-fit" key={idx} href={service.route}>
                      <li className="hover:cursor-pointer w-fit" key={idx}>
                        {service.title}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div> */}
            {/* Pages Links */}
            <div className=" border-none border-white flex flex-col gap-y-4">
              <h2 className="text-xl font-bold">Links</h2>
              <ul className="flex flex-col gap-y-2 text-white/50">
                {PAGEROUTES.map((route, idx) => {
                  return (
                    <Link className="w-fit" key={idx} href={route.route}>
                      <li className="hover:cursor-pointer text-sm md:text-base w-fit">
                        {route.name}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* %%%% Get In touch %%%% */}
          <div className="w-[50%] flex flex-col gap-y-8 md:gap-y-12">
            <h2 className="text-xl md:text-2xl font-bold">
              Join our mailing list and get industry insights
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <AnimatedButton
                  text="Join Newsletter"
                  buttonType="submit"
                  className="text-sm"
                  disableButton={isLoading}
                  isLoading={isLoading}
                />
              </form>
            </Form>
            <SocialIcons showMail={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
