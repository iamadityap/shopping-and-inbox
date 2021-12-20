async function fetchData(url, headers = null) {
  const config = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      ...headers,
    },
  };

  const response = await window.fetch(url, { config });
  return response;
}

export { fetchData };
