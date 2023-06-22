import { dA } from '@fullcalendar/core/internal-common';

export const getData = (config) => {
  const { uriRoot, endpoint, setData } = config;

  setData([]);
  let headers = {
    'content-type': 'application/JSON',
  };
  let body = {};

  let request = new Request(`${uriRoot}/${endpoint}`, {
    method: 'GET',
    headers,
    body,
  });
  const dataSet = fetch(request)
    .then((res) => res.json())
    .then((data) => setData(data));
};
