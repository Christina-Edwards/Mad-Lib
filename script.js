function buildLib() {
    // console.log("Entered buildLib()");

    const pluralNounValue = document.getElementById("inputPluralNoun").value;
    const noun1Value = document.getElementById("inputNoun1").value;
    const noun2Value = document.getElementById("inputNoun2").value;
    const songValue = document.getElementById("inputSong").value;
    const verbValue = document.getElementById("inputVerb").value;

    // build result
    resultDiv.innerHTML = "Learning to drive is a tricky process. There are a few rules you must follow.<br><br>" +
        "1. Keep two " + pluralNounValue + " on the steering wheel at all times.<br><br>" +
        "2. Step on the " + noun1Value + " to speed up and the " + noun2Value + " to slow down.<br><br>" +
        "3. Your parents will just LOVE it if you play &quot;" + songValue + "&quot; on the radio.<br><br>" +
        "4. Make sure to honk your horn when you see " + verbValue + " on a street sign.";

    // show result
    visibleElement("resultContainer", true);

    // hide form
    visibleElement("formContainer", false);
}

// EVENT to work with submit BUTTON with TYPE SUBMIT
onEvent("myForm", "submit", function (event) {
    //console.log("Type submit clicked");

    // this prevents the form from being reset after click
    event.preventDefault();
    buildLib();
});

// EVENT to work with submit BUTTON with TYPE BUTTON
onEvent("submitButton2", "click", function () {
    //console.log("Type button clicked");

    buildLib();
});

// EVENT for the reset BUTTON with TYPE RESET
onEvent("resetButton", "click", resetLib);

// FUNCTION to work with the reset BUTTON with TYPE RESET
function resetLib() {
    document.getElementById("myForm").reset();

    visibleElement("resultContainer", false);
    visibleElement("formContainer", true);
}

// EVENT for the reset BUTTON with TYPE BUTTON
onEvent("resetForm", "click", resetForm);

// FUNCTION to work with the reset BUTTON with TYPE BUTTON
function resetForm() {

    setValue("inputPluralNoun", "");
    setValue("inputNoun1", "");
    setValue("inputNoun2", "");
    setValue("inputSong", "");
    setValue("inputVerb", "");

    visibleElement("resultContainer", false);
    visibleElement("formContainer", true);
}
