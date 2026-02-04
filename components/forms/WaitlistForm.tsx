"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, Sparkles } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  privacyAgreed: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function WaitlistForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    privacyAgreed: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "お名前を入力してください";
    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "正しいメールアドレスを入力してください";
    }
    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = "個人情報の取り扱いに同意してください";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrors({ submit: data.message || "送信に失敗しました" });
      }
    } catch {
      setErrors({ submit: "送信に失敗しました。もう一度お試しください。" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 rounded-full bg-brand-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-brand-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">
          お申し込みありがとうございます
        </h3>
        <p className="text-slate-600 leading-relaxed">
          ご登録いただいたメールアドレスに
          <br />
          説明会の詳細をお送りします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="flex items-center gap-2 text-brand-600 mb-2">
        <Sparkles className="w-4 h-4" />
        <span className="text-sm font-semibold">無料・所要時間30秒</span>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            お名前 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-slate-900 outline-none transition-all ${
              errors.name
                ? "border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                : "border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            }`}
            placeholder="山田 太郎"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1.5">{errors.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full rounded-xl border px-4 py-3 text-slate-900 outline-none transition-all ${
              errors.email
                ? "border-red-300 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                : "border-slate-300 focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            会社名
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            placeholder="株式会社〇〇"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">
            役職・部署
          </label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
            placeholder="マーケティング部"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          参加動機・ご質問（任意）
        </label>
        <textarea
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none resize-none transition-all"
          placeholder="興味を持った理由やご質問があればお聞かせください"
        />
      </div>

      <div className="flex items-start gap-2.5">
        <input
          type="checkbox"
          name="privacyAgreed"
          checked={formData.privacyAgreed}
          onChange={handleChange}
          className="mt-1 w-4 h-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500"
        />
        <label className="text-sm text-slate-600">
          個人情報の取り扱いに同意します{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.privacyAgreed && (
        <p className="text-red-500 text-xs">{errors.privacyAgreed}</p>
      )}

      {errors.submit && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 text-center">
          {errors.submit}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 disabled:from-brand-400 disabled:to-purple-400 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 hover:-translate-y-0.5"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            送信中...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            無料説明会に申し込む
          </>
        )}
      </button>
    </form>
  );
}
