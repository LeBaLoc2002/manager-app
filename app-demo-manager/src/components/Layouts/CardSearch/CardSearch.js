import { Input } from 'antd';
import './CardSearch.scss'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setSearchResults } from '../../../app/features/cocktailSlice';
import { toast } from 'react-toastify';
const { Search } = Input;

function CardSearch() {
  const dispatch = useDispatch()
  
  const handleSearch = async (value) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_SEARCH_NAME}+${value}`);
      if(response.data.drinks ) {
        dispatch(setSearchResults(response.data.drinks));
      }
      else{
        toast.error('There is no drinking water with this name', {
          autoClose: 500,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error('Error searching cocktails', error, {
        autoClose: 500,
      });
    }
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