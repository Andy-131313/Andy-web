"use server";

export type ActionState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export async function bookConsultation(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const packageName = (formData.get("package") as string | null)?.trim();
  const preferredDate = (formData.get("preferredDate") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();

  if (!name || !email || !packageName || !preferredDate) {
    return { status: "error", message: "Prosím vyplňte všechna povinná pole." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Zadejte platnou e-mailovou adresu." };
  }

  // Log payload server-side (transport will be added later)
  console.log("[bookConsultation]", { name, email, packageName, preferredDate, message });

  return {
    status: "success",
    message: `Děkuji, ${name}! Ozvu se vám na ${email} ohledně termínu.`,
  };
}

export async function askQuestion(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  const email = (formData.get("email") as string | null)?.trim();
  const question = (formData.get("question") as string | null)?.trim();

  if (!email || !question) {
    return { status: "error", message: "Prosím vyplňte e-mail i dotaz." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "Zadejte platnou e-mailovou adresu." };
  }

  console.log("[askQuestion]", { email, question });

  return {
    status: "success",
    message: "Dotaz doručen! Odpovím vám co nejdříve.",
  };
}
