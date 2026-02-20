import { NextRequest, NextResponse } from "next/server";
import {
  formValidators,
  FormType,
  persistFormSubmission,
} from "@/lib/forms";

type RouteContext = {
  params: Promise<{
    formType: string;
  }>;
};

function isFormType(value: string): value is FormType {
  return value === "contact" || value === "free-consultation" || value === "booking";
}

export async function POST(request: NextRequest, context: RouteContext) {
  const { formType } = await context.params;

  if (!isFormType(formType)) {
    return NextResponse.json({ ok: false, error: "Form không tồn tại." }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Payload JSON không hợp lệ." },
      { status: 400 }
    );
  }

  const validation = formValidators[formType](body);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: validation.error, fieldErrors: validation.fieldErrors ?? null },
      { status: 400 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "";
  const userAgent = request.headers.get("user-agent") ?? "";
  const referrer = request.headers.get("referer") ?? "";

  const persisted = await persistFormSubmission({
    formType,
    data: validation.data,
    ip,
    userAgent,
    referrer,
  });

  if (!persisted.ok) {
    return NextResponse.json(
      { ok: false, error: persisted.error },
      { status: 502 }
    );
  }

  return NextResponse.json(
    { ok: true, submissionId: persisted.submissionId },
    { status: 201 }
  );
}
