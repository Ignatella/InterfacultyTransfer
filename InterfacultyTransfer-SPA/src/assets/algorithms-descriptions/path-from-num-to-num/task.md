Na zbiorze liczb całkowitych określono trzy operacje:

```Text
A,B,C przekształcające liczby:

 A: zwiększa liczbę o 3; 

 B: podwaja liczbę; 
 
 C: wszystkie parzyste cyfry w liczbie zwiększa o 1, np. 2356->3357, 1999-> 1999. 
```

Proszę napisać funkcję która sprawdza czy można przekształcić liczbę `X`
na liczbę `Y` w nie więcej niż `N` krokach. Do funkcji należy przekazać wartości `X`,`Y`,`N`

> `Funkcja powinna zwrócić liczbę możliwych ciągów operacji
> przekształcających liczbę X w Y (lub wartość 0 jeżeli takie
> przekształcenie nie istnieje).`


> `Uwaga`:
zabronione jest używanie kolejno dwóch tych samych operacji. Na przykład:
Dla `X`=11, `Y`=31, `N`=4 funkcja powinna zwrócić `3`
bo są `3` możliwe ciągi operacji: ABA, ACBC, CABA Dla `X`=`11`,
`Y`=`32`, `N`=`4` funkcja powinna zwrócić `0`.
