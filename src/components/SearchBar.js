import React from 'react';
import { Searchbar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP } from 'react-native-responsive-screen';


const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search Wallets"
      style={{width:wp('90%'),marginLeft:wp('5%')}}
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;