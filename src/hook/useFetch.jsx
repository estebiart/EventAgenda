import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(api_url, config) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(api_url, config)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      })
      .then(() => {
        setLoading(false);
      });
  }, [api_url, config]);

  return [data, loading, error];
}

/**
 * The function useWordpressApi is a custom hook that uses the useFetch hook to fetch data from a
 * WordPress API.
 * @param {string} api_url
 * @param {*} config  Optional
 * @returns the result of calling the `useFetch` function with the `api_url` and `config` parameters.
 */
function useWordpressApi(api_url, config) {
  return useFetch(api_url, config);
}

/**
 * The function `useEntity` is a custom hook that uses the WordPress API to fetch data for a given
 * entity.
 * @param {string} entity entity name such as posts, pages, media, categories, tags, CPT name, etc.
 * @param {*} config  Optional
 * @returns the result of calling the `useFetch` function with the `api_url` and `config`
 * parameters.
 */
function useEntity(entity, config) {
  const api_url = `${import.meta.env.VITE_BASE_API}${entity}`;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(api_url, config)
      .then(response => {
        setData({
          results: response.data,
          totalPages: response.headers.get('X-WP-TotalPages'),
          total: response.headers.get('X-WP-Total')
        });
      })
      .catch(error => {
        setError(error);
      })
      .then(() => {
        setLoading(false);
      });
  }, [api_url, config]);

  return [data, loading, error];
}

/**
 * The function `useEntityPerPage` is a custom hook that fetches data from a WordPress API based on the
 * provided entity and page number.
 * @param {string} entity
 * @param {number} page
 * @param {*} config  Optional
 * @returns the result of calling the `useFetch` function with the `api_url` and `config`
 * parameters.
 */
function useEntityPerPage(entity, page, config) {
  const api_url = `${import.meta.env.VITE_BASE_API}${entity}?page=${page}`;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(api_url, config)
      .then(response => {
        setData({
          results: response.data,
          totalPages: response.headers.get('X-WP-TotalPages'),
          total: response.headers.get('X-WP-Total')
        });
      })
      .catch(error => {
        setError(error);
      })
      .then(() => {
        setLoading(false);
      });
  }, [api_url, config]);

  return [data, loading, error];
}

/**
 * The function `useDetailByEntity` is a custom React hook that fetches data for a specific entity (posts, pages, comments, media, tags, categories, etc) and
 * ID, and returns the data, loading state, and error state.
 * @param {string} entity Entity name such as posts, pages, tags, comments etc.
 * @param {number} id Entity id.
 * @param {any} config Optional
 * @returns The function `useDetailByEntity` returns an array with three elements: `data`, `loading`,
 * and `error`.
 * @return {any} data results.
 * @return {boolean} loading fetch status.
 * @return {any} error error object.

 */
function useDetailByEntity(entity, id, config) {
  const api_url = `${import.meta.env.VITE_BASE_API}${entity}/${id}`;
  return useFetch(api_url, config);
}
/**
 * `useEntityDetailBySlug` is a custom React hook that makes a request to the API for a specific entity's data based on its slug.
 * It returns the results of the request, the loading state, and any error.
 *
 * @param {string} entity - The name of the entity for which data is being requested.
 * @param {string} slug - The slug of the specific entity instance for which data is being requested.
 * @param {object} config - Configuration object (optional).
 * @returns The `useEntityDetailBySlug` function returns an array with three elements: `data`, `loading`, and `error`.
 * @return {object} data - The results of the request.
 * @return {boolean} loading - The state of the request (true if it's loading, false if it has finished).
 * @return {object} error - Error object, if an error occurred during the request.
 */
function useEntityDetailBySlug(entity, slug, config) {
  const api_url = `${import.meta.env.VITE_BASE_API}${entity}?slug=${slug}`;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setError(null);
    axios
      .get(api_url, config)
      .then(response => {
        if (response.data.length !== 0) {
          return setData(response.data[0]);
        } else {
          throw new Error("not found");
        }
      })
      .catch(error => {
        setError(error);
      })
      .then(() => {
        setLoading(false);
      });
  }, [api_url, config]);

  return [data, loading, error];
}

/**
 * The `useGlobalSearch` function is a custom React hook that performs a global search in all Wordpress site content.
 * @param {string} search search text or a term.
 * @param {any} config Config object (Optional)
 * @returns The function `useGlobalSearch` returns an array with three elements: `data`, `loading`, and
 * `error`.
 * @return {any} data results.
 * @return {boolean} loading fetch status.
 * @return {any} error error object.
 */
function useGlobalSearch(search, config) {
  const api_url = `${
    import.meta.env.VITE_BASE_API
  }search/?search=${search}&_embed=self`;
  return useFetch(api_url, config);
}

/**
 * The `useCPTSearch` function is a custom React hook that performs a search using a specified search
 * term in custom post type (CPT), and returns the search results, loading state, and any errors.
 *
 * @param {string} search search text or term.
 * @param {string} cpt Custom post Type name.
 * @param {any} config Config object (Optional).
 * @returns The function `useCPTSearch` returns an array with three elements: `data`, `loading`, and
 * `error`.
 * @return {any} data results.
 * @return {boolean} loading fetch status.
 * @return {any} error error object.
 *
 */
function useCPTSearch(search, cpt, config) {
  const api_url = `${
    import.meta.env.VITE_BASE_API
  }search?subtype=${cpt}&search=${search}&_embed=self`;
  return useFetch(api_url, config);
}

/**
 * The `useACF` function is a custom React hook that makes a request to the ACF (Advanced Custom Fields) API
 * to fetch data for a specific entity and returns the results of the request, the loading state, and any errors.
 *
 * @param {string} entity Name of the entity for which data is being requested.
 * @param {any} config Configuration object (optional).
 * @returns The `useACF` function returns an array with three elements: `data`, `loading`, and `error`.
 * @return {any} data Results of the request.
 * @return {boolean} loading State of the request (true if it's loading, false if it's completed).
 * @return {any} error Error object, if an error occurred during the request.
 */
function useACF(entity, config) {
  const api_url = `${import.meta.env.VITE_BASE_API_ACF}${entity}`;
  return useFetch(api_url, config);
}

export {
  useWordpressApi,
  useEntity,
  useDetailByEntity,
  useGlobalSearch,
  useCPTSearch,
  useEntityPerPage,
  useEntityDetailBySlug,
  useACF
};
