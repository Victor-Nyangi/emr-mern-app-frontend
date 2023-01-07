import React from 'react'
import { Link } from "react-router-dom"

const Channel = () => {
    return (
        <>
            <section className="my-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                        <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="Fine FInance logo" />
                        Chat
                    </Link>
                    <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                            <form className="space-y-4 md:space-y-6" action="#" method="POST" >
                                <div>
                                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Your username</label>
                                    <input name="username" id="username" placeholder="Enter username..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5" required />
                                </div>
                                <div>
                                    <label htmlFor="room" className="block mb-2 text-sm font-medium text-gray-900">Room</label>
                                    <select name="room" id="room" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5">
                                        <option value="JavaScript">JavaScript</option>
                                        <option value="Python">Python</option>
                                        <option value="PHP">PHP</option>
                                        <option value="C#">C#</option>
                                        <option value="Ruby">Ruby</option>
                                        <option value="Java">Java</option>
                                    </select>
                                    </div>

                                <button type="submit" className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Join Chat</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Channel