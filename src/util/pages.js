const pageLimitApi = 500;
export const getPages = (limit, totalResults) =>
  totalResults / limit > pageLimitApi
    ? pageLimitApi
    : Math.ceil(totalResults / limit);
