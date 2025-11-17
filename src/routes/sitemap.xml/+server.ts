import type { RequestHandler } from './$types';
import { PUBLIC_BASE_URL } from '$env/static/public';

export const GET: RequestHandler = async () => {
    const baseUrl = PUBLIC_BASE_URL;

    const sitemap = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'text/plain',
            'Cache-Control': 'max-age=86400'
        }
    });
};
