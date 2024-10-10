// EL PROBLEMA = DE COFLA

dineroCofla = prompt("cuanto dinero tienes Cofla??");
dineroRoberto = prompt("cuanto dinero tienes Roberto??");
dineroPedro = parseFloat(prompt("¿Cuánto dinero tienes Pedro?"));

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla <1){
alert(" Cofla ,comprate el helado ");
alert("y te sobra" +  (dineroCofla -0.6));
}
else if (dineroCofla >= 1 && dineroCofla <1.6) {
    alert(" Cofla, comprate el helado de crema1 ");
    alert("y te sobra" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.6 && dineroCofla <1.7) {
    alert(" Cofla ,comprate el helado de crema2 ");
    alert("y te sobra" + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla <1.8) {
    alert(" Cofla ,comprate el helado de crem3 ");
    alert("y te sobra" + (dineroCofla -1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla <2.9) {
    alert(" Cofla ,comprate el helado de crema ");
    alert("y te sobra" + (dineroCofla -1.8));
}

else if (dineroCofla >= 2.9 ) {
    alert(" Cofla, comprate con confeti o helado de pote ");
    alert("y te sobra" + (dineroCofla -2.9));

}else{
    alert(" Cofla ,lo siento no hay ");
}
   

// EL PROBLEMA = DE RobRoberto


if (dineroRoberto >= 0.6 && dineroRoberto <1){
alert(" Roberto comprate el helado ");
}
else if (dineroRoberto >= 1 && dineroRoberto <1.6) {
    alert(" Roberto comprate el helado de crema1 ");
}
else if (dineroRoberto >= 1.6 && dineroRoberto <1.7) {
    alert(" Roberto comprate el helado de crema2 ");
}

else if (dineroRoberto >= 1.7 && dineroRoberto <1.8) {
    alert(" Roberto comprate el helado de crem3 ");
}
else if (dineroRoberto >= 1.8 && dineroRoberto <2.9) {
    alert(" Roberto comprate el helado de crema ");
}

else if (dineroRoberto >= 2.9 ) {
    alert(" Roberto comprate con confeti o helado de pote ");

}else{
    alert(" Roberto lo siento no hay ");
}
   

// EL PROBLEMA = DE PEDRO

if (dineroPedro >= 0.6 && dineroPedro <1){
alert(" Pedro; comprate el helado ");
}
else if (dineroPedro >= 1 && dineroPedro <1.6) {
    alert(" Pedro comprate el helado de crema1 ");
}
else if (dineroPedro >= 1.6 && dineroPedro <1.7) {
    alert(" Pedro comprate el helado de crema2 ");
}

else if (dineroPedro >= 1.7 && dineroPedro <1.8) {
    alert(" Pedro comprate el helado de crem3 ");
}
else if (dineroPedro >= 1.8 && dineroPedro <2.9) {
    alert(" Pedro comprate el helado de crema ");
}

else if (dineroPedro >= 2.9 ) {
    alert( " Pedro comprate con confeti o helado de pote ");

}else{
    alert(" Pedro lo siento no hay ");
}
   


/*Esto es sin consumir muchos recursos **/





