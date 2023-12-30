"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import * as z from 'zod';
import { Input } from "../ui/input";
import { CommunityValidation } from "../../lib/validations/community";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(CommunityValidation),
    defaultValues: {
      query: '',
    }
  });

  const onSubmit = async (values: z.infer<typeof CommunityValidation>) => {
    // get the params from the url
    const params = new URLSearchParams(searchParams);
    if ( values.query){
      values.query.length > 2 && params.set('q', values.query);
    } else {
      params.delete('q');
    }

    // replace the link in the location bar to take the search query
    replace(`${pathname}?${params}`);

    // reset form field after submitting the form
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="searchbar"
      >
        <FormField
        control={form.control}
        name="query"
        render={({ field }) => (
          <FormItem className="flex items-center gap-3 w-full">
            <FormLabel>
              <Image
                src="/assets/search.svg"
                alt="search image"
                width={24}
                height={24}
                className="rounded-full object-cover"
              />
            </FormLabel>
            <FormControl className="border-none bg-transparent">
              <Input
                type="text"
                placeholder={placeholder}
                className="searchbar-input text-light-1"
                {...field}
              />
            </FormControl>
          </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default SearchBar;