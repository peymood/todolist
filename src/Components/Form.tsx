
import "../Style/From.scss"
import { Input, Button } from 'antd';
import React from 'react';




interface FormProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  task: string[];
  setTask: React.Dispatch<React.SetStateAction<string[]>>;
}

const Form: React.FC<FormProps> = ({ value, setValue, task, setTask }) => {

  

  const handleClick = () => {
    if (!value) {
      alert('لطفا تسک را وارد کنید');
    } else {
      setTask([...task, value]);
      setValue(''); // Clear input after adding task
     
    }
  };

  return (
    <div className="form">
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

    
        <Button
          type="primary"
          style={{ marginTop : 35 }}
          onClick={handleClick}
        >
          Add Task
        </Button>
     

   
    </div>
  );
};

export default Form;
