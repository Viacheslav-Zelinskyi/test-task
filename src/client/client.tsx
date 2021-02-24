import React from 'react'
import editImg from '../images/edit.svg'

function Client({...props})
{
    return(
             <tr>
                <td className="px-6 py-4 whitespace-nowrap text-base">
                  {props.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-11 w-12">
                      {
                        props.imgURL!=null ? <img src={props.imgURL} alt="" className={props.className
                        }/> : <p>0</p>
                      }
                      </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900">
                        {props.firstName+' '+props.lastName}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-base text-gray-900">
                      {props.phone}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button type="button" onClick={()=>{props.setDisplayModalEdit('flex')}}  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-yellow-500 hover:bg-yellow-700 focus:outline-none">
                    <img src={editImg} className="mr-2" alt=""></img>
                    Edit
                  </button>
                </td>
            </tr>
    )
}

export default Client;