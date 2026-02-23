import type { AnyFieldApi } from "@tanstack/react-form";

import { useForm } from "@tanstack/react-form";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

import { useCreatePost } from "@/queries/upload";

export const Route = createFileRoute("/_content-root/admin/")({
  component: RouteComponent,
});

function FieldInfo({ field }: { field: AnyFieldApi }) {
  return (
    <>
      {field.state.meta.isTouched && !field.state.meta.isValid ? (
        <em className="text-sm text-red-600">
          {field.state.meta.errors.map((err) => err.message).join(", ")}
        </em>
      ) : null}
      {field.state.meta.isValidating ? (
        <em className="text-sm text-gray-500">Validating...</em>
      ) : null}
    </>
  );
}

const FormSchema = z.object({
  apiKey: z.string().min(1, "API Key is required"),
  content: z.string().min(1, "Content is required"),
  tags: z.string(),
  featuredImage: z.any(),
});

function RouteComponent() {
  const uploadMutation = useCreatePost();

  const form = useForm({
    defaultValues: {
      apiKey: "",
      content: "",
      tags: "",
      featuredImage: undefined as File | undefined,
    },
    validators: {
      onChange: FormSchema,
    },
    onSubmit: async ({ value }) => {
      try {
        const result = await uploadMutation.mutateAsync({
          apiKey: value.apiKey,
          content: value.content,
          tags: value.tags,
          featuredImage: value.featuredImage,
        });

        // Reset form on success
        form.reset();

        console.log(`Post uploaded successfully! Path: ${result.path}`);
      } catch (error) {
        console.error(
          `Failed to upload post: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    },
  });

  return (
    <div className="page-container">
      <h1 className="page-heading">Admin</h1>

      <div className="content-grid">
        {/* Sidebar */}
        <aside>
          <div className="top-[var(--site-sticky-top)] md:sticky">
            <nav className="mb-6 space-y-1 text-base font-normal">
              <a href="#" className="block text-gray-900">
                Upload Post
              </a>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <div className="space-y-6">
            <h2 className="text-2xl font-normal text-gray-900">Upload New Post</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <form.Field
                  name="apiKey"
                  children={(field) => (
                    <>
                      <label htmlFor={field.name} className="form-label">
                        API Key
                      </label>
                      <input
                        type="password"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="form-input"
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                />
              </div>

              <div className="space-y-2">
                <form.Field
                  name="content"
                  children={(field) => (
                    <>
                      <label htmlFor={field.name} className="form-label">
                        Content
                      </label>
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        rows={12}
                        className="form-textarea"
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                />
              </div>

              <div className="space-y-2">
                <form.Field
                  name="featuredImage"
                  children={(field) => (
                    <>
                      <label htmlFor={field.name} className="form-label">
                        Featured Image
                      </label>
                      <input
                        type="file"
                        id={field.name}
                        name={field.name}
                        accept="image/*"
                        onBlur={field.handleBlur}
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          field.handleChange(file);
                        }}
                        className="form-file-input"
                      />
                      {field.state.value && (
                        <p className="text-sm text-gray-600">
                          Selected: {(field.state.value as File).name}
                        </p>
                      )}
                      <FieldInfo field={field} />
                    </>
                  )}
                />
              </div>

              <div className="space-y-2">
                <form.Field
                  name="tags"
                  children={(field) => (
                    <>
                      <label htmlFor={field.name} className="form-label">
                        Tags
                      </label>
                      <input
                        type="text"
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="comma, separated, tags"
                        className="form-input"
                      />
                      <FieldInfo field={field} />
                    </>
                  )}
                />
              </div>

              <form.Subscribe
                selector={(state) => [state.canSubmit, state.isSubmitting]}
                children={([canSubmit, isSubmitting]) => (
                  <button
                    type="submit"
                    disabled={!canSubmit || uploadMutation.isPending}
                    className="rounded-lg bg-gray-900 px-6 py-2 text-white transition-colors hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {uploadMutation.isPending || isSubmitting ? "Uploading..." : "Upload Post"}
                  </button>
                )}
              />

              {uploadMutation.isError && (
                <p className="text-sm text-red-600">Error: {uploadMutation.error.message}</p>
              )}

              {uploadMutation.isSuccess && (
                <p className="text-sm text-green-600">Post uploaded successfully!</p>
              )}
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
