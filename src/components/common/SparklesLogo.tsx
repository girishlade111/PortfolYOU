import { cn } from "@/lib/utils"

function Sparkle({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      {...props}
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}

export default function SparklesLogo({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground",
        className
      )}
      {...props}
    >
      <Sparkle className="absolute top-0 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform text-primary" />
      <Sparkle className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2 translate-y-1/2 transform text-primary" />
      <Sparkle className="absolute left-0 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform text-primary" />
      <Sparkle className="absolute right-0 top-1/2 h-5 w-5 translate-x-1/2 -translate-y-1/2 transform text-primary" />
      <Sparkle className="h-6 w-6" />
    </div>
  )
}
