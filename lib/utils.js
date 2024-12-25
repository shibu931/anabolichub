import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const handleError = (error) => {
  if (error instanceof Error) {
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

export function generateOrderId() {
  let orderCounter = 1000; // Start counter at a reasonable number
  const timestamp = Date.now().toString(36); // Base36 timestamp
  const counter = (orderCounter++).toString(36).padStart(4, '0'); // Base36 counter with padding
  return `${timestamp}-${counter}`; // Combine timestamp and counter
}

export const getCurrentCategoryAndParent = (pathname,navLinks) => {
  for (const mainCategory of navLinks) {
    if (mainCategory.isSubCategory) {
        for (const subCategory of mainCategory.category) {
            if (pathname.startsWith(subCategory.slug) || subCategory.links.some(link => link.slug === pathname)) {
                return {
                    parent: { ...mainCategory },
                    current: { ...subCategory },
                    siblings: mainCategory.category.filter(cat => cat !== subCategory),
                };
            }
        }
    }
}
return null;
};