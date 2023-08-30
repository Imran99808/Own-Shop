import React,{useState,useContext, useEffect} from "react";
export const theme=React.createContext();

export let params={}
let match=0;







// route for
export function Route({path,children,element}) {
 
  const[toggole,setToggole]=useContext(theme);
  
   
    let p=window.location.pathname;
    
    let hpath=p.charAt(p.length-1)==='/'&&p.length!=1?p.slice(1,p.length-1):p.slice(1,p.length);
    let ipath=path.charAt(path.length-1)==='/'&&path.length!=1?(path.search('/:')===0?path.slice(0,path.length-1):path.slice(1,path.length-1)):(path.search('/:')===0?path:path.slice(1,path.length));
    console.log(hpath,ipath);
   
 
    // const hpathSlideIndex=hpath.search('/')>=0?hpath.search('/'):0;
    const boathpathSlideIndex=ipath.search('/:');
    console.log(ipath.slice(0,boathpathSlideIndex))
    console.log(hpath.slice(0,boathpathSlideIndex))
    
    if(ipath.search('/:')>=0&&ipath.slice(0,boathpathSlideIndex)===hpath.slice(0,boathpathSlideIndex)&&match==0){
      
      params={};
   
      ipath=ipath.slice(boathpathSlideIndex+2,ipath.length);
      hpath=hpath.search('/')<0?hpath.slice(boathpathSlideIndex,hpath.length):hpath.slice(boathpathSlideIndex+1,hpath.length);
     console.log(ipath); 
     console.log(hpath);
     
     
   
    //  console.log(ipath.replace(iPRelace,''));
     
          while(ipath.search('/:')>=0&&hpath.search('/')>=0){
            const iPRelace=ipath.slice(0,ipath.search('/:')+2);
           const hPReplace=hpath.slice(0,hpath.search('/')+1);

          params[ipath.slice(0,ipath.search('/:'))]=hpath.slice(0,hpath.search('/'));
      console.log(hpath)
          hpath=hpath.replace(hPReplace,'');
          ipath=ipath.replace(iPRelace,'');
         }
      
    (hpath&&ipath&&ipath.search('/:')<0&&hpath.search('/')<0)&&(params[ipath]=hpath,hpath=true,ipath=true);
    console.log(params)
      
      
     
    }
    hpath===ipath&&(match+=1);
    console.log(match);

    return hpath===ipath&&match==1?element:null;

  
  }
  
// link for
export function Link({className,to,children}) {
   const[toggole,setToggole]=useContext(theme);
 
  console.log('link')
 function handaleClick(e){
  
  e.preventDefault();
  
   console.log(to)
   if(window.location.pathname!=to){
   window.history.pushState({}," ",to)
   setToggole(!toggole);
   }
  //  scroll(0,0)++++++++++++++++++++++++++++++++++++++++
   }
  
  
  return <a href={to} className={className}  onClick={handaleClick}>{children}</a>
}







export function Rerender({children}){
   match=0;
  const [toggole,setToggole]=useState(true);
    window.onpopstate = function (event) {
   
     
       setToggole(!toggole);
      

   };

   return(
    <>
     <theme.Provider value={[toggole,setToggole]}> {children}</theme.Provider>  
  
 
   
    </>
   )

}
























































































