"use client";

import { useActionState } from "react";

async function login() {
  await new Promise((r) => setTimeout(r, 2000));
  return "Login successful";
}

export default function ActionStateHook() {
  const [state, action, pending] = useActionState(login, null);

  return (
    <form action={action}>
      <button disabled={pending}>{pending ? "Loading..." : "Login"}</button>
      <p>{state}</p>
    </form>
  );
}
