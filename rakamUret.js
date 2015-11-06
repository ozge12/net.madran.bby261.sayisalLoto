/*         BBY261          */
/* Sayısal Loto Uygulaması */

//Çekiliş yapılacak sayıların dizisi
var rakamlar = new Array(49);

//Oynanacak kolonun dizisi
var loto = new Array(6);

//Rakam havuzunun oluşturulması
for(var i=0; i<49; i++){
    rakamlar[i]=i+1;
}       
//6 kolonun ekrana yazdırılması
for(var i4=0; i4<6; i4++){

//Kolonun oluşturulması
for(var i2=0; i2<6; i2++){
    var havuz = rakamlar.length;
    var secilen = Math.floor(Math.random() * havuz);
    loto[i2]=rakamlar[secilen];
    rakamlar.splice(secilen,1);
}
loto.sort(function(a, b){return a-b});

//Tek kolonun yazdırılması
for(var i3=0; i3<6; i3++){
    document.write(loto[i3]+" ");
}

    document.write("<br>");
}