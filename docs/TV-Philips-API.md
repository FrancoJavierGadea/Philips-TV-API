

## End Points `GET`


#### Volume

- `/1/audio/volume` ✅

#### System 

- `/1/system` ✅
- `/1/system/name` ✅
- `/1/system/country` ✅
- `/1/system/menulanguage` ✅
- `/1/system/softwareversion` ✅
  
<br>

- `/1/system/model` ❌
- `/1/system/serialnumber` ❌

#### Sources

- `/1/sources` ✅
- `/1/sources/current` ✅



<br><br>

## Encryped Data

```js
// La clave AES de 16 bytes 
const SECRET_KEY = Buffer.from('ZmVay1EQVFOaZhwQ4Kv81ypLAZNczV9sG4KkseXWn1NEk6cXmPKO/MCa9sryslvLCFMnNe4Z4CPXzToowvhHvA==', 'base64');
```

Find it here: 

- [https://github.com/danielperna84/ha-philipsjs/blob/master/haphilipsjs/__init__.py](https://github.com/danielperna84/ha-philipsjs/blob/master/haphilipsjs/__init__.py)

<br><br>

#### Docs

- [https://jointspace.sourceforge.net/projectdata/documentation/jasonApi/1/doc/API.html](https://jointspace.sourceforge.net/projectdata/documentation/jasonApi/1/doc/API.html)
- [https://jointspace.sourceforge.net/projectdata/jointSPACE_API_Reference_Manual.pdf](https://jointspace.sourceforge.net/projectdata/jointSPACE_API_Reference_Manual.pdf)