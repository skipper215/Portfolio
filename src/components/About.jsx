

export const About = () => {

    const skills = [
        'Initiative',
        'Leadership',
        'Communication',
        'Planning'
    ]

    const tools = [
        'Java', 
        'C', 
        'React',
        'TailWindCSS',
        'HTML/CSS',
        'Git',
        'Kali Linux'
    ]

    return (
        <section id="about" className="h-screen flex items-center justify-center" >
            <div>
                <div className="text-left"> 
                    <h1 className="text-5xl font-bold">
                        About Me
                    </h1>
                    <p className="text-gray-400 text-lg max-w-[600px] "> 
                        Driven by personal excellence, loyalty and integrity, I recognise myself as a creative problem-solver at heart.
                        On my journey, I hope to find fulfilment in providing solutions to real people and work on meaninful projects, by providing high quality designs 
                        and user experience that allow the world to continue moving forward!
                    </p>
                </div>

                <div className="my-4 font-bold text-lg">
                    <h2 className="inline" >General Skills</h2>
                    <h2 className="inline ml-55 " >Tools</h2>
                </div>

                <div className="flex">
                    <div className="flex flex-wrap max-w-[20rem]">
                        {skills.map((skill, index) => (
                            <span className="className= bg-blue-500 rounded-full px-2 py-1 mr-1.5 my-1.5" key={index}> {skill} </span>
                        ))}
                    </div>
                   
                    <div className="border-l-3 pl-3 flex flex-wrap max-w-[20rem]">
                        {tools.map((tool, index) => (
                            <span className="className= bg-blue-500 rounded-full px-2 py-1 mr-1.5 my-1.5" key={index}>{tool}</span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}