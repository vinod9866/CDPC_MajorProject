import classes from './modal.module.css';

export const Model = (props)=>{

    const modelClick = (event)=>{
        event.preventDefault();
        props.parentCallback(false);
    }
    return<div className={classes.modal}>
    <div class={classes.modalContent + ' '+ props.style}>
    <span className={classes.close} onClick={modelClick}>X</span>
    <div className={classes.modalHeading}>
        {props.heading}
    </div>
        {props.children}
        
    </div>
    
  </div>
}