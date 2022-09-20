import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../static/logo1.png'
import reactlogo from '../static/react.png'
import djangologo from '../static/pythondjango.png'
import staticlogo from '../static/static.png'
import bootstraplogo from '../static/bootstrap.png'
import tailwindlogo from '../static/tailwind.png'
import nodelogo from '../static/nodejs.png'



export default () => {
	let refimg =  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPx9Djd8F6-cgweSkt49Bs5g7pqHs8rXlpJw&usqp=CAU'
	let mywidth = {
		width:'30rem'
	}
	return (
<>

		<div className="text-gray-600 body-font">
			<div className="container flex flex-wrap px-5 pb-24 mx-auto ">
				<div className="flex flex-wrap w-full mb-20 flex-col items-center text-center" >
				<img src={logo} className="mr-2 rounded-full" style={{width:'20%'}}/>
					<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Welcome To Code By Basit</h1>
					<p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Cheak Projects And Give Feedback Us</p>
				</div>

				<div className="flex flex-wrap -m-4" style={{width:'100%', justifyContent: 'center'}} >

					<div className="xl:w-1/3 md:w-1/2 p-4" style={mywidth}>
						<div className="border border-gray-200 p-6 rounded-lg">
							<div className="w-20 h-20 inline-flex items-center justify-center">
								<img src={reactlogo} alt="React" />
							</div>
							<h2 className="text-lg text-gray-900 font-medium title-font mb-2">React Projects</h2>
							<p className="leading-relaxed text-base">Languges / Libraries : Html , CSS , Javascript , React</p>
						</div>
					</div>
					
					<div className="xl:w-1/3 md:w-1/2 p-4" style={mywidth} >
						<div className="border border-gray-200 p-6 rounded-lg">
							<div className="w-20 h-20 inline-flex items-center justify-center">
								<img src={staticlogo} alt="Javascript" />
							</div>
							<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Javascript Projects</h2>
							<p className="leading-relaxed text-base">Languges / Libraries : Html , CSS , Javascript</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4" style={mywidth}>
						<div className="border border-gray-200 p-6 rounded-lg">
							<div className="w-20 h-20 inline-flex items-center justify-center">
								<img src={bootstraplogo} alt="Bootstrap" />
							</div>
							<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bootstrap Projects</h2>
							<p className="leading-relaxed text-base">Languges / Libraries : Html , CSS , Javascript , Bootsrap</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4" style={mywidth}>
						<div className="border border-gray-200 p-6 rounded-lg">
							<div className="w-20 h-20 inline-flex items-center justify-center">
								<img src={tailwindlogo} alt="Tailwind CSS" />
							</div>
							<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Tailwind Projects</h2>
							<p className="leading-relaxed text-base">Languges / Libraries : Html , CSS , Javascript , Tailwind</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4" style={mywidth}>
						<div className="border border-gray-200 p-6 rounded-lg">
							<div className="w-20 h-20 inline-flex items-center justify-center">
								<img src={nodelogo} alt="Django" />
							</div>
							<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Nodejs / Expressjs Projects</h2>
							<p className="leading-relaxed text-base">Languges / Libraries : Html , CSS , JS , Expressjs</p>
						</div>
					</div>
					<div className="xl:w-1/3 md:w-1/2 p-4" style={mywidth}>
						<div className="border border-gray-200 p-6 rounded-lg">
							<div className="w-20 h-20 inline-flex items-center justify-center">
								<img src={djangologo} alt="Django" />
							</div>
							<h2 className="text-lg text-gray-900 font-medium title-font mb-2">Django Projects</h2>
							<p className="leading-relaxed text-base">Languges / Libraries : Html , CSS , JS , Python Django</p>
						</div>
					</div>

				</div>
				<div className = "inline-block text-center mx-auto my-10">

					<Link to="/projects/" className="mt-10 text-teal-100 bg-teal-600 hover:bg-teal-900 hover:text-teal-300 border-0 py-2 px-8 focus:outline-none  rounded text-lg">Click For Visit All Projects</Link>  
				</div>
			</div>
		</div>
		</>
	)
}