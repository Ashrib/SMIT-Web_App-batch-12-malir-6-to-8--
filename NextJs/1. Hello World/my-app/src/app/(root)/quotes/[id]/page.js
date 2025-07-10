import { notFound } from "next/navigation";

export default async function Quote({ params }) {

    const { id } = params;

    let quote;
        try {
            quote = await fetch(`https://dummyjson.com/quotes/${id}`)
            quote = await quote.json()
            console.log(quote)
             
        } catch (error) {
            console.log(error)

            throw new Error("Failed to fetch quote data");

            
        }
        
        
        if(quote?.message){
            notFound();
        }




  return (
<>
   <div className="border p-4 rounded">
     <p className="text-lg italic">"{quote?.quote}"</p>
     <p className="text-right">- {quote?.author}</p>
   </div>
</>
  );
}
