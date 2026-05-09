"use client";

import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Searching..." : "Search"}
    </button>
  );
}

export default function Search() {
  async function search(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const query = formData.get("query");
    alert(`You searched for '${query}'`);
  }

  return (
    <form action={search}>
      <input name="query" />
      <SubmitButton />
    </form>
  );
}
