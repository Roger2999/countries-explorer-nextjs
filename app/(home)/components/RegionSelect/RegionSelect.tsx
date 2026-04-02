"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const RegionSelect = ({regions}:{regions:string[]}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const {replace}= useRouter()
  const handleRegionChange = (value: string) => {
    const params = new URLSearchParams(searchParams)
    value !== "all" ? params.set("region", value) : params.delete("region")
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    
    <Select value={searchParams.get("region")||""} onValueChange={handleRegionChange}>
      <SelectTrigger
      
        aria-label="Filter by region"
        className="min-h-14 w-full max-w-48 border border-black/10 pl-6"
     >
       <SelectValue placeholder="Filter by Region" />
     </SelectTrigger>
      <SelectContent position="popper" align="center" >
        <SelectItem value={"all"}>All</SelectItem>
        {regions.map((r) => (
          <SelectItem key={r} value={r}>
            {r}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RegionSelect;
