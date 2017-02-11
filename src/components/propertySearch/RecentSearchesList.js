import React from 'react'

const RecentSearchesList = ({ searches, onSearch }) => <div>
  <span>Recent searches:</span>
  {
    searches.map((search, idx) => {
      return <div onClick={() => onSearch(search.term, idx)}>{`${search.term} (${search.total})`}</div>
    })
  }
</div>

export default RecentSearchesList
