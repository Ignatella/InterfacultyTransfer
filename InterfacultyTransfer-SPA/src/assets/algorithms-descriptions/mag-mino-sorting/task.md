Dane są deklarację reprezentujące listę z klockami mag-mina (patrz zadanie 2).

```C
struct klocek {
  int a;
  int b;
  klocek *next;
};
```

Lista zawiera zestaw klocków, które można ułożyć w ciąg. 
Niestety klocki pomieszały się. Proszę napisać funkcję, która
ustawia klocki na liście w ciąg. 

>`Uwaga:` orientacja klocków w 
liście jest właściwa.

Na przykład listę:

>`[2|9] [3|6] [8|2] [2|3] [6|2]`

należy przekształcić na listę:
 
>`[8|2] [2|3] [3|6] [6|2] [2|9]`
