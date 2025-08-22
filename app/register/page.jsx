'use client';

import z from "zod";


export default function Page() {
    let manusia = {
        nama: "Yuda", 
        NIK: "1234567890123456",
        job: ["guru", "programmer", "dokter"] 
    }

   
    let rule = z.object({
        nama: z.string().min(3),
        NIK: z.string().min(16),
       job: z.array(z.string()).min(1).transform(arr => arr[1])
    });

    
    let hasil = rule.safeParse(manusia);

    if (hasil.success) {
        console.log("Data valid:", hasil.data);
    } else {
        console.log(" Data tidak valid:");
        console.log(hasil.error.format());
    }
}
