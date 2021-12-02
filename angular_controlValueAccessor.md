- Un formControl créé implicitement ou explicitement doit interagir avec un contrôle de formulaire natif tel que input ou textarea.
- Et au lieu d'un contrôle de formulaire natif, il est également possible d'avoir un contrôle de formulaire personnalisé créé en tant que composant Angular.
- définition :
  - "contrôle de formulaire natif" : est un contrôle de formulaire que vous utilisez en HTML.
  - formControl : spécifique à Angular
- Mais vous devez comprendre qu'au lieu d'un contrôle de formulaire natif comme input, tout contrôle de formulaire personnalisé peut interagir avec un formControl.
- Le nombre de contrôles de formulaires natifs est limité (input, textarea), mais la variété des contrôles de formulaires personnalisés peut être potentiellement infinie.
- Angular a donc besoin d'un mécanisme générique pour s'interposer entre le formControl d'Angular et un contrôle de formulaire natif ou personnalisé.
- C'est là que l'objet ControlValueAccessor entre en jeu.
- Il s'agit de l'objet qui s'interpose entre le formControl d'Angular et un contrôle de formulaire natif et qui synchronise les valeurs entre les deux.
- Un ControlValueAccessor agit comme un pont entre l'API des formulaires Angular et un élément natif dans le DOM.

- Tout composant ou directive peut être transformé en ControlValueAccessor en implémentant l'interface ControlValueAccessor et en s'enregistrant comme NG_VALUE_ACCESSOR provider.
- l'interface définit deux méthodes importantes - writeValue et registerOnChange :

```ts
interface ControlValueAccessor {
  writeValue(obj: any): void        //
  registerOnChange(fn: any): void   //
  registerOnTouched(fn: any): void
  ...
}
```

- `writeValue` : définir la valeur du contrôle de formulaire natif
- `registerOnChange` :
  - La méthode registerOnChange est utilisée par formControl pour enregistrer une fonction de rappel qui doit être déclenchée chaque fois que le contrôle de formulaire natif est mis à jour.
  - Il vous incombe de transmettre la valeur mise à jour à cette fonction de rappel afin que la valeur du contrôle de formulaire Angular correspondant soit mise à jour.
- `registerOnTouched` : indiquer qu'un utilisateur a interagi avec un contrôle.

```
+------------------------------------+----------------------+
|              Accessor              |     Form Element     |
+------------------------------------+----------------------+
| DefaultValueAccessor               | input, textarea      |
| CheckboxControlValueAccessor       | input[type=checkbox] |
| NumberValueAccessor                | input[type=number]   |
| RadioControlValueAccessor          | input[type=radio]    |
| RangeValueAccessor                 | input[type=range]    |
| SelectControlValueAccessor         | select               |
| SelectMultipleControlValueAccessor | select[multiple]     |
+------------------------------------+----------------------+
```
