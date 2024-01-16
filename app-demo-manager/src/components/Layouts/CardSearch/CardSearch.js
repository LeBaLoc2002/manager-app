import { Input } from 'antd';
import './CardSearch.scss'
const { Search } = Input;

function CardSearch() {

  return (
    <div className='search-input text-left max-w-80'>
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        onSearch={null}
        size="large"/>
    </div>
  );
}
export default CardSearch ;