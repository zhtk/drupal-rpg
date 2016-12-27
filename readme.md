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
  * Przechowywanie w sesji stanu ekwipunku, życia i pieniędzy. Ekwipunek byłby listą identyfikatorów.
  * W pokojach wyświetlany byłby stan ekwipunku (z pominięciem niewidzialnych przedmiotów), życia i pieniędzy
  * Dodawanie i edycja pomieszczeń i przedmiotów powinna być możliwa z panelu administratora
  * Na pokój składałby się tekst wyjaśniający fabułę i zestaw linków prezentujących możliwą akcję do podjęcia. Link pozwala na jednoczesną: zmianę pokoju, edycję stanu życia, pieniędzy i ekwipunku. Link może być nieaktywny jeśli w ekwipunku brakuje pewnych przedmiotów, w takim przypadku może nie być wyświetlany aby nie zdradzać dalszej fabuły.
4. Lista dodatkowych modułów/wtyczek:
  * Session API
  * Views
5. Struktura danych serwisu, czyli typy zawartości i pola
 * _stan_ - informacja o stanie w jakim znajduje się użytkownik: aktualny pokój, stan ekwipunku, życie, rezerwa walutowa w postaci kredytów elektronicznej kryptowaluty (kryptokredytów);
 * _akcja_ - możliwa do wykonania ze spełnionymi _wymaganiami_, powoduje _efekty_;
 * _wymaganie_ - coś potrzebne do wykonania _akcji_ - posiadanie lub brak danego _stanu_, może być złożone;
 * _efekt_ - dodanie / usunięcie / zmiana danego _stanu_ sesji.
 * Tabelka _stanów_ jest połączona z użytkownikami relacją wiele-do-wielu, a elementy są przypisane do jednej z kategorii takich jak: miejsce przebywania, stan w rozmowie z NPC, posiadanie danego przedmiotu itp.. Na podstawie _stanów_, jakie posiada dany użytkownik renderowana jest strona specjalnie dla niego utworzona. W ten sposób nie można przejść do innego pokoju/wygrać gry wpisując do przeglądarki odpowiedni URL.
6. Struktura menu serwisu:
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

## Instalacja
 * Sklonuj zawartość repozytorium do katalogu $drupal/sites/all/modules/, gdzie $druapl oznacza ścieżkę do instancji drupala
 * Zmień nazwę skolonawego katalogu z drupal-rpg na drupal\_rpg
 * Aktywuj plugin w ustawieniach
