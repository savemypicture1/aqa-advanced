import chalk from "chalk";

console.log(chalk.bold.blue("🚀 Smoke Test Report"));
console.log(chalk.gray("───────────────────────────────"));

console.log(`${chalk.cyan("• Type:")} ${chalk.white("Smoke")}`);
console.log(`${chalk.cyan("• Start:")} ${chalk.white("05.09.25 (09:33)")}`);
console.log(`${chalk.cyan("• Environment:")} ${chalk.yellow("PROD")}`);
console.log(`${chalk.cyan("• Browser:")} ${chalk.magenta("Chromium")}`);
console.log(`${chalk.cyan("• Duration:")} ${chalk.white("0:16:28")}`);

console.log(chalk.gray("───────────────────────────────"));
console.log(`${chalk.cyan("• Total:")} ${chalk.white("660")}`);
console.log(`${chalk.green("• Passed:")} ${chalk.green.bold("547")}`);
console.log(`${chalk.red("• Failed:")} ${chalk.red.bold("113")}`);
console.log(`${chalk.cyan("• Pass rate:")} ${chalk.bold("82.88%")}`);

console.log(chalk.gray("───────────────────────────────"));
