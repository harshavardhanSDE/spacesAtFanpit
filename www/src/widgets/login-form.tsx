"use client"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

export function LoginForm({
                              className,
                              ...props
                          }: React.ComponentProps<"form">) {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // 2. This function receives the validated form data
    const onSubmit = (data: any) => {
        console.log(data);
        // You'd typically send this data to an API
    };



    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-start gap-2 text-center">
                <h1 className="text-2xl font-bold">Welcome back!</h1>
                <p className="text-muted-foreground text-sm text-start">
                    Sign in to your account to continue discovering amazing Spaces for your next event.
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                    <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                            href="#"
                            className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                            Forgot your password?
                        </a>
                    </div>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                    Sign up
                </a>
            </div>
        </form>
    )
}
