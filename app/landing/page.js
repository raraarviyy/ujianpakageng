import Link from "next/link";

export default function Product() {
   return (
    <div> 
       <div className="text-center flex justify-center items-center bg-pink-300 h-20">
         halaman landing
       </div>

        <div className="mt-10 text-center flex justify-center items-center text-align-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. berlutut kepada princess kucing oren kucing garong saskia
            </div>

        <Link href="/product" className="mt-10 ml-130 w-30 h-10 bg-pink-400 text-white rounded-lg border-2 flex items-center justify-center">Product</Link>
    </div>
   )
}