<template>
  <div>
    <demo
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';
import { baseData } from '@/mock/chart';

export default {
  components: {
    Demo,
  },
  name: 'FormDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-cell-click',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-iconclick',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-input',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-keyup',
          type: 'CustomEvent',
        },
        {
          name: 'kup-cell-update',
          type: 'CustomEvent',
        },
        {
          name: 'kup-form-ready',
          type: 'CustomEvent',
        },
      ],
      demoMethods: [
        {
          name: 'getProps',
          description:
            "Returns the props' values of the component. When invoked giving true as the only argument, returns the props descriptions instead.",
        },
        {
          name: 'refresh',
          description:
            'This method is used to trigger a new render of the component.',
        },
        {
          name: 'setFocus',
          description: 'Sets the focus on an editable table cell.',
        },
        {
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'customStyle',
          description:
            'Custom style of the component. For more information: https://ketchup.smeup.com/ketchup-showcase/#/customization',
          type: 'string',
          default: '""',
          try: 'css',
        },
        {
          prop: 'data',
          description: 'Actual data of the form.',
          type: 'KupFormData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'hiddenSubmitButton',
          description:
            'Creates a hidden submit button in order to submit the form with enter.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'labelPlacement',
          description:
            "Sets the label placement for 'all' fields in form. Available values: top, bottom, left, right, hidden, placeholder or watermark.",
          type: 'string',
          default: 'left',
          try: 'field',
        },
        {
          prop: 'layout',
          description: 'How the form will arrange its content.',
          type: 'KupFormLayout',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'submitCb',
          description: 'Sets the callback function on submit form.',
          type: 'string',
          default: 'null',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-form');
  comp.data = {
    columns: [
      {
        name: 'NAME',
        title: 'Name',
      },
      {
        name: 'LASTNAME',
        title: 'Last name',
      },
    ],
    rows: [
      {
        cells: {
          NAME: {
            value: '',
            isEditable: true,
          },
          LASTNAME: {
            value: '',
            isEditable: true,
          },
        },
      },
    ],
  };
  comp.id = 'demo-component';

  return comp;
}
</script>
