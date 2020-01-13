//here we are exporting function that generates html ==> .pdf
module.exports = ({ name, price1, price2, receiptId }) => {
  const today = new Date();
  return `
  <html>
  <head><meta http-equiv=Content-Type content="text/html; charset=UTF-8">
  <style type="text/css">
  <!--
  span.cls_002{font-family:"Calibri",serif;font-size:14.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_002{font-family:"Calibri",serif;font-size:14.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_003{font-family:"Calibri",serif;font-size:9.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_003{font-family:"Calibri",serif;font-size:9.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_004{font-family:"Calibri Bold",serif;font-size:14.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  div.cls_004{font-family:"Calibri Bold",serif;font-size:14.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  span.cls_007{font-family:"Calibri Bold",serif;font-size:11.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  div.cls_007{font-family:"Calibri Bold",serif;font-size:11.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  span.cls_006{font-family:"Calibri",serif;font-size:11.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_006{font-family:"Calibri",serif;font-size:11.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  </style>
  <script type="text/javascript" src="b4de6fd0-3646-11ea-a5fd-0cc47a792c0a_id_b4de6fd0-3646-11ea-a5fd-0cc47a792c0a_files/wz_jsgraphics.js"></script>
  </head>
  <body>
  <div style="position:absolute;left:50%;margin-left:-297px;top:0px;width:595px;height:841px;border-style:outset;overflow:hidden">
  <div style="position:absolute;left:0px;top:0px">
  <img src="b4de6fd0-3646-11ea-a5fd-0cc47a792c0a_id_b4de6fd0-3646-11ea-a5fd-0cc47a792c0a_files/background1.jpg" width=595 height=841></div>
  <div style="position:absolute;left:460.66px;top:69.30px" class="cls_002"><span class="cls_002">${today.getDate()}.${today.getMonth()}1.${today.getFullYear()}r.</span></div>
  <div style="position:absolute;left:450.10px;top:89.10px" class="cls_003"><span class="cls_003">(miejscowość i data)</span></div>
  <div style="position:absolute;left:181.73px;top:114.30px" class="cls_004"><span class="cls_004">UMOWA KUPNA - SPRZEDAŻY LAPTOPA</span></div>
  <div style="position:absolute;left:70.82px;top:159.30px" class="cls_007"><span class="cls_007">Sprzedający: </span></div>
  <div style="position:absolute;left:301.27px;top:159.30px" class="cls_007"><span class="cls_007">Kupujący: </span></div>
  <div style="position:absolute;left:70.82px;top:172.74px" class="cls_006"><span class="cls_006">Imię: ${name}</span></div>
  <div style="position:absolute;left:301.27px;top:172.74px" class="cls_006"><span class="cls_006">Imię: ${price1}</span></div>
  <div style="position:absolute;left:70.82px;top:186.18px" class="cls_006"><span class="cls_006">Nazwisko: ${name}</span></div>
  <div style="position:absolute;left:301.27px;top:186.18px" class="cls_006"><span class="cls_006">Nazwisko: ${price2} </span></div>
  <div style="position:absolute;left:70.82px;top:199.62px" class="cls_006"><span class="cls_006">Adres zamieszkania:  </span></div>
  <div style="position:absolute;left:301.27px;top:199.62px" class="cls_006"><span class="cls_006">Adres zamieszkania:</span></div>
  <div style="position:absolute;left:301.27px;top:213.09px" class="cls_006"><span class="cls_006">Seria i numer dowodu osobistego:</span></div>
  <div style="position:absolute;left:70.82px;top:226.53px" class="cls_006"><span class="cls_006">Seria i numer dowodu osobistego:  </span></div>
  <div style="position:absolute;left:301.27px;top:226.53px" class="cls_006"><span class="cls_006">Wydany przez:</span></div>
  <div style="position:absolute;left:70.82px;top:239.97px" class="cls_006"><span class="cls_006">Wydany przez:  </span></div>
  <div style="position:absolute;left:301.27px;top:239.97px" class="cls_006"><span class="cls_006">NIP/PESEL: </span></div>
  <div style="position:absolute;left:70.82px;top:253.41px" class="cls_006"><span class="cls_006">NIP/PESEL: </span></div>
  <div style="position:absolute;left:292.15px;top:317.73px" class="cls_007"><span class="cls_007">§</span><span class="cls_006">1</span></div>
  <div style="position:absolute;left:70.82px;top:343.17px" class="cls_006"><span class="cls_006">Przedmiotem umowy jest sprzedaż laptopa:</span></div>
  <div style="position:absolute;left:70.82px;top:358.53px" class="cls_006"><span class="cls_006">marka/model:</span></div>
  <div style="position:absolute;left:70.82px;top:374.03px" class="cls_006"><span class="cls_006">rok produkcji:</span></div>
  <div style="position:absolute;left:70.82px;top:389.51px" class="cls_006"><span class="cls_006">nr paragonu:</span></div>
  <div style="position:absolute;left:70.82px;top:404.99px" class="cls_006"><span class="cls_006">nr faktury:</span></div>
  <div style="position:absolute;left:70.82px;top:420.35px" class="cls_006"><span class="cls_006">nr seryjny:</span></div>
  <div style="position:absolute;left:70.82px;top:435.83px" class="cls_006"><span class="cls_006">uwagi:</span></div>
  <div style="position:absolute;left:292.15px;top:451.31px" class="cls_007"><span class="cls_007">§</span><span class="cls_006">2</span></div>
  </div>
  </body>
  </html>  
      `;
};
