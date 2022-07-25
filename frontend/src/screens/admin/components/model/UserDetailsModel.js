import React from 'react';
import { connect } from 'react-redux';
import Loader from '../../../../components/Loader';

const UserDetailsModel = ({ profileModel, setProfileModel, authDetails }) => {

    const { loading:userLoading, user:singleUser } = authDetails;

    const removeProfileModel = () => setProfileModel(false)

    return (
        <>
            {
                profileModel ? (
                    <>
                        <div className='absolute w-full px-4 min-h-screen z-20' onClick={removeProfileModel} style={{ background: 'rgba(0, 0, 0, 0.54)' }}>
                            {userLoading ? <Loader /> : (
                                <div className='my-10 mx-auto max-w-md sen-font flex justify-center flex-col items-center bg-white p-4 rounded shadow'>
                                    <h2 className='uppercase mont-font text-xl font-bold tracking-wider mb-4'>User Details</h2>
                                    <table className='border p-3'>
                                        <tr className='border-b '>
                                            <th scope="row" className='p-3 '>ID :</th>
                                            <td className='p-3'>{singleUser && singleUser._id}</td>
                                        </tr>
                                        <tr className='border-b '>
                                            <th scope="row" className='p-3 '>Name :</th>
                                            <td className='p-3'>{singleUser && singleUser.name}</td>
                                        </tr>
                                        <tr className='border-b'>
                                            <th scope="row" className='p-3'>Email :</th>
                                            <td className='p-3'>{singleUser && singleUser.email}</td>
                                        </tr>
                                        <tr className='border-b'>
                                            <th scope="row" className='p-3'>Phone :</th>
                                            <td className='p-3'>{singleUser && singleUser.phone}</td>
                                        </tr>
                                        <tr className='border-b'>
                                            <th scope="row" className='p-3'>Role :</th>
                                            <td className='p-3'>{singleUser && singleUser.role}</td>
                                        </tr>
                                    </table>
                                </div>
                            )}
                        </div>
                    </>
                ) : null
            }
        </>
    )
}


const mapStateToProps = (state) => ({
    authDetails: state.authDetails
})

export default connect(mapStateToProps,null )(UserDetailsModel);