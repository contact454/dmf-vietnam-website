import "server-only";

import { appendFile, mkdir } from "fs/promises";
import { dirname } from "path";

export type FormType = "contact" | "free-consultation" | "booking";

type ValidationSuccess<T> = {
  ok: true;
  data: T;
};

type ValidationFailure = {
  ok: false;
  error: string;
  fieldErrors?: Record<string, string>;
};

type ValidationResult<T> = ValidationSuccess<T> | ValidationFailure;

type FormPayload = {
  [key: string]: unknown;
};

export type ContactSubmission = {
  name: string;
  phone: string;
  email: string;
  inquiryType: string;
  message: string;
};

export type FreeConsultationSubmission = {
  name: string;
  phone: string;
  email: string;
  age: string;
  education: string;
  consultationType: string;
  germanLevel: string;
  timeline: string;
  message: string;
};

export type BookingSubmission = {
  mode: string;
  date: string;
  time: string;
  consultant: string;
  name: string;
  phone: string;
  email: string;
  topic: string;
  notes: string;
};

const phonePattern = /^[0-9+\-().\s]{8,25}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isoDatePattern = /^\d{4}-\d{2}-\d{2}$/;
const hourPattern = /^\d{2}:\d{2}$/;

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function getPayload(input: unknown): FormPayload | null {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return null;
  }
  return input as FormPayload;
}

function validateContact(input: unknown): ValidationResult<ContactSubmission> {
  const payload = getPayload(input);
  if (!payload) return { ok: false, error: "Dữ liệu không hợp lệ." };

  const name = getString(payload.name);
  const phone = getString(payload.phone);
  const email = getString(payload.email);
  const inquiryType = getString(payload.inquiryType);
  const message = getString(payload.message);

  const fieldErrors: Record<string, string> = {};

  if (name.length < 2) fieldErrors.name = "Vui lòng nhập họ tên hợp lệ.";
  if (!phonePattern.test(phone)) {
    fieldErrors.phone = "Số điện thoại không hợp lệ.";
  }
  if (email && !emailPattern.test(email)) fieldErrors.email = "Email không hợp lệ.";
  if (!inquiryType) fieldErrors.inquiryType = "Vui lòng chọn loại tư vấn.";
  if (message.length < 10) fieldErrors.message = "Nội dung cần ít nhất 10 ký tự.";

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "Vui lòng kiểm tra lại thông tin.", fieldErrors };
  }

  return {
    ok: true,
    data: { name, phone, email, inquiryType, message },
  };
}

function validateFreeConsultation(
  input: unknown
): ValidationResult<FreeConsultationSubmission> {
  const payload = getPayload(input);
  if (!payload) return { ok: false, error: "Dữ liệu không hợp lệ." };

  const data: FreeConsultationSubmission = {
    name: getString(payload.name),
    phone: getString(payload.phone),
    email: getString(payload.email),
    age: getString(payload.age),
    education: getString(payload.education),
    consultationType: getString(payload.consultationType),
    germanLevel: getString(payload.germanLevel),
    timeline: getString(payload.timeline),
    message: getString(payload.message),
  };

  const fieldErrors: Record<string, string> = {};

  if (data.name.length < 2) fieldErrors.name = "Vui lòng nhập họ tên hợp lệ.";
  if (!phonePattern.test(data.phone)) fieldErrors.phone = "Số điện thoại không hợp lệ.";
  if (data.email && !emailPattern.test(data.email)) {
    fieldErrors.email = "Email không hợp lệ.";
  }
  if (!data.consultationType) {
    fieldErrors.consultationType = "Vui lòng chọn nhu cầu tư vấn.";
  }
  if (data.age) {
    const age = Number.parseInt(data.age, 10);
    if (Number.isNaN(age) || age < 1980 || age > 2010) {
      fieldErrors.age = "Năm sinh cần nằm trong khoảng 1980-2010.";
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "Vui lòng kiểm tra lại thông tin.", fieldErrors };
  }

  return { ok: true, data };
}

function validateBooking(input: unknown): ValidationResult<BookingSubmission> {
  const payload = getPayload(input);
  if (!payload) return { ok: false, error: "Dữ liệu không hợp lệ." };

  const data: BookingSubmission = {
    mode: getString(payload.mode),
    date: getString(payload.date),
    time: getString(payload.time),
    consultant: getString(payload.consultant) || "any",
    name: getString(payload.name),
    phone: getString(payload.phone),
    email: getString(payload.email),
    topic: getString(payload.topic),
    notes: getString(payload.notes),
  };

  const fieldErrors: Record<string, string> = {};

  if (!data.mode) fieldErrors.mode = "Vui lòng chọn hình thức tư vấn.";
  if (!isoDatePattern.test(data.date)) fieldErrors.date = "Ngày hẹn không hợp lệ.";
  if (!hourPattern.test(data.time)) fieldErrors.time = "Giờ hẹn không hợp lệ.";
  if (data.name.length < 2) fieldErrors.name = "Vui lòng nhập họ tên hợp lệ.";
  if (!phonePattern.test(data.phone)) fieldErrors.phone = "Số điện thoại không hợp lệ.";
  if (data.email && !emailPattern.test(data.email)) {
    fieldErrors.email = "Email không hợp lệ.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "Vui lòng kiểm tra lại thông tin.", fieldErrors };
  }

  return { ok: true, data };
}

type ValidatorMap = {
  contact: typeof validateContact;
  "free-consultation": typeof validateFreeConsultation;
  booking: typeof validateBooking;
};

export const formValidators: ValidatorMap = {
  contact: validateContact,
  "free-consultation": validateFreeConsultation,
  booking: validateBooking,
};

type PersistFormInput = {
  formType: FormType;
  data: ContactSubmission | FreeConsultationSubmission | BookingSubmission;
  ip: string;
  userAgent: string;
  referrer: string;
};

export type PersistFormResult = {
  ok: true;
  submissionId: string;
} | {
  ok: false;
  error: string;
};

export async function persistFormSubmission(
  input: PersistFormInput
): Promise<PersistFormResult> {
  const submittedAt = new Date().toISOString();
  const submissionId = crypto.randomUUID();
  const payload = {
    submissionId,
    submittedAt,
    ...input,
  };

  const storagePath =
    process.env.DMF_FORMS_STORAGE_PATH || "/tmp/dmf-form-submissions.jsonl";

  try {
    await mkdir(dirname(storagePath), { recursive: true });
    await appendFile(storagePath, `${JSON.stringify(payload)}\n`, "utf8");
  } catch (error) {
    return {
      ok: false,
      error: `Không thể lưu form nội bộ: ${
        error instanceof Error ? error.message : "Lỗi không xác định"
      }`,
    };
  }

  const webhookUrl =
    process.env.DMF_FORMS_WEBHOOK_URL || process.env.CRM_WEBHOOK_URL;

  if (!webhookUrl) {
    return { ok: true, submissionId };
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        ok: false,
        error: `CRM webhook trả về mã ${response.status}.`,
      };
    }
  } catch (error) {
    return {
      ok: false,
      error: `Không gửi được webhook CRM: ${
        error instanceof Error ? error.message : "Lỗi không xác định"
      }`,
    };
  }

  return { ok: true, submissionId };
}
