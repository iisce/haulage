import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs));
}

export function createBreadcrumbDataFromUrl(
     url: string,
): { label: string; href: string; isCurrentPage: boolean }[] {
     const path = url.replace(/^https?:\/\/[^/]+/, "");

     const segments = path.split("/").filter(Boolean);

     const breadcrumbData = segments.map((segment, index) => {
          const isCurrentPage = index === segments.length - 1;

          return {
               label: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize
               href: `/${segments.slice(0, index + 1).join("/")}`,
               isCurrentPage,
          };
     });

     return breadcrumbData;
}

export const drawRect = (detections: any[], ctx: any) => {
     detections.forEach((prediction) => {
          const [x, y, width, height] = prediction["bbox"];
          const text = prediction["class"];

          const color = Math.floor(Math.random() * 16777215).toString(16);
          ctx.strokeStyle = "#" + color;
          ctx.font = "18px Arial";

          ctx.beginPath();
          ctx.fillStyle = "#" + color;
          ctx.fillText(text, x, y);
          ctx.rect(x, y, width, height);
          ctx.stroke();
     });
};

export const formatToNaira = (amount: number): string => {
     if (typeof amount !== "number") return amount;
     return amount.toLocaleString("en-NG", {
          style: "currency",
          currency: "NGN",
     });
};
export function unslugify(slug: string): string {
     const words = slug.split("-");
     const final = words.map((word) => {
          return word.charAt(0).toUpperCase() + word.slice(1);
     });

     return final.join(" ");
}
export function slugify(text: string): string {
     return text
          .toLowerCase()
          .replace(/ /g, "-") // Replace spaces with hyphens
          .replace(/[^a-z0-9-]/g, "") // Remove non-alphanumeric characters
          .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
          .replace(/^-|-$/g, ""); // Remove leading and trailing hyphens
}

export function formatDateForAPI(date: Date): string {
     return format(date, "yyyy-MM-dd");
}

export function formatMonthForAPI(date: Date): string {
     return format(date, "yyyy-MM");
}

export function formatWeekForAPI(date: Date): string {
     return `w${format(date, "w")}`;
}

export const formatCurrency = (amount: number) => {
     return new Intl.NumberFormat("en-NG", {
          style: "currency",
          currency: "NGN",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
     }).format(amount);
};