function createHeading(title, part) {
    var heading = document.createElement("h1");
    heading.innerText = title;
    part.append(heading);
}

createHeading("This is my exercise!", document.body);

var paragraphs = ["This is the first line.", "Then it comes a second line.", "Let's finish with this paragraph."];
for (let i = 0; i < paragraphs.length; i++) {
    var p = document.createElement("p");
    p.innerHTML = paragraphs[i];
    document.body.append(p);
}

var section1 = document.createElement("section");
document.body.append(section1);

createHeading("Here are some simple tables", section1);


function createOneDimTable(size) {
    var table = document.createElement("table");
    section1.append(table);

    var row = document.createElement("tr");
    table.append(row);

    for (let i = 0; i < size; i++) {
        var cell = document.createElement("td");
        cell.append(document.createTextNode(i + 1));
        row.append(cell);
    }
}

createOneDimTable(3);

createOneDimTable(5);

createOneDimTable(8);


var section2 = document.createElement("section");
document.body.append(section2);

createHeading("Now the second part...", section2);

function createMultTable(multSize) {
    var table = document.createElement("table");
    section2.append(table);

    var topHeader = table.insertRow(0);
    var firstHeaderCell = topHeader.insertCell(0);
    topHeader.style.fontWeight = "bold";

    for (let i = 0; i < multSize; i++) {
        var row = document.createElement("tr");
        table.append(row);

        var headerCell = topHeader.insertCell();
        headerCell.append(i + 1);

        var leftHeader = row.insertCell();
        leftHeader.append(i + 1);
        leftHeader.style.fontWeight = "bold";

        for (let r = 0; r < multSize; r++) {
            var cell = document.createElement("td");
            cell.append(document.createTextNode((r + 1) * (i + 1)));
            row.append(cell);
        }
    }
}

createMultTable(10);