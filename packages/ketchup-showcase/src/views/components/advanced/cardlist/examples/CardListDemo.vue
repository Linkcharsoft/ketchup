<template>
  <div>
    <demo
      :demoClasses="demoClasses"
      :demoComp="demoComp"
      :demoEvents="demoEvents"
      :demoMethods="demoMethods"
      :demoProps="demoProps"
    ></demo>
  </div>
</template>

<script>
import Demo from '@/views/templates/Demo';

export default {
  components: {
    Demo,
  },
  name: 'CardListDemo',
  data() {
    return {
      demoComp: createComp(),
      demoEvents: [
        {
          name: 'kup-cardlist-click',
          type: 'click',
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
          name: 'setProps',
          description: 'Sets the props to the component.',
        },
      ],
      demoProps: [
        {
          prop: 'columnsNumber',
          description: 'Sets the number of columns.',
          type: 'number',
          default: '1',
          try: 'field',
        },
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
          description: 'Actual data of the component.',
          type: 'KupCardListData',
          default: 'null',
          try: 'json',
        },
        {
          prop: 'decvalueCol',
          description: 'Sets the decimal value column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'descrCol',
          description: 'Sets the description column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'fullWidth',
          description:
            'Sets whether the component occupies all available width.',
          type: 'boolean',
          default: 'true',
          try: 'switch',
        },
        {
          prop: 'horizontal',
          description: 'Sets whether the cards are placed horizontally or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'iconCol',
          description: 'Sets the icon column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'iconcolorCol',
          description: 'Sets the icon color column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'intvalueCol',
          description: 'Sets the integer value column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'isClickable',
          description: 'Sets whether a single card is clickable or not.',
          type: 'boolean',
          default: 'false',
          try: 'switch',
        },
        {
          prop: 'layoutCol',
          description: 'Sets the layout column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'measureCol',
          description: 'Sets the measure column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'textcolorCol',
          description: 'Sets the text color column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'valueCol',
          description: 'Sets the value column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
        {
          prop: 'valuecolorCol',
          description: 'Sets the value color column.',
          type: 'string',
          default: '""',
          try: 'field',
        },
      ],
    };
  },
};

function createComp() {
  const comp = document.createElement('kup-card-list');
  comp.id = 'demo-component';
  comp.data = {
    columns: [
      {
        name: 'ICO',
        title: 'Icona',
      },
      {
        name: 'UM',
        title: 'Um',
      },
      {
        name: 'TEXT',
        title: 'Testo',
      },
      {
        name: 'VALUE',
        title: 'Valore',
      },
      {
        name: 'INTVAL',
        title: 'Valore parte intera',
      },
      {
        name: 'DECVAL',
        title: 'Valore parte decimale',
      },
      {
        name: 'TEXTCOLOR',
        title: 'Colore del testo',
      },
      {
        name: 'VALUECOLOR',
        title: 'Colore del valore',
      },
      {
        name: 'ICOCOLOR',
        title: "Colore dell'icona",
      },
      {
        name: 'LAYOUT',
        title: 'Layout della riga',
      },
    ],
    rows: [
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICOCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          INTVAL: {
            obj: {
              k: '34',
              p: '',
              t: 'NR',
            },
            value: '34',
          },
          LAYOUT: {
            obj: {
              k: '1',
            },
            value: '1',
          },
          UM: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUECOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          TEXT: {
            obj: {
              k: 'Admissions Count',
            },
            value: 'Admissions Count',
            displayedValue: 'Admissions Count',
          },
          DECVAL: {
            obj: {
              k: '678',
            },
            value: '678',
          },
          VALUE: {
            obj: {
              k: '34,678',
              p: '',
              t: 'NR',
            },
            value: '34.678',
            displayedValue: '34,678',
          },
        },
        object: '',
        readOnly: true,
      },
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: 'trending-up',
            },
            value: 'trending-up',
          },
          ICOCOLOR: {
            obj: {
              k: 'rgb(0, 187, 45)',
            },
            value: 'rgb(0, 187, 45)',
          },
          INTVAL: {
            obj: {
              k: '15',
              p: '',
              t: 'NR',
            },
            value: '15',
            displayedValue: '15',
          },
          LAYOUT: {
            obj: {
              k: '2',
            },
            value: '2',
          },
          UM: {
            obj: {
              k: '%',
            },
            value: '%',
            displayedValue: '%',
          },
          VALUECOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          TEXT: {
            obj: {
              k: '',
            },
            value: '',
          },
          DECVAL: {
            obj: {
              k: '86',
            },
            value: '86',
            displayedValue: '86',
          },
          VALUE: {
            obj: {
              k: '15,86',
              p: '',
              t: 'NR',
            },
            value: '15.86',
          },
        },
        object: '',
        readOnly: true,
      },
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICOCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          INTVAL: {
            obj: {
              k: '34',
              p: '',
              t: 'NR',
            },
            value: '34',
          },
          LAYOUT: {
            obj: {
              k: '3',
            },
            value: '3',
          },
          UM: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUECOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          TEXT: {
            obj: {
              k: 'Admissions Count',
            },
            value: 'Admissions Count',
            displayedValue: 'Admissions Count',
          },
          DECVAL: {
            obj: {
              k: '678',
            },
            value: '678',
          },
          VALUE: {
            obj: {
              k: '34,678',
              p: '',
              t: 'NR',
            },
            value: '34.678',
            displayedValue: '34,678',
          },
        },
        object: '',
        readOnly: true,
      },
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: 'account',
            },
            value: 'account',
          },
          ICOCOLOR: {
            obj: {
              k: 'rgb(220, 248, 100)',
            },
            value: 'rgb(220, 248, 100)',
          },
          INTVAL: {
            obj: {
              k: '12',
              p: '',
              t: 'NR',
            },
            value: '12',
          },
          LAYOUT: {
            obj: {
              k: '4',
            },
            value: '4',
          },
          UM: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUECOLOR: {
            obj: {
              k: 'rgb(220, 240, 100)',
            },
            value: 'rgb(220, 240, 100)',
          },
          TEXT: {
            obj: {
              k: 'Admissions Count',
            },
            value: 'Admissions Count',
            displayedValue: 'Admissions Count',
          },
          DECVAL: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUE: {
            obj: {
              k: '12',
              p: '',
              t: 'NR',
            },
            value: '12',
            displayedValue: '12',
          },
        },
        object: '',
        readOnly: true,
      },
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: 'chart-bar',
            },
            value: 'chart-bar',
          },
          ICOCOLOR: {
            obj: {
              k: 'rgb(252, 40, 200)',
            },
            value: 'rgb(252, 40, 200)',
          },
          INTVAL: {
            obj: {
              k: '34',
              p: '',
              t: 'NR',
            },
            value: '34',
          },
          LAYOUT: {
            obj: {
              k: '5',
            },
            value: '5',
          },
          UM: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUECOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          TEXT: {
            obj: {
              k: 'Admissions Count',
            },
            value: 'Admissions Count',
            displayedValue: 'Admissions Count',
          },
          DECVAL: {
            obj: {
              k: '678',
            },
            value: '678',
          },
          VALUE: {
            obj: {
              k: '34,678',
              p: '',
              t: 'NR',
            },
            value: '34.678',
            displayedValue: '34,678',
          },
        },
        object: '',
        readOnly: true,
      },
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: 'chart-bar',
            },
            value: 'chart-bar',
          },
          ICOCOLOR: {
            obj: {
              k: 'rgb(252, 40, 200)',
            },
            value: 'rgb(252, 40, 200)',
          },
          INTVAL: {
            obj: {
              k: '34',
              p: '',
              t: 'NR',
            },
            value: '34',
          },
          LAYOUT: {
            obj: {
              k: '6',
            },
            value: '6',
          },
          UM: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUECOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          TEXT: {
            obj: {
              k: 'Admissions Count',
            },
            value: 'Admissions Count',
            displayedValue: 'Admissions Count',
          },
          DECVAL: {
            obj: {
              k: '678',
            },
            value: '678',
          },
          VALUE: {
            obj: {
              k: '34,678',
              p: '',
              t: 'NR',
            },
            value: '34.678',
            displayedValue: '34,678',
          },
        },
        object: '',
        readOnly: true,
      },
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: 'star-circle',
            },
            value: 'star-circle',
          },
          ICOCOLOR: {
            obj: {
              k: 'rgb(0, 255, 0)',
            },
            value: 'rgb(0, 255, 0)',
          },
          INTVAL: {
            obj: {
              k: '35',
              p: '',
              t: 'NR',
            },
            value: '35',
          },
          LAYOUT: {
            obj: {
              k: '7',
            },
            value: '7',
          },
          UM: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUECOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          TEXT: {
            obj: {
              k: 'TASKS DONE',
            },
            value: 'TASKS DONE',
            displayedValue: 'TASKS DONE',
          },
          DECVAL: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUE: {
            obj: {
              k: '35',
              p: '',
              t: 'NR',
            },
            value: '35',
            displayedValue: '35',
          },
        },
        object: '',
        readOnly: true,
      },
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: 'chart-bar',
            },
            value: 'chart-bar',
          },
          ICOCOLOR: {
            obj: {
              k: 'rgb(252, 40, 200)',
            },
            value: 'rgb(252, 40, 200)',
          },
          INTVAL: {
            obj: {
              k: '34',
              p: '',
              t: 'NR',
            },
            value: '34',
          },
          LAYOUT: {
            obj: {
              k: '8',
            },
            value: '8',
          },
          UM: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUECOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          TEXT: {
            obj: {
              k: 'Admissions Count',
            },
            value: 'Admissions Count',
            displayedValue: 'Admissions Count',
          },
          DECVAL: {
            obj: {
              k: '678',
            },
            value: '678',
          },
          VALUE: {
            obj: {
              k: '34,678',
              p: '',
              t: 'NR',
            },
            value: '34.678',
            displayedValue: '34,678',
          },
        },
        object: '',
        readOnly: true,
      },
      {
        cells: {
          TEXTCOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          ICO: {
            obj: {
              k: 'star-circle',
            },
            value: 'star-circle',
          },
          ICOCOLOR: {
            obj: {
              k: 'rgb(0, 255, 0)',
            },
            value: 'rgb(0, 255, 0)',
          },
          INTVAL: {
            obj: {
              k: '35',
              p: '',
              t: 'NR',
            },
            value: '35',
          },
          LAYOUT: {
            obj: {
              k: '8',
            },
            value: '8',
          },
          UM: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUECOLOR: {
            obj: {
              k: '',
            },
            value: '',
          },
          TEXT: {
            obj: {
              k: 'TASKS DONE',
            },
            value: 'TASKS DONE',
            displayedValue: 'TASKS DONE',
          },
          DECVAL: {
            obj: {
              k: '',
            },
            value: '',
          },
          VALUE: {
            obj: {
              k: '35',
              p: '',
              t: 'NR',
            },
            value: '35',
            displayedValue: '35',
          },
        },
        object: '',
        readOnly: true,
      },
    ],
  };
  comp.decvalueCol = 'DECVAL';
  comp.descrCol = 'TEXT';
  comp.iconCol = 'ICO';
  comp.iconcolorCol = 'ICOCOLOR';
  comp.intvalueCol = 'INTVAL';
  comp.layoutCol = 'LAYOUT';
  comp.measureCol = 'UM';
  comp.textcolorCol = 'TEXTCOLOR';
  comp.valueCol = 'VALUE';
  comp.valuecolorCol = 'VALUECOLOR';
  return comp;
}
</script>
