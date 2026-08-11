class OpenFinOpsInputs {
    constructor(
        // Define parameters for the constructor
        taxYear,
        filingStatus,
        projectedMAGI,
        projectedTaxableIncome,
        projectedRothIRAConversion,
        projected401kIRAWithdrawals
    ) {
        // Initialize your class properties here
        this.taxYear = taxYear;
        this.filingStatus = filingStatus;
        this.projectedMAGI = projectedMAGI;
        this.projected401kIRAWithdrawals = projected401kIRAWithdrawals;
        this.projectedTaxableIncome = projectedTaxableIncome;
        this.projectedRothIRAConversion = projectedRothIRAConversion;
    }

    // Add methods to manipulate or retrieve data from the class as needed
    grossToMagi(grossIncome, adjustments) {
        
        this.projectedMAGI = grossIncome - adjustments;
    }
}

export default OpenFinOpsInputs;