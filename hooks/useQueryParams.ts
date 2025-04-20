import { useSearchParams, useRouter, usePathname } from 'next/navigation';

interface UseQueryParamsOptions {
  isDirectPush?: boolean;
  isReplace?: boolean;
  isSetPageFirst?: boolean;
}

const useQueryParams = ({
  isDirectPush = false,
  isReplace = false,
  isSetPageFirst = false,
}: UseQueryParamsOptions = {}) => {
  const router = useRouter();
  const getPathname = usePathname();
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams.toString());

  const updateQueryAndNavigate = () => {
    if (isSetPageFirst) {
      query.set('page', '1');
    }
    if (isDirectPush) {
      const queryString = `?${query.toString()}`;
      if (isReplace) {
        router.replace(queryString);
      } else {
        router.push(queryString);
      }
    }
    return query.toString();
  };

  const get = (key: string) => {
    return query.get(key);
  };

  const getAll = query.toString();

  const set = (key: string, value: string) => {
    query.set(key, value);
    return updateQueryAndNavigate();
  };

  const setAll = (params: Record<string, string | string[]>) => {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== '' && !(Array.isArray(value) && value.length === 0)) {
        query.set(key, value.toString());
      }
    });
    return updateQueryAndNavigate();
  };

  const remove = (key: string) => {
    query.delete(key);
    return updateQueryAndNavigate();
  };

  const push = (url: string) => {
    router.push(url);
  };

  const queryStringToObject = (queryString: string) => {
    const result: Record<string, string> = {};
    const pairs = queryString.slice(0).split('&');

    pairs.forEach(pair => {
      const [key, value] = pair.split('=');
      result[key] = value;
    });

    return result;
  };

  return {
    get,
    getAll,
    set,
    setAll,
    remove,
    push,
    getPathname,
    queryStringToObject,
  };
};

export default useQueryParams;
