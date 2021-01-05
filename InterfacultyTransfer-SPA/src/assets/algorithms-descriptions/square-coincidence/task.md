Dwie liczby są zgodne piątkowo, jeżeli posiadają tyle samo cyfr
parzystych w ich reprezentacjach w systemie pozycyjnym o
podstawie `5`. 

```Python
Dane są dwie tablice:
int tab1[MAX1][MAX1]
tab2[MAX2][MAX2] (MAX2 > MAX1 > 1). 
```

Proszę napisać funkcję, która sprawdzi, czy możliwe jest takie 
przyłożenie `tab1` do `tab2`, aby w pokrywającym się obszarze
co najmniej `33%` odpowiadających sobie elementów z tab1 i tab2 
było zgodnych piątkowo. 

>`Uwaga`: należy uwzględnić, że tab1
>może tylko częściowo przykrywać tab2 (patrz rysunek), a w 
>sprawdzanym obszarze musi znaleźć się co najmniej jeden
>element.

![example](../../../../assets/algorithms-descriptions/square-coincidence/assets/example.jpg)
