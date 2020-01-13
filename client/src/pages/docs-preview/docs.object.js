import PDFTemplate from "../../assets/IMG/PDFTemplate.PNG";
import KupnoTemplate from "../../assets/IMG/books-4.png";
import LaptopTemplate from "../../assets/IMG/laptop-scren.PNG";

export const arrayOfObjects = [
  {
    id: 2,
    name: "umowa kupna sprzedaży",
    keywords: "umowa kupna sprzedaży samochód samochodu",
    img: KupnoTemplate,
    description:
      "to jest opis umowy kupna sprzedaży, to jest opis umowy kupna sprzedaży to jest opis umowy kupna sprzedaży, to jest opis umowy kupna sprzedażyto jest opis umowy kupna sprzedaży, to jest opis umowy kupna sprzedaży",
    labels: 2,
    required: ["Name", "recipt ID", "price 1", "price 2"]
  },
  {
    id: 1,
    name: "pozew rozwodowy rozwód",
    keywords: "pozew rozwodowy rozwód",
    img: PDFTemplate,
    description:
      "to jest opis pozwu rozwodowego, to jest opis pozwu rozwodowegoto jest opis pozwu rozwodowego, to jest opis pozwu rozwodowegoto jest opis pozwu rozwodowego, to jest opis pozwu rozwodowegoto jest opis pozwu rozwodowego, to jest opis pozwu rozwodowegoto jest opis pozwu rozwodowego, to jest opis pozwu rozwodowegoto jest opis pozwu rozwodowego, to jest opis pozwu rozwodowegoto jest opis pozwu rozwodowego, to jest opis pozwu rozwodowego",
    labels: 3,
    required: ["Imie", "Nazwisko", "Koszt początkowy", "Koszt końcowy"]
  },
  {
    id: 3,
    name: "sprzedaż nieruchomości",
    keywords: "sprzedaż nieruchomości",
    img: LaptopTemplate,
    description: "to jest opis sprzedaży nieruchomości, to jest opis sprzedaży nieruchomości, to jest opis sprzedaży nieruchomościto jest opis sprzedaży nieruchomości to jest opis sprzedaży nieruchomościto jest opis sprzedaży nieruchomości to jest opis sprzedaży nieruchomościto jest opis sprzedaży nieruchomości",
    labels: 1,
    required: ["name"]
  }
];
