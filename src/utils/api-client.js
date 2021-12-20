async function fetchData(url, headers = null) {
  const config = {
    method: "GET",
    headers: {
      "content-type": "application/json",
      ...headers,
    },
  };

  const apiUrl = `http://localhost:9000/${url}`;
  const response = await window.fetch(apiUrl, { config });
  return response;
}

export { fetchData };
