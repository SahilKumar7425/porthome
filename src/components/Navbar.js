import styles from './Navbar.module.css'; 
import Icon from './Icon.js';
// import $ from 'jquery';
import React from 'react'; 
import { Outlet, Link } from "react-router-dom";
function Navbar()  {

const myStyle = {
     backgroundColor: "#e3f2fd",
     display:"flex",
     flexDirecation:"row",
     height:"50px",
     alignItems:"center"
  };
  
  function divdraw(){
     let divdrawhide = document.getElementById('divdrawhide')
        divdrawhide.classList.toggle(styles.showhide);

      } 

    

  return (
  	<>
        <nav id={styles.nav} className=" navbar-light bg-dark" style={myStyle}>

           <span id={styles.spanid} className="w-100 fs-4 pl-2" style={{marginLeft:"20px"}}>Port Folio</span>

            <div className="{styles.divmain}">
               <ol className={styles.orderlist}  style={{height:"50px"}}>
                     <Link className={styles.linknav} to="/portfo"> <li  className={styles.liststyle}>Home</li></Link>
                      
                      <Link className={styles.linknav} to="/skills"> <li  className={styles.liststyle}>Skills</li></Link>
                      <Link className={styles.linknav} to="/contact"> <li  className={styles.liststyle}><button type="button" className="btn btn-success">Contact</button></li></Link>
               </ol> 
                   <button onClick={divdraw} type="button" className={styles.icon}>{<Icon/>}</button>
               </div>        
             </nav>
             
            <div id="divdrawhide" className={styles.divdraw}>
                 <div className="btn-group d-flex flex-column align-items-center" role="group" aria-label="Basic outlined example">
                     <Link to="/porthome" onClick={divdraw} className={styles.Link}> <button type="button" className="w-75 m-1 btn bg-dark text-white">Home</button></Link>
                    
                     <Link to="/skills" onClick={divdraw} className={styles.Link}><button type="button" className="w-75 m-1 btn bg-dark text-white">Skills</button></Link>
                     <Link to="/contact" onClick={divdraw} className={styles.Link}><button type="button" className="w-75 m-1 btn bg-dark text-white">Contact</button></Link>
                 </div>
            </div>

 
    </>
  	)
}

export default Navbar