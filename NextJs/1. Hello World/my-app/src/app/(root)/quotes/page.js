import QuoteCard from "@/app/componets/QuoteCard"
import { Suspense } from 'react'

const Quotes = async () => {
    

    return (
        <>
            Quotes

            <Suspense fallback={<Loading/>}>
                <QuoteCard/>
            </Suspense>
        </>
    )
}

export default Quotes;



function Loading(){
    return (
        <div className="text-[3em] font-red">loading......</div>
    )
}