import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./phone.css";
import axios from "axios";
import { API_VERSION, BASE_URL } from "@/constants/endpoints";
import { useToast } from "@/hooks/use-toast";
import AnimatedButton from "@/components/aceternity/AnimatedButton";

const ContactForm = () => {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    companyName: z.string().min(1).max(100),
    phoneNumber: z.string().min(1, "Phone number is required"),
    helpOption: z.string(),
    message: z.string().max(500).optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      companyName: "",
      phoneNumber: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
    setIsLoading(true);
    await axios
      .post(`${BASE_URL}${API_VERSION}/contact/query`, {
        name: values.username,
        email: values.email,
        companyName: values.companyName,
        phoneNumber: values.phoneNumber,
        helpNeeded: values.helpOption,
        message: values.message,
      })
      .then(() => {
        // console.log(data);
        setIsLoading(false);
        toast({
          title: "Received your query!!",
        });
        form.reset();
      })
      .catch((err) => {
        // console.log(err);
        setIsLoading(false);
        if (err.response.data.message) {
          toast({
            variant: "destructive",
            title: err.response.data.message,
          });
        } else {
          toast({
            variant: "destructive",
            title: "Error occurred 💥💥!!",
          });
        }
      });
  }

  const { toast } = useToast();

  function onError() {
    toast({
      variant: "destructive",
      title: "Fill all necessary information!",
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="your business name" {...field} />
              </FormControl>
              <FormMessage />
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
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="IN"
                  {...field}
                  value={field.value}
                  onChange={(value) => field.onChange(value || "")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="helpOption"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How Can We Help?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="support">Support</SelectItem>
                  <SelectItem value="partnership">
                    Partnership Opportunities
                  </SelectItem>
                  <SelectItem value="media">Media and Press</SelectItem>
                  <SelectItem value="feedback">Feedback</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Any additional details or questions? (Optional)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <AnimatedButton
          text="Submit"
          buttonType="submit"
          className="bg-black text-white/80 text-sm"
          disableButton={isLoading}
        />
      </form>
    </Form>
  );
};

export default ContactForm;
