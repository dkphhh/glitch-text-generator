import { m } from '$lib/paraglide/messages.js';
export type FAQProps = {
	question: string;
	answer: string;
};

export const COMMON_FAQS: FAQProps[] = [
	{
		question: m.faq_what(),
		answer: m.faq_what_answer()
	},
	{
		question: m.faq_how(),
		answer: m.faq_how_answer()
	},
	{
		question: m.faq_safe(),
		answer: m.faq_safe_answer()
	},
	{
		question: m.faq_platforms(),
		answer: m.faq_platforms_answer()
	}
];
