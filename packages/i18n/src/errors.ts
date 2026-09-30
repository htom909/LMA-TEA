export const ERRORS = {
  UNAUTHENTICATED: {
    status: 401,
    code: "UNAUTHENTICATED",
    message: {
      ar: "يجب تسجيل الدخول للمتابعة.",
      en: "Authentication required to proceed."
    }
  },
  FORBIDDEN: {
    status: 403,
    code: "FORBIDDEN",
    message: {
      ar: "لا تملك صلاحية تنفيذ هذا الإجراء.",
      en: "You do not have permission to perform this action."
    }
  },
  NOT_FOUND: {
    status: 404,
    code: "NOT_FOUND",
    message: {
      ar: "العنصر غير موجود أو خارج نطاق صلاحياتك.",
      en: "Item not found or outside your permissions."
    }
  },
  LEAVE_BALANCE_INSUFFICIENT: {
    status: 422,
    code: "LEAVE_BALANCE_INSUFFICIENT",
    message: {
      ar: "رصيد الإجازة غير كافٍ.",
      en: "Insufficient leave balance."
    }
  },
  RATE_LIMITED: {
    status: 429,
    code: "RATE_LIMITED",
    message: {
      ar: "محاولات كثيرة. حاول بعد قليل.",
      en: "Too many requests. Try again later."
    }
  },
  INTERNAL_ERROR: {
    status: 500,
    code: "INTERNAL_ERROR",
    message: {
      ar: "حدث خطأ أثناء تنفيذ العملية، حاول مرة أخرى.",
      en: "An internal error occurred. Please try again."
    }
  }
} as const;
