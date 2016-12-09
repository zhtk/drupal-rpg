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
  * opis dodatkowych narzędzi/komponentów, które będą potrzebne (być może jakaś zewnętrzna aplikacja, skrypt w innym języku programowania itp.).
2. Lista ról użytkowników: gracz, administrator
3. Opis funkcjonalności - może być jako zestaw krótkich scenariuszy użycia przez różne role użytkowników.
4. Listę dodatkowych modułów/wtyczek, które Państwo planują wykorzystać. Nie muszą to być dokładnie wszystkie, które zostaną użyte, chodzi raczej o kluczowe komponenty. Lista ta nie jest również wiążąca, można ją modyfikować.
5. Strukturę danych serwisu, czyli typy zawartości i pola
6. Strukturę menu serwisu (to również nie jest informacja wiążąca, można będzie dokonywać zmian)
7. Wstępny układ elementów serwisu jako szkic - proszę ograniczyć się tylko do kluczowych podstron
8. Harmonogram prac uwzględniający termin oddania w sesji poprawkowej (przypominam, że sesja poprawkowa to pierwszy termin)
