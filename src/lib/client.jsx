import { createClient } from "@sanity/client";

export const sanityStore = createClient({
  projectId: "fymzgq7r",
  dataset: "production",
  apiVersion: "2023-05-09",
  useCdn: true,
});
