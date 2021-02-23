import React, {useState} from 'react'

function Modal({...props})
{
    return(
        <>
        <div className="absolute flex w-full h-full items-center justify-center" style={{display: props.displayModalEdit}} >
            <div className="bg-gray-500  w-full h-full opacity-60" onClick={()=>{props.setDisplayModalEdit('none')}}>
            </div>
            <div className="absolute bg-white rounded-lg " style={{width: '700px', height: '600px'}}>
                <h1 className="my-10 mx-20 text-3xl font-bold">Edit client</h1>
                <form className="flex flex-col align-center">
                    <div className="flex align-center justify-evenly">
                        <div>
                            <p>First Name</p>
                            <input type="text" className="border-2 outline-none rounded-lg  my-5 h-14 w-64 pl-4 text-lg" placeholder="First Name"/>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input type="text" className="border-2 outline-none rounded-lg  my-5 h-14 w-64 pl-4 text-lg" placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <p>Image URL</p>
                            <input type="text" className="border-2 outline-none rounded-lg  my-5 h-14 pl-4 text-lg" placeholder="Image URL" style={{width: '575px'}}></input>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <p>Phone</p>
                            <input type="tel" className="border-2 outline-none rounded-lg  my-5 h-14 pl-4 text-lg" placeholder="Phone" style={{width: '575px'}}></input>
                        </div>
                    </div>
                    <div className="flex align-center justify-evenly mt-5">
                        <div>
                            <button type="button" className="inline-flex justify-center items-center px-4 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none h-12 w-32">
                                <p className="text-xl">Update</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    );
}

export default Modal; 