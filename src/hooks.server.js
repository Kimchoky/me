/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {

    const cookieTheme = event.cookies.get('theme');
    const isDark = cookieTheme  === 'dark';
    const themeClassString = isDark ? 'dark' : '';

    console.log('cookieTheme: ' + cookieTheme);


	const response = await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html.replace('%siteTheme%', themeClassString);
        }
    });
	return response;


}