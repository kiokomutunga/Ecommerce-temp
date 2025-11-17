

function HeroSection (){

    const backgroundImage = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FkZ2V0JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60';



    return (
        <section className="hero-section relative h-[600px]
         flex items-center justify-center text-center
         text-white background-cover overflow-hidden " 
         style={{backgroundImage:`url(${backgroundImage})`}}>

            <div>

            </div>
        </section>
        

        


    );

}

export default HeroSection;