const queryString = {
  parse: (queryStringParams: string) => {
    const params = new URLSearchParams(queryStringParams);
    const queryParams: Record<string, unknown> = {};

    for (const [key, value] of params) {
      queryParams[key] = value;
    }

    return queryParams;
  },

  stringify: (params: Record<string, unknown>) => {
    const queryStringParams = new URLSearchParams();

    Object.keys(params).forEach((key) => {
      if (typeof params[key] !== 'undefined' && params[key] !== null) {
        queryStringParams.set(key, params[key] as string);
      } else {
        queryStringParams.delete(key);
      }
    });

    return queryStringParams.toString();
  }
};

export default queryString;
