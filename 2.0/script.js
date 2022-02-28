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

    document.getElementById("resultDesc").innerHTML = "";
}

function AplusB(){
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

    document.getElementById("R11").value = parseFloat(A11) + parseFloat(B11);
    document.getElementById("R12").value = parseFloat(A12) + parseFloat(B12);
    document.getElementById("R13").value = parseFloat(A13) + parseFloat(B13);
    document.getElementById("R21").value = parseFloat(A21) + parseFloat(B21);
    document.getElementById("R22").value = parseFloat(A22) + parseFloat(B22);
    document.getElementById("R23").value = parseFloat(A23) + parseFloat(B23);
    document.getElementById("R31").value = parseFloat(A31) + parseFloat(B31);
    document.getElementById("R32").value = parseFloat(A32) + parseFloat(B32);
    document.getElementById("R33").value = parseFloat(A33) + parseFloat(B33);

    document.getElementById("resultDesc").innerHTML="A + B";
}

function AminB() {
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

    document.getElementById("R11").value = parseFloat(A11) - parseFloat(B11);
    document.getElementById("R12").value = parseFloat(A12) - parseFloat(B12);
    document.getElementById("R13").value = parseFloat(A13) - parseFloat(B13);
    document.getElementById("R21").value = parseFloat(A21) - parseFloat(B21);
    document.getElementById("R22").value = parseFloat(A22) - parseFloat(B22);
    document.getElementById("R23").value = parseFloat(A23) - parseFloat(B23);
    document.getElementById("R31").value = parseFloat(A31) - parseFloat(B31);
    document.getElementById("R32").value = parseFloat(A32) - parseFloat(B32);
    document.getElementById("R33").value = parseFloat(A33) - parseFloat(B33);

    document.getElementById("resultDesc").innerHTML = "A - B";
}

function AtimesB(){
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

