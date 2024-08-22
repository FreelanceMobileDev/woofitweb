export function updateQueryString(queryString, updatedKey, updatedValue) {
    const queryParams = new URLSearchParams(queryString);
    queryParams.set(updatedKey, updatedValue);
    return `&${queryParams.toString()}`;
}
