import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import appwriteDbService from "../../appwrite/config";
import { Button, Input, RTE, Select } from "../index";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
      defaultValues: {
          title: post?.title || "",
          slug: post?.$id || "",
          content: post?.content || "",
          status: post?.status || "active",
      },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
      if (post) {
          const file = data.image[0] ? await appwriteDbService.uploadFile(data.image[0]) : null;

          if (file) {
              appwriteDbService.deleteFile(post.image);
          }

          const dbPost = await appwriteDbService.updatePost(post.$id, {
              ...data,
              image: file ? file.$id : undefined,
          });

          if (dbPost) {
              navigate(`/post/${dbPost.$id}`);
          }
      } else {
          const file = await appwriteDbService.uploadFile(data.image[0]);

          if (file) {
              const fileId = file.$id;
              data.image = fileId;
              const dbPost = await appwriteDbService.createPost({ ...data, userId: userData.$id });

              if (dbPost) {
                  navigate(`/post/${dbPost.$id}`);
              }
          }
      }
  };

  const slugTransform = useCallback((value) => {
      if (value && typeof value === "string")
          return value
              .trim()
              .toLowerCase()
              .replace(/[^a-zA-Z\d\s]+/g, "-")
              .replace(/\s/g, "-");

      return "";
  }, []);

  React.useEffect(() => {
      const subscription = watch((value, { name }) => {
          if (name === "title") {
              setValue("slug", slugTransform(value.title), { shouldValidate: true });
          }
      });

      return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
      <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
          <div className="w-2/3 px-2">
            <div className="w-3/5 pb-8 ml-10">
                <Input
                    label="Title"
                    placeholder="Title"
                    className="mb-5"
                    {...register("title", { required: true })}
                />
                <Input
                    placeholder="Slug"
                    className="mb-5"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
             </div>
            <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
          </div>
          <div className="w-1/3 px-2">
              <Input
                  label="Image"
                  type="file"
                  className="mb-4"
                  accept="image/png, image/jpg, image/jpeg, image/gif"
                  {...register("image", { required: !post })}
              />
              {post && (
                  <div className="w-full mb-4">
                      <img
                          src={appwriteDbService.getFilePreview(post.image)}
                          alt={post.title}
                          className="rounded-lg"
                      />
                  </div>
              )}
              <Select
                  options={["active", "inactive"]}
                  label="Status"
                  className="mb-4"
                  {...register("status", { required: true })}
              />
              <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                  {post ? "Update" : "Create"}
              </Button>
          </div>
      </form>
  );
}