export const Projects = () => {

    const projectList = [
        { 
            title: "Project Management App", 
            description: 
            `A user-friendly app designed to assist users to keep track of tasks. 
            Users have the option to add a date and time, edit tasks, remove categories,
            and even check their tasks to add them to the completed section!`,
            img: "../public/projectAppImage.png", // add src path as a string 
            features: ["Date and Time option", "Categories", "Draggable items", "Color-coded reminders"]
        },
        { 
            title: "E-Commerce Website", 
            description: `Buy and sell products easily.`, 
            features : []
        },
        { 
            title: "Placeholder Project 1", 
            description: "Coming soon...",
            features : [] 
        },
        { 
            title: "Placeholder Project 2", 
            description: "Coming soon...",
            features : [] 
        }
    ]


    return (
        <section id="projects">
            <div className="min-h-screen bg-gray-900 flex flex-col items-center">
            <h1 className="text-5xl font-bold p-10">Projects</h1>

                {/* Project List */}
                <div className="flex flex-wrap justify-center gap-8 px-4"> 
                    {projectList.map((project, index) => (
                    
                    // Project box 
                    <div 
                    key={index}
                    className="border border-gray-400 bg-black p-6 min-w-[900px] max-w-[900px] rounded-lg"
                    >
                        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                        <p>{project.description}</p>
                        <img className="my-4" src={project.img} alt="projectAppImage" />
                        <ul>
                            <p className="font-semibold mt-5 mb-1">Notable Features: </p>
                            {project.features.map((feature, index) => (
                                <li key={index} className="list-disc list-inside text-sm"> {feature} </li>
                            ))}
                        </ul>
                        
                    </div>

                    ))}
                </div>
            </div>
        </section>
    )
}