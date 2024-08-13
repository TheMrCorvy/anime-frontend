"use client";

import React, { ChangeEvent, FC, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import SearchTwoLines from "../icons/SearchTwoLines";
import { WebRoutes } from "@/utils/routes";

const SearchInput: FC = () => {
	const [query, setQuery] = useState("");
	const router = useRouter();

	const search = async () => {
		router.push(WebRoutes.search + `?query=${encodeURIComponent(query)}`);
	};

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<Input
			data-testid="search-input"
			variant="bordered"
			color="primary"
			placeholder="Buscar anime"
			onChange={handleSearch}
			value={query}
			endContent={
				<Button
					data-testid="search-submit-btn"
					color="primary"
					variant="light"
					isIconOnly
					size="sm"
					onClick={search}
				>
					<SearchTwoLines size={16} color="currentColor" />
				</Button>
			}
			type="text"
			className="max-w-xs"
		/>
	);
};

export default SearchInput;
