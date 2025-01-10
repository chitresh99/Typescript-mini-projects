import React from 'react'

interface FormProps {
  onSubmit:(data:FormData) => void;
}

interface FormData {
  name : string,
  age : number;
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = React.useState<FormData>({ name: '', age: 0 });
    
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({ ...formData,
        [name]: name === 'age' ? parseInt(value, 10) || 0 : value, 
      });
    };
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(formData);
    };
  return (
    <div className=''>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
       <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
       </label>
       <br/>
       <label>
        Age:
        <input type="number" name="age" value={formData.age} onChange={handleInputChange}/>
       </label>
       <br/>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

