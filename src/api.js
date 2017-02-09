import fetch from 'isomorphic-fetch'

export const search = (term) =>
 fetch('http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds')
  .then((r) => r.json())
