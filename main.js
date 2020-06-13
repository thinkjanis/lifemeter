let age = 25; // TODO Birthdate instead of age 
let month = 6; // TODO Get month time from JS formula

let passed_month_age = (age * 12) + (month--); // All months except the curent one

let month_column_count = 50;
let total_age = 80;
let wm_chart = document.getElementById("wm_chart"); // main table

 // Table row html element
/*let td = document.createElement("TD"); // Table cell html element

let td_html = document.createTextNode("X") // Creates a value

td.appendChild(td_html);*/

let i;
for (i = 1; i < total_age; i++) {

    let tr = document.createElement("TR");
    tr.id = "row-" + String(i);
    wm_chart.appendChild(tr);

    var a;
    for (a = 1; a < month_column_count; a++) {
        if (a <= passed_month_age) {

            row_id = "row-" + String(i);
            let row = document.getElementById(row_id);

            let td = document.createElement("TD");
            let td_html = document.createTextNode("X");
            td.appendChild(td_html);

            row.appendChild(td);

        } else {
            
        }
    }

}