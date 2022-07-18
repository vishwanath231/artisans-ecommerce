import React,{ useState, useEffect } from 'react';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import SideBar from './components/SideBar';
import { BiPlus } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { getAuthList } from '../../redux/actions/AuthActions';
import { connect } from 'react-redux';
import UsersList from './components/UsersList';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import TableFilter from './components/TableFilter';


const MakerListScreen = ({ getAuthList, authList }) => {

    const {loading, users, error } = authList;
    const [filterData, setFilterData] = useState([]);

    const maker = users.filter(item => item.role === 'maker');
    
    
    useEffect(() => {
        getAuthList()
    }, [getAuthList])


    const [rowLimit , setRowLimit] = useState(2)
    const [currentPage, setCurrentPage] = useState(1);

    const rowHandler = (e) => {
        const { value } = e.target;
        setRowLimit(value)
    }

    const indexOfLastData = currentPage * rowLimit;
    const indexOfFirstData = indexOfLastData - rowLimit;
    const makerData = maker.slice(indexOfFirstData, indexOfLastData)
    const filterMakerData = filterData.slice(indexOfFirstData, indexOfLastData)
    
   
    const searchHandler = (e) => {
        if (e.target.value !== '') {
            const filter = maker.filter(item => {
                return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase()) 
            })
            setFilterData(filter)
        }else{
            setFilterData(maker)
        }
    }

    const makerUpdateHandler = (id) => {
        console.log(id);
    }
    
    const makerDeleteHandler = (id) => {
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
                    makers
                </div>
                <div className='flex justify-between items-center flex-col md:flex-row'>
                    <Link to='' className='py-2 w-full mb-4 md:mb-0 md:w-fit px-4 sen-font bg-[#83c5be] rounded shadow flex items-center'>
                        <BiPlus /> <span>Create Maker</span>
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

                {loading ? <Loader /> : error ? <Message error msg={error} /> : (

                    <>
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
                                                    filterMakerData.map((val) => (
                                                        <React.Fragment key={val._id}>
                                                            <UsersList val={val} userUpdateHandler={makerUpdateHandler} userDeleteHandler={makerDeleteHandler} />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                        ) : (
                                            <>
                                                {
                                                    makerData.map((val) => (
                                                        <React.Fragment key={val._id}>
                                                            <UsersList val={val} userUpdateHandler={makerUpdateHandler} userDeleteHandler={makerDeleteHandler} />
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                        <TableFilter rowHandler={rowHandler} rowLimit={rowLimit} data={maker} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </>
                )}
                
            </div>
        </>
    )
}
const mapStateToProps = (state) => ({
    authList: state.authList
})

export default connect(mapStateToProps,{ getAuthList })(MakerListScreen);