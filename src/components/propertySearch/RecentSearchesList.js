import React from 'react'

const RecentSearchesList = ({ searches, onSearch }) => <div className="recent-searches">
  <div className="recent-title">Recent searches:</div>
  <div className="recent-searches-list">
    {
      searches.map((search, idx) => {
        return <div onClick={() => onSearch(search.term, idx)}>{`${search.term} (${search.total})`}</div>
      })
    }
  </div>
</div>

export default RecentSearchesList
