import Link from "next/link";

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
      <Link href={`/quotes/${quote.id}`} key={quote.id} className="border p-4 rounded block mb-4">
        <p className="text-lg italic">"{quote.quote}"</p>
        <p className="text-right">- {quote.author}</p>
      </Link>
    ))}
</>
  );
}
