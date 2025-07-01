import Link from "next/link";

export default function Blog({params}) {
  
  console.log(params.id);
    return (
       <>
        <h2>Blog {params?.id}</h2>
       </>
    )
}

