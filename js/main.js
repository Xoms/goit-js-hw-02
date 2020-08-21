    import { task1Handler } from './task-1.js';
    import task2 from './task-2.js';
    import task3 from './task-3.js';
    import task4 from './task-4.js';
    import task5 from './task-5.js';
    import task6 from './task-6.js';
    import T7 from './task-7.js'

    const buttons=document.querySelectorAll("button");

    buttons[0].addEventListener('click', task1Handler);
    buttons[1].addEventListener('click', task2);
    buttons[2].addEventListener('click', task3);
    buttons[3].addEventListener('click', task4);
    buttons[4].addEventListener('click', task5);
    buttons[5].addEventListener('click', task6);

    const addLogin = new T7;

