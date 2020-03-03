# wup-list



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                | Type                     | Default                        |
| -------------- | --------------- | -------------------------------------------------------------------------- | ------------------------ | ------------------------------ |
| `isFilterable` | `is-filterable` | Marks the list as filterable, allowing an input text to filter the options | `boolean`                | `false`                        |
| `items`        | --              |                                                                            | `ComponentListElement[]` | `[]`                           |
| `listId`       | `list-id`       |                                                                            | `string`                 | `'WupList-myId'`               |
| `roleType`     | `role-type`     |                                                                            | `string`                 | `WupList.ROLE_LISTBOX`         |
| `selectable`   | `selectable`    |                                                                            | `string`                 | `WupList.SELECTABLE_NO_SELECT` |
| `twoLine`      | `two-line`      |                                                                            | `boolean`                | `false`                        |


## Events

| Event           | Description | Type                                                                |
| --------------- | ----------- | ------------------------------------------------------------------- |
| `kupListBlur`   | Events.     | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |
| `kupListChange` |             | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |
| `kupListClick`  |             | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |
| `kupListFocus`  |             | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |
| `kupListInput`  |             | `CustomEvent<{ selected: ComponentListElement; el: EventTarget; }>` |


## Dependencies

### Used by

 - [wup-combo](..\wup-combo)

### Depends on

- [wup-radio](..\wup-radio)
- [wup-checkbox](..\wup-checkbox)

### Graph
```mermaid
graph TD;
  wup-list --> wup-radio
  wup-list --> wup-checkbox
  wup-combo --> wup-list
  style wup-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
