export const factorialCapradyCode = 'principal{\n' +
'\t/**Este es un programa que calcula el factorial de un numero dado\n' +
'\tentero num;\n' +
'\tescribir("Ingrese un numero para calcular el factorial: ");\n' +
'\tleer(num);\n' +
'\n' +
'\tentero factorial = num;\n' +
'\n' +
'\tsi(num >= 2){\n' +
'\t\tmientras (num >= 2) {\n' +
'\t\t\tnum = num - 1;\n' +
'\t\t\tfactorial = factorial * num;\n' +
'\t\t}\n' +
'\t} sino {\n' +
'\t\tfactorial = 1; \n' +
'\t}\n' +
'\tescribir("El resultado del factorial del numero ingresado es: "  factorial);\n' +
'}';

export const factorialJava = 'public static void main(String[] args) {\n' +
'\t//Este es un programa que calcula el factorial de un numero dado\n' +
'\tint num;\n' +
'\tScanner reader = new Scanner(System.in);\n' +
'\tnum = reader.nextInt();\n' +
'\tint factorial = num;\n' +
'\tSystem.out.println("Ingrese un numero para calcular el factorial: ");\n' +
'\tif(num > 2){\n' +
'\t\twhile(num >= 2){\n' +
'\t\t\tnum = num - 1;\n' +
'\t\t\tfactorial = factorial * num;\n' +
'\t\t}\n' +
'\t}else {\n' +
'\t\tfactorial = 1;\n' +
'\t}\n' +
'\tSystem.out.println("El resultado del factorial del numero ingresado es: " + factorial);\n' +
'}';

export const comparacionCapradyCode = 'principal {\n' +
'\t/** Programa que recibe 2 numeros y los compara para el usuario\n' +
'\tentero num1;\n' +
'\tentero num2;\n' +
'\tescribir("Ingrese el primer numero");\n' +
'\tleer(num1);\n' +
'\tescribir("Ingrese el segundo numero");\n' +
'\tleer(num2);\n' +
'\tsi(num2 > num1){\n' +
'\t\tescribir("El numero mayor es: " num2);\n' +
'\t\tescribir("El numero menor es: " num1);\n' +
'\t}\n' +
'\tsino si(num2 < num1){\n' +
'\t\tescribir("El numero mayor es: " num1);\n' +
'\t\tescribir("El numero menor es: " num2);\n' +
'\t} \n' +
'\tsino {\n' +
'\t\tescribir("Ambos numeros son iguales");\n' +
'\t}\n' +
'}';

export const comparacionJava = 'public static void main(String[] args) {\n' +
'\tScanner reader = new Scanner(System.in);\n' +
'\t// Programa que recibe 2 numeros y los compara para el usuario\n' +
'\tint num1;\n' +
'\tint num2;\n' +
'\tSystem.out.println("Ingrese el primer numero");\n' +
'\tnum1 = reader.nextInt();\n' +
'\tSystem.out.println("Ingrese el segundo numero");\n' +
'\tnum2 = reader.nextInt();\n' +
'\tif(num2 > num1){\n' +
'\t\tSystem.out.println("El numero mayor es: " + num2);\n' +
'\t\tSystem.out.println("El numero menor es: " + num1);\n' +
'\t}else if(num2 < num1){\n' +
'\t\tSystem.out.println("El numero mayor es: " + num1);\n' +
'\t\tSystem.out.println("El numero menor es: " + num2);\n' +
'\t}else{\n' +
'\t\tSystem.out.println("Ambos numeros son iguales");\n' +
'\t}\n' +
'}';

export const sumatoriaCapradyCode = 'principal {\n' +
'\t/**PROGRAMA QUE LEE NUMEROS HASTA LLEGAR A UN CERO Y LUEGO MUESTRA LA SUMA DE TODOS LOS NUMEROS LEIDOS\n' +
'\tentero num;\n' +
'\tescribir("Ingrese un numero para la sumatoria");\n' +
'\tleer(num);\n' +
'\tentero sumatoria = num;\n' +
'\tmientras (num != 0) {\n' +
'\t\tescribir("Ingrese un numero para la sumatoria");\n' +
'\t\tleer(num);\n' +
'\t\tsumatoria = sumatoria + num;\n' +
'\t}\n' +
'\tescribir("El resultado de la sumatoria de numeros ingresados es: "  sumatoria);\n' +
'}';

export const sumatoriaJava = 'public static void main(String[] args) {\n' +
'\tScanner reader = new Scanner(System.in);\n' +
'\t//PROGRAMA QUE LEE NUMEROS HASTA LLEGAR A UN CERO Y LUEGO MUESTRA LA SUMA DE TODOS LOS NUMEROS LEIDOS\n' +
'\tint num;\n' +
'\tSystem.out.println("Ingrese un numero para la sumatoria");\n' +
'\tnum = reader.nextInt();\n' +
'\tint sumatoria = num;\n' +
'\twhile (num != 0) {\n' +
'\t\tSystem.out.println("");\n' +
'\t\tnum = reader.nextInt();\n' +
'\t\tsumatoria = sumatoria + num;\n' +
'\t}\n' +
'\tSystem.out.println("El resultado de la sumatoria de numeros ingresados es: " + sumatoria);\n' +
'}';
