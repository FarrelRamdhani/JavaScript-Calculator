window.onload = startFunction;

function startFunction(){
    clearMatrixA();
    clearMatrixB();
    clearOutputR();
}

function clearMatrixA(){
    document.getElementById("A11").value = 0;
    document.getElementById("A12").value = 0;
    document.getElementById("A13").value = 0;
    document.getElementById("A21").value = 0;
    document.getElementById("A22").value = 0;
    document.getElementById("A23").value = 0;
    document.getElementById("A31").value = 0;
    document.getElementById("A32").value = 0;
    document.getElementById("A33").value = 0;
}

function clearMatrixB(){
    document.getElementById("B11").value = 0;
    document.getElementById("B12").value = 0;
    document.getElementById("B13").value = 0;
    document.getElementById("B21").value = 0;
    document.getElementById("B22").value = 0;
    document.getElementById("B23").value = 0;
    document.getElementById("B31").value = 0;
    document.getElementById("B32").value = 0;
    document.getElementById("B33").value = 0;
}

function clearOutputR(){
    document.getElementById("R11").value = 0;
    document.getElementById("R12").value = 0;
    document.getElementById("R13").value = 0;
    document.getElementById("R21").value = 0;
    document.getElementById("R22").value = 0;
    document.getElementById("R23").value = 0;
    document.getElementById("R31").value = 0;
    document.getElementById("R32").value = 0;
    document.getElementById("R33").value = 0;

    document.getElementById("resultVal").innerHTML = "";

    document.getElementById("resultDesc").innerHTML = "";
}

function AplusB(){
    clearOutputR();

    document.getElementById("R11").value = parseFloat(document.getElementById("A11").value) + parseFloat(document.getElementById("B11").value);
    document.getElementById("R12").value = parseFloat(document.getElementById("A12").value) + parseFloat(document.getElementById("B12").value);
    document.getElementById("R13").value = parseFloat(document.getElementById("A13").value) + parseFloat(document.getElementById("B13").value);
    document.getElementById("R21").value = parseFloat(document.getElementById("A21").value) + parseFloat(document.getElementById("B21").value);
    document.getElementById("R22").value = parseFloat(document.getElementById("A22").value) + parseFloat(document.getElementById("B22").value);
    document.getElementById("R23").value = parseFloat(document.getElementById("A23").value) + parseFloat(document.getElementById("B23").value);
    document.getElementById("R31").value = parseFloat(document.getElementById("A31").value) + parseFloat(document.getElementById("B31").value);
    document.getElementById("R32").value = parseFloat(document.getElementById("A32").value) + parseFloat(document.getElementById("B32").value);
    document.getElementById("R33").value = parseFloat(document.getElementById("A33").value) + parseFloat(document.getElementById("B33").value);

    document.getElementById("resultDesc").innerHTML="A + B";
}

function AminB() {
    clearOutputR();

    document.getElementById("R11").value = parseFloat(document.getElementById("A11").value) - parseFloat(document.getElementById("B11").value);
    document.getElementById("R12").value = parseFloat(document.getElementById("A12").value) - parseFloat(document.getElementById("B12").value);
    document.getElementById("R13").value = parseFloat(document.getElementById("A13").value) - parseFloat(document.getElementById("B13").value);
    document.getElementById("R21").value = parseFloat(document.getElementById("A21").value) - parseFloat(document.getElementById("B21").value);
    document.getElementById("R22").value = parseFloat(document.getElementById("A22").value) - parseFloat(document.getElementById("B22").value);
    document.getElementById("R23").value = parseFloat(document.getElementById("A23").value) - parseFloat(document.getElementById("B23").value);
    document.getElementById("R31").value = parseFloat(document.getElementById("A31").value) - parseFloat(document.getElementById("B31").value);
    document.getElementById("R32").value = parseFloat(document.getElementById("A32").value) - parseFloat(document.getElementById("B32").value);
    document.getElementById("R33").value = parseFloat(document.getElementById("A33").value) - parseFloat(document.getElementById("B33").value);

    document.getElementById("resultDesc").innerHTML = "A - B";
}

function AtimesB(){
    clearOutputR();

    var A11 = document.getElementById("A11").value;
    var A12 = document.getElementById("A12").value;
    var A13 = document.getElementById("A13").value;
    var A21 = document.getElementById("A21").value;
    var A22 = document.getElementById("A22").value;
    var A23 = document.getElementById("A23").value;
    var A31 = document.getElementById("A31").value;
    var A32 = document.getElementById("A32").value;
    var A33 = document.getElementById("A33").value;

    var B11 = document.getElementById("B11").value;
    var B12 = document.getElementById("B12").value;
    var B13 = document.getElementById("B13").value;
    var B21 = document.getElementById("B21").value;
    var B22 = document.getElementById("B22").value;
    var B23 = document.getElementById("B23").value;
    var B31 = document.getElementById("B31").value;
    var B32 = document.getElementById("B32").value;
    var B33 = document.getElementById("B33").value;

    document.getElementById("R11").value = (parseFloat(A11) * parseFloat(B11)) + (parseFloat(A12) * parseFloat(B21)) + (parseFloat(A13) * parseFloat(B31));
    document.getElementById("R12").value = (parseFloat(A11) * parseFloat(B12)) + (parseFloat(A12) * parseFloat(B22)) + (parseFloat(A13) * parseFloat(B32));
    document.getElementById("R13").value = (parseFloat(A11) * parseFloat(B13)) + (parseFloat(A12) * parseFloat(B23)) + (parseFloat(A13) * parseFloat(B33));
    document.getElementById("R21").value = (parseFloat(A21) * parseFloat(B11)) + (parseFloat(A22) * parseFloat(B21)) + (parseFloat(A23) * parseFloat(B31));
    document.getElementById("R22").value = (parseFloat(A21) * parseFloat(B12)) + (parseFloat(A22) * parseFloat(B22)) + (parseFloat(A23) * parseFloat(B32));
    document.getElementById("R23").value = (parseFloat(A21) * parseFloat(B13)) + (parseFloat(A22) * parseFloat(B23)) + (parseFloat(A23) * parseFloat(B33));
    document.getElementById("R31").value = (parseFloat(A31) * parseFloat(B11)) + (parseFloat(A32) * parseFloat(B21)) + (parseFloat(A33) * parseFloat(B31));
    document.getElementById("R32").value = (parseFloat(A31) * parseFloat(B12)) + (parseFloat(A32) * parseFloat(B22)) + (parseFloat(A33) * parseFloat(B32));
    document.getElementById("R33").value = (parseFloat(A31) * parseFloat(B13)) + (parseFloat(A32) * parseFloat(B23)) + (parseFloat(A33) * parseFloat(B33));

    document.getElementById("resultDesc").innerHTML = "A x B";
}

function determinantA(){
    clearOutputR();

    var A11 = document.getElementById("A11").value;
    var A12 = document.getElementById("A12").value;
    var A13 = document.getElementById("A13").value;
    var A21 = document.getElementById("A21").value;
    var A22 = document.getElementById("A22").value;
    var A23 = document.getElementById("A23").value;
    var A31 = document.getElementById("A31").value;
    var A32 = document.getElementById("A32").value;
    var A33 = document.getElementById("A33").value;

    var determinan = (parseFloat(A11) * parseFloat(A22) * parseFloat(A33)) + (parseFloat(A12) * parseFloat(A23) * parseFloat(A31)) + (parseFloat(A13) * parseFloat(A21) * parseFloat(A32)) - (parseFloat(A13) * parseFloat(A22) * parseFloat(A31)) - (parseFloat(A11) * parseFloat(A23) * parseFloat(A32)) - (parseFloat(A12) * parseFloat(A21) * parseFloat(A33))

    document.getElementById("resultVal").innerHTML = determinan;
    document.getElementById("resultDesc").innerHTML = "Determinan A"
}

function determinantB() {
    clearOutputR();

    var B11 = document.getElementById("B11").value;
    var B12 = document.getElementById("B12").value;
    var B13 = document.getElementById("B13").value;
    var B21 = document.getElementById("B21").value;
    var B22 = document.getElementById("B22").value;
    var B23 = document.getElementById("B23").value;
    var B31 = document.getElementById("B31").value;
    var B32 = document.getElementById("B32").value;
    var B33 = document.getElementById("B33").value;

    var determinan = (parseFloat(B11) * parseFloat(B22) * parseFloat(B33)) + (parseFloat(B12) * parseFloat(B23) * parseFloat(B31)) + (parseFloat(B13) * parseFloat(B21) * parseFloat(B32)) - (parseFloat(B13) * parseFloat(B22) * parseFloat(B31)) - (parseFloat(B11) * parseFloat(B23) * parseFloat(B32)) - (parseFloat(B12) * parseFloat(B21) * parseFloat(B33))

    document.getElementById("resultVal").innerHTML = determinan;
    document.getElementById("resultDesc").innerHTML = "Determinan B"
}

function transposeA(){
    clearOutputR()

    document.getElementById("R11").value = document.getElementById("A11").value;
    document.getElementById("R12").value = document.getElementById("A21").value;
    document.getElementById("R13").value = document.getElementById("A31").value;
    document.getElementById("R21").value = document.getElementById("A12").value;
    document.getElementById("R22").value = document.getElementById("A22").value;
    document.getElementById("R23").value = document.getElementById("A32").value;
    document.getElementById("R31").value = document.getElementById("A13").value;
    document.getElementById("R32").value = document.getElementById("A23").value;
    document.getElementById("R33").value = document.getElementById("A33").value;

    document.getElementById("resultDesc").innerHTML = "Transpose A";
}


function transposeB() {
    clearOutputR();

    document.getElementById("R11").value = document.getElementById("B11").value;
    document.getElementById("R12").value = document.getElementById("B21").value;
    document.getElementById("R13").value = document.getElementById("B31").value;
    document.getElementById("R21").value = document.getElementById("B12").value;
    document.getElementById("R22").value = document.getElementById("B22").value;
    document.getElementById("R23").value = document.getElementById("B32").value;
    document.getElementById("R31").value = document.getElementById("B13").value;
    document.getElementById("R32").value = document.getElementById("B23").value;
    document.getElementById("R33").value = document.getElementById("B33").value;

    document.getElementById("resultDesc").innerHTML = "Transpose B";
}