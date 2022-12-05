import React from "react";

const Form = () => {
    return (
        <div>
            <div class="">
                <form class="bg-primary shadow-md rounded px-8 pt-6 pb-8 mb-4 border-2">
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="">
                            Nama Lengkap
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Enter your name here" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="">
                            Jenis Kelamin
                        </label>
                        <div class="inline-block relative w-64">
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black">
                                <option disabled selected>Pilih Jenis kelamin</option>
                                <option>Laki laki</option>
                                <option>Perempuan</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="">
                            Email
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="" type="email" placeholder="example@gmail.com" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="">
                            Nomor WhatsApp
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Enter your number here" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="">
                            Institusi
                        </label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="" type="text" placeholder="Enter your institution here" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-white text-sm font-bold mb-2" for="">
                            Division
                        </label>
                        <div class="inline-block relative w-64">
                            <select class="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-black">
                                <option disabled selected>Pilih divisi</option>
                                <option>Divisi 1</option>
                                <option>Divisi 2</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between">
                    <button class="bg-gradient-to-r from-[#5334B1] to-[#401881] md:px-5 md:py-3 md:flex hidden text-white rounded-lg w-full" type="button">
                        Daftar Sekarang
                    </button>
                    
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Form;