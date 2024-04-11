"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import PhotosUploader from "../uploader";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import NetworkCardSchema from "@/schemas/client/network-card-client-schema";
import { useState } from "react";
import NetworkCardAction from "@/actions/network-card-action";

export default function NetworkCardForm() {
  const [images, setImages] = useState<any>([]);
  const [isFormLoading, setIsFromLoading] = useState(false);
  const form = useForm<z.infer<typeof NetworkCardSchema>>({
    resolver: zodResolver(NetworkCardSchema),
    defaultValues: {
      name: "",
      price: NaN,
      protocol: "",
      interface: "",
      color: "",
    },
  });

  async function onSubmit(data: z.infer<typeof NetworkCardSchema>) {
    setIsFromLoading(true);

    NetworkCardAction(data, images[0]);
    const res = await new Promise((resolve) =>
      setTimeout(() => resolve(true), 2000)
    );

    if (res) {
      toast({
        title: "Network card successfully inserted",
      });
      setIsFromLoading(false);
      form.reset();
      return;
    }

    toast({
      title: "something went wrong!",
    });

    setIsFromLoading(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex flex-col items-center   pb-4 mt-8"
      >
        <div
          className="grid  mb-4 grid-cols-2 gap-x-12 gap-y-6 w-full 
           "
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="protocol"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Protocol</FormLabel>
                <FormControl>
                  <Input placeholder="Protocol" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interface"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Interface</FormLabel>
                <FormControl>
                  <Input placeholder="Interface" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="Color" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <PhotosUploader
            maxPhotos={1}
            addedPhotos={images}
            onChange={setImages}
          />
        </div>

        <Button
          disabled={isFormLoading}
          className="w-full bg-[#7ED348] text-black  font-bold text-lg"
          type="submit"
        >
          {isFormLoading ? (
            <Loader className="mr-2 h-6 w-6 animate-spin" />
          ) : (
            <span>Submit</span>
          )}
        </Button>
      </form>
    </Form>
  );
}
