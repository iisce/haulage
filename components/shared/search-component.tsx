import { Input } from "@/components/ui/input";
import { Search as SearchCN } from "lucide-react";
import React from "react";

export default function Search() {
  return (
    <div className="relative w-full md:grow-0">
      <SearchCN className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search by name"
        className="w-full rounded-lg bg-background pl-8"
      />
    </div>
  );
}
