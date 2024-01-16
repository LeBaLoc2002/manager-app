import { Input } from 'antd';
import './CardSearch.scss'
const { Search } = Input;

function CardSearch() {

  const onSearch = () => {
    return null;
  };
  return (
    <div className='search-input text-left max-w-80'>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch} />
    </div>
  );
}
export default CardSearch ;