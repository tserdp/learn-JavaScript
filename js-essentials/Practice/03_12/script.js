/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import OpenFinOpsInputs from "./OpenFinOpsInputs.js";

const openFinOpsInputs = new OpenFinOpsInputs(
    2024, // taxYear
    "single", // filingStatus
    100000, // projectedMAGI
    80000, // projectedTaxableIncome
    5000, // projectedRothIRAConversion
    10000 // projected401kIRAWithdrawals
);

openFinOpsInputs.grossToMagi(120000, 20000);

console.log(openFinOpsInputs.projectedMAGI);
