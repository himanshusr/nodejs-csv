function textToJson(data) {
    var rows = data.split("\n");
    var json = [];
    var keys = [];
    rows.forEach((value, index) => {
        if (index < 1) {
            // **Step -3** Delimit the file using |
            keys = value.split("|");
        } else {
            // put the values from the following rows into object literals
            values = value.split("|");
            json[index - 1] = values.map((value, index) => {
                return {
                    [keys[index]]: value
                }
            }).reduce((currentValue, previousValue) => {
                return {
                    ...currentValue,
                    ...previousValue
                }
            });
            //use array.reduce to convert array to json object
        }
    })
    return json;
}
module.exports = textToJson;