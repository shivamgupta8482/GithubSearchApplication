import styles from "./SimpleCard.module.css"

export default function SimpleCard({img,name}){
    return(
        <div className={styles.container}>

   
    <div className="card" style={{display:"flex"}}>
      <img src={img} className={styles.img} alt="Lago di Braies"/>

      
      

        
        <h1 className={styles.name}>{name}</h1>

       
      


    </div>
  </div>
    )
}