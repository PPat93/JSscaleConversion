let calculations = (lengthInRealityCalc, lengthInCADCalc, targetScaleCalc) => {
    let cmToCADFactor = 79128 / 21; // 1 cm w cadzie to 3768 jednostek - pkt odniesienia
    // let lengthInRealityCalc; // metrow
    // let lengthInCADCalc; // jedn
    let scale = 0;
    // let targetScaleCalc;
    let wspolczynnikDoPomnozeniaDo2000 = 0;


    let conversionMetersToCentimeters = lengthInRealityCalc * 100;
    let realLengthInCAD = conversionMetersToCentimeters * cmToCADFactor;  // jeden 1cm w rzeczywistości to jednostek w  cadzie SKALA 1:1
    let currentScale = 1 / (lengthInCADCalc / realLengthInCAD);
    let oneMeterNow = lengthInCADCalc / lengthInRealityCalc;

    let targetScaleFactor = 1 / (targetScaleCalc / currentScale);

    let targetOneMeterInCAD = oneMeterNow * targetScaleFactor;

    let currentScaleOutput = `Obecna skala to 1 :  ${currentScale}`;
    let targetScaleFactorOutput = `Współczynnik skali docelowej to ${targetScaleFactor}`;
    let currentOneMeter = `Obecnie jeden metr to ${oneMeterNow} jednostek.`;
    let targetOneMeter = `Jeden metr w skali ${targetScaleCalc} to ${targetOneMeterInCAD}`;


//cleaning previous elements from output container
    let allOutputElements = document.getElementById("outputContainer");
    allOutputElements.innerHTML = "";

//current scale output
    let currentScaleOutputDIV = document.createElement("DIV");
    currentScaleOutputDIV.innerHTML = currentScaleOutput;
    allOutputElements.appendChild(currentScaleOutputDIV);

//target scale factor output
    let targetScaleFactorOutputDIV = document.createElement("DIV");
    targetScaleFactorOutputDIV.innerHTML = targetScaleFactorOutput;
    allOutputElements.appendChild(targetScaleFactorOutputDIV);

//current one meter in CAD
    let currentOneMeterDIV = document.createElement("DIV");
    currentOneMeterDIV.innerHTML = currentOneMeter;
    allOutputElements.appendChild(currentOneMeterDIV);

//current one meter in CAD
    let targetOneMeterDIV = document.createElement("DIV");
    targetOneMeterDIV.innerHTML = targetOneMeter;
    allOutputElements.appendChild(targetOneMeterDIV);
};
