let pageCreation = () =>
{
    //InputContainer creation
    let inputContainer = document.getElementById("inputContainer");

//create length in reality input
    let divForInputLengthInReality = document.createElement("DIV");
    divForInputLengthInReality.setAttribute("id", "divForInputLengthInReality");
    inputContainer.appendChild(divForInputLengthInReality);
//label for length in reality input
    let labelForInputLengthInReality = document.createElement("LABEL");
    labelForInputLengthInReality.setAttribute("for","inputLengthInReality");
    labelForInputLengthInReality.innerText = `Długość wybranego odcinka w rzeczywistości (w metrach): `;
    divForInputLengthInReality.appendChild(labelForInputLengthInReality);
//length in reality input
    let inputLengthInReality = document.createElement("INPUT");
    inputLengthInReality.setAttribute("id", "lengthInReality");
    divForInputLengthInReality.appendChild(inputLengthInReality);



//create length in CAD input
    let divForInputLengthInCAD = document.createElement("DIV");
    divForInputLengthInCAD.setAttribute("id", "divForInputLengthInCAD");
    inputContainer.appendChild(divForInputLengthInCAD);
//label for length in CAD input
    let labelForInputLengthInCAD = document.createElement("LABEL");
    labelForInputLengthInCAD.setAttribute("for","inputLengthInCAD");
    labelForInputLengthInCAD.innerText = `Długość tego samego odcinka na rysunku (w jednostkach CAD): `;
    divForInputLengthInCAD.appendChild(labelForInputLengthInCAD);
//length in CAD input
    let inputLengthInCAD = document.createElement("INPUT");
    inputLengthInCAD.setAttribute("id", "lengthInCAD");
    divForInputLengthInCAD.appendChild(inputLengthInCAD);



//create target scale input
    let divForTargetScaleInput = document.createElement("DIV");
    divForTargetScaleInput.setAttribute("id", "divForTargetScaleInput");
    inputContainer.appendChild(divForTargetScaleInput);
//label for target scale input
    let labelForTargetScaleInput = document.createElement("LABEL");
    labelForTargetScaleInput.setAttribute("for","inputLengthInCAD");
    labelForTargetScaleInput.innerText = `Docelowa skala: `;
    divForTargetScaleInput.appendChild(labelForTargetScaleInput);
//target scale input
    let targetScaleInput = document.createElement("INPUT");
    targetScaleInput.setAttribute("id", "targetScale");
    divForTargetScaleInput.appendChild(targetScaleInput);

//submit button
    let submitButton = document.createElement("BUTTON");
    submitButton.setAttribute("id", "count");
    submitButton.setAttribute("onclick", "calculations(lengthInReality.value, lengthInCAD.value, targetScale.value)");
    submitButton.innerHTML = `LICZYMY!`;
    inputContainer.appendChild(submitButton);
};
