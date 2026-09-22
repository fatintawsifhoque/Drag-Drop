import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

function App() {
  const [items1, setItems1] = useState([
    { name: "Mango", ID: 1 },
    { name: "Jackfruit", ID: 2 },
    { name: "Guava", ID: 3 }
  ]);

  const [items2, setItems2] = useState([
    { name: "Red", ID: 4 },
    { name: "Green", ID: 5 },
    { name: "Blue", ID: 6 }
  ]);

  return (
    <section className="min-h-screen w-screen flex justify-center items-center gap-14 bg-olive-300">
      
      <div className="w-52 min-h-75 p-4 border-2 border-dashed border-lime-300 rounded-xl flex flex-col items-center bg-white/50">
        <h2 className="text-xl font-bold mb-4 text-lime-700">Fruits</h2>
        
        <ReactSortable 
          list={items1} 
          setList={setItems1} 
          group="main" 
          emptyInsertThreshold={50}
          className="w-full flex flex-col items-center"
        >
          {items1.map((item) => (
            <div 
              key={item.ID} 
              className="border border-lime-200 rounded-lg text-lg bg-amber-100 hover:bg-amber-200 cursor-grab active:cursor-grabbing w-40 my-2 flex justify-center py-2 shadow-sm transition-all"
            >
              {item.name}
            </div>
          ))}
        </ReactSortable>
      </div>

      <div className="w-52 min-h-75 p-4 border-2 border-dashed border-sky-300 rounded-xl flex flex-col items-center bg-white/50">
        <h2 className="text-xl font-bold mb-4 text-sky-700">Colors</h2>
        
        <ReactSortable 
          list={items2} 
          setList={setItems2} 
          group="main" 
          emptyInsertThreshold={50}
          className="w-full flex flex-col items-center"
        >
          {items2.map((item) => (
            <div 
              key={item.ID} 
              className="border border-sky-200 rounded-lg text-lg bg-sky-100 hover:bg-sky-200 cursor-grab active:cursor-grabbing w-40 my-2 flex justify-center py-2 shadow-sm transition-all"
            >
              {item.name}
            </div>
          ))}
        </ReactSortable>
      </div>

    </section>
  );
}

export default App;