function arrayToCSV(data) {
    csv = data.map((row) => {
        let dataToBeReturned = Object.values(row)
        // **Step-4**  Flag the transactions using AEPS
        if (dataToBeReturned[4].includes("AEPS")) {
            dataToBeReturned.push('AEPS')
        }
        // **Step-5** Flag the transactions using FEE CHG
        else if (dataToBeReturned[4].includes("FEE CHG")) {
            dataToBeReturned.push('FEE CHG')
        }
        else {
            dataToBeReturned.push('')
        }

        // Concat the string using " " so that commas get included in the Description column (Col E) 
        dataToBeReturned[4] = '"' + dataToBeReturned[4] + '"';

        // **Step-6, Step-7**  Copy  Col E(Description) to Col J, and delimit the column using /
        const lastColumn = dataToBeReturned[4].split('/');

        // Concat the string using " " so that commas get included in the Description column (Col J) 
        lastColumn[lastColumn.length - 2] = lastColumn[lastColumn.length - 2] + '"';
        lastColumn[lastColumn.length - 1] = lastColumn[lastColumn.length - 1].replace('"', '');
        dataToBeReturned.push(lastColumn);

        //Replace the /r, so that no new line is generated in CSV
        dataToBeReturned[dataToBeReturned.length - 3] = dataToBeReturned[dataToBeReturned.length - 3].replace("\r", "")
        console.log(dataToBeReturned)
        return dataToBeReturned;
    });
    let headingArr = Object.keys(data[0]);

    //Replace the /r, so that no new line is generated in CSV
    headingArr[headingArr.length - 1] = headingArr[headingArr.length - 1].replace("\r", "")
    headingArr.push('Flag');

    //Add the /r, so that we can know the end off the headings
    headingArr.push('Description\r');
    csv.unshift(headingArr);
    return csv.join('\n');
}

module.exports = arrayToCSV