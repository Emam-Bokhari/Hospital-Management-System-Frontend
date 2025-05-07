"use client";
import Image from "next/image";
import { Fragment } from "react";
import logo from "@/assets/Logo.png";
import { Separator } from "@/components/ui/separator";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import banner from "@/assets/loginBanner.jpg";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function LoginPage() {
  const form = useForm({
    // resolver: zodResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Fragment>
      <div className="flex flex-col lg:flex-row h-screen w-full ">
        {/* left side */}
        <div className="relative w-1/2 h-full hidden lg:block">
          <Image
            src={banner}
            alt="Banner Image"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* right side */}
        <div className="flex  items-center justify-center w-full lg:w-1/2   p-6">
          <div className="max-w-md w-full space-y-6">
            <Link href="/" className="block">
              <div className="relative w-20 h-20 mx-auto">
                <Image src={logo} alt="Logo" fill priority />
              </div>
            </Link>
            <p className="text-[#09090B] text-2xl font-semibold text-center">
              Welcome Back to Dreams Care!
            </p>
            <p className="text-zinc-700 text-base md:text-lg text-center">
              Please sign in to continue managing your account.
            </p>
            {/* actions button for quick login */}
            <TooltipProvider>
              <div className="flex flex-col gap-5 md:flex-row">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1 cursor-pointer xl:py-5 xl:text-base">
                      User
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-[#f5f5f5] text-base">
                      Quick login or sign in to explore user features
                    </p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button className="bg-red-600 hover:bg-red-700 text-white flex-1 cursor-pointer xl:py-5 xl:text-base">
                      View Admin Panel
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-[#f5f5f5] text-base">
                      Access admin, doctor, and super admin dashboards
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
            <div className="flex gap-5 items-center">
              <Separator className="flex-1" />
              Or
              <Separator className="flex-1" />
            </div>
            {/* form */}
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#09090B]">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your email address"
                          className="w-full h-10 text-zinc-900 text-base placeholder:text-base focus:outline-none focus:border-none focus:ring-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base text-[#09090B]">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="Enter your password"
                          className="w-full h-10 text-zinc-900 text-base placeholder:text-base focus:outline-none focus:border-none focus:ring-0"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="data-[state=checked]:bg-[#415be7] data-[state=checked]:border-[#415be7]"
                          />
                        </FormControl>
                        <FormLabel className="mb-0 text-zinc-900 font-normal">
                          Remember Me
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                  <Link
                    href="#"
                    className="text-sm text-zinc-900 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className=" bg-[#415be7] cursor-pointer hover:bg-[#2f44b3] text-white w-full xl:py-5 xl:text-base"
                >
                  {isSubmitting ? "Logging..." : "Login"}
                </Button>
                <p className="text-center text-zinc-700 text-base">
                  New here?{" "}
                  <Link href="/signup" className="text-[#415be7] font-medium">
                    Create
                  </Link>{" "}
                  an account to book appointments and manage your health
                  records.
                </p>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
