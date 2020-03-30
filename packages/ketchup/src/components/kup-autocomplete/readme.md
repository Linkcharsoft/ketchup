# kup-autocomplete



<!-- Auto Generated Below -->


## Properties

| Property                             | Attribute               | Description                                                                                                                                          | Type                                                                                                                  | Default                                                    |
| ------------------------------------ | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `allowCustomItems`                   | `allow-custom-items`    | When true, the user can select custom values by pressing the enter button when the input is focused.                                                 | `boolean`                                                                                                             | `false`                                                    |
| `autocompleteCallBackOnFilterUpdate` | --                      | /** Function that can be invoked when the filter is updated, but only if in serverHandledFilter mode. It returns the items filtered.                 | `(detail: KupAutocompleteFilterUpdatePayload) => Promise<KupAutocompleteOption[]>`                                    | `undefined`                                                |
| `disabled`                           | `disabled`              | Sets if the autocomplete should be enabled or not                                                                                                    | `boolean`                                                                                                             | `false`                                                    |
| `displayMode`                        | `display-mode`          | Selects how the autocomplete items must display their label and how they can be filtered for                                                         | `AutocompleteDisplayMode.CODE \| AutocompleteDisplayMode.DESCRIPTION \| AutocompleteDisplayMode.DESCRIPTION_AND_CODE` | `AutocompleteDisplayMode.DESCRIPTION_AND_CODE`             |
| `extra`                              | `extra`                 | Any extra info. It will be sent in events payload                                                                                                    | `any`                                                                                                                 | `undefined`                                                |
| `initialSelectedItems`               | --                      | The initial selected items set inside component                                                                                                      | `KupAutocompleteOption[]`                                                                                             | `[]`                                                       |
| `items`                              | --                      | Sets the autocomplete items data                                                                                                                     | `KupAutocompleteOption[]`                                                                                             | `[]`                                                       |
| `limitResults`                       | `limit-results`         | When greater than 0, limits the results of the filter to the specified number of elements.                                                           | `number`                                                                                                              | `0`                                                        |
| `minimumChars`                       | `minimum-chars`         | The minimum number of chars to trigger the autocomplete                                                                                              | `number`                                                                                                              | `3`                                                        |
| `multipleSelection`                  | `multiple-selection`    | Allows more than one option to be selected at the same time.                                                                                         | `boolean`                                                                                                             | `false`                                                    |
| `noItemsLabel`                       | `no-items-label`        | Label shown when there are no items found with a given filter                                                                                        | `string`                                                                                                              | `'There are no items which\nmatch with the given filter.'` |
| `placeholder`                        | `placeholder`           | The placeholder string to set to the input for the autocomplete                                                                                      | `string`                                                                                                              | `'Choose'`                                                 |
| `serverHandledFilter`                | `server-handled-filter` | When true, it will emit events to inform the listener of the change of the current filter value. Also the component builtin filter will be disabled. | `boolean`                                                                                                             | `false`                                                    |
| `showClearIcon`                      | `show-clear-icon`       | Shows the icon to clear the input                                                                                                                    | `boolean`                                                                                                             | `false`                                                    |
| `showDropdownIcon`                   | `show-dropdown-icon`    | Shows icon to force the dropdown menu to be opened                                                                                                   | `boolean`                                                                                                             | `false`                                                    |
| `sortBy`                             | `sort-by`               | If different than 'none', sorts displayed results accordingly to the order provided by sortOrder prop.                                               | `AutocompleteSortBy.CODE \| AutocompleteSortBy.DESCRIPTION \| AutocompleteSortBy.NONE`                                | `AutocompleteSortBy.NONE`                                  |
| `sortOrder`                          | `sort-order`            | Decides which type of sort must be applied to the list of rendered items.                                                                            | `AutocompleteSortOrder.DECREASING \| AutocompleteSortOrder.INCREASING`                                                | `AutocompleteSortOrder.INCREASING`                         |


## Events

| Event                            | Description                                                                                | Type                                              |
| -------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------- |
| `kupAutocompleteFilterUpdate`    | Fired when the autocomplete filter is updated, but only if in serverHandledFilter mode.    | `CustomEvent<KupAutocompleteFilterUpdatePayload>` |
| `kupAutocompleteSelectionUpdate` | Fired when the autocomplete selected items are changed (both in single and multiple mode). | `CustomEvent<KupAutocompleteOption[]>`            |


## Methods

### `removeAllSelectedItems() => Promise<KupAutocompleteOption[]>`

Programmatically removes all of the selected items and returns them before they are removed.

#### Returns

Type: `Promise<KupAutocompleteOption[]>`




## Dependencies

### Used by

 - [kup-form](../kup-form)

### Depends on

- [kup-chip](../kup-chip)
- [kup-text-field](../kup-text-field)
- [kup-menu](../kup-menu)

### Graph
```mermaid
graph TD;
  kup-autocomplete --> kup-chip
  kup-autocomplete --> kup-text-field
  kup-autocomplete --> kup-menu
  kup-chip --> kup-icon
  kup-text-field --> kup-icon
  kup-form --> kup-autocomplete
  style kup-autocomplete fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
