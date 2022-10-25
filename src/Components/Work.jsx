import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import wether from "../assets/wether.png"
import realEstate from '../assets/realestate.jpg';
import you from "../assets/you.png"
import ombd from "../assets/ombd.png"
import fp from "../assets/fp.png"
import kim from "../assets/kim.png"
import orbit from "../assets/orbit.png"
import Typewriter from "typewriter-effect"

const Work = () => {
  return (

<div>
    <div id="mainwork" name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/* Grid Item */}
         
       
            {/* Grid Item */}
       
          <div
            style={{ backgroundImage: `url(${fp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              
              <div className='pt-8 text-center'>
                <a href='https://lucent-cendol-22af7f.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-purple-500 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/Ashish9431/fp'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-purple-500 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a><div  className='work3'>
                          <div className="title1">
                            
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("First Post Clone")
                            
                            .pauseFor(5000)
                            .start()
                          }
                            />

                          </div>
                   
                            
                             <div className='titlefb'>

                             <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("Firstpost.com will serve as a trusted guide to the crush of news and ideas around you. With thoughtful analysis and fearless views of editors and writers will track news in India and the world")
                           
                            .pauseFor(5000)
                            .start()
                          }
                            />
                             </div>
                                   <div className='title3'>

                             <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString(" Tech Stack")
                            
                            .pauseFor(5000)
                            .start()
                          }
                            />
                            <br />
                             </div>


                          <div className="title4">
                              <div>
                              <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("REACT JS" )
                            .pauseFor(5000)
                            .start()
                          }
                            />

                              </div>

                              <div>
                              
                              <Typewriter 
                              onInit={(typewriter)=> typewriter.typeString("REACT ROUTER DOM" )
                              .pauseFor(5000)
                              .start()
                            }
                              />
                   </div>

                              <div>
                              <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("AXIOS" )
                            .pauseFor(5000)
                            .start()
                          }
                            />

                              </div>

                            <div>
                              
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("JAVASCRIPT" )
                            .pauseFor(5000)
                            .start()
                          }
                            />


                            </div>
                            
                            <div>
                              
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("CHAKRA UI" )
                            .pauseFor(5000)
                            .start()
                          }
                            />
                 </div>
               
 
                      
                           
                


                 </div>


                </div>

   

              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${kim})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
             
              <div className='pt-8 text-center'>
                <a href='https://whimsical-gingersnap-c9aa58.netlify.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-purple-500 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/ashish123sharma/Kimaye-Project'>
                  <button className='text-center rounded-lg px-4 py-3 m-2  bg-purple-500 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
                <div  className='work3'>
                          <div className="title1">
                            
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("KIMAYE CLONE")
                            
                            .pauseFor(5000)
                            .start()
                          }
                            />

                          </div>
                          <br />
                            
                             <div className='title2'>

                             <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("KIMAYE is an e-commerce website which Deals in Selling fruits at Door Step with the promise of healthiness and preservative free Fruits Easliy. ")
                           
                            .pauseFor(5000)
                            .start()
                          }
                            />
                             </div>
                                   <div className='title3'>

                             <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString(" Tech Stack")
                            
                            .pauseFor(5000)
                            .start()
                          }
                            />
                            <br />
                             </div>


                          <div className="title4">
                              <div>
                              <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("HTML" )
                            .pauseFor(5000)
                            .start()
                          }
                            />

                              </div>

                              <div>
                              <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("CSS" )
                            .pauseFor(5000)
                            .start()
                          }
                            />

                              </div>

                            <div>
                              
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("JAVASCRIPT" )
                            .pauseFor(5000)
                            .start()
                          }
                            />


                            </div>
                            
                            <div>
                              
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("BOOTSTRAP" )
                            .pauseFor(5000)
                            .start()
                          }
                            />
                 </div>
 
                      
                           
                


                 </div>


                </div>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${orbit})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
             


              <div className='pt-8 text-center'>
                <a href='https://delightful-longma-b483a5.netlify.app'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-purple-500 text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/sumit-skribe/orbitz'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-purple-500 text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>

                <div  className='work3'>
                          <div className="title1">
                            
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("Orbitz Hotels Clone")
                            
                            .pauseFor(5000)
                            .start()
                          }
                            />

                          </div>
                          <br />
                            
                             <div className='title2'>

                             <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("Orbitz works by booking specific travel through airlines and hotels. It also negotiates certain deals or group rates that it then passes along to customers. ")
                           
                            .pauseFor(5000)
                            .start()
                          }
                            />
                             </div>
                                   <div className='title3'>

                             <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString(" Tech Stack")
                            
                            .pauseFor(5000)
                            .start()
                          }
                            />
                            <br />
                             </div>


                          <div className="title4">
                              <div>
                              <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("HTML" )
                            .pauseFor(5000)
                            .start()
                          }
                            />

                              </div>

                              <div>
                              <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("CSS" )
                            .pauseFor(5000)
                            .start()
                          }
                            />

                              </div>

                            <div>
                              
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("JAVASCRIPT" )
                            .pauseFor(5000)
                            .start()
                          }
                            />


                            </div>
                            
                            <div>
                              
                            <Typewriter 
                            onInit={(typewriter)=> typewriter.typeString("BOOTSTRAP" )
                            .pauseFor(5000)
                            .start()
                          }
                            />
                 </div>
 
                      
                           
                


                 </div>


                </div>




                         



              </div>
            </div>
          </div>
         


        



         

        </div>
      </div>
    </div>

   <div>


   </div>

</div>

  );
};

export default Work;
