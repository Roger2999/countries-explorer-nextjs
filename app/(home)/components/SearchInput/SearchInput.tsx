"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent } from "react";

const SearchInput = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    e.target.value ? params.set("search", e.target.value) : params.delete("search");
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="w-full relative top-0 left-0">
      <Search className="absolute top-4 left-2"/>
      <Input
      className="min-h-14 w-full max-w-md pl-10"
        placeholder="Search..."
        type="text"
        defaultValue={searchParams.get("search") || ""}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
