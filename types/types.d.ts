interface PageRequest {
  page: number;
  limit: number;
}

type SearchPageRequest = PageRequest & {
  keyword: string;
};

interface BasePageItem {
  id: string;
}

interface PageResponse<T extends BasePageItem> {
  total: number;
  list: T[];
}
