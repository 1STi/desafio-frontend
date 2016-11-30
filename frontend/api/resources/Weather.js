export default function Weather(Api) {
  return {
    query: (payload) => Api.get(payload)
  };
};
