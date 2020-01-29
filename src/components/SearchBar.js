import React, {Component} from 'react';



const SearchBar = (props) => {
 
    function handleTypeText(e){
        props.searchedby(e.target.value)
    }

     



    return (
        <input type="text" placeholder="Type title to search"onChange={handleTypeText}></input>
    );



}






export default SearchBar;
