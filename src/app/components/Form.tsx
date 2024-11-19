"use client";

import { State, submitForm } from "../actions/validateFormAction";
import { useActionState } from "react";
import Input from "./Input";

export function Form() {
  const [state, formAction, pending] = useActionState<State, FormData>(
    submitForm,
    null
  );

  const RenderStateFeedback = () => {
    if (!state) return null;

    if (state.status === "success") {
      return (
        <div className="p-2 rounded bg-green-100 text-green-700">
          Form submitted successfully!
        </div>
      );
    }

    if (state.status === "failure") {
      return (
        <div className="p-2 rounded bg-red-100 text-red-700">
          <p className="font-semibold">Submission failed:</p>
          {state.errors?.global && (
            <p className="text-sm">{state.errors.global}</p>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 items-start p-4 border rounded shadow-md bg-white max-w-md"
    >
      <Input
        label="First Name"
        type="text"
        name="firstName"
        pattern={String(/^[a-zA-Z .,'-]{3,100}$/)}
        errorMessage="First name is required, must be 3-100 characters, and may contain letters, spaces, and . , ' -"
        required
        className="w-full"
      />
      <Input
        label="Last Name"
        type="text"
        name="lastName"
        pattern={String(/^[a-zA-Z .,'-]{3,100}$/)}
        errorMessage="Last name is required, must be 3-100 characters, and may contain letters, spaces, and . , ' -"
        required
        className="w-full"
      />

      <RenderStateFeedback />

      {pending && <div className="text-gray-500">Please wait...</div>}

      <button
        disabled={pending}
        type="submit"
        className={`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 ${
          pending ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Submit
      </button>
    </form>
  );
}
