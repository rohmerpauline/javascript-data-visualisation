/* ************************** TABLE 1 ******************************** */

// RETRIEVE LABELS ELEMENTS FROM TABLE 1
let table1LabelRetrieve = document.getElementsByTagName("th");

// ARRAY with the years labels
let table1YearLabels = []; 
for (i=5; i <=15; i++){
    table1YearLabels.push(table1LabelRetrieve[i].textContent);
}

// RETRIEVE DATA ELEMENTS FROM TABLE 1
let table1DataRetrieve = document.getElementById("table1").querySelectorAll("td");

let tabledate = document.getElementsByTagName("td");

for (i=0; i<tabledate.length; i++) {
    let tablechange = document.getElementsByTagName("td")[i].innerHTML;
    newtable = tablechange.replace("," , ".");

    document.getElementsByTagName("td")[i].innerHTML = newtable;
} 

// ARRAY with all the table datas
let table1AllData = []; 

for (i=0; i<table1DataRetrieve.length; i++) {
    table1AllData.push(table1DataRetrieve[i].textContent)
} 

// Divide the array into different ARRAYS to represent the table ROWS
const n = 12;
let table1Rows = new Array(Math.ceil(table1AllData.length / n)).fill().map(_=> table1AllData.splice(0, 12));

//ARRAY with the countries name 
let table1labelCountry = [];
for(i=0; i<table1Rows.length; i++) {
    table1labelCountry.push(table1Rows[i][0]);
};

// Retrieve the countries name from the table1Rows 
for (i=0; i<table1Rows.length; i++) {
    table1Rows[i].shift();
};

/* ************************** GRAPH 1 ******************************** */

let graphTable1 = document.getElementById("graphTable1").getContext("2d");

graphTable1.height = 1500;

    let graphLineTable1 = new Chart(graphTable1, {
        type: "line",
        data : {            
            labels: table1YearLabels,
            datasets : [{
                label: table1labelCountry[0],
                borderColor : "#FFDB0D",
                data: table1Rows[0],
                fill : false,
            },{
                label: table1labelCountry[1],
                data: table1Rows[1],
                borderColor : "#5BA68A",
                fill : false,
            },{
                label: table1labelCountry[2],
                data: table1Rows[2],
                borderColor : "#203C73",
                fill : false,
            },{
                label: table1labelCountry[3],
                data: table1Rows[3],
                borderColor : "#BF2633",
                fill : false,
            },{
                label: table1labelCountry[4],
                data: table1Rows[4],
                borderColor : "#0D0D0D",
                fill : false,
            },{
                label: table1labelCountry[5],
                data: table1Rows[5],
                borderColor : "#D9D9D9",
                fill : false,
            },{
                label: table1labelCountry[6],
                data: table1Rows[6],
                borderColor : "#D95204",
                fill : false,
            },{
                label: table1labelCountry[7],
                data: table1Rows[7],
                borderColor : "#6BCCF2",
                fill : false,
            },{
                label: table1labelCountry[8],
                data: table1Rows[8],
                borderColor : "#F26430",
                fill : false,
            },{
                label: table1labelCountry[9],
                data: table1Rows[9],
                borderColor : "#456EBF",
                fill : false,
            },{
                label: table1labelCountry[10],
                data: table1Rows[10],
                borderColor : "#031F73",
                fill : false,
            },{
                label: table1labelCountry[11],
                data: table1Rows[11],
                borderColor : "#02733E",
                fill : false,
            },{
                label: table1labelCountry[12],
                data: table1Rows[12],
                borderColor : "#D96B2B",
                fill : false,
            },{
                label: table1labelCountry[13],
                data: table1Rows[13],
                borderColor : "#B0C1D9",
                fill : false,
            },{
                label: table1labelCountry[14],
                data: table1Rows[14],
                borderColor : "#038C3E",
                fill : false,
            },{
                label: table1labelCountry[15],
                data: table1Rows[15],
                borderColor : "#D9C043",
                fill : false,
            },{
                label: table1labelCountry[16],
                data: table1Rows[16],
                borderColor : "#14A638",
                fill : false,
            },{
                label: table1labelCountry[17],
                data: table1Rows[17],
                borderColor : "#594A45",
                fill : false,
            },{
                label: table1labelCountry[18],
                data: table1Rows[18],
                borderColor : "#F22E52",
                fill : false,
            },{
                label: table1labelCountry[19],
                data: table1Rows[19],
                borderColor : "#0B79D9",
                fill : false,
            },{
                label: table1labelCountry[20],
                data: table1Rows[20],
                borderColor : "#BF88AC",
                fill : false,
            },{
                label: table1labelCountry[21],
                data: table1Rows[21],
                borderColor : "#9CD9C8",
                fill : false,
            },{
                label: table1labelCountry[22],
                data: table1Rows[22],
                borderColor : "#F22E52",
                fill : false,
            },{
                label: table1labelCountry[23],
                data: table1Rows[23],
                borderColor : "#A67A60",
                fill : false,
            },{
                label: table1labelCountry[24],
                data: table1Rows[24],
                borderColor : "#F2EA7E",
                fill : false,
            }, 
            {
                label: table1labelCountry[25],
                data: table1Rows[25],
                borderColor : "#9FA7BF",
                fill : false,
            },{
                label: table1labelCountry[26],
                data: table1Rows[26],
                borderColor : "#44F281",
                fill : false,
            },{
                label: table1labelCountry[27],
                data: table1Rows[27],
                borderColor : "#A62D65",
                fill : false,
            },{
                label: table1labelCountry[28],
                data: table1Rows[28],
                borderColor : "#0424D9",
                fill : false,
            },{
                label: table1labelCountry[29],
                data: table1Rows[29],
                borderColor : "#F2785C",
                fill : false,
            },{
                label: table1labelCountry[30],
                data: table1Rows[30],
                borderColor : "#F22771",
                fill : false,
            },{
                label: table1labelCountry[31],
                data: table1Rows[31],
                borderColor : "#5F8C58",
                fill : false,
            }, {
                label: table1labelCountry[32],
                data: table1Rows[32],
                borderColor : "#A6A6A6",
                fill : false,
            },{
                label: table1labelCountry[33],
                data: table1Rows[33],
                borderColor : "#731B07",
                fill : false,
            },{
                label: table1labelCountry[34],
                data: table1Rows[34],
                borderColor : "#037F8C",
                fill : false,
            }, 
        ]},
        options : {
            title: {
                display: true,
                text: 'Table 1: Offences recorded by the police, 2002-12'
            }, 
            scales: {
                yAxes: [{
                    ticks: {
                        stepSize: 500,
                    }
                }]
            },
        }
    });

/* ************************** TABLE 2 ******************************** */

// RETRIEVE DATES ELEMENTS FROM TABLE 2

let table2YearRetrieve = document.getElementById("table2").querySelectorAll("th");

let table2Year1 = table2YearRetrieve[2].textContent; //2007-09 
let table2Year2 = table2YearRetrieve[3].textContent; // 2010-12

// RETRIEVE DATA ELEMENTS FROM TABLE 2
let table2DataRetrieve = document.getElementById("table2").querySelectorAll("td");

//Change England and Wales to delete the <br>
document.getElementById("table2").querySelectorAll("td")[21].innerHTML = "England and Wales(UK)";

// ARRAY with all the table datas
let table2AllData = []; 

for (i=0; i<table2DataRetrieve.length; i++) {
    table2AllData.push(table2DataRetrieve[i].textContent)
} 

// Divide the array into different ARRAYS to represent the table ROWS
const m = 3;
let table2Rows = new Array(Math.ceil(table2AllData.length / m)).fill().map(_=> table2AllData.splice(0, 3));

//Create 3 arrays from the data
let table2LabelCountry = []; // Only countries names
let table2Year1Data = []; // Only data from 2007-09
let table2Year2Data = []; // Only data from 2010-12
for(i=0; i<table2Rows.length; i++) {
    table2LabelCountry.push(table2Rows[i][0]);
    table2Year1Data.push(table2Rows[i][1]);
    table2Year2Data.push(table2Rows[i][2]);
};

/* ************************** GRAPH 2 ******************************** */

let graphTable2 = document.getElementById("graphTable2").getContext("2d");

    let graphLineTable2 = new Chart(graphTable2, {
        type: "bar",
        data : {            
            labels: table2LabelCountry,
            datasets : [{
                label : table2Year1,
                backgroundColor : "#3389F5",
                data: table2Year1Data,
            }, 
            {
                label : table2Year2,
                backgroundColor : "#F6B771",
                data: table2Year2Data,
            },
        ]}, 
        options : {
            title: {
                display: true,
                text: 'Prison population, average per year, 2007-09 and 2010-12 (per 100,000 inhabitants)'
            }
        }
    });

    /* ****************** LIVE UPDATING CHART AJAX / JSON ****************** */

    let graph3Array = document.getElementById("graph3").getContext("2d");

