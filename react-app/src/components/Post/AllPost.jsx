import React from 'react'
import { useEffect, useState } from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";
const AllPost = () => {
    const [data, setdata] = useState();
    const [userInfo, setuserInfo] = useState();
    useEffect(() => {
        console.log('dfghjkjhgfdsghjgdxxghjk');
        var token = localStorage.userToken;
        var decoded = jwt_decode(token);
        var userId = decoded.userId;
        const userData = {
            userId
        };

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `bearer ${token}`
        }
        axios.post('http://127.0.0.1:5000/postimage/userinfo', userData, { headers: headers })
            .then((res => setdata(res.data)))
            .catch(err => console.log(err))
        axios.get(`http://localhost:5000/user/${userId}`, { headers: headers })
            .then((res) => setuserInfo(res.data))
            .catch(err => console.log(err))
    }, [])
    console.log(data);
    return (
        <div><div className="mx-auto max-h-screen overflow-auto pt-16">
            <div className="px-6 py-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-5 rounded-3xl bg-white p-8">
                        <h1 className="mb-10 text-4xl font-bold">
                            Document Classification Results
                        </h1>
                        <div className="flex items-center justify-between">
                            <div className="flex items-stretch">
                                <div className="h-100 mx-4 border-l"></div>
                                <div className="flex flex-nowrap -space-x-3"></div>
                            </div>
                        </div>

                        {/* GRID 1/2*/}
                        <div className="grid grid-cols-2 gap-x-20">
                            <div>
                                <h2 className="mb-4 text-2xl font-bold">Stats</h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        {/* {data && <img src={window.location.origin + '/userImage/' + data[0].image}
                                            alt='dfghjk'></img>} */}


                                        {data && data.map(itm => (
                                            <div className='space-y-5'>
                                                {data &&
                                                    <>
                                                        {/* <img src={window.location.origin + '/userImage/' + itm.image}
                                                            alt='imagedoc' /> */}
                                                        <div className='mb-6'>

                                                            <div class="max-w-sm rounded-xl overflow-hidden shadow-lg object-cover">
                                                                <img className='w-full' src={window.location.origin + '/userImage/' + itm.image}
                                                                    alt='imagedoc' />
                                                                <div class="px-6 py-2">
                                                                    <p class="text-gray-700 text-base ml-2 font-semibold">
                                                                        {itm.image}
                                                                    </p>
                                                                </div>
                                                                <div class="px-6 pt-2 pb-2">
                                                                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">classification</span>
                                                                    <span class="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">rejected</span>
                                                                    <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">approved</span>


                                                                </div>
                                                            </div>
                                                        </div>


                                                    </>}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
                                        <div className="text-2xl font-bold leading-none">
                                            20
                                        </div>
                                        <div className="mt-2">Tasks finished</div>
                                    </div>
                                    <div className="rounded-xl bg-yellow-100 p-4 text-gray-800">
                                        <div className="text-2xl font-bold leading-none">
                                            5,5
                                        </div>
                                        <div className="mt-2">Tracked hours</div>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="rounded-xl bg-purple-100 p-4 text-gray-800">
                                            <div className="text-xl font-bold leading-none">
                                                Your daily plan
                                            </div>
                                            <div className="mt-2">5 of 8 completed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 className=" text-2xl font-bold">
                                    Status
                                </h2>

                                <p className="my-2 text-sm font-medium">Review Cards</p>
                                <div className="space-y-4">
                                    <div className="space-y-2 rounded-xl border bg-white p-4 text-gray-800">
                                        <div className="flex justify-between">
                                            <div className="text-xs text-gray-400">Number Items</div>
                                            <div className="text-xs text-gray-400">4h</div>
                                        </div>
                                        <a
                                            href="javascript:void(0)"
                                            className="font-bold hover:text-yellow-800 hover:underline"
                                        >
                                            {data?.length}
                                        </a>
                                        <div className="text-sm text-gray-600">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                className="mr-1 inline align-middle text-gray-800"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                            </svg>
                                             Rejected
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div></div>
    )
}

export default AllPost