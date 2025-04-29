export const ProjectCard = ({ project, index}) => {

    return (
        // Project box 
        <div 
        key={index}
        className="border border-gray-400 bg-black p-6 min-w-[900px] max-w-[900px] rounded-lg text-gray-300"
        >

         <h2 className="text-2xl font-bold mb-2 text-gray-100">{project.title}</h2>
         <p >{project.description}</p>
         <img className="my-4" src={project.img} alt="projectAppImage" />
         <ul>
             <p className="font-semibold mt-5 mb-1">Notable Features: </p>
             {project.features.map((feature, index) => (
                 <li key={index} className="list-disc list-inside text-sm"> {feature} </li>
             ))}
         </ul>
         
     </div>
    )
}