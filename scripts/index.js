const choice = prompt("Введіть значення від 0 до 7 ( без пробілів! ) : ");

switch (choice) {
    case '0':
        console.log("Рівень доступу ---")
        break;
    case '1':
        console.log("Рівень доступу --x");
        break;
    case '2':
        console.log("Рівень доступу -w-");
        break;
    case '3':
        console.log("Рівень доступу -wx");
        break;
    case '4':
        console.log("Рівень доступу r--");
        break;
    case '5':
        console.log("Рівень доступу r-x");
        break;
    case '6':
        console.log("Рівень доступу rw-");
        break;
    case '7':
        console.log("Рівень доступу rwx");
        break;
    default:
        console.log(`${choice} некоректне значення!`);
}