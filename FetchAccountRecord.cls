public with sharing class FetchAccountRecord {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getActiveRecords(){
         return [select id,name,phone,Active__c,AnnualRevenue,Type,Industry from Account where Active__c='yes'];
    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getInActiveRecords(){
         return [select id,name,phone,Active__c,AnnualRevenue,Type,Industry from Account where Active__c='No'];
    }
}
