//here we are exporting function that generates html ==> .pdf
module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
    return `
    <!doctype html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Umowa Kupna Sprzedaży</title>
        <style>
            .wrapper {
                font-family: 'Helvetica Neue', 'Helvetica';
                padding: 100px;
                display: flex;
                flex-direction: column;
                align-items: stretch;
                height: 100vh;
            }
            .data {
                display: flex;
                justify-content: flex-end;
                align-items: center;
                width: 100%;
                font-size: 20px;
                margin-bottom: 50px;
            }
            .data--item {}
            .data--item__date {}
            .main {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: min-content 1fr;
                row-gap: 30px;
                height: 200px;
            }
    
            .main h1 {
                grid-column: 1 / -1;
                grid-row: 1 / 2;
                justify-self: center;
                align-self: center;
            }
            .main-col1, .main-col2 {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .main-col1-span {
                margin: 8px 0;
            }
            .paragraph {
                margin-top: 200px;
                padding: 50px 10px;
                width: 100%;
                text-align: center;
            }
            .main2 {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                margin-bottom: 50px;
            }
            .main2-span {
                margin: 8px 0;
            }
        </style>
    </head>
    <body>
        <div class="wrapper">
            <div class="data">
                <div class="data--item">
                    <p class="data--item__date">24.01.2020r</p>
                    <p class="data--item__date">(miejscowość i data)</p>
                </div>
            </div>
            <div class="main">
                <h1>UMOWA KUPNA - SPRZEDAŻY SAMOCHODU</h1>
                <div class="main-col1">
                    <h3>Sprzedający: ${name}</h3>
                    <span class="main-col1-span">IMIĘ: </span>
                    <span class="main-col1-span">NAZWISKO: </span>
                    <span class="main-col1-span">ADRES ZAMIESZKANIA: </span>
                    <span class="main-col1-span">SERIA I NUMER DOWODU OSOBISTEGO: </span>
                    <span class="main-col1-span">WYDANY PRZEZ: </span>
                    <span class="main-col1-span">NIP/PESEL: </span>
                </div>
                <div class="main-col2">
                    <h3>KUPUJĄCY: </h3>
                    <span class="main-col1-span">IMIĘ: </span>
                    <span class="main-col1-span">NAZWISKO: </span>
                    <span class="main-col1-span">ADRES ZAMIESZKANIA: </span>
                    <span class="main-col1-span">SERIA I NUMER DOWODU OSOBISTEGO: </span>
                    <span class="main-col1-span">WYDANY PRZEZ: </span>
                    <span class="main-col1-span">NIP/PESEL: </span>
                </div>
            </div>
            <div class="paragraph">
                <strong>§1</strong>
            </div>
            <div class="main2">
                <span class="main2-span">Przedmiotem umowy jest sprzedaż pojazdu: </span>
                <span class="main2-span">Marka/Model: </span>
                <span class="main2-span">Rok produkcji: </span>
                <span class="main2-span">Nr silnika: </span>
                <span class="main2-span">Nr nadwozia(VIN): </span>
                <span class="main2-span">Nr rejestracyjny: </span>
                <span class="main2-span">Przebieg: </span>
                <span class="main2-span">Uwagi: </span>
            </div>
        </div>
    </body>
    </html>
      `;
  };
  