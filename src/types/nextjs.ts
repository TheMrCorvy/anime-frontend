export interface Page {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}
