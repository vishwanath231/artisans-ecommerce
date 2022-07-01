import React,{ useState, useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import products from '../../products.json';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const UserListScreen = () => {

    const [userData, setUserData] = useState([]);
    const [filterData, setFilterData] = useState([]);


    useEffect(() => {
        const user = products.users.filter(item => item.role === 'user');
        setUserData(user)
    }, [])
    
   
    const searchHandler = (e) => {
        if (e.target.value !== '') {
            const filter = userData.filter(item => {
                return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase())
            })
            setFilterData(filter)
        }else{
            setFilterData(userData)
        }
    }

    const userUpdateHandler = (id) => {
        console.log(id);
    }
    
    const userDeleteHandler = (id) => {
        if (window.confirm(`Are you sure, you want delete ${id}!`)) {
            
            console.log(id);
        }
    }
    

    return (
        <>
            <SideBar />
            <MobileNav />
            <Header />
            <div className='md:ml-72 px-4 md:px-2'>
                <div className='my-6 text-3xl font-bold tracking-wide uppercase md:text-center'>
                    users
                </div>
                {/* <div className='flex w-fit mx-auto justify-center items-center shadow-md  rounded'>
                    <div className='flex items-center m-4'>
                        <div className='bg-green-200 rounded mr-4'>
                        <svg version="1.0" className='w-16 h-16' viewBox="0 0 512.000000 512.000000">
                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#000000" stroke="none">
                            <path d="M951 4095 c-180 -41 -326 -163 -398 -335 -26 -60 -28 -75 -28 -205 0
                            -135 1 -143 36 -242 67 -189 181 -349 300 -420 73 -44 168 -67 239 -59 243 28
                            479 348 506 686 19 243 -133 475 -365 556 -87 30 -206 38 -290 19z m269 -177
                            c81 -37 153 -107 192 -186 32 -64 33 -71 32 -182 0 -105 -3 -123 -33 -203 -58
                            -154 -160 -285 -262 -337 -126 -65 -284 31 -393 240 -56 107 -81 201 -81 310
                            0 86 3 101 32 162 50 105 131 176 248 215 65 21 199 12 265 -19z"/>
                            <path d="M3990 4103 c-111 -13 -237 -77 -320 -162 -174 -177 -204 -420 -85
                            -702 72 -170 186 -304 314 -367 69 -34 82 -37 161 -37 77 0 92 3 155 34 143
                            70 270 234 344 444 34 97 36 109 36 232 0 151 -15 211 -77 306 -73 113 -182
                            196 -305 232 -58 17 -168 27 -223 20z m232 -190 c174 -81 257 -260 215 -460
                            -31 -143 -96 -269 -188 -365 -123 -126 -240 -131 -367 -15 -63 58 -134 170
                            -173 274 -30 80 -33 98 -33 203 -1 104 2 120 25 171 33 69 84 127 150 169 73
                            48 122 60 219 57 71 -2 97 -8 152 -34z"/>
                            <path d="M2393 3546 c-255 -83 -412 -337 -373 -606 36 -254 200 -514 377 -602
                            62 -30 75 -33 163 -33 89 0 100 2 164 35 138 69 266 235 332 427 75 221 63
                            398 -35 552 -39 60 -131 149 -191 183 -122 71 -299 88 -437 44z m310 -156 c80
                            -30 167 -112 209 -197 61 -125 46 -290 -43 -470 -47 -94 -138 -200 -207 -241
                            -65 -37 -139 -37 -204 0 -160 94 -298 367 -286 568 15 263 281 434 531 340z"/>
                            <path d="M508 2795 c-200 -49 -362 -209 -413 -410 -12 -48 -15 -133 -15 -447
                            l0 -388 670 0 670 0 0 75 0 75 -596 0 -595 0 3 318 c3 303 5 320 27 375 44
                            112 147 209 257 243 27 8 90 18 139 21 l91 6 123 -237 c72 -139 133 -244 149
                            -256 17 -14 37 -20 60 -18 34 3 35 6 166 253 l131 250 58 3 c177 9 347 -85
                            415 -232 l22 -45 67 23 c37 12 68 27 70 33 9 27 -63 141 -131 209 -126 126
                            -242 166 -461 162 l-138 -3 -106 -202 c-58 -112 -108 -203 -111 -203 -3 0 -52
                            92 -110 205 l-105 205 -140 -1 c-82 0 -163 -6 -197 -14z"/>
                            <path d="M3500 2794 c-149 -39 -288 -147 -355 -274 -20 -39 -35 -76 -33 -82 2
                            -6 34 -22 71 -34 l66 -22 22 46 c32 66 114 149 180 183 65 33 161 52 239 47
                            l55 -3 126 -239 c107 -205 130 -242 157 -255 64 -30 72 -21 215 253 l130 249
                            96 -6 c194 -11 325 -100 393 -267 21 -53 22 -68 23 -370 l0 -315 -592 -3 -593
                            -2 0 -75 0 -75 670 0 670 0 0 388 c0 428 -3 451 -63 572 -44 89 -150 195 -240
                            238 -99 48 -172 62 -327 62 l-135 0 -97 -188 c-53 -103 -103 -195 -110 -205
                            -12 -16 -25 4 -120 185 l-106 203 -143 2 c-100 1 -161 -3 -199 -13z"/>
                            <path d="M2048 2269 c-164 -24 -323 -138 -402 -288 -64 -122 -66 -141 -66
                            -578 l0 -393 983 2 982 3 3 330 c3 355 -5 468 -37 561 -43 122 -155 250 -270
                            309 -87 44 -150 56 -307 62 l-151 6 -109 -207 c-59 -113 -111 -206 -114 -206
                            -3 0 -54 91 -112 203 l-106 202 -119 1 c-65 1 -143 -2 -175 -7z m326 -389 c69
                            -132 126 -244 126 -250 0 -6 26 -10 59 -10 51 0 61 3 66 20 4 12 61 125 127
                            251 l121 231 106 -4 c94 -3 114 -7 171 -34 82 -40 136 -87 177 -155 57 -96 63
                            -140 63 -466 l0 -293 -830 0 -830 0 0 293 c0 326 6 370 63 466 50 83 130 145
                            232 177 22 7 81 13 132 13 l91 1 126 -240z"/>
                            </g>
                        </svg>
                        </div>
                        <div className=''>
                            <p className='text-2xl font-bold mont-font'>Users</p>
                            <p className='mt-1 font-medium text-md'>{userData.length}</p>
                        </div>
                    </div>
                </div> */}
                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <Link to='' className='py-2 w-full mb-4 md:mb-0 md:w-fit px-4 sen-font bg-[#83c5be] rounded shadow flex items-center'>
                        <BiPlus /> <span>Create User</span>
                    </Link>
                    <div className='w-full md:w-72 '>
                        <input
                            name='search'
                            type='search'
                            onChange={searchHandler}
                            placeholder='search...'
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-[#edf2f4] focus:ring-[#83c5be] focus:border-[#83c5be] w-full p-2.5"
                        />
                    </div>
                </div>
                
                <div className="relative overflow-x-auto my-10">
                    <table className="w-full text-sm text-left text-black ">
                        <thead className="text-xs text-black mont-font text-white uppercase bg-[#0b2545]">
                            <tr className='border border-gray-300'>
                                <th className="px-6 py-3 border border-gray-300">ID</th>
                                <th className="px-6 py-3 border border-gray-300">NAME</th>
                                <th className="px-6 py-3 border border-gray-300">EMAIL</th>
                                <th className="px-6 py-3 border border-gray-300">PHONE</th>
                                <th className="px-6 py-3 border border-gray-300">
                                    <span className="sr-only">ACTION</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterData.length  ? (
                                    <>
                                        {
                                            filterData.map((val) => (
                                                <React.Fragment key={val._id}>
                                                    <UserComponents val={val} userUpdateHandler={userUpdateHandler} userDeleteHandler={userDeleteHandler} />
                                                </React.Fragment>
                                            ))
                                        }
                                    </>
                                ) : (
                                    <>
                                        {
                                            userData.map((val) => (
                                                <React.Fragment key={val._id}>
                                                    <UserComponents val={val} userUpdateHandler={userUpdateHandler} userDeleteHandler={userDeleteHandler} />
                                                </React.Fragment>
                                            ))
                                        }
                                    </>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UserListScreen;


const UserComponents = ({val, userUpdateHandler, userDeleteHandler}) => {

    return(
        <tr key={val._id} className="bg-white border border-gray-300 transition duration-300 ease-in-out hover:bg-gray-200 sen-font">
            <td className="px-6 py-4 border border-gray-300">{val._id}</td>
            <td className="px-6 py-4 border border-gray-300">{val.name}</td>
            <td className="px-6 py-4 border border-gray-300"><a href={`mailto:${val.email}`} className='hover:underline'>{val.email}</a></td>
            <td className="px-6 py-4 border border-gray-300">{val.phone}</td>
            <td className='px-4 py-2 border border-gray-300'>
            <button className='px-3 py-1' >
                    <i className='fas fa-eye text-blue-800'></i>
                </button>
                <button className='px-3 py-1 mr-1' onClick={() => userUpdateHandler(val._id)}>
                    <i className='fas fa-edit text-green-600'></i>
                </button>
                <button className='px-3 py-1' onClick={() => userDeleteHandler(val._id)}>
                    <i className='fas fa-trash text-red-700'></i>
                </button>
            </td>
        </tr>
    )
}