import React, { useEffect, useRef, useState} from 'react'

import './move.css'
// {children,dots,iShow,circle}
let btCount=0;

function Move({children,dots,iShow,circle,prevArrow,NextArrow,display}) {
  // const{children,dots,iShow,circle}=props;
  
  let length;let client;let translate=display?'translate':'translateY';
   circle?length=children.length+(2*parseInt(iShow)):length=children.length;
     
     const iWidth=100;
    const element=useRef();
    const parentElement=useRef();
    const[first,setFirst]=useState()
    const[innerWidth,setInner]=useState(window.innerWidth)
     const[itemWidth,setItem]=useState()
     const[itemHeight,setItemH]=useState()
    
    const[position,setPosition]=useState(0);
    const[width,setWidth]=useState(0);
    const[position2,setPosition2]=useState();
   const[sPosition,setSposition]=useState();
   const[side,setSide]=useState(false);
   const [clicked,setClicked]=useState(false);
   const[smoth,setSmoth]=useState(false);
    
   

 useEffect(()=>{
  console.log(length)
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
 
 },[itemWidth,circle])


   function click(e){
   
    setPosition(-e.target.id);
    setWidth( parseInt(e.target.id));
    setSmoth(true);
   
  
   }
    function downHandaler(e){
      client=display?e.nativeEvent.clientX:e.nativeEvent.clientY;
      e.preventDefault();
        setClicked(true);
        
        setPosition2(position);
        setSposition((client)-position);
        setSmoth(false);
        
        // console.log(sPosition);-parentElement.current.offsetLeft this is a child box left count
      
      
    }
    console.log(itemHeight)
    console.log(itemHeight*length)
    function moveHandaler(e){
      
      // console.log(client-sPosition)
      
      // &&((client-sPosition<=0&&client-sPosition>=-((itemHeight*length)-itemHeight))||display)
        if(clicked){
             e.preventDefault();
            client=display?e.nativeEvent.clientX:e.nativeEvent.clientY;
            let fixedp=client-sPosition;
            (position<=0&&fixedp>0)&&(fixedp=0)
            setPosition(fixedp);
          
          // (!circle||(position<=0&&((position>=-((itemHeight*length)-itemHeight)))))
        //  circle?((position<=0&&position>=-(itemWidth*children.length+2*iShow)-itemWidth*iShow)&&setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4)):((position<=0&&position>=-itemWidth*children.length)&&setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4))


        // this logic hel side touch decide work not work
        // console.log(position<=0&&position>=-(itemWidth*length-itemWidth*iShow))
         (position<=0&&position>=-(itemWidth*length-itemWidth*iShow)&&display)&&(setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4))
          // position>=0==false&& setSide(position-position2<-itemWidth/4||position-position2>itemWidth/4)
      //  console.log(position<=0&&position>=-(itemWidth*length-itemWidth*iShow))
         if(((position2-position<=-itemWidth||position2-position>=itemWidth)&&(position<=0&&position>=-(itemWidth*length-itemWidth*iShow)))&&iShow!==1){
         
           position2<=position? setPosition2(position2+itemWidth):setPosition2(position2-itemWidth);
          }

         
            }
    }
    console.log(position,(itemWidth*length-itemWidth*iShow))
    console.log(position)

    function positioncheck(){
      
        setClicked(false);
        setSmoth(true);
        if(!side&&display){
          setPosition(position2);
         
        }
        else if(side){
        
               position2<=position? setPosition(position2+itemWidth):setPosition(position2-itemWidth);
              
             
               position2<=position? setWidth(width-itemWidth):setWidth(width+itemWidth);
              
           
           
             setSide(false)
           
        }
      
    } 
    
      
        
      
            

    

      useEffect(()=>{
        
      
        
        setItem(parseInt( parentElement.current.offsetWidth/iShow));
        setItemH(parseInt( parentElement.current.offsetHeight));
         const handaleResize=()=>{
           setItem(parseInt( parentElement.current.offsetWidth/iShow));
           setItemH(parseInt( parentElement.current.offsetHeight));
           
         }
          window.addEventListener("resize",handaleResize);
    
         return ()=>window.removeEventListener('resize',handaleResize)
     },[iShow])
    

   function box(value){
    
    const arr=[];
    let arr2=[];
    let count;
    for(let i=0;i<length;i++){

    (circle&&i<parseInt(iShow))?count=children[(children.length-parseInt(iShow))+i]:circle?count=children[i-parseInt(iShow)]:count=children[i];
    (circle&&i>=children.length+parseInt(iShow))&&(count=children[i-(children.length+parseInt(iShow))]);
      
      arr.push(<div key={i} id={i}  aria-hidden={itemWidth*i!=width&&"true"} style={{width:itemWidth===undefined?`${iWidth/iShow}%`:`${itemWidth}px`}}  >{count}</div>);
        i<children.length&& arr2.push( <li key={i}><button className='btn ' id={itemWidth==undefined?i:itemWidth*(i+1)} onClick={click} style={{opacity:(itemWidth*(i+1)==width)||((width==0&&i==children.length-iShow)||(width==itemWidth*(children.length+iShow)&&i==0))?'1':''}} ></button></li>)
    }
    
 
  if(value=="card"){
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
     setSmoth(true);
     
 
   
}


 
 })}

   <div className='slide'
       
      onMouseDown={downHandaler}
      onMouseUp={()=>{
        //  setClicked(false);
         positioncheck();
      }}
      onMouseMove={moveHandaler}
      onMouseLeave={()=>{
        // setClicked(false)
          clicked&&positioncheck();
     }}
     ref={parentElement}
      >


      
    <div className={`slider-container ${smoth&&'smoth'}`} style={{width:display?itemWidth===undefined?`${(iWidth*length/iShow)}%`:`${(itemWidth*length)}px`:'auto', transform: `${translate}(${ position}px)` ,display:display?'flex':'block'} } onTransitionEnd={()=>{
       setSmoth(false) 
       btCount=0;
          if((position==0|| position==-itemWidth*(children.length+iShow))&&circle){
            
           
              setPosition(position==0?-itemWidth*children.length: -first)
               setWidth(position==0?itemWidth*children.length: first)
                  }

               
          //  circleItem();     

    }} ref={element}>
       {box('card')} 
      
    </div>
  
    </div>



{/* rigth button */}
{NextArrow&&React.cloneElement(NextArrow,btCount==0&&{
     
     onClick:()=>{
      setPosition(position-itemWidth);
      setWidth(width+itemWidth)
      btCount++;
    
      setSmoth(true);
    },
})}





    <ul style={{display:dots==1?'':'none'}}>
    
   
   {box('dot')} 
    </ul>


    </div>
  )
}

export default Move
