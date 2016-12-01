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
