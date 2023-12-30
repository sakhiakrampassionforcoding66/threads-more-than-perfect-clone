"use client";


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import * as z from 'zod';
import { Textarea } from "../ui/textarea";
import { usePathname, useRouter } from "next/navigation";
import { ThreadValidation } from "@/lib/validations/thread";
import { createThread } from "@/lib/actions/thread.actions";
import { useOrganization } from '@clerk/nextjs';

export default function PostThread({ userId }: { userId: string}){
  const pathname = usePathname();
  const router = useRouter();
  const { organization } = useOrganization();

  const form = useForm({
    resolver: zodResolver(ThreadValidation),
    defaultValues: {
      thread: '',
      accountId: userId
    }
  });

  const onSubmit = async (values: z.infer<typeof ThreadValidation>) => {
    await createThread({
    text: values.thread,
    author: JSON.parse(userId),
    communityId: organization ? organization.id : null,
    path: pathname
    });

    router.push('/');
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-10 flex flex-col justify-start gap-10"
      >
        <FormField
        control={form.control}
        name="thread"
        render={({ field }) => (
          <FormItem className="flex flex-col gap-3 w-full">
            <FormLabel className="text-base-semibold text-light-2">
              Content
            </FormLabel>
            <FormControl className="no-focus border border-dark-4 bg-dark-3 text-light-1">
              <Textarea
                rows={10}
                placeholder="Write something..."
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
          )}
        />
        <Button type="submit"  className="bg-primary-500">
          Post Thread
        </Button>
      </form>
    </Form>
  )
}