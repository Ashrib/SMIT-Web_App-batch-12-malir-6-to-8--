export default async function QuoteCard() {




    let quotes;
        try {
            quotes = await fetch('https://dummyjson.com/quotes',{
                cache: 'no-cache',
                next: { revalidate: 1 } 
            })
            quotes = await quotes.json()
            console.log(quotes)
               
        } catch (error) {
            console.log(error)
    
        }
  return (
<>
    {quotes?.quotes?.map((quote) => (
    <div className="border p-4 rounded" key={quote.id}>
      <p className="text-lg italic">"{quote.quote}"</p>
      <p className="text-right">- {quote.author}</p>
    </div>
    ))}
</>
  );
}
