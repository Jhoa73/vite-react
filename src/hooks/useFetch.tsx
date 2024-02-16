import axios, { AxiosRequestConfig } from "axios";
import useSWR, { SWRConfiguration } from "swr";

interface UseFetch<T, E> {
	data?: T;
	error?: E;
	isLoading: boolean;
	mutate: () => Promise<T | undefined>;
}

interface UseFetchProps {
	url: string;
	config?: AxiosRequestConfig;
	swrConfig?: SWRConfiguration;
	shouldFetch?: boolean;
}
const fetcher = ([url, config]: [string, AxiosRequestConfig]) =>
	axios.get(url, config || undefined).then((res) => res.data);

const useFetch = <T = unknown, E = unknown>({
	url,
	config,
	swrConfig,
	shouldFetch = true,
}: UseFetchProps): UseFetch<T, E> => {
	const { data, error, isLoading, mutate } = useSWR<T, E>(
		shouldFetch ? [url, config] : null,
		fetcher,
		swrConfig
	);

	return {
		data,
		error,
		isLoading,
		mutate,
	};
};

export default useFetch;
