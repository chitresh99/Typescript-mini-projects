import './App.css'
import { dummydata } from './data/todo'
import { Todoitem } from './components/Todoitem'

function App() {
  function setTodoCompleted(id: number, completed : boolean){
          alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`);
  }

  return (
    <>
      <main className='py-10 h-screen space-y-5'>
      <h1 className='font-bold text-3xl text-center'>Your todo</h1>
      <div className='max-w-lg mx-auto bg-slate-100 rounded-md p-5'>
        <div className='space-y-2'>
          {/* {dummydata.map(todo => (
            <p key={todo.id} className="text-lg">
              {todo.title}
            </p>
          ))} */}

        {dummydata.map((todo)=>(
          <Todoitem todo={todo}
          key ={todo.id}
          oncompletedchange={setTodoCompleted}
          />
        ))}
        </div>
      </div>
      </main>
    </>
  )
}

export default App
