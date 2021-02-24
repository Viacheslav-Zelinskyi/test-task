import React from 'react'
import { useForm } from 'react-hook-form';
import { GraphQLClient, gql } from 'graphql-request'
type Profile = {
    firstName: string;
    lastName: string;
    imgURL: string;
    phone: string;
  };
function Modal({...props})
{
    const { register, handleSubmit, errors } = useForm<Profile>();
    const onSubmit = handleSubmit((data)=> {
        const endpoint = "https://test-task.expane.pro/api/graphql";
        const graphQLClient = new GraphQLClient(endpoint, {
        })
        const mutation = gql`
        mutation UpdateClient($id: ID!, $firstName: String!, $lastName: String!, $phone: String, $avatarUrl: String){
          updateClient(id: $id, firstName: $firstName, lastName: $lastName, phone: $phone, avatarUrl: $avatarUrl){
            id
            firstName
            lastName
            phone
            avatarUrl
          }
        }`
        const variables={
              "id": props.id,
              "firstName": data.firstName,
              "lastName": data.lastName,
              "phone": data.phone,
              "avatarUrl": data.imgURL
        }
        console.log(variables)
        graphQLClient.request(mutation, variables)
        props.setDisplayModalEdit('none')
        window.location.reload();
});

    return(
        <>
        <div className="fixed top-0 left-0 flex w-full h-full items-center justify-center" style={{display: props.displayModalEdit}} >
            <div className="bg-gray-500  w-full h-full opacity-60" onClick={()=>{props.setDisplayModalEdit('none')}}>
            </div>
            <div className="absolute bg-white rounded-lg " style={{width: '700px', height: '600px'}}>
                <h1 className="my-10 mx-20 text-3xl font-bold mb-6">Edit client</h1>
                <form className="flex flex-col align-center" onSubmit={onSubmit}>
                    <div className="flex align-center justify-evenly">
                        <div>
                            <p>First Name</p>
                            <input type="text" name="firstName" defaultValue={props.firstName} ref={register({ required: true })} className="border-2 outline-none rounded-lg  my-5 h-14 w-64 pl-4 text-lg mb-1" placeholder="First Name"/>
                            {
                                errors.firstName && <div className="text-sm text-red-600 mb-2 text-center">Enter Name</div>
                            }
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input type="text" name="lastName" defaultValue={props.lastName} ref={register({ required: true })} className="border-2 outline-none rounded-lg  my-5 h-14 w-64 pl-4 text-lg mb-1" placeholder="Last Name"/>
                            {
                                errors.lastName && <div className="text-sm text-red-600 mb-2 text-center">Enter Surname</div>
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <p className="mt-2">Image URL</p>
                            <input type="text" name="imgURL" defaultValue={props.imgURL} ref={register({ required: true })} className="border-2 outline-none rounded-lg  my-5 h-14 pl-4 text-lg" placeholder="Image URL" style={{width: '575px'}}></input>
                            {
                                errors.imgURL && <div className="text-sm text-red-600 -mb-3 text-center">Enter Image URL</div>
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div>
                            <p>Phone</p>
                            <input type="text" name="phone" defaultValue={props.phone} ref={register({ required: true })} className="border-2 outline-none rounded-lg  my-5 h-14 pl-4 text-lg" placeholder="Phone" style={{width: '575px'}}></input>
                            {
                                errors.phone && <div className="text-sm text-red-600 -mb-1 -mt-2 text-center">Enter Phone number</div>
                            }
                        </div>
                    </div>
                    <div className="flex align-center justify-evenly mt-5">
                        <div>
                            <button type="submit" onClick={() => {}} className="flex flex-col justify-center 
                                         align-center px-4 py-1 border border-transparent 
                                         rounded-md shadow-sm text-sm font-medium text-white bg-green-500 
                                         hover:bg-green-600 focus:outline-none h-14 w-42">
                                <p className="text-base">Close and Save</p>
                            </button>
                        </div>
                        <div>
                            <button type="reset" onClick={() => {props.setDisplayModalEdit('none')}} className="flex flex-col
                                         align-center justify-center px-4 py-1 border border-transparent 
                                         rounded-md shadow-sm text-sm font-medium text-white bg-red-500 
                                         hover:bg-red-600 focus:outline-none h-14 w-42">
                                <p className="text-base">Close without saving</p>
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