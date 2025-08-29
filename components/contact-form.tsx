'use client'
import { sendQuery } from '@/api/contact';
import { useRef } from 'react';
import Swal from 'sweetalert2';
import ButtonSubmit from './widgets/button_submit';

export default function ContactFrom() {
    const ref = useRef<HTMLFormElement>(null)
    return (
        <>
            <div className=' w-full border-[1px] h-auto border-gray-300 p-2 mb-10'>
                <div className="p-4 flex flex-col justify-between bg-gradient-to-b from-white to-[#fff6f6] overflow-hidden text-black">
                    <div className="w-full flex justify-center mx-auto py-5">
                        <h4 className="lg:text-2xl text-lg font-semibold text-center">Send your Query</h4>
                    </div>
                    <form
                        className='w-full'
                        ref={ref}
                        action={async (formData: FormData) => {
                            const response = await sendQuery(formData);
                            if (response?.success) {
                                Swal.fire({
                                    title: response?.success,
                                    text: 'Very soon our team will revert back to you',
                                    icon: "success",
                                    timer: 4000,
                                    timerProgressBar: true,
                                    customClass: {
                                        confirmButton: 'confirm-pix-btn-success',
                                        popup: 'alert-container',
                                        timerProgressBar: 'timer-progress-success'
                                    }
                                });
                                ref.current?.reset()
                            }
                            else if (response?.failed) {
                                Swal.fire({
                                    icon: "warning",
                                    title: response?.failed,
                                    text: "You have already queried with this email/mobile",
                                    timer: 2000,
                                    timerProgressBar: true,
                                    customClass: {
                                        confirmButton: 'confirm-pix-btn-warning',
                                        popup: 'alert-container',
                                        timerProgressBar: 'timer-progress-warning'
                                    }
                                });
                            }
                            else {
                                Swal.fire({
                                    icon: "error",
                                    title: "Oops...",
                                    text: "Something went wrong!",
                                    timer: 1500,
                                    timerProgressBar: true,
                                    customClass: {
                                        confirmButton: 'confirm-pix-btn-error',
                                        popup: 'alert-container',
                                        timerProgressBar: 'timer-progress-error'
                                    }
                                });
                            }
                        }}
                    >
                        <div className="w-full lg:mb-5 mb-2">
                            <label>Name</label>
                            <input className="bg-white h-12 p-4 w-full rounded-none border-gray-200 border-[1px]"
                                id='name'
                                type="text"
                                name="name"
                                required
                                placeholder="Name" />
                        </div>

                        <div className="w-full grid lg:grid-cols-2 cols-1 gap-10 lg:mb-5 mb-2">
                            <div>
                                <label>Email</label>
                                <input className="bg-white h-12 p-4 w-full rounded-none border-gray-200 border-[1px]"
                                    id='email'
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="user@email.com" />
                            </div>
                            <div>
                                <label>Mobile</label>
                                <input className="bg-white h-12 p-4 w-full rounded-none border-gray-200 border-[1px]"
                                    id='mobile'
                                    type="tel"
                                    name="mobile"
                                    required
                                    placeholder="Enter mobile number" />
                            </div>
                        </div>

                        <div className="w-full lg:mb-5 mb-2">
                            <label>Query</label>
                            <input className="bg-white h-32 p-4 w-full rounded-none border-gray-200 border-[1px]"
                                id='name'
                                type="text"
                                name="query"
                                required
                                placeholder="Enter Your Message" />
                        </div>
                        <div className="w-full flex justify-center lg:mb-5 mb-2">
                            <ButtonSubmit text='Send Query' />
                        </div>

                    </form>

                </div>
            </div>
        </>
    )
}