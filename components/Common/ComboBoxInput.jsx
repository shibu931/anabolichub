"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"
import { useEffect } from "react"

export default function ComboBoxInput() {
  const [value, setValue] = useState("")
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open,setOpen] = useState(false)

  useEffect(() => {
      const searchProducts = async () => {
          if (!query) {
              setResults([]);
              return;
          }

          setLoading(true);
          try {
              const res = await fetch(`/api/products/search?q=${query}`);
              if (!res.ok) {
                  throw new Error(`API returned an error: ${res.status}`);
              }
              const data = await res.json();
              setResults(data.products);
          } catch (error) {
              console.error('Error searching:', error);
              setResults([]); // Clear results on error
          } finally {
              setLoading(false);
          }
      };
      const debounceFn = setTimeout(() => {
          searchProducts();
      }, 500);

      return () => clearTimeout(debounceFn);
  }, [query]);

  const handleSearchSubmit = (event) => {
      event.preventDefault();
      if (query) {
          window.location.href = `/search?q=${query}`;
      }
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? results.find((item) => item.value === value)?.label
            : "Select Product..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder="Search product..." />
          <CommandList>
            <CommandEmpty>No Product found.</CommandEmpty>
            <CommandGroup>
              {results.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
