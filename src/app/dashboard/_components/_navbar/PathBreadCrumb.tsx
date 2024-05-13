"use client";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";

export function PathBreadCrumb() {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((item) => item !== "");
  const fullPath = pathArray.map((item, index) => {
    return `/${item}`;
  });
  return (
    <Breadcrumb className="hidden md:block lg:block">
      <BreadcrumbList>
        {fullPath.map((item, index) => {
          if (index === fullPath.length - 1) {
            return (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={
                      index === 0
                        ? `/dashboard`
                        : fullPath.slice(0, index + 1).join("")
                    }
                    className="text-foreground"
                  >
                    {item.split("/")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            );
          }

          return (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={
                    index === 0
                      ? `/dashboard`
                      : fullPath.slice(0, index + 1).join("")
                  }
                  className="hover:text-foreground"
                >
                  {item.split("/")}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
