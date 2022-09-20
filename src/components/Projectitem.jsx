import React, { useState } from 'react'



const Projectitem = (props) => {
	let proImg = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPx9Djd8F6-cgweSkt49Bs5g7pqHs8rXlpJw&usqp=CAU'


	return (
		<>
		
			<div className="p-4 md:w-1/3 mywidth">
				<div className="h-full border-2 w-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden ">
					<img className="lg:h-48 md:h-36 w-full object-cover object-center" src={proImg} alt="blog" />
					<div className="p-6">
						<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{props.createdon}</h2>
						<h1 className="title-font text-lg font-medium text-gray-900 mb-3">{props.title}</h1>
						<p className="leading-relaxed mb-3">{props.desc}</p>
						<div className="flex items-center flex-wrap ">

							<a href={props.url} target="_blank" className="inline-flex text-teal-100 bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 hover:text-teal-300 rounded text-lg">Visit Site</a>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Projectitem
