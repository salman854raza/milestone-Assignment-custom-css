import Link from "next/link";

export default function Home(){
    return(
        <div>
            <h1 className="text-blue-500 text-center">NextJs with Salman Raza</h1>
        <Link className="mr-5 hover:text-yellow-900" href={"http://localhost:3000"}> Home </Link>
         <Link className="mr-5 hover:text-blue-900" href={"http://localhost:3000/aboutus"}> About Us </Link>
         <Link className="mr-5 hover:text-green-900" href={"http://localhost:3000/contactus"}> Contact Us </Link>
         <Link className="mr-5 hover:text-orange-900" href={"http://localhost:3000/privacypolicy"}> Privacypolicy </Link>
        
        </div>
        
    )
       
}
   