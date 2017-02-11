import fetch from 'isomorphic-fetch'

const general = {
  country: "uk",
  pretty: "1",
  encoding: "json",
  listing_type: "buy"
}

export const search = (term, page = 1) => {
  let url = new URL("http://api.nestoria.co.uk/api")
  const params = Object.assign(general, {
    action: "search_listings",
    place_name: term,
    page
  })

  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

  return fetch(url)
   .then((r) => r.json())
}
