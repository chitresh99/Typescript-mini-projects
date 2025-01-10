import './App.css';
import { Form } from './components/Form';

function App() {
  const handleFormSubmit = (data: { name: string; age: number }) => {
    console.log('Form submitted:', data);
  };

  return (
    <>
      <div className="bg-yellow-100 min-h-screen">
        <Form onSubmit={handleFormSubmit} />
      </div>
    </>
  );
}

export default App;
