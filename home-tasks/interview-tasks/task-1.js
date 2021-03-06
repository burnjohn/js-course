// 1) Есть массив цифр по возрастанию [-2,0,1,2,3,4,5,8,9,11,13,15,18,22,25,28,29,30],
//   необходимо написать функцию, которая принимает массив и возвращает результат, который выводит все цифры через запятую.
//   Однако если цифры идут диапазоном, то вывести их через тире, например 21,22,23,24 => 21-24. если только 2 числа то они не являются диапазоном

// 2)w

const multidimensionalObject = {
  'User': 1,
  'Data': {
    'FirstName': 'Anonimoys',
    'LastName': 'AnonimoysLastName',
    'MiddleName': 'AnonimoysMiddleName',
    'Role': [
      1, 2, 4, {
        'isOwner': true,
      },
      {
        'hidden': null,
      },
      {
        'visibleStat': 'null',
      },
    ],
  },
  'Profile': [
    {
      'Check': true,
      'CheckRole': [
        1, 2, 34,
      ],
    },
    {
      'Settings': {
        'Rider': [
          1, 2, 3, 4,
        ],
        'Inside': {
          'In': true,
          'Out': null,
        },
      },
    },
  ],
};

// Есть многомерный объект он динамичен в формировании при каждом запросе,
//   необходимо написать функцию которая преобразует его в плоский формат.
//   Учесть именование ключей, если объект дочерний, чтобы
// в итоге результирующее имя ключа содержало ключи всех объектов (не массивов) родителей в порядке вложенности,
//   массивы остаются массивами если они содержат только примитивы
//
// например

var source = {
  'Red': 1,
  'Grey': {
    'Task': {
      'Dry': 1,
    },
    'End': {
      'Site': null,
    },
    'module': [
      20, 21, 23,
    ],
  },
  'Type': [
    10, 16, 2048, {
      'IsSale': false,
    },
  ],
};

const result = {
  Red: 1,
  GreyTaskDry: 1,
  GreyEndSite: null,
  GreyModule: [20, 21, 23],
  Type10: 10,
  Type16: 16,
  Type2048: 2048,
  TypeIsSale: false,
};
