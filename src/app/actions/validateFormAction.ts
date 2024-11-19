"use server";

export async function submitForm(state: State, data: FormData): Promise<State> {
  try {
    await new Promise((resolve, reject) => setTimeout(() => resolve(2000)));
    //validate your form here and in case of an error just return an object with status failure and the errors object
    console.log("data: ", data);
    return { status: "success" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error:", error);
      return { status: "failure", errors: { global: error.message } };
    } else {
      console.error("An unknown error occurred.");
      return {
        status: "failure",
        errors: { global: "An unknown error occurred." },
      };
    }
  }
}

export type State = {
  status: "success" | "failure";
  errors?: Record<string, string>;
} | null;
