import type { Actions } from "./$types";

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get("email");
    const message = data.get("message");

    console.log("Form submission received:");
    console.log("Email:", email);
    console.log("Message:", message);

    return { success: true };
  },
} satisfies Actions;
