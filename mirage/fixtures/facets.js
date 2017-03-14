export default [
  {
    id: 1,

    parentId: null,
    childIds: [],
    imageId: 2,

    name: 'Categories',
  },
  {
    id: 2,

    parentId: null,
    childIds: [],

    name: 'Series',
  },
  {
    id: 3,

    parentId: null,
    childIds: [],

    name: 'Authors',
  },
  {
    id: 4,

    parentId: null,
    childIds: [5, 6, 8, 9, 10],

    name: 'Topics',
  },
  {
    id: 5,

    rootId: 4,
    parentId: 4,
    childIds: [7],

    name: 'Life Issues',
  },
  {
    id: 6,

    rootId: 4,
    parentId: 4,
    childIds: [11, 12],

    name: 'Family',
  },
  {
    id: 7,

    rootId: 4,
    parentId: 5,

    name: 'Life Together',
  },
  {
    id: 8,

    rootId: 4,
    parentId: 4,

    name: 'Spiritual Growth',
  },
  {
    id: 9,

    rootId: 4,
    parentId: 4,

    name: 'Leadership',
  },
  {
    id: 10,

    rootId: 4,
    parentId: 4,

    name: 'Art & Literature',
  },
  {
    id: 11,

    rootId: 4,
    parentId: 6,

    name: 'Husbands & Fathers',
  },
  {
    id: 12,

    rootId: 4,
    parentId: 6,

    name: 'Wives & Mothers',
  },
];
