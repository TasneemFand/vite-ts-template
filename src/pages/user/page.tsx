import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormMessage,
  FormItem,
} from "@src/components/ui/form";
import { Input } from "@src/components/ui/input";
import { Textarea } from "@src/components/ui/textarea";
import { Button } from "@src/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Website Name is required",
  }),
  description: z.string().min(1, {
    message: "Website description is required",
  }),
  user: z.string().min(1, {
    message: "Target User is required",
  }),
});

const userTargetData = [
  {
    id: 1,
    name: "Muslim",
  },
  {
    id: 2,
    name: "Non-Muslim",
  },
  {
    id: 3,
    name: "Student",
  },
  {
    id: 4,
    name: "New-Muslim",
  },
  { id: 5, name: "Professional" },
];
export const UserPreference: React.FC = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      name: "",
      user: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    navigate("/");
  };

  return (
    <div className="max-w-5xl mx-auto flex items-center justify-center h-full p-6	">
      <div className="p-8 border border-zinc-400 rounded-md md:w-6/12 w-full">
        <h1 className="text-2xl">User Preferences</h1>
        <p className="text-sm text-slate-600">
          What would you like the site to be?
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Website Name"
                      {...field}
                      className="py-3 px-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Website Description"
                      className="py-3 px-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col space-y-1.5">
              <Controller
                name="user"
                control={form.control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="bg-transparent">
                      <SelectValue placeholder="Select target user" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        {userTargetData.map((data) => (
                          <SelectItem key={data.id} value={data.name}>
                            {data.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
                rules={{ required: true }}
              />
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="outline"
                className="p-2 px-3 text-white bg-blue-600"
                disabled={!form.formState.isValid}
              >
                Continue
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
