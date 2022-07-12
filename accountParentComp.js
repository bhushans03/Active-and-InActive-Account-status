import { LightningElement } from 'lwc';

export default class AccountParentComp extends LightningElement {

    
    selected 
handleClick(event){
     this.selected = event.target.label
}

get active(){
   return this.selected==='Active'
}
get inActive(){
    return this.selected==='InActive'
 }

}