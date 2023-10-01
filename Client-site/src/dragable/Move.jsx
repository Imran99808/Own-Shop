import React, { useEffect, useRef, useState} from 'react'

import './move.css'
// {children,dots,iShow,circle}
let btCount=0;



// let clicked=false;
let smoth=false;
let sPosition=0;
 let i=false;

function Move({children,dots,iShow,circle,prevArrow,NextArrow,display,stricky,cb,media}) {
  
 
   
  let length;let client;let iShow2;let translate=display?'translate':'translateY';
  
  iShow2=!display?iShow:1;
 iShow=!display?1:iShow;



   circle?length=children.length+(2*parseInt(iShow)):length=children.length;
     
     const iWidth=100;
   
    const parentElement=useRef();
    
    const[first,setFirst]=useState()
    const[innerWidth,setInner]=useState(window.innerWidth);
     const[itemswidth,setwidth]=useState(0);
   
     const[itemWidth,setItem]=useState()
     const[itemHeight,setItemH]=useState()
    const[rootH,setH]=useState(0);
    const[rootW,setW]=useState(0);
    const[position,setPosition]=useState(0);
    const[width,setWidth]=useState(0);
    const[position2,setPosition2]=useState(0);
  //  const[sPosition,setSposition]=useState();
   const[side,setSide]=useState(false);
    const [clicked,setClicked]=useState(false);
  //  const[smoth,setSmoth]=useState(false);
    
   

 useEffect(()=>{
 
  
  setW(parentElement.current.offsetWidth);
  setH(parentElement.current.offsetHeight);
  if(circle){
  setPosition(-itemWidth*iShow);
 setFirst(itemWidth*iShow)
  setWidth(itemWidth*iShow);
  }
  else{
    setPosition(0);
    setFirst(0)
     setWidth(0);
  }
 
 },[circle,itemHeight])


   function click(e){
   
    setPosition(-e.target.id);
    setWidth( parseInt(e.target.id));
    // setSmoth(true);
       smoth=true;
  
   }
    function downHandaler(e){
      client=!e.touches?display?e.nativeEvent.clientX:e.nativeEvent.clientY:display?e.touches[0].clientX:e.touches[0].clientY;
     !e.touches&&e.preventDefault();
     
         setClicked(true);
        // clicked=true;
         setPosition2(position);
        //  setSposition((client)-position);
        sPosition=client-position;
      
        // setSmoth(false);
        smoth=false;
        
       
      
    }
   
   
    function moveHandaler(e){
    
    
    
        if(clicked){
          
            !e.touches&&e.preventDefault();
            client=!e.touches?display?e.nativeEvent.clientX:e.nativeEvent.clientY:display?e.touches[0].clientX:e.touches[0].clientY;
            let fixedp=client-sPosition;
           
            let lastP=display?(itemswidth)-rootW:itemHeight*length-rootH;
            (fixedp>0||fixedp<-(lastP))&&(fixedp=position2-fixedp<0?0:-(lastP));
             setPosition(fixedp);
            
        
        // this logic hel side touch decide work not work
          
         stricky&&(setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4))     //(position<=0&&position>=-(itemWidth*length-itemWidth*iShow)&&display)&&  
        


        //  this line code help sitkcy mode draggable time 
        // &&(position<=0&&position>=-(itemWidth*length-itemWidth*iShow))
        if(((position2-position<=-itemWidth||position2-position>=itemWidth))){
     
          position2<=position? setPosition2(position2+itemWidth):setPosition2(position2-itemWidth);
         }
        

         
            }
    }
    
   
   
     
    function upHandler(){
     
      clicked&&positioncheck()
    }
    function positioncheck(){
       
        // clicked=false;
          setClicked(false);
        // setSmoth(true);
        smoth=true;
        if(!side&&stricky){
          setPosition(position2);
       
        }
       
        else if(side){
        
               position2<=position? setPosition(position2+itemWidth):setPosition(position2-itemWidth);
              
             
               position2<=position? setWidth(width-itemWidth):setWidth(width+itemWidth);
              
           
           
             setSide(false)
           
        }
      
    } 
    
      
        
     
      

    

      useEffect(()=>{
        
       
        // rootH=parentElement.current.offsetHeight;
        // rootW=parentElement.current.offsetWidth;
      
          media&& setItem(parseInt( parentElement.current.offsetWidth/iShow)) ;
          media&&setwidth( (parentElement.current.offsetWidth/iShow)*length);
          setItemH(parseInt(parentElement.current.offsetHeight/iShow2));
         const handaleResize=()=>{
            setW(parentElement.current.offsetWidth);
          media&&setItem(parseInt( parentElement.current.offsetWidth/iShow));
            media&&setwidth( (parentElement.current.offsetWidth/iShow)*length);
           setItemH(parseInt(parentElement.current.offsetHeight/iShow2));
            cb&&cb();
          
         }
          window.addEventListener("resize",handaleResize);
         
         return ()=>{
      
          setItemH(0)
         !media&&setwidth(0);
          window.removeEventListener('resize',handaleResize)
         }
     },[iShow,iShow2])
    
    

   
   function box(value){
    
    const  div=parentElement.current;
    let itemsWidth=0;
    const arr=[];
    let arr2=[];
    let count;
    for(let i=0;i<length;i++){

    (circle&&i<parseInt(iShow))?count=children[(children.length-parseInt(iShow))+i]:circle?count=children[i-parseInt(iShow)]:count=children[i];
    (circle&&i>=children.length+parseInt(iShow))&&(count=children[i-(children.length+parseInt(iShow))]);
   
      arr.push(<div key={i} id={i} className='c'  aria-hidden={itemWidth*i!=width&&"true"} style={{width:display?itemswidth===undefined?`${iWidth/iShow}%`:media?`${itemWidth}px`:'auto':'auto',height:!display&&itemHeight?`${itemHeight}px`:'auto', whiteSpace:'nowrap'}}  >{count}</div>);
        i<children.length&& arr2.push( <li key={i}><button className='btn ' id={itemWidth==undefined?i:itemWidth*(i+1)} onClick={click} style={{opacity:(itemWidth*(i+1)==width)||((width==0&&i==children.length-iShow)||(width==itemWidth*(children.length+iShow)&&i==0))?'1':''}} ></button></li>);
       
         (!media&&div)&&( itemsWidth+=div.children[0].children[i].offsetWidth);
      
    }
   
  
  if(value=="card"){
    
   
    (!media&&div&&!itemswidth)&&(setwidth(itemsWidth));
   
    return arr;
  }else{
   return arr2;
  }
}


  return (

<div className='slider'>
{prevArrow&&React.cloneElement(prevArrow,btCount==0&&{
  
  onClick:(e)=>{
     setPosition(position+itemWidth);
     btCount++;
     setWidth(width-itemWidth)
    //  setSmoth(true);
     
 
   
}


 
 })}

   <div className='slide'
     onMouseDown={downHandaler}
       onTouchStart={downHandaler}
     onMouseMove={moveHandaler}
     onTouchMove={moveHandaler}
     onMouseUp={upHandler}
     onTouchEnd={upHandler}
     onMouseLeave={upHandler}
      
     ref={parentElement}
      >


      {/* width:display?itemWidth===undefined?`${(iWidth*length/iShow)}%`:`${(itemswidth}px`:'', */}
    <div className={`slider-container ${smoth&&'smoth'}`} style={{width:display?!itemswidth?`${(iWidth*length/iShow)}%`:`${itemswidth}px`:'', transform: `${translate}(${ position}px)` ,display:display?'flex':'block'} } onTransitionEnd={()=>{
      //  setSmoth(false) 
      smoth=false;
       btCount=0;
          if((position==0|| position==-itemWidth*(children.length+iShow))&&circle){
            
           
              setPosition(position==0?-itemWidth*children.length: -first)
               setWidth(position==0?itemWidth*children.length: first)
                  }

               
          //  circleItem();     

    }}
     >
       {box('card')} 
      
    </div>
  
    </div>



{/* rigth button */}
{NextArrow&&React.cloneElement(NextArrow,btCount==0&&{
     
     onClick:()=>{
      setPosition(position-itemWidth);
      setWidth(width+itemWidth)
      btCount++;
    
      // setSmoth(true);
    },
})}





    <ul style={{display:dots==1?'':'none'}}>
    
   
   {box('dot')} 
    </ul>


    </div>
  )
}

export default Move
