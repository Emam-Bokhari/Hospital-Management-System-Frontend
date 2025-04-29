import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ComponentProps } from "react";

type CustomButtonProps = ComponentProps<typeof Button>;

export default function CustomButton({
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      className={cn(
        "bg-[#415be7] text-white cursor-pointer   hover:bg-[#2f44b3] focus-visible:ring-[#2f44b3]",
        className
      )}
      {...props}
    />
  );
}
