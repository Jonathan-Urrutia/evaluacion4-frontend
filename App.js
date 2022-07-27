import React from 'react';
import Formulario from './Formulario';

function App() {
  return (
    <div className="App">
      <h1 className='text-center mt-3'>Zapatos Gepetto</h1>

      <div className="row g-3">
               <div className="col-md-12 col-lg-6 mx-auto">
                  <img alt="Zapateria" src="https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/02/04/5fa8fb32d99eb.jpeg " width="500" height="500" className="img-thumbnail mt-3 float-end" />
               </div>
               <div className="col-md-12 col-lg-6 ">
                  <img alt="Zapatos" src= "https://www.drugstore.cl/wp-content/uploads/2020/05/Zapateria-Lastarria-1243x736.jpg" width="415" height="415" className="img-thumbnail mt-3 mx-auto" />
               </div>
      </div>
      
      <Formulario/>
      
    </div>
  );
}

export default App;
