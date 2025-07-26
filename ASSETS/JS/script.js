let Datas=[
    {
        id:1,
        img:"/ASSETS/IMAGES/FeatImg1.png",
        modal:"2017 3100 MI 240HP",
        automatic:"Automatic",
        name:"BMW 6-Series Gran Coupe",
        price:"89,000",
        details:"The BMW 6 Series Gran Coupe is a luxury four-door coupe that masterfully blends the elegance of a sedan, the dynamics of a sports car.",
        category:"Fcars"
    },
    {
        img:"/ASSETS/IMAGES/FeatImg2.png",
        id:2,
        modal:"2017 3100 MI 240HP",
        automatic:"Automatic",
        name:"Chevrolet Camaro WMV20",
        price:"$ 1,20,000",
        details:"The Camaro WMV20 is a special edition of the iconic American muscle car, the Chevrolet Camaro, primarily known in markets.",
        category:"Fcars"
    },
    {
        img:"/ASSETS/IMAGES/FeatImg3.png",
        id:3,
        modal:"2017 3100 MI 240HP",
        automatic:"Automatic",
        name:"Lamborghini V520",
        price:"$ 95,000",
        details:"The exterior reflects Lamborghini’s signature style — sharp angles, wide air intakes, and a dramatic wedge profile — while the interior wraps",
        category:"Fcars"
    },
    {
        img:"/ASSETS/IMAGES/FeatImg4.png",
        id:4,
        modal:"2017 3100 MI 240HP",
        automatic:"Automatic",
        name:"Audi A3 Sedan",
        price:"$ 2,00,000",
        details:"The Audi A3 Sedan is a compact luxury car that perfectly balances sophistication, performance, and modern technology.",
        category:"Fcars"
    },
    {
        img:"/ASSETS/IMAGES/FeatImg51.png",
        id:5,
        modal:"2017 3100 MI 240HP",
        automatic:"Automatic",
        name:"Infiniti Z5",
        price:"$ 70,000",
        details:"The Infiniti Z5 s a high-performance luxury coupe that blends bold design, premium comfort, and twin-turbo power. Its sculpted body, low stance, and aggressive front fascia give it a commanding presence on the road.",
        category:"Fcars"
    },
    {
        img:"/ASSETS/IMAGES/FeatImg6.png",
        id:6,
        modal:"2017 3100 MI 240HP",
        automatic:"Automatic",
        name:"Porsche 718 Cayman",
        price:"$ 90,000",
        details:"The Porsche 718 Cayman is a mid-engine sports coupe that exemplifies pure driving precision, performance, and German engineering excellence. With its perfectly balanced chassis and sharp handling.",
        category:"Fcars"
    },
    {
        img:"/ASSETS/IMAGES/FeatImg7.png",
        id:7,
        modal:"2017 3100 MI 240HP",
        automatic:"Automatic",
        name:"Bmw 8-Series Coupe",
        price:"$ 1,20,000",
        details:"The BMW 8 Series Coupe is a grand tourer that seamlessly blends high-performance engineering with luxurious refinement. With its long, sculpted hood, wide stance, and flowing roofline.",
        category:"Fcars"
    },
    {
        img:"/ASSETS/IMAGES/FeatImg5.png",
        id:8,
        automatic:"Automatic",
        modal:"2017 3100 MI 240HP",
        name:"BMW Xseries-6",
        price:"$ 2,30,000",
        details:"The BMW X6 is a pioneering luxury SUV that introduced the bold “Sports Activity Coupe” concept, combining the commanding presence and versatility of an SUV with the sleek, sloping roofline of a coupe.",
        category:"Fcars"
    },
    {
        id:9,
        img:"/ASSETS/IMAGES/Client1.png",
        name:"Alixa Bliss",
        description:"The quality exceeded my expectations. Fast delivery and great packaging — will definitely order again!",
        place:"Washington",
        category:"FeedBack"
    },
    {
        id:10,
        img:"/ASSETS/IMAGES/Client2.png",
        name:"Roman Reings",
        description:"“I was able to test drive multiple models before deciding. The sales team was friendly and never pushed me. Highly recommended!",
        place:"JosenBerg",
        category:"FeedBack"
    },
    {
        id:11,
        img:"/ASSETS/IMAGES/Client3.png",
        name:"John Cena",
        description:"Got my dream car at an unbeatable price. The EMI options were flexible, and the sales process was completely hassle-free",
        place:"Londan",
        category:"FeedBack"
    },
    
]

//FUNCTION TO DISPLAY FEATURED CARS 
function DisplayCars(){
let Result=document.getElementById("FeatureCars");
let Content="";
let Fcars=Datas.filter((x,y)=>{
    return x.category==="Fcars"
})
Fcars.map((x,y)=>{
        Content+=`
<div class="col-lg-3 col-12 mt-4" id="FcarsCol">
<div class="card">
<img src="${x.img}" alt="" class="p-5 card-img-top" style="height: 210px;">
<hr>
<div class="card-body" id="FcarsCard">
<p>Modal: ${x.modal}</p>
<p>${x.automatic}</p>
</div>
</div>
<div class="mt-3">
<h5>${x.name}</h5>
<p>${x.price}</p>
<p>${x.details}</p>
</div>
</div>`
})
Result.innerHTML=Content;
}
DisplayCars()

//DISPLAY WHAT CLIENT SAYS
function ClientSays(){
 let Result2=document.getElementById("Client");
 let Content2="";
 let Feedback=Datas.filter((x,y)=>{
    return x.category==="FeedBack";
 })
 Feedback.map((x,y)=>{
 Content2+=`<div class="col-lg-4 col-12 mt-5" id="ClientCol">
 <div class="card text-center p-3 h-100" id="ClientCard">
 <div class="card-body" id="ClientCB">
 <img src="${x.img}" alt="" >
 <p>${x.description}</p>
 <h5>${x.name}</h5>
 <h6>${x.place}</h6>
 </div>
 </div>
 </div>`
 })
 Result2.innerHTML=Content2;
}
ClientSays()