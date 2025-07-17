'use client';

import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useState } from "react";

export default function UserSearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleInputChange = (value) => {
    const params = new URLSearchParams(searchParams);
    console.log("Search Params:", searchParams);
      if (value) {
        params.set('q', value);
      } else {
        params.delete('q');
      }
    
    const queryString = params.toString();   
    const updatedPath = queryString ? `${pathname}?${queryString}` : pathname;
    router.push(updatedPath);
  };


    return (
        <input
            type="text"
            placeholder="Search users..."
            className="mb-4 p-2 border rounded"
            onChange={(e) => {
               handleInputChange(e.target.value);
            }}
        />
    );
}
