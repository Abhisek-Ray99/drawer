export const products = [
    {
      img: null,
      id: "DERFET4568",
      name: "Niviea Perfume",
      count: "1",
      unit: "kg",
      price: "5450",
      category: "perfume"
    },
    {
      img: "https://picsum.photos/200",
      id: "EEFET4568",
      name: "Milton Bottle",
      count: "1",
      unit: "Litre",
      price: "5450",
      category: "Water Bottle"
    },
    {
      img: "https://picsum.photos/200",
      id: "DERDEHJK5568",
      name: "Allen Solly",
      count: "1",
      unit: "Piece",
      price: "5450",
      category: "Shirts"
    },
    {
      img: null,
      id: "LOPJHKET4568",
      name: "Levis Jeans",
      count: "2",
      unit: "Piece",
      price: "5450",
      category: "Pants"
    },
    {
      img: null,
      id: "LRREFET4568",
      name: "Bolt",
      count: "1",
      unit: "Litre",
      price: "605",
      category: "Water Bottle"
    },
    {
      img: null,
      id: "LOPEFET4568",
      name: "Levis Jeans",
      count: "2",
      unit: "Piece",
      price: "1350",
      category: "Pants"
    },
    {
      img: null,
      id: "IOOEFET4568",
      name: "Plates",
      count: "10",
      unit: "Piece",
      price: "120",
      category: "House hold"
    },
    {
      img: null,
      id: "FEYOPT4568",
      name: "Pen",
      count: "5",
      unit: "Piece",
      price: "5",
      category: "House hold"
    },
    {
      img: null,
      id: "FEYJOLEP98",
      name: "mouse",
      count: "5",
      unit: "units",
      price: "400",
      category: "Computer Supplied"
    },
    {
      img: null,
      id: "FEYDFDLEP98",
      name: "keyboard",
      count: "5",
      unit: "units",
      price: "200",
      category: "Computer Supplied"
    },
  ]


  export const transactions = [
    {
      title: "April",
      data: [
        {
          name: "books",
          type: "purchase",
          price: "480",
          balance: "0"
        },
        {
          name: "pens",
          type: "sale",
          price: "40",
          balance: "20"
        }
      ]
    },
    {
      title: "May",
      data: [
        {
          name: "books",
          type: "purchase",
          price: "480",
          balance: "0"
        },
        {
          name: "pens",
          type: "sale",
          price: "40",
          balance: "20"
        }
      ]
    },
    {
      title: "Jun",
      data: [
        {
          name: "books",
          type: "purchase",
          price: "480",
          balance: "0"
        },
        {
          name: "pens",
          type: "sale",
          price: "40",
          balance: "20"
        }
      ]
    },
    {
      title: "July",
      data: [
        {
          name: "books",
          type: "purchase",
          price: "480",
          balance: "0"
        },
        {
          name: "pens",
          type: "sale",
          price: "40",
          balance: "20"
        }
      ]
    }
  ]

const users = [
  {
    mail: "abc@gmail.com",
    password: "abcdefg",
    type: "owner",
    invetories: [
      {
        name: "shop1",
        items: products.slice(0,3)
      },
      {
        name: "shop2",
        items: products.slice(0,2)
      },
      {
        name: "shop3",
        items: products.slice(0,6)
      }
    ]
  },
  {
    mail: "def@gmail.com",
    password: "defghij",
    type: "staff",
    invetories: [
      {
        name: "shop1",
        items: products.slice(0,2)
      },
      {
        name: "shop3",
        items: products
      },
    ]
  },
  {
    mail: "ghi@gmail.com",
    password: "ghijklm",
    type: "staff",
    invetories: [
      {
        name: "shop1",
        items: products.slice(2,10)
      },
      {
        name: "shop2",
        items: products
      },
    ]
  }
]