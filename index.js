const img1=document.querySelector('.img1')
const img2=document.querySelector('.img2')
const box1=document.querySelector('.box1')

const img3=document.querySelector('.img3')
const img4=document.querySelector('.img4')
const img5=document.querySelector('.img5')
//event listeners for image1
let base=true;
let dragImage=null;
img1.addEventListener('dragstart',(e)=>{
console.log("drag start has been triggered");
// e.target.className +=' hold';
this.className+=' hold';
setTimeout(()=>{
dragImage="img1"
    // e.target.className='hide';
    this.className='hide'
}, 0);

});


//////////////////////////////////////////////////////////////////////////
img1.addEventListener('dragend',(e)=>{
console.log("drag end has been triggered");
// e.target.className='img1'
});

//////////////////////////////////////////////////////////////////////////

// event listener for image2
img2.addEventListener('dragstart',(e)=>{
    console.log("drag start has been triggered");
    e.target.className +=' hold';
    setTimeout(()=>{
    dragImage="img2"
        e.target.className='hide';
    }, 0);
    
    });
    
img2.addEventListener('dragend',(e)=>{
console.log("drag end has been triggered");
e.target.className='img2'
});
////////////////////////////////////////////////////////////////////////////

let toppingImage=null;
let topping=false;
img3.addEventListener('dragstart',(e)=>{
    console.log("drag start has been triggered");
    e.target.className +=' hold';
    base=false;
    topping=true;
    setTimeout(()=>{
    toppingImage="top1"
        e.target.className='hide';
    }, 0);
    
    });

    img3.addEventListener('dragend',(e)=>{
    console.log("drag end has been triggered");
    e.target.className='img3'
    });
        
    ///////////////////////////////////////////////////
    // for img 4
    img4.addEventListener('dragstart',(e)=>{
        console.log("drag start has been triggered");
        e.target.className +=' hold';
        base=false;
        topping=true;
        setTimeout(()=>{
        toppingImage="top2"
            e.target.className='hide';
        }, 0);
        
        });
    
        img4.addEventListener('dragend',(e)=>{
        console.log("drag end has been triggered");
        e.target.className='img4'
        });
        ///////////////////////////////////////////////
        // for img 5
        img5.addEventListener('dragstart',(e)=>{
            console.log("drag start has been triggered");
            e.target.className +=' hold';
            base=false;
            topping=true;
            setTimeout(()=>{
            toppingImage="top3"
                e.target.className='hide';
            }, 0);
            
            });
        
            img5.addEventListener('dragend',(e)=>{
            console.log("drag end has been triggered");
            e.target.className='img5'
            });
                
    ////////////////////////////////////////////////        
            
        
    box1.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log("drag over has been triggered");
        
        
    })
    box1.addEventListener('dragenter',()=>{
        console.log("drag enter has been triggered");
        
    })
    box1.addEventListener('dragleave',()=>{
        console.log("drag leave has been triggered");
        
        
    })
    box1.addEventListener('drop',(e)=>{
        console.log("drag drop has been triggered");
        console.log("this is drag image",dragImage);
        console.log("this sis topping",topping);
        if(base){

            // e.target.append(dragImage);
            // this.className = "img1";
            document.querySelector(".box1").className=dragImage
            document.querySelector(".main").style.visibility="visible"
        }
        if(topping){
        console.log("working");
            // e.target.classList="top1"
            // document.querySelector(".box1").classList.add("img2")
           box1.className=toppingImage

        }
 
       
        
    })
