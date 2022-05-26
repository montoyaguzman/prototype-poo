-------------------
Persona
-------------------
hair
legs
hands
-------------------
respirar()
caminar()
-------------------


-------------------
Superheroe
-------------------
superpoder
traje
nombreClave
-------------------
ataqueCargado()
-------------------


-------------------
Programador
-------------------
orejas
-------------------
programar()
-------------------


JS => PrototypoS => Plantillas => Generar objetos

Protoypo padre de JS => OBJECT   ---- Person ---- Superhero ----- PersonaConTraje
                                             ---- Programador
                                             
Patron de diseño de objetos basado en prototipos
* Los atributos deben agregarse a la funcion constructor.
* Lo metodos deben agregar aparte mediante el objeto prototype.

const name1 = new String ('John');
const name2 = 'John';