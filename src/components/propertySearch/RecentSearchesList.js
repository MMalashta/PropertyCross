import React from 'react'

const RecentSearchesList = ({ searches }) => <div>
  <span>Recent searches:</span>
  {
    searches.map((search, idx) => {
      return <div>{`${search.term} (${search.total})`}</div>
    })
  }
</div>

export default RecentSearchesList
