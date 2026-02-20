export async function submitForm(
  formType: "contact" | "free-consultation" | "booking",
  payload: Record<string, string>
): Promise<{ submissionId: string }> {
  const response = await fetch(`/api/forms/${formType}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await response.json().catch(() => null)) as
    | { ok?: boolean; error?: string; submissionId?: string }
    | null;

  if (!response.ok || !data?.ok || !data.submissionId) {
    throw new Error(data?.error || "Không thể gửi biểu mẫu. Vui lòng thử lại.");
  }

  return { submissionId: data.submissionId };
}
