import { LightningElement,track,wire,api} from 'lwc';
import getActiveRecords from '@salesforce/apex/FetchAccountRecord.getActiveRecords';
import getInActiveRecords from '@salesforce/apex/FetchAccountRecord.getInActiveRecords';

export default class AccountChildComp extends LightningElement {
    @api selectedValue

    get title(){
        return `${this.selectedValue} Records`
    }
    @track data
    columns = [
        { label: 'Account Name',fieldName: 'Name'},
        { label: 'Industry',fieldName: 'Industry'},
        { label: 'Phone',fieldName: 'Phone'},
        { label: 'Active',fieldName: 'Active__c'},
        { label: 'AnnualRevenue',fieldName: 'AnnualRevenue'},
        { label: 'Type',fieldName: 'Type'}
        
    ]
     
    @wire (getActiveRecords)
        wiredActiveAccounts({ error, data}) {
            if (data) {
                if(this.selectedValue==='Active'){
                    this.data = data; 
                    }    
               // console.log(JSON.stringify(data));
            } else if (error) {
               console.log(error);
            }else{
                console.log('unknown error')
            }
        }

        @wire (getInActiveRecords)
        wiredInActiveAccounts({ error, data}) {
            if (data) {
                if(this.selectedValue==='InActive'){
                this.data = data; 
                }   
               // console.log(JSON.stringify(data));
            } else if (error) {
               console.log(error);
            }else{
                console.log('unknown error')
            }
        }
    

}