import React from 'react'
import axios from 'axios'
import Projectitem from '../components/Projectitem'





export default (props) => {
	const [project, setproject] = React.useState([]);
	React.useEffect(() => {
		axios.get('http://localhost:7000/projects')
		.then((response) => {
			setproject(response.data.data);
		});
	}, []);
	const myprojects = ()=>{
		return(
			
			<section className="text-gray-600 body-font">
					<div className="container px-5 py-2 mx-auto">
	
						
						<div className="flex flex-wrap -m-4">
						{project.map((proj , index) => {
							return(
	
						<Projectitem key={index} title={proj.title} desc={proj.desc} url={proj.url} />
						
						)

						})}
						</div>
						</div>
						
				</section>
		)
	}
	// console.log( "Projobj",project);
	return (

		
					
			myprojects()
		
	)


}
























{/* <div className="p-4 md:w-1/3 mywidth">
							<div className="h-full border-2 w-full border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
								<img className="lg:h-48 md:h-36 w-full object-cover object-center" src={proImg} alt="blog" />
								<div className="p-6">
									<h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">project.date</h2>
									<h1 className="title-font text-lg font-medium text-gray-900 mb-3">project.title</h1>
									<p className="leading-relaxed mb-3">project.desc</p>
									<div className="flex items-center flex-wrap ">

										<Link to="{{project.link}}" target="_blank" className="inline-flex text-teal-100 bg-teal-600 border-0 py-2 px-6 focus:outline-none hover:bg-teal-900 hover:text-teal-300 rounded text-lg">Visit Site</Link>  
									</div>
								</div>
							</div>
						</div> */}
