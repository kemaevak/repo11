// Задание 1: Создание и работа с объектами
let user = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
};

// Выведите информацию о пользователе здесь
console.log("Имя: " + user.name);
console.log("Возраст: " + user.age);
console.log("Email: " + user.email);

// Задание 2: Обновление свойств объекта
user.age = 30;
user.isAdmin = true;
console.log(user);

// Задание 3: Удаление свойства из объекта
delete user.email;
console.log(user);

// Задание 4: Преобразование объекта
function transformUser(user) {
    return {
        name: user.name.toUpperCase(),
        email: user.email
    };
}

let transformedUser = transformUser(user);
console.log(transformedUser); // Ожидаемый результат: { name: "JOHN DOE", email: "john.doe@example.com" }

// Задание 5: Копирование объектов
let userCopy = { ...user, name: "Jane Doe" };
console.log(user); // Оригинальный объект
console.log(userCopy); // Измененная копия

// Задание 6: Преобразование объекта по условию
function filterProperties(obj, keys) {
    let filteredObj = {};
    keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            filteredObj[key] = obj[key];
        }
    });
    return filteredObj;
}

let filteredUser = filterProperties(user, ["name", "email"]);
console.log(filteredUser); // Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com" }

// Задание 7: Изменение структуры данных объекта
function convertUser(user) {
    return {
        profile: {
            name: user.name,
            age: user.age
        },
        email: user.email,
        isAdmin: user.isAdmin
    };
}

let convertedUser = convertUser(user);
console.log(convertedUser);
// Ожидаемый результат: { profile: { name: "John Doe", age: 30 }, email: "john.doe@example.com", isAdmin: true }

// Задание 8: Объединение объектов
let details = {
    age: 30,
    isAdmin: true,
};

let mergedUser = Object.assign({}, user, details);
console.log(mergedUser);
// Ожидаемый результат: { name: "John Doe", email: "john.doe@example.com", age: 30, isAdmin: true }

// Задание 9: Динамическое создание свойств
let key1 = "name";
let key2 = "price";
let key3 = "category";
let product = {}; // Создать объект и добавить свойства динамически

product[key1] = "Laptop";
product[key2] = 1500;
product[key3] = "Electronics";

console.log(product);
// Ожидаемый результат: { name: "Laptop", price: 1500, category: "Electronics" }
