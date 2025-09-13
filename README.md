Av josef alirani 13/9-25

## Setup
För att köra API:et så behöver man *node js*, utöver det så använder programmet paketet *express* som måste installeras. Detta kan man göra genom följande kommandot:

```
npm i express
```

I filen "models/dataSource.js" finns två versioner av metoden **getCsvAsArray()** eftersom jag inte visste ifall ytterligare paket till kodtestet var tillåtet, så används
bara paketet 'file system' i **getCsvAsArrayALT()**. **getCsvAsArray()** som är exkluderad av kommentarer använder paketet 'csv-parse' som är frivilligt att testa och ladda ner(!). 

```
npm i csv-parse
```

## Exekvering
För att köra API:et lokalt så används följande kommando:

```cmd
node index.js
```

API:et använder port 3000, som nås via URL:n "http://localhost:3000".

## Exempel av endpoint-calls
#### http://localhost:3000/api/data
Svar: Hämtar all data eftersom ingen "limit" anges. Ger samma resultat som "http://localhost:3000/api/data?limit=0".
exempel: 

```
{"users":[["1","Alice","28","alice@example.com"],["2","Bea","12","bea@example.com"]]}
```

#### http://localhost:3000/api/data?limit=-4
Svar: Returnerar status-kod 204 eftersom limit är negativt.

#### http://localhost:3000/api/data?limit=3
Svar: Returnerar 3 användare som json.

## CSV exempel
API:et använder formatet det följande formatet för csv-filer:

[id];[namn];[ålder];[email]

Exempel:
```csv
1;Alice;28;alice@example.com
2;Bea;12;bea@example.com
3;Ceasar;56;ceasar@example.com
4;David;3;david@example.com
```
