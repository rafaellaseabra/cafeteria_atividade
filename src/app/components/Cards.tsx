
import { cafeteria } from '../data/Produtos';
import'./Cards.css';
export default function Cards(){
    return(
 <section className='cards-section'>
    <h1 className='cards-title'>Sabores Exclusivos</h1>
   <main className='cards-container'>
    {cafeteria.map((product,index)=>(
<div key={index} className='card'>

    <div className='card-image-wrapper'>
        <img className="card-image" src={product.image}alt={product.title} />
         </div>
<div className='card-content'>
    <div>
         <h3 className='card-title'>{product.title}</h3>
         <p className='card-description'>{product.description}</p>
</div>
<button className='card-button'>{product.price}</button>
</div>
</div>
    ))}

   </main>
 </section>
    );
}
