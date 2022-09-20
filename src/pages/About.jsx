import React from 'react'
import Skills from '../components/Skills'
import myPic from '../static/abpic.jpg'

export default () => {
	return(
		<>
		
		<section className="text-teal-600 body-font">
    <div className="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
        <img className="lg:w-2/12 md:w-2/12 w-2/4  mb-10 object-cover object-center rounded-3xl border-2" alt="Abdul Basit Ansari" src={myPic} />
        <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-600">I Am Abdul Basit Ansari</h1>
            <p className="mb-8 leading-relaxed">I Am A Full Stack Developer. Deep knowledge and proficiency in Frontend , Backend And Responsive Web Design. Cheak My Projects And Give Me A Feedback.Contact Me If You Have Any Questions. Thanks For Visiting Our Site.</p>
            <div className="flex justify-center">
                <a target="blank" href="/projects/" className="inline-flex hover:shadow-form rounded-md text-teal-100 bg-teal-600 hover:bg-teal-900 hover:text-teal-300 py-3 px-8 text-base font-semibold outline-none">Cheak My Projects</a>  
                <a target="blank" href="/contact/" className="ml-4 inline-flex hover:shadow-form rounded-md text-teal-100 bg-teal-600 hover:bg-teal-900 hover:text-teal-300 py-3 px-8 text-base font-semibold outline-none ">Contact Me</a>  
            </div>
        </div>
    </div>
</section>

{/* <!-- Social Icon --> */}
<div className="p-2 w-full pt-8 mt-8  text-center">

    <span className="inline-flex">
	  <a target="blank" href="https://www.facebook.com/I.Am.Mr.A.B.A/" className="text-gray-500">
		<svg className="w-6 h-6 text-gray-500 fill-current"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24">
			<path
				d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
	  </a>  
	  <a target="blank" href="https://www.linkedin.com/in/abdul-basit-ansari-9b740b21b/" className="ml-4 text-gray-500">
		<svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
          </svg>
	  </a>  
	  <a target="blank" href="https://www.instagram.com/abdul__basit__ansari/" className="ml-4 text-gray-500">
		<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
		  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
		  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
		</svg>
	  </a>  
	  <a target="blank" href="https://github.com/Abdul-Basit-Ansari" className="ml-4 text-gray-500">
		<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
            <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
          </svg>
	  </a>  
	  <a target="blank" href="mailto:abdulbasitansari288@gmail.com" className="ml-4 text-gray-500">
		<svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor"/></g></svg>
	  </a>  
	</span>
</div>
{/* <!-- table --> */}
<Skills/>
</>
	)

}