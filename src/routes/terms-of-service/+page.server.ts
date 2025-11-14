import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { ALL_TERMS_OF_SERVICE_PAGE } from '$lib/page-data/utils';

export const load: PageServerLoad = async () => {
	if (ALL_TERMS_OF_SERVICE_PAGE) {
		return { TERMS_OF_SERVICE_PAGE: ALL_TERMS_OF_SERVICE_PAGE };
	}

	error(404, 'Not found');
};
