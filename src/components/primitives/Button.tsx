import * as React from "react";

import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "border border-border text-fg-strong hover:bg-muted",
  ghost: "text-fg hover:bg-muted",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-small",
  md: "px-6 py-3 text-body",
  lg: "px-8 py-3.5 text-body",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref
  ) => {
    const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (asChild && React.isValidElement(props.children)) {
      const child = props.children as React.ReactElement<any>;
      return React.cloneElement(child, {
        ...props,
        className: cn(classes, child.props?.className),
      });
    }

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";
