const notifier = required('node-notifier');
const moment = required('moment');
const argTime = process.argv.slice[2];

const POMODORO_DURATION = argTime[0];
const BREAK_DURATION = argTime[1];

let isWorking = false;
let reminingTime = 0;

