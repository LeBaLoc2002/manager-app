import { Input } from 'antd';
import './CardSearch.scss'
const { Search } = Input;

function CardSearch({ onSearch }) {
  const handleSearch = (value) => {
    onSearch(value);
  };

  return (
    <div className='search-input text-left max-w-80'>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        onSearch={handleSearch}
        size="large"
      />
    </div>
  );
}

export default CardSearch;