// get, post, patch, delete

const customFetch = async (url, options) => {
  try {
    const req = await fetch(url, options);
    const json = await req.json();
    return json;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const httpGet = (url) => {
  return customFetch(url);
};

export const httpPost = async (url, options) => {
  const newOptions = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    ...options,
  };
  return customFetch(url, newOptions);
};

export const httpPatch = async (url, options) => {
  return customFetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'PATCH',
    ...options,
  });
};

export const httpDelete = async (url, options) => {
  return customFetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
    ...options,
  });
};
