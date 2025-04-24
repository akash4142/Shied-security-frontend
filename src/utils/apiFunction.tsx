// services/quoteService.ts
import { api } from "@/utils/api";

export interface QuoteFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  city: string;
  reason: string;
  frequency: string;
  heardFrom: string;
  message: string;
}

export const submitQuoteRequest = async (formData: QuoteFormData) => {
  const response = await api.post("/quotes", formData);
  return response.data;
};
