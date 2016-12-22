# Plugin RPG do drupala

Tutaj znajduje się kod plugina do drupala, który będzie ułatwiał tworzenie gier typu RPG. Esencją pluginu jest dodanie stanu przy przechodzeniu między stronami.

## Spis koniecznych ficzerów

### Dane przechowywane w sesji

* Stan życia
* Pieniądze
* Ekwipunek

### Panel administracyjny

* Dodanie nowych kategorii treści na przedmioty
* Dodanie nowego typu treści - pomieszczenia
* Pomieszczenie powinno mieć: tytuł, opis i możliwość definiowania dowolnej ilości linków do innych pomieszczeń
* Na link do innego pomieszczenia składa się: pomieszczenie do którego prowadzi (być może tego samego), wymagane przedmioty (bez nich link się nie pokaże), akcje do wykonania na ekwipunku, życiu, kasie (dodanie, zabranie, sprawdzenie obecności), akcje specjalne np. przekierowanie wykonywane gdy postać umrze, reset stanu postaci

### Ekran gracza

* Powinien się wyświetlać stan życia i pieniędzy
* Być może także przedmiotów (powinno być możliwe tworzenie niewidocznych przedmiotów na potrzeby sterowania fabułą)
* Wejście na stronę główną mogłoby pokazywać menu z linkiem do nowej gry i odtworzenia poprzedniej sesji

## Specyfikacja techniczna projektu zaliczeniowego

1. Technologia przygotowania serwisu - Drupal
  * Nie planujemy na razie wykorzystania żadnych dodatkowych narzędzi.
2. Lista ról użytkowników: gracz, administrator
3. Opis funkcjonalności: 
4. Listę dodatkowych modułów/wtyczek:
  * Session API
  * Views
5. Strukturę danych serwisu, czyli typy zawartości i pola
 * _stan_ - informacja o stanie w jakim znajduje się użytkownik: aktualny pokój, stan ekwipunku, życie, rezerwa walutowa w postaci kredytów elektronicznej kryptowaluty (kryptokredytów);
 * _akcja_ - możliwa do wykonania ze spełnionymi _wymaganiami_, powoduje _efekty_;
 * _wymaganie_ - coś potrzebne do wykonania _akcji_ - posiadanie lub brak danego _stanu_, może być złożone;
 * _efekt_ - dodanie / usunięcie danego _stanu_ sesji.
 Tabelka _stanów_ jest połączona z użytkownikami relacją wiele-do-wielu, a elementy są przypisane do jednej z kategorii takich jak: miejsce przebywania, stan w rozmowie z NPC, posiadanie danego przedmiotu itp.. Na podstawie _stanów_, jakie posiada dany użytkownik renderowana jest strona specjalnie dla niego utworzona. W ten sposób nie można przejść do innego pokoju/wygrać gry wpisując do przeglądarki odpowiedni URL.
6. Strukturę menu serwisu (to również nie jest informacja wiążąca, można będzie dokonywać zmian)
 * Link do strony głównej
7. Wstępny układ elementów serwisu jako szkic - proszę ograniczyć się tylko do kluczowych podstron
 * Strona główna, żądająca logowania się i pozwalalająca na rozpoczęcie nowej gry i przejście do pokoju zapisanego w stanie
 * Pokoje
 * Strona z rejestracją
8. Harmonogram prac uwzględniający termin oddania w sesji poprawkowej (przypominam, że sesja poprawkowa to pierwszy termin)
 * Do połowy stycznia:
  * schemat bazy danych
  * widoki pokojów
 * Do sesji - fabuła i poprawki
