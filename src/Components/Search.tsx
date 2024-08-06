import React from 'react'
import {Input} from "antd"


interface SearchProps{
    FormProps : {
        task :string[] ,
        value : string
}
    setSearch: React.Dispatch<React.SetStateAction<string>>;   
}

const Search : React.FC<SearchProps> = ({FormProps, setSearch}) => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
      };


  return (
    <div className="search">
        <Input 
            style={{ width: 350 }} 
            type='text'
            placeholder='Search...'
            onChange={handleSearch}
        />
    </div>
  )
}

export default Search