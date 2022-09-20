import React , { useState} from 'react'
import  axios  from "axios";









const Feedback = () => {




    const [ name , setname ] = useState("")
    const [ desc , setdesc ] = useState("")

const feedbackpost = (e) =>{
    e.preventDefault();
    console.log('name' , name)
    console.log('desc' , desc)
    if ( !name ||!desc ){
        console.log("Required Feild Is Missing");
        return
    }
    else {

        
        axios.post('http://localhost:7000/feedbacks' ,
        {
            name : name,
            desc : desc
        }
        
        )
        .then((response) => {
            console.log("Feedback Message" , response.data
            );
        });
    }
}


  






  return (
	
<div className="flex items-center justify-center p-12">
    <div className="mx-auto w-full max-w-[550px]">
        <form onSubmit={feedbackpost} method="POST">
            <h1 className="text-center  pb-4  text-lg sm:text-4xl text-3xl font-medium title-font mb-10 border-teal-600 py-5 border-b-2 text-teal-600">Feed Back</h1>
            <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
			Full Name
		  </label>
                <input type="text" required name="name" id="name" placeholder="Full Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                 onChange={(e) => {
                  setname(e.target.value) 
                  console.log('name' , e.target.value)
              }}
              />
            </div>

            <div className="mb-5">
                <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
			Message
		  </label>
                <textarea rows="4" name="msg" required id="message" placeholder="Type your message" className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e) => {
                setdesc(e.target.value) 
                console.log('desc' , e.target.value)
              }}
              ></textarea>
            </div>
            <div>
                <button className="hover:shadow-form rounded-md text-teal-100 bg-teal-600 hover:bg-teal-900 hover:text-teal-300 py-3 px-8 text-base font-semibold outline-none">
			Submit
		  </button>
            </div>
        </form>
    </div>
</div>
  )
}

export default Feedback