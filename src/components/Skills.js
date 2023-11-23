import styles from './skills.module.css' 
function Skills() {
 
  return (
    <div className={styles.maindiv} >
       <ul id={styles.ol} className="list-group d-flex flex-row flex-wrap justify-content-center">
             <li className="m-2 w-25  list-group-item">HTML</li>
             <li className="m-2 w-25 list-group-item">Css</li>
             <li className="m-2 w-25 list-group-item">Javascript</li>
             <li className="m-2 w-25 list-group-item">React.Js</li>
             <li className="m-2 w-25 list-group-item">Redux</li>
             <li className="m-2 w-25  list-group-item">Bootstrap</li>
             <li className="m-2 w-25 list-group-item">Ajax</li>
             <li className="m-2 w-25 list-group-item">Jquery</li>
             <li className="m-2 w-25 list-group-item">Vue.Js</li>
             <li className="m-2 w-25 list-group-item">Vuxe</li>
              <li className="m-2 w-25 list-group-item">Vuetify</li>
               <li className="m-2 w-25 list-group-item">Git</li>



        </ul>
     
    </div>
  );
}

export default Skills;
