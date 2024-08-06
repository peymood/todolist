import { Button } from 'antd'
import React from 'react'
import "../Style/DeleteAll.scss"

interface SearchProps{
    FormProps : {
        task :string[] ,
        value : string
}   
    setTask: React.Dispatch<React.SetStateAction<string[]>>; 
}

const DeleteAll : React.FC<SearchProps> = ({FormProps, setTask }) => {

    const { task } = FormProps;  

    function handleDeleteAll(){
        if(task && task.length > 0 ){
            setTask([])
        }
    }

  return (
    <div className="delete-all">
        <Button onClick={handleDeleteAll} danger > Delete All </Button>
    </div>
  )
}

export default DeleteAll