   
import styles from './Home.module.css' 

function Home() {
  return (
  	<div id={styles.backimg}>
          <div id={styles.iamid}>
            <h2 className={styles.heading}>Hi,<br/>I am
             Sahil Kumar <br/>
             </h2>
             <p className={styles.ptag}> A Front-End Developer with entry-level experience specializing in web development, user interface design, HTML,css, react and vuejs. Adept at identifying opportunities to enhance front-end design and improve the user experience.</p> 
           
              <div id={styles.deskimg}>
                 <a href="https://www.instagram.com/sahil_sharma7425/"><img className={styles.instlinkin} src="https://www.computerhope.com/jargon/i/instagram.png"/></a>
                 <a href="https://www.linkedin.com/in/sahil-kumar-aa4917283/"><img className={styles.instlinkin}  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"/></a>
              </div>
          </div>
          <div id={styles.deskimg}>
            <img id={styles.properimg} src="https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-5019746-4183733.png?f=webp"/>
          </div>
           
          
    </div>   
  );
}

export default Home;
