export interface Page {
	params: { slug: string; directoryId: string };
	searchParams: { [key: string]: string | string[] | undefined };
}
