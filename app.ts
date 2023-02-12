/////1.Задайте правильні ts типи для класичних js;

let age: number;
age = 50;

let name: string;
name = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number) => number;
callback = (a) => {
  return 100 + a;
};

////2.
let anything: any;
anything = -20;
anything = "Text";
anything = {};

////3.Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

/////4. Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
let person: [string, number];
person = ["Max", 21];

//////5.Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).
enum LoadingStatus {
  LOADING,
  READY,
}

const page = {
    loadingStatus: LoadingStatus.LOADING,
    
    if(page.loadingStatus === LoadingStatus.LOADING) {
        console.log("page is loading")
    };

if (page.loadingStatus === LoadingStatus.READY) {
        console.log("it's ready")
};
};

/////6. Зробіть змінну, яка може приймати або рядок, або число.
let union: string | number;

//////7. Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
let literal: "enable" | "disable";

////8. Вкажіть типи для наступних функцій

//void
function showMessage(message): void {
  console.log(message);
}

//number
function calc(num1:number, num2:number): number {
  return num1 + num2;
}

//never
function customError(): never {
  throw new Error("Error");
}

/////9. Створіть свій тип даних на основі наявних даних.
type PageType= {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};
const page1: PageType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2:PageType  = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
