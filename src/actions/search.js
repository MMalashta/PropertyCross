import { SEARCH } from '../constants'

export const search = (term) => ({
    type: SEARCH,
    term
})
